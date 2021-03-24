import React from "react";

import "./index.scss";

export default function Index({ title, value = 0, meterValue = 0 }) {
  return (
    <div>
      <Progress value={meterValue} />
      <div className="meter-card">
        <div className="meter-card-title">{title}</div>
        <div className="meter-card-subtitle">{value}</div>
      </div>
    </div>
  );
}

function Progress({ value }) {
  return (
    <div className="meter-progress">
      <div className="needle" style={{ transform: `translateX(-50%) rotate(${(value / 180) * 180 - 90}deg)` }} />
    </div>
  );
}
