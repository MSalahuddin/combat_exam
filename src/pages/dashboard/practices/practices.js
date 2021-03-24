import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import Exam from "../../../components/exam";

import api from "../../../services/api";

export default ({ match }) => {
  const [practices, setPractices] = useState(null);
  const [loading, setLoading] = useState(false);
  const [exam, setExam] = useState(null);

  useEffect(() => {
    (async () => {
      const { job_practices } = await api.post("/auth/get_purchased_job_course_section_all_practices", { section_id: match.params.sectionId });
      setPractices(job_practices);
    })();
  }, [match]);

  if (!practices) return <div>Loading...</div>;
  if (!practices.length) return <div>No Jobs Purchased yet!</div>;

  const takeTest = async (practice) => {
    setLoading(true);
    const res = await api.post("/auth/questions", { course_id: practice.course_id, section_id: practice.section_id, practice_id: practice.id });
    setExam(res);
    setLoading(false);
  };

  return (
    <div>
      {exam && <Exam value={{ ...exam, test_name: "Practice test" }} onChange={() => setExam(null)} />}
      <h2 style={{ fontSize: 22, marginBottom: 30 }}>Practices</h2>
      <Table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Practice Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {practices.map((practice, i) => {
            if (practice)
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{practice.name}</td>
                  <td>
                    <div style={{ textDecoration: "underline", color: "#003bc1", cursor: "pointer" }} onClick={() => takeTest(practice)}>
                      Take test
                    </div>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </Table>
    </div>
  );
};
