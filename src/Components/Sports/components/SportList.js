import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const SportList = () => {
  const { filtered_sports: sports, grid_view } = useFilterContext();
  if (sports.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        No results match the filter criteria...
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView sports={sports} />;
  }
  return <GridView sports={sports} />;
};

export default SportList;
