import React from "react";
import "./styles/paper-item.css";
const PaperItem = ({ paper, onSave, onRemove }) => {
  return (
    <div className="paper-item">
      <h3>{paper.title}</h3>
      <p>Authors: {paper.authors}</p>
      <p>Year: {paper.year}</p>
      <p>Citations: {paper.citations}</p>
      {onSave && <button onClick={() => onSave(paper)}>Save</button>}
      {onRemove && <button onClick={() => onRemove(paper.id)}>Remove</button>}
    </div>
  );
};
export default PaperItem;
