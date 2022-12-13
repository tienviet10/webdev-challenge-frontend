import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { API, getCurrentDate } from "../shared";

export function useManageMainPageState() {
  const todayDate = getCurrentDate();
  const [dataAccordingToDate, setDataAccordingToDate] = useState([]);
  const [dateDisplay, setDateDisplay] = useState(todayDate);
  const [loading, setLoading] = useState(false);

  const getDataFromDate = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(`${API}/v1/inventory`, {
        params: { posteddate: dateDisplay, table: "inventory" },
      });

      setDataAccordingToDate(
        response.data.map((item) => {
          return {
            ...item,
            key: item["id"],
          };
        })
      );
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [dateDisplay]);

  const deleteTableAccordingToDate = useCallback(async () => {
    setLoading(true);
    try {
      await axios.delete(`${API}/v1/inventory`, {
        data: { date: dateDisplay, table: "inventory" },
      });

      setDataAccordingToDate([]);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [dateDisplay]);

  const concatUploadedDataToCurrentTable = (currentDate, newData) => {
    if (currentDate === dateDisplay) {
      setDataAccordingToDate((prev) => [...prev, ...newData]);
    }
  };

  useEffect(() => {
    getDataFromDate();
  }, [getDataFromDate]);

  const onChooseDate = (date, dateString) => {
    setDateDisplay(dateString);
  };

  return {
    dateDisplay,
    onChooseDate,
    todayDate,
    loading,
    dataAccordingToDate,
    deleteTableAccordingToDate,
    concatUploadedDataToCurrentTable,
  };
}
