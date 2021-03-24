import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

import api from "../../../services/api";

export default ({ match }) => {
  const [sections, setSections] = useState(null);

  useEffect(() => {
    (async () => {
      const { job_sections } = await api.post("/auth/get_purchased_job_course_all_sections", { course_id: match.params.courseId });
      setSections(job_sections);
    })();
  }, [match]);

  if (!sections) return <div>Loading...</div>;
  if (!sections.length) return <div>No Jobs Purchased yet!</div>;

  return (
    <div>
      <h2 style={{ fontSize: 22, marginBottom: 30 }}>Sections</h2>
      <Table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Section Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section, i) => {
            if (section)
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{section.name}</td>
                  <td>
                    <Link to={`/dashboard/practices/${section.id}/list`} style={{ textDecoration: "underline", color: "#003bc1" }}>
                      View practices
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
