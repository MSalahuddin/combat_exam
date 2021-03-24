import React, { useEffect, useState } from "react";

import Exam from "../../components/exam";
import api from "../../services/api";

export default () => {
  const [exam, setExam] = useState(false);

  const params = new URLSearchParams(window.location.search);
  const job_id = params.get("job_id");
  const type = params.get("type");

  if (!type || !job_id) return <div />;

  useEffect(() => {
    (async () => {
      const { job } = await api.post("/auth/share_link_job", { job_id });
      setExam(job);
    })();
  }, []);

  if (!exam) return <div />;

  return <Exam value={{ ...exam, test_name: "Free test" }} onChange={() => setExam(null)} />;
};
