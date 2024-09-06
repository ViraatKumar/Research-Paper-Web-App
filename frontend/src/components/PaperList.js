import React from "react";
import PaperItem from "./PaperItem";
const PaperList = ({ papers, onSave, onRemove }) => {
  return (
    <div className="paper-list">
      {papers.length > 0 ? (
        papers.map((paper, index) => {
          return (
            <PaperItem
              key={index}
              paper={paper}
              onSave={onSave}
              onRemove={onRemove}
            />
          );
        })
      ) : (
        <div className="empty-list">No Saved Items</div>
      )}
    </div>
  );
};
export default PaperList;
