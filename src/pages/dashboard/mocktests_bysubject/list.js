import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

import Exam from "../../../components/exam";

import api from "../../../services/api";

export default ({ match }) => {
  const [tests, setTests] = useState(null);
  const [exam, setExam] = useState(null);

  useEffect(() => {
    (async () => {
      const { mock_test_subject_wise } = await api.post("/auth/get_purchased_job_mock_test_subject_wise", { job_id: match.params.jobId });
      setTests(mock_test_subject_wise);
    })();
  }, [match]);

  if (!tests) return <div>Loading...</div>;
  if (!tests.length) return <div>No Mock tests found!</div>;

  return (
    <div>
      {exam && <Exam value={{ ...exam, test_name: "Mock exam subject wise" }} onChange={() => setExam(null)} />}
      <h2 style={{ fontSize: 22, marginBottom: 30 }}>Mock tests</h2>
      <Table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Title</th>
            <th>Actions</th>
            <th>Analytics</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => {
            if (test)
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{test.name}</td>
                  <td>
                    <span style={{ textDecoration: "underline", color: "#003bc1", cursor: "pointer" }} onClick={() => setExam(test)}>
                      Take test
                    </span>
                  </td>
                  <td>
                    <Link
                      style={{ textDecoration: "underline", color: "#003bc1", cursor: "pointer", marginRight: 10 }}
                      to={`/dashboard/mocktestsbysubject/${match.params.jobId}/analytics`}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </Table>
    </div>
  );
};
