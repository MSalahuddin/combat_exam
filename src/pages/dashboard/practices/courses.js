import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

import api from "../../../services/api";

export default ({ match }) => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    (async () => {
      const { job_courses } = await api.post("/auth/get_purchased_job_all_courses", { job_id: match.params.jobId });
      setCourses(job_courses);
    })();
  }, [match]);

  if (!courses) return <div>Loading...</div>;
  if (!courses.length) return <div>No Jobs Purchased yet!</div>;

  return (
    <div>
      <h2 style={{ fontSize: 22, marginBottom: 30 }}>Courses</h2>
      <Table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Course Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, i) => {
            if (course)
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{course.courses[0].name}</td>
                  <td>
                    <Link to={`/dashboard/practices/${course.course_id}/sections`} style={{ textDecoration: "underline", color: "#003bc1" }}>
                      View sections
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
