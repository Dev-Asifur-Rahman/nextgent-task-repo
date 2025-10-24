"use client";

import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalContextProvider = ({ children }) => {
  const [route, setRoute] = useState(undefined);
  const object = { route, setRoute };
  return (
    <GlobalContext.Provider value={object}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
