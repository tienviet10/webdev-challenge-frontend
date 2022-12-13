import { Button, Popconfirm, Space } from "antd";
import React from "react";

const styles = {
  buttonStyle: {
    marginRight: 8,
  },
};

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
      <Popconfirm
        title="Do you want to delete the row?"
        onConfirm={() => handleDelete(record)}
      >
        <Button danger type="primary" disabled={editable}>
          Delete
        </Button>
      </Popconfirm>
      {editable ? (
        <Space size="middle">
          <Button
            onClick={() => save(record.key)}
            type="primary"
            style={styles.buttonStyle}
          >
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
