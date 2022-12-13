import { Form, Input } from "antd";
import React from "react";

const FormComponent = ({ restProps, title, editing, dataIndex, children }) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required:
                dataIndex === "date" ||
                dataIndex === "category" ||
                dataIndex === "lottitle" ||
                dataIndex === "lotlocation" ||
                dataIndex === "lotcondition" ||
                dataIndex === "pretaxamount",
              message: `Please input some value in ${title} field`,
            },
          ]}
        >
          <Input />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default FormComponent;
