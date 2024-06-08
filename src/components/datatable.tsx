import React from "react";
import "./styles/datatable.css";
import DataTableItem from "../components/datatableitem";

type DataTableColumn = {
  header: string;
  accessor: string;
};

type DataTableProps = {
  columns: DataTableColumn[];
  data: { [key: string]: any }[];
  showActions: boolean;
  routes: {
    viewRoute: string;
    deleteRoute: string;
    editRoute?: string;
  };
  hasEdit: boolean;
  id: string;
  deleteId?:string;
  deleteText: string;
  className?: string;
};

const DataTable: React.FC<DataTableProps> = ({
  columns,
  id,
  data,
  showActions = true,
  routes,
  deleteText,
  hasEdit = false,
  className,
  deleteId
}) => {
  const [reload, setReload] = React.useState<boolean>(false);

  const handleReload = () => {
    setReload(!reload);
  };

  return (
    <div className="table-responsive">
      <table className={`table table-bordered table-hover table-sm ${className}`}>
        <thead className="table-header text-black">
          <tr>
            {columns.map((column) => (
              <th className="text-center text-black" key={column.accessor}>
                {column.header}
              </th>
            ))}
            {showActions && (
              <th className="text-center" key={"Actions"}>
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="text-center secondary-bg secondary-color">
          {data.map((row, index) => (
            <DataTableItem
              key={index}
              row={row}
              columns={columns}
              id={id}
              deleteId={deleteId}
              routes={routes}
              deleteText={deleteText}
              showActions={showActions}
              hasEdit={hasEdit}
              onReload={handleReload}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
