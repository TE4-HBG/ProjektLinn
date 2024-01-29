import { DisplayContainer } from "../components/DisplayContainer";
import { usePocketbase } from "../components/PocketbaseProvider";
import { useState, useEffect } from "react";
import {
  pbClienttest,
  getEx,
  setEx,
  deleteEx,
  editEx,
} from "../lib/hooks/useForLearning";

export const RootRoute = () => {
  //om map används för att loopa igenom sätt alltid state som en rom array i början

  const dataForTrafficWidget = {
    divId: "someId",
    interval: 30000, // Custom interval in milliseconds
    // Add any other properties needed by the TrafficWidget component
  };
  const dataTime = {
    datetime: "2015-03-25",
  };
  return (
    <>
      <DisplayContainer />
    </>
  );
};

/**
 * @type {import('react-router-dom').RouteObject}
 */
// eslint-disable-next-line react-refresh/only-export-components
export const rootRoute = {
  path: "/",
  element: <RootRoute />,
};
