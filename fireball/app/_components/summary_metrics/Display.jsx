"use client";

import { useState } from "react";
import Map from "./Map";
import BarChart from "./BarChart";

const Display = () => {
  const [graphicDisplay, setGraphicDisplay] = useState("map");

  return (
    <div className="col-span-3 p-4">
      <div>
        <button className="border" onClick={() => setGraphicDisplay("map")}>
          Map
        </button>
        <button className="border" onClick={() => setGraphicDisplay("graph")}>
          Bar Graph
        </button>
      </div>
      {graphicDisplay === "map" && <Map />}
      {graphicDisplay === "graph" && <BarChart />}
    </div>
  );
};

export default Display;
