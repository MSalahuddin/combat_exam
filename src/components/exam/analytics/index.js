import React, { useEffect, useState } from "react";
import { Col, Row, TabContent, Table, TabPane } from "reactstrap";

import AnalyticsMeter from "../../../components/analyticsMeter";

import "./index.scss";

import api from "../../../services/api";

export default function Index() {
  const [active, setActive] = useState("1");
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const { result } = await api.post("/auth/get_job_result", { job_id: 1, user_id: 1 });
      setData(result[result.length - 1]);
    })();
  }, []);

  if (!data) return <div>Loading....</div>;

  const { time, accuracy, obtained_marks, total_marks, result_detail } = data;

  const incorrect = result_detail.filter((e) => e.correct_answer !== e.user_answer).length;
  const correct = result_detail.filter((e) => e.correct_answer === e.user_answer).length;

  return (
    <div className="analytics">
      <Row>
        <Col md={3} sm={6} style={{ margin: "15px 0 30px", borderRight: "2px solid #eee" }}>
          <AnalyticsMeter title="Score" value={`${correct} / ${result_detail.length}`} meterValue={correct / result_detail.length} />
        </Col>
        <Col md={3} sm={6} style={{ margin: "15px 0 30px", borderRight: "2px solid #eee" }}>
          <AnalyticsMeter title="Rank" value={`${(45 / 100) * 100} / 100`} meterValue={45 / 100} />
        </Col>
        <Col md={3} sm={6} style={{ margin: "15px 0 30px", borderRight: "2px solid #eee" }}>
          <AnalyticsMeter title="Percentile" value={`${45}th`} meterValue={45 / 100} />
        </Col>
        <Col md={3} sm={6} style={{ margin: "15px 0 30px" }}>
          <AnalyticsMeter title="Accuracy" value={`${(accuracy / 100) * 100}%`} meterValue={accuracy / 100} />
        </Col>
      </Row>
      <br />
      <div className="tabs">
        <div className={(active === "1" && "active tab") || "tab"} onClick={() => setActive("1")}>
          Overview
        </div>
        <div className={(active === "2" && "active tab") || "tab"} onClick={() => setActive("2")}>
          Strenths & Weaknesses
        </div>
        <div className={(active === "3" && "active tab") || "tab"} onClick={() => setActive("3")}>
          Comparison
        </div>
        <div className={(active === "4" && "active tab") || "tab"} onClick={() => setActive("4")}>
          Percentile vs Score
        </div>
      </div>
      <TabContent activeTab={active}>
        <TabPane tabId="1">
          <Table bordered>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>
                  <span>Results</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>Time</span>
                </td>
                <td style={{ padding: 0 }}>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>your's</div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>average</div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>topper's</div>
                </td>
                <td style={{ padding: 0 }}>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>
                    <span>{`${time.split(":")[0]} mins ${time.split(":")[1]} secs`}</span>
                  </div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>
                    <span>--</span>
                  </div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>
                    <span>--</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Accuracy</span>
                </td>
                <td style={{ padding: 0 }}>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>your's</div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>average</div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>topper's</div>
                </td>
                <td style={{ padding: 0 }}>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>{accuracy} %</div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>-- %</div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>-- %</div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Questions</span>
                </td>
                <td style={{ padding: 0 }}>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>incorrect</div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>attempted</div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>correct</div>
                  <div style={{ padding: 10 }}>questions</div>
                </td>
                <td style={{ padding: 0 }}>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>{incorrect}</div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>{result_detail.length}</div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>{correct}</div>
                  <div style={{ padding: 10 }}>{total_marks}</div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Marks</span>
                </td>
                <td style={{ padding: 0 }}>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>highest</div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>avg marks</div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>topper's</div>
                  <div style={{ padding: 10 }}>marks</div>
                </td>
                <td style={{ padding: 0 }}>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>-</div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>--</div>
                  <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>--</div>
                  <div style={{ padding: 10 }}>
                    {obtained_marks}/{total_marks}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Percentile</span>
                </td>
                <td></td>
                <td style={{ fontWeight: 600 }}>
                  <span>-- %</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Rank</span>
                </td>
                <td></td>
                <td style={{ fontWeight: 600 }}>
                  <span>--</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </TabPane>
        <TabPane tabId="2"></TabPane>
        <TabPane tabId="3"></TabPane>
        <TabPane tabId="4"></TabPane>
      </TabContent>
    </div>
  );
}
