import React, { useState } from "react";

const SearchBar = ({ data, handleStudentArr }) => {
  const [searchValue, setSearchValue] = useState("");
  const [tagValue, setTagValue] = useState("");

  const [searchBorder, setSearchBorder] = useState(false);
  const [tagSearchBorder, setTagSearchBorder] = useState(false);

  const filterData = (arr, query) => {
    if (!query) {
      return arr;
    }

    return arr.filter((data) => {
      const fullName = data.firstName + " " + data.lastName;

      return fullName.toLowerCase().includes(query);
    });
  };

  const filterDataTag = (arr, query) => {
    if (!query) {
      return arr;
    }

    return arr.filter((data) => {
      let allTags = data.tags.join(" ");
      return allTags.toLowerCase().includes(query);
    });
  };

  const handleSearch = (e) => {
    let result = [];
    setSearchValue(e.target.value);
    const filteredData = filterData(data, e.target.value);

    if (tagValue === "") {
      handleStudentArr(filteredData);
    } else {
      const tagsResult = filterDataTag(data, tagValue);
      result = filteredData.concat(tagsResult);
      const uniqueArray = result.filter(
        (item, pos) => result.indexOf(item) === pos
      );
      handleStudentArr(uniqueArray);
    }
  };

  const handleTag = (e) => {
    let result = [];
    setTagValue(e.target.value);
    const filteredData = filterDataTag(data, e.target.value);

    if (searchValue === "") {
      handleStudentArr(filteredData);
    } else {
      const nameSearchResult = filterData(data, searchValue);

      result = nameSearchResult.concat(filteredData);
      const uniqueArray = result.filter(
        (item, pos) => result.indexOf(item) === pos
      );
      handleStudentArr(uniqueArray);
    }
  };

  return (
    <div>
      <div
        data-testid="name-search"
        style={{ display: "flex", justifyContent: "center", paddingTop: "8px" }}
      >
        <input
          type="text"
          placeholder="Search by name"
          style={{
            width: "95%",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: searchBorder
              ? "1px solid black"
              : "1px solid rgba(0,0,0,0.1)",
            outline: "none",
            padding: "10px 10px",
            lineHeight: "28px",
            fontSize: "20px",
            fontFamily: "Raleway",
          }}
          onFocus={() => setSearchBorder(!searchBorder)}
          onBlur={() => setSearchBorder(!searchBorder)}
          value={searchValue}
          onChange={handleSearch}
        />
      </div>

      <div
        data-testid="tag-search"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "12px",
        }}
      >
        <input
          type="text"
          placeholder="Search by tag"
          style={{
            width: "95%",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: tagSearchBorder
              ? "1px solid black"
              : "1px solid rgba(0,0,0,0.1)",
            outline: "none",
            padding: "10px 10px",
            lineHeight: "28px",
            fontSize: "20px",
            fontFamily: "Raleway",
          }}
          onFocus={() => setTagSearchBorder(!tagSearchBorder)}
          onBlur={() => setTagSearchBorder(!tagSearchBorder)}
          value={tagValue}
          onChange={handleTag}
        />
      </div>
    </div>
  );
};

export default SearchBar;
