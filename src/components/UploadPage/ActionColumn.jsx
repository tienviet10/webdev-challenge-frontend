import { Button, Popconfirm, Space } from "antd";
import React from "react";

const ActionColumn = ({
  record,
  editable,
  handleDelete,
  save,
  cancel,
  edit,
}) => {
  return (
    <Space>
      {!editable && (
        <Popconfirm
          title="Do you want to delete the row?"
          onConfirm={() => handleDelete(record)}
        >
          <Button danger type="primary">
            Delete
          </Button>
        </Popconfirm>
      )}
      {editable ? (
        <Space size="small">
          <Button onClick={() => save(record.key)} type="primary">
            Save
          </Button>
          <Popconfirm title="Do you want to cancel?" onConfirm={cancel}>
            <Button>Cancel</Button>
          </Popconfirm>
        </Space>
      ) : (
        <Button onClick={() => edit(record)} type="primary">
          Edit
        </Button>
      )}
    </Space>
  );
};

export default ActionColumn;
