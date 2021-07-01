import React, { useState } from "react";

const StudentTag = ({ data, index }) => {
  const [tagValue, setTagValue] = useState("");
  const [addTagBorder, setTagBorder] = useState(false);

  const handleTagValue = (e) => {
    setTagValue(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      data[index].tags.push(tagValue);
      setTagValue("");
    }
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {data &&
          data[index].tags.map((tag, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  aligns: "center",
                  margin: "2px",
                  padding: "15px 10px",
                  borderRadius: "5px",
                  background: "rgba(0,0,0,0.2)",
                  minWidth: "50px",
                }}
              >
                <p style={{ padding: 0, margin: "0 auto", fontWeight: "200" }}>
                  {tag}
                </p>
              </div>
            );
          })}
      </div>

      <input
        data-testid="tag-input"
        type="text"
        placeholder="Add a tag"
        style={{
          width: "50%",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: addTagBorder
            ? "1px solid black"
            : "1px solid rgba(0,0,0,0.1)",
          outline: "none",
          padding: "10px 10px",
          lineHeight: "28px",
          fontSize: "15px",
          fontFamily: "Raleway",
        }}
        onFocus={() => {
          setTagBorder(!addTagBorder);
        }}
        onBlur={() => {
          setTagBorder(!addTagBorder);
        }}
        value={tagValue}
        onChange={handleTagValue}
        onKeyDown={handleEnterKey}
      />
    </div>
  );
};

export default StudentTag;
