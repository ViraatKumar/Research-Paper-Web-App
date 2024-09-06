import React, { useState, useEffect } from "react";
import axios from "axios";
import PaperList from "../components/PaperList";
import "../components/styles/paper-item.css";
const SearchPage = () => {
  const [papers, setPapers] = useState([]);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterAuthor, setFilterAuthor] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const filteredPapers = papers.filter((paper) => {
    return (
      (filterTitle === "" ||
        paper.title.toLowerCase().includes(filterTitle.toLowerCase())) &&
      (filterAuthor === "" ||
        paper.authors.toLowerCase().includes(filterAuthor.toLowerCase())) &&
      (filterYear === "" || paper.year.toString() === filterYear)
    );
  });
  const getPapers = async () => {
    const response = await axios.get("http://localhost:3000/papers", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPapers(response.data.papers);
  };

  const savePaper = async (paper) => {
    axios({
      method: "post",
      url: "http://localhost:3000/save-paper",
      data: paper,
    })
      .then((response) => {
        console.log("clicked save");
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getPapers();
  }, []);
  return (
    <div>
      <h2>Search Research Papers</h2>
      {/* Filter Inputs */}
      <div className="filter-container">
        <input
          type="text"
          placeholder="Filter by Title"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Author"
          value={filterAuthor}
          onChange={(e) => setFilterAuthor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Filter by Year"
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
        />
      </div>
      <PaperList papers={filteredPapers} onSave={savePaper} />
    </div>
  );
};
export default SearchPage;
