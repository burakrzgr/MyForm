import React from "react";
import { Button, Table } from "react-bootstrap";
import { useTable } from "react-table";

export default function MyTable({columns: myColumns,data:myData}) {
  const data = React.useMemo(
    () => myData,[myData]);
  const columns = React.useMemo(
    () => myColumns,[myColumns]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    
    <Table {...getTableProps()} striped bordered hover variant="dark">
      <thead>
        {headerGroups.map((headerGroup ) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.column.id === "actions"
                      ? <Actions actions={cell.value} />
                      : cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function Actions({actions}) {
  return(
    actions.map((x ,key) => {return (<Button size="sm" key={key} style={{minWidth:"3rem"}} className="ms-1 me-1" onClick={x.onClick} variant={x.variant}>{x.text}</Button>)})
  );
  
}
