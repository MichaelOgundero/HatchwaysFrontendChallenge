import React from "react";

const Grades = ({ gradesArray }) => {
  return (
    <div
      data-testid="grades-parentdiv"
      style={{ padding: "5% 0 0 0", margin: 0 }}
    >
      {gradesArray.map((grade, index) => {
        return (
          <div
            data-testid="grade-item"
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 0,
              margin: 0,
              fontSize: "15px",
            }}
          >
            <p style={{ padding: 0, margin: 0 }}>Test {parseInt(index) + 1}</p>
            <p style={{ padding: "0 0 0 10%", margin: 0 }}>{grade}%</p>
          </div>
        );
      })}
    </div>
  );
};

export default Grades;
