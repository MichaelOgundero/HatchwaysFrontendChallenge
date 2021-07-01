import { React, useState, useEffect } from "react";
import DataList from "../DataList/DataList";
import axois from "axios";

const FetchData = () => {
  const url = "https://api.hatchways.io/assessment/students";
  let [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const response = await axois.get(url);
      for (var i = 0; i < response.data.students.length; i++) {
        response.data.students[i]["isOpen"] = false;
        response.data.students[i]["tags"] = [];
      }

      if (mounted) {
        setData(response.data.students);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  if (data.length === 0) {
    return <div data-testid="loading-div">Loading...</div>;
  }

  return (
    <div data-testid="parent-div">
      <DataList data={data} />
    </div>
  );
};

export default FetchData;
