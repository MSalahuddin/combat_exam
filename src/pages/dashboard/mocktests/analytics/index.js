import React, { useEffect, useState } from "react";
import { Col, Row, TabContent, Table, TabPane } from "reactstrap";
import { Line, Bar } from "@reactchartjs/react-chart.js";
import { useSelector } from "react-redux";

import AnalyticsMeter from "../../../../components/analyticsMeter";

import "./index.scss";

import api from "../../../../services/api";

export default function Index({ match }) {
  const [active, setActive] = useState("1");
  const [data, setData] = useState(null);
  const user = useSelector((state) => state.Auth.user);

  useEffect(() => {
    (async () => {
      const { data: d } = await api.get(`/auth/get_analytics/${match.params.jobId}/${user.id}`);
      setData(d);
    })();
  }, [match]);

  if (!data) return <div>Loading....</div>;

  const { time, question = {}, percentile = 0, marks = {}, main_stat = {}, accuracy = 0, rank = 0 } = data;

  return (
    <div>
      <div className="go-back" onClick={() => window.history.go(-1)}>
        Mock tests
      </div>
      <div className="analytics">
        <Row>
          <Col md={3} sm={6} style={{ margin: "15px 0 30px", borderRight: "2px solid #eee" }}>
            <AnalyticsMeter title="Score" value={main_stat.score} meterValue={main_stat.score} />
            {/* <AnalyticsMeter title="Score" value={`${correct} / ${result_detail.length}`} meterValue={correct / result_detail.length} /> */}
          </Col>
          <Col md={3} sm={6} style={{ margin: "15px 0 30px", borderRight: "2px solid #eee" }}>
            <AnalyticsMeter title="Rank" value={main_stat.rank} meterValue={main_stat.rank} />
            {/* <AnalyticsMeter title="Rank" value={`${(45 / 100) * 100} / 100`} meterValue={45 / 100} /> */}
          </Col>
          <Col md={3} sm={6} style={{ margin: "15px 0 30px", borderRight: "2px solid #eee" }}>
            <AnalyticsMeter title="Percentile" value={`${main_stat.percentile || 0}th`} meterValue={main_stat.percentile} />
            {/* <AnalyticsMeter title="Percentile" value={`${45}th`} meterValue={45 / 100} /> */}
          </Col>
          <Col md={3} sm={6} style={{ margin: "15px 0 30px" }}>
            <AnalyticsMeter title="Accuracy" value={`${main_stat.accuracy || 0}%`} meterValue={main_stat.accuracy} />
            {/* <AnalyticsMeter title="Accuracy" value={`${(accuracy / 100) * 100}%`} meterValue={accuracy / 100} /> */}
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
                      {time ? <span>{`${time.yours.split(":")[0] || 0} mins ${time.yours.split(":")[1] || 0} secs`}</span> : <span>0</span>}
                    </div>
                    <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>
                      {time ? (
                        <span>{`${String(time.avg_time).split(".")[0] || 0} mins ${String(time.avg_time).split(".")[1] || 0} secs`}</span>
                      ) : (
                          <span>0</span>
                        )}
                    </div>
                    <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>
                      {time ? <span>{`${time.top_time.split(":")[0] || 0} mins ${time.top_time.split(":")[1] || 0} secs`}</span> : <span>0</span>}
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
                    <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>{accuracy.yours || 0} %</div>
                    <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>{accuracy.avg_accuracy || 0} %</div>
                    <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>{accuracy.top_accuracy || 0} %</div>
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
                    <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>{question.incorrect}</div>
                    <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>{question.attempted}</div>
                    <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>{question.correct}</div>
                    <div style={{ padding: 10 }}>{question.questions}</div>
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
                    <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>{marks.highest}</div>
                    <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>{marks.avg_marks}</div>
                    <div style={{ borderBottom: "1px solid #eee", padding: 10 }}>{marks.topper}</div>
                    <div style={{ padding: 10 }}>{marks.marks}</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Percentile</span>
                  </td>
                  <td></td>
                  <td style={{ fontWeight: 600 }}>
                    <span>{percentile}th</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Rank</span>
                  </td>
                  <td></td>
                  <td style={{ fontWeight: 600 }}>
                    <span>{rank}</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </TabPane>
          <TabPane tabId="2">
            <div className="graph-title">Strenths & Weaknesses</div>
            <StrenthsWeaknesses />
          </TabPane>

          <TabPane tabId="3">
            <div className="graph-title">Marks</div>
            <Row>
              <Col style={{ marginBottom: 40 }}>
                <GroupedBar />
              </Col>
              <Col style={{ marginBottom: 40 }}>
                <GroupedBar />
              </Col>
            </Row>
            <div className="graph-title">Questions</div>
            <QuestionsBar value={question} />
            <Row>
              <Col style={{ marginBottom: 40 }}>
                <GroupedBar />
              </Col>
              <Col style={{ marginBottom: 40 }}>
                <GroupedBar />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <div className="graph-title">Percentile vs Score</div>
            <LineChart value={main_stat} />
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}

const StrenthsWeaknesses = ({ value, title }) => {
  return (
    <div className="StrenthsWeaknesses">
      <div className="StrenthsWeaknesses-title">
        <h4>Below Average</h4>
      </div>
      <div className="StrenthsWeaknesses-bubble-col">
        <div className="StrenthsWeaknesses-bubble-box" style={{ borderBottom: 0 }}>
          <h4>Coding Decoding</h4>
          <div className="StrenthsWeaknesses-bubble-row">
            <div className="StrenthsWeaknesses-bubble incorrect">1</div>
            <div className="StrenthsWeaknesses-bubble incorrect">2</div>
            <div className="StrenthsWeaknesses-bubble">3</div>
            <div className="StrenthsWeaknesses-bubble">4</div>
            <div className="StrenthsWeaknesses-bubble">5</div>
          </div>
        </div>
        <div className="StrenthsWeaknesses-bubble-box">
          <h4>Syllogisms</h4>
          <div className="StrenthsWeaknesses-bubble-row">
            <div className="StrenthsWeaknesses-bubble incorrect">36</div>
            <div className="StrenthsWeaknesses-bubble">37</div>
            <div className="StrenthsWeaknesses-bubble">38</div>
            <div className="StrenthsWeaknesses-bubble">39</div>
            <div className="StrenthsWeaknesses-bubble">40</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [7, 10, 12, 23, 32, 49],
      fill: false,
      backgroundColor: "#2bb24a",
      borderColor: "rgb(43 178 74 / 29%)",
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <div style={{ height: 400, maxWidth: "800px" }}>
    <Line data={data} options={options} />
  </div>
);

const GroupedBar = () => (
  <div style={{ height: 400, maxWidth: "800px" }}>
    <Bar
      data={{
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            label: "# of Red Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "rgb(255, 99, 132)",
          },
          {
            label: "# of Blue Votes",
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: "rgb(54, 162, 235)",
          },
          {
            label: "# of Green Votes",
            data: [3, 10, 13, 15, 22, 30],
            backgroundColor: "rgb(75, 192, 192)",
          },
        ],
      }}
      options={{
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  </div>
);
const QuestionsBar = ({ value }) => (
  <div style={{ height: 250, maxWidth: "800px" }}>
    <Bar
      data={{
        labels: ["Overall"],
        datasets: [
          // {
          //   label: "Attempted",
          //   data: [12],
          //   backgroundColor: "rgb(255, 99, 132)",
          //   barThickness: 20,
          // },
          {
            label: "Correct",
            data: [value.correct],
            backgroundColor: "rgb(45, 196, 140)",
            barThickness: 12,
          },
          {
            label: "Incorrect",
            data: [value.incorrect],
            backgroundColor: "rgb(255 26 26)",
            barThickness: 12,
          },
          {
            label: "Unanswered",
            data: [value.questions - value.attempted],
            backgroundColor: "rgb(210 210 210)",
            barThickness: 12,
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          mode: "x-axis",
        },
        legend: {
          align: "start",
          labels: {
            boxWidth: 12,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  </div>
);
