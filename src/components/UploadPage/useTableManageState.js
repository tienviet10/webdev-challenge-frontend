import { Form } from "antd";
import { useState } from "react";

const useTableManageState = (data, setNewData) => {
  const [form] = Form.useForm();
  const [editRowKey, setEditRowKey] = useState("");

  const isEditing = (record) => {
    return record.key === editRowKey;
  };

  const handleDelete = (value) => {
    const dataSource = [...data];
    const filteredData = dataSource.filter((item) => item.id !== value.id);
    setNewData(filteredData);
  };

  const cancel = () => {
    setEditRowKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setNewData(newData);
        setEditRowKey("");
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  const edit = (record) => {
    form.setFieldsValue({
      date: "",
      category: "",
      lottitle: "",
      lotlocation: "",
      lotcondition: "",
      pretaxamount: 0.0,
      taxname: "",
      taxamount: null,
      ...record,
    });
    setEditRowKey(record.key);
  };

  return {
    isEditing,
    handleDelete,
    save,
    cancel,
    edit,
    form,
  };
};

export default useTableManageState;
