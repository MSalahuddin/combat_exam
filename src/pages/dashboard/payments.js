import React from "react";
import { Badge, Table } from "reactstrap";

export default () => {
  return (
    <div>
      <h2 style={{ fontSize: 22, marginBottom: 30 }}>Your Payments</h2>
      <Table bordered>
        <thead>
          <tr style={{ background: "#f8fcff" }}>
            <th>Sr.</th>
            <th>Details</th>
            <th>Date</th>
            <th>Time</th>
            <th>Mode</th>
            <th>Status</th>
            <th>Amount (RS)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{1}</td>
            <td>...</td>
            <td>00-00-0000</td>
            <td>00:00</td>
            <td>Mode</td>
            <td>
              <Badge color="success">Approved</Badge>
            </td>
            <td>0.00 RS</td>
          </tr>
        </tbody>
        <tfoot>
          <tr style={{ background: "#f8fcff" }}>
            <th colSpan={6}>Total Amount</th>
            <th>0.00 RS</th>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};
