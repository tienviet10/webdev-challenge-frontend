import { Form, Table } from "antd";
import React from "react";
import { commonColumns } from "../shared";
import ActionColumn from "./ActionColumn";
import FormComponent from "./FormComponent";
import useTableManageState from "./useTableManageState";

const styles = {
  tablesStyle: {
    width: "100%",
  },
};

// All executions are in useTableManageState. Table Component just has displayed components
const TableComponent = ({ data, loading, setNewData }) => {
  const { isEditing, handleDelete, save, cancel, edit, form } =
    useTableManageState(data, setNewData);

  const columns = [
    ...commonColumns,
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: (_, record) => {
        const editable = isEditing(record);
        return data.length >= 1 ? (
          <ActionColumn
            record={record}
            editable={editable}
            handleDelete={handleDelete}
            save={save}
            cancel={cancel}
            edit={edit}
          />
        ) : null;
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const editableCell = ({
    editing,
    dataIndex,
    title,
    record,
    children,
    ...restProps
  }) => {
    return (
      <FormComponent
        restProps={restProps}
        title={title}
        editing={editing}
        dataIndex={dataIndex}
        children={children}
      />
    );
  };

  return (
    <>
      {data.length > 0 && (
        <Form form={form} component={false}>
          <Table
            loading={loading}
            columns={mergedColumns}
            dataSource={data}
            style={styles.tablesStyle}
            components={{
              body: {
                cell: editableCell,
              },
            }}
          />
        </Form>
      )}
    </>
  );
};

export default TableComponent;
