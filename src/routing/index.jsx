import React from "react";
import { Route, Routes } from "react-router-dom";

const Routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact component={salam} />
      </Routes>
    </div>
  );
};

export default Routes;
