import { React, useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Grades from "../Grades/Grades";
import StudentTag from "../StudentTag/StudentTag";
import  "./DataList.css"

const DataList = ({ data }) => {
  const [studentArr, setStudentArr] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setStudentArr(data);
  }, [data]);

  const handleStudentArr = (val) => {
    setStudentArr(val);
  };

  const handleISOpen = (index) => {
    setIsOpen(!isOpen);
    studentArr[index].isOpen = !isOpen;
  };

  const average = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + parseInt(arr[i]);
    }
    return sum / arr.length;
  };

  return (
    <div data-testid="data-list">
      <div
      className="DataListContainer"
        style={{
          borderRadius: "15px",
          boxShadow: "0px 1px 10px #999",
          margin: "5% auto",
          padding: 0,
          width: "50vw",
          overflow: "auto",
          height: "80vh",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <SearchBar data={data} handleStudentArr={handleStudentArr} />
        <ul
          data-testid="unordered-list"
          style={{ paddingLeft: 0, paddingTop: 0 }}
        >
          {studentArr &&
            studentArr.map((student, index) => {
              return (
                <div
                  data-testid="student-row"
                  key={index}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    backgroundClip: "padding-box",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "top",
                      paddingLeft: "2%",
                      paddingTop: "3%",
                    }}
                  >
                    <img
                      alt={student.firtName + " " + student.lastName}
                      width="120px"
                      height="120px"
                      src={student.pic}
                      style={{
                        verticalAlign: "middle",
                        borderRadius: "50%",
                        border: "1px solid gray",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      paddingLeft: "5%",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "800",
                        fontSize: "40px",
                        textTransform: "uppercase",
                        padding: "8px 0px 0px 0px",
                        margin: 0,
                      }}
                    >
                      {student.firstName + " " + student.lastName}
                    </p>
                    <div
                      style={{
                        paddingLeft: "5%",
                        fontWeight: "200",
                        paddingTop: "3%",
                        paddingBottom: "5%",
                        fontSize: "18px",
                      }}
                    >
                      <p style={{ padding: "2px 0px 0px 0px", margin: 0 }}>
                        Email: {student.email}
                      </p>
                      <p style={{ padding: "2px 0px 0px 0px", margin: 0 }}>
                        Company: {student.company}
                      </p>
                      <p style={{ padding: "2px 0px 0px 0px", margin: 0 }}>
                        Skill: {student.skill}
                      </p>
                      <p style={{ padding: "2px 0px 0px 0px", margin: 0 }}>
                        Average: {average(student.grades)}%
                      </p>
                      <div style={{ padding: "0 0 5% 0", margin: 0 }}>
                        {student.isOpen ? (
                          <Grades gradesArray={student.grades} />
                        ) : (
                          <></>
                        )}
                      </div>
                      <StudentTag data={studentArr} index={index} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", right: "2%" }}>
                    <button
                      data-testid="student-grades-button"
                      style={{
                        padding: "12px 0 0 0",
                        outline: "none",
                        border: "none",
                        background: "none",
                      }}
                      onClick={() => {
                        handleISOpen(index);
                      }}
                    >
                      {student.isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25px"
                          height="25px"
                          viewBox="0 0 124 124"
                          fill="gray"
                        >
                          <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z" />
                        </svg>
                      ) : (
                        <svg
                          height="25pt"
                          viewBox="0 0 448 448"
                          width="25pt"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="gray"
                        >
                          <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default DataList;
