import React, { useState, useEffect } from "react";
import PaperList from "../components/PaperList";
import axios from "axios";
const SavedPapersPage = () => {
  const [savedPapers, setSavedPapers] = useState([]);
  const fetchSavedPapers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/saved-papers");
      setSavedPapers(response.data.paper);
    } catch (err) {
      console.log(err.message);
    }
  };

  const removePaper = async (id) => {
    const payLoad = {
      id: id,
    };
    axios({
      method: "delete",
      url: "http://localhost:3000/remove-paper",
      data: payLoad,
    })
      .then((response) => {
        setSavedPapers(response.data.paper);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchSavedPapers();
  }, []);

  return (
    <div>
      <h2>Saved Research Papers</h2>
      <PaperList papers={savedPapers} onRemove={removePaper} />
    </div>
  );
};

export default SavedPapersPage;
