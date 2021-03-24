import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

import api from "../../../services/api";

export default () => {
  const [jobs, setJobs] = useState(null);

  const user = useSelector((state) => state.Auth.user);

  useEffect(() => {
    (async () => {
      const { purchased_jobs } = await api.post("/auth/get_purchased_jobs", { user_id: user.id });
      setJobs(purchased_jobs);
    })();
  }, []);

  if (!jobs) return <div>Loading...</div>;
  if (!jobs.length) return <div>No Jobs Purchased yet!</div>;

  return (
    <div>
      <h2 style={{ fontSize: 22, marginBottom: 30 }}>Take subject wise Mock tests </h2>
      <Table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Job Title</th>
            <th>Available in</th>
            <th>Available from</th>
            <th>Valid till</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(({ job, status }, i) => {
            if (job)
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{job.title}</td>
                  <td>{job.available_in}</td>
                  <td>{job.available_from}</td>
                  <td>{job.valid_till}</td>
                  <td>
                    {(status === 0 && <strong style={{ textTransform: "uppercase", color: "red", fontSize: 12 }}>Pending</strong>) || (
                      <Link to={`/dashboard/pastpapers/${job.papersId}/list`} style={{ textDecoration: "underline", color: "#003bc1" }}>
                        Past papers
                      </Link>
                    )}
                  </td>
                </tr>
              );
          })}
        </tbody>
      </Table>
    </div>
  );
};
