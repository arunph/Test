import React from "react";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import Table from "react-bootstrap/Table";
import "./Table.scss";
import { getStatus } from "../../utils/helper";
import LoadingComponent from "../LoadingComponent";

const TableComponent = ({ tableData, loading, onRowClick }) => {
  return (
    <div
      className="table-component position-relative"
      style={{ minHeight: 300 }}
    >
      <Table hover className="mb-0">
        <thead className="table-header">
          <tr>
            <th>No:</th>
            <th>Launched (UTC)</th>
            <th>Location</th>
            <th>Mission</th>
            <th>Orbit</th>
            <th>Launch Status</th>
            <th>Rocket</th>
          </tr>
        </thead>

      </Table>
      {loading && (
        <div className="position-absolute loading">
          <LoadingComponent />
        </div>
      )}
    </div>
  );
};

export default TableComponent;
