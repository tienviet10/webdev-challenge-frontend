import { message } from "antd";
import axios from "axios";
import { parse } from "papaparse";
import { useState } from "react";
import { API, getCurrentDate } from "../shared";

const useUploadPage = (setData, data, concatUploadedDataToCurrentTable) => {
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [todayDate, currentTime] = getCurrentDate();

  // Upload CSV but don't post to backend right away
  const beforeUpload = async (file) => {
    const text = await file.text();
    const substringTitle = text.substring(0, 87);
    let result;
    let newFormattedData;

    // First condition is to check if there is a header
    if (
      substringTitle.includes("lot title") &&
      substringTitle.includes("date") &&
      substringTitle.includes("lot title") &&
      substringTitle.includes("lot location") &&
      substringTitle.includes("lot condition") &&
      substringTitle.includes("pre-tax amount")
    ) {
      result = parse(text, { header: true });
      newFormattedData = result.data.map((item, index) => {
        return {
          category: item["category"],
          date: item["date"],
          lotcondition: item["lot condition"],
          lotlocation: item["lot location"],
          lottitle: item["lot title"],
          pretaxamount: item["pre-tax amount"],
          taxname: item["tax name"],
          taxamount: item["tax amount"],
          posteddate: todayDate,
          key: todayDate.replaceAll("/", "") + currentTime + index,
          id: todayDate.replaceAll("/", "") + currentTime + index,
        };
      });

      // Second condition is to find appropriate column name when there is none
    } else {
      result = parse(text, { header: false });

      let cat = -1;
      let dat = -1;
      let title = -1;
      let loc = -1;
      let cond = -1;
      let pretax = -1;
      let taxname = -1;
      let taxamount = -1;

      const regex = /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] *\d[A-Z]\d$/;
      const regexDate = /\/.*\//;

      //Iterate through all rows to check the name of the column
      for (let i = 0; i < result.data.length; i++) {
        for (const [key, value] of Object.entries(result.data[i])) {
          const valueLen = value.length;
          let tempLocUS = value.substring(valueLen - 5, valueLen);
          let tempLocCA = value.substring(valueLen - 7, valueLen);

          // Check if the column is date column
          if (regexDate.test(value)) {
            dat = key;

            // Check if the columns is tax name
          } else if (
            taxname === -1 &&
            value.toLowerCase().includes("sales tax")
          ) {
            taxname = key;

            // Check if the columns is lot condition
          } else if (
            cond === -1 &&
            [
              "brand new",
              "like brand new",
              "used",
              "for parts or not working",
            ].includes(value.toLowerCase())
          ) {
            cond = key;

            // Check if the columns is lot location
          } else if (
            loc === -1 &&
            value.includes(",") &&
            (regex.test(tempLocCA) || !isNaN(tempLocUS))
          ) {
            loc = key;

            // Check if the column is pre tax amount
          } else if ((pretax === -1 || taxamount === -1) && !isNaN(value)) {
            if (pretax === -1) {
              pretax = key;
            } else if (parseFloat(result.data[i][pretax]) > parseFloat(value)) {
              taxamount = key;
            } else if (parseFloat(result.data[i][pretax]) < parseFloat(value)) {
              taxamount = pretax;
              pretax = key;
            }

            // Check if the column is category column
          } else if (
            (cat === -1,
            [
              "construction",
              "mining",
              "plastics & rubber",
              "computer - hardware",
            ].includes(value.toLowerCase()))
          ) {
            cat = key;

            // Check if the column is title column
          } else {
            title = key;
          }
        }
      }

      // Parse the columns into appropriate names
      newFormattedData = result.data.map((item, index) => {
        return {
          category: item[cat],
          date: item[dat],
          lotcondition: item[cond],
          lotlocation: item[loc],
          lottitle: item[title],
          pretaxamount: item[pretax],
          taxname: taxname !== -1 ? item[taxname] : "",
          taxamount: taxamount !== -1 ? item[taxamount] : null,
          posteddate: todayDate,
          key: todayDate.replaceAll("/", "") + currentTime + index,
          id: todayDate.replaceAll("/", "") + currentTime + index,
        };
      });
    }

    setData((prev) => [...prev, ...newFormattedData]);
    return false;
  };

  // Props for Dragger Component
  const props = {
    accept: ".csv",
    name: "file",
    multiple: true,
    beforeUpload,
    onChange(info) {
      const { status } = info.file;
      let newFileList = [...info.fileList];

      newFileList = newFileList.map((file) => {
        if (file.response) {
          file.url = file.response.url;
        }
        return file;
      });
      setFileList(newFileList);

      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  // Upload table to backend
  const onSubmitTable = async () => {
    setLoading(true);
    try {
      await axios.post(`${API}/v1/inventory`, {
        inventory: data,
      });
      concatUploadedDataToCurrentTable(todayDate, data);
      setData([]);
      setFileList([]);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  // Clear all attachments
  const onClear = () => {
    setLoading(true);
    setData([]);
    setFileList([]);
    setLoading(false);
  };

  return {
    props,
    fileList,
    loading,
    onSubmitTable,
    onClear,
  };
};

export default useUploadPage;
