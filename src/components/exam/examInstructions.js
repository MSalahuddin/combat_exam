import React, { useContext } from "react";

import { AppContext } from "./context";

export default () => {
  const { course, practice, questions, test_name } = useContext(AppContext);

  return (
    <div style={{ flexGrow: 2, padding: 15 }}>
      <div>
        <p>{/* <strong>{`${course.name} ${practice.name}`}</strong> */}</p>
        <p>
          <strong>Instructions</strong>
        </p>
        <table border="1" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td valign="top" width="67">
                <p>
                  <strong>Sr. No.</strong>
                </p>
              </td>
              <td valign="top" width="174">
                <p>
                  <strong>Section</strong>
                </p>
              </td>
              <td valign="top" width="160">
                <p>
                  <strong>No. of Questions</strong>
                </p>
              </td>
              <td valign="top" width="160">
                <p>
                  <strong>Duration</strong>
                </p>
              </td>
            </tr>
            {/* <tr>
              <td valign="top" width="67">
                <p>1.</p>
              </td>
              <td valign="top" width="174"></td>

              <td valign="top" width="160">
                40
              </td>
              <td rowspan="2" valign="top" width="160">
                <p>
                  Composite time limit of&nbsp;<strong>&nbsp;45</strong>&nbsp;minutes
                </p>
              </td>
            </tr> */}
            <tr>
              <td valign="top" width="67">
                <p>1.</p>
              </td>
              <td valign="top" width="174">
                <p>{test_name || "Free Mock test"}</p>
              </td>
              <td valign="top" width="160">
                <p>{questions.length}</p>
              </td>
              <td valign="top" width="160">
                <p>
                  Composite time limit of&nbsp;<strong>&nbsp;{questions.length}</strong>&nbsp;minutes
                </p>
              </td>
            </tr>
            <tr>
              <td colspan="2" valign="top" width="241">
                <p>
                  <strong>Total</strong>
                </p>
              </td>
              <td valign="top" width="160">
                <p>
                  <strong>{questions.length}</strong>
                </p>
              </td>
              <td valign="top" width="160">
                <p>&nbsp;</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          2. The test is of&nbsp;<strong>{questions.length}</strong>&nbsp;marks; with each question carrying 1 mark
        </p>
        <p>3. You are expected to show your competence in all the sections.</p>
        <p>All the best!</p>
      </div>
    </div>
  );
};
