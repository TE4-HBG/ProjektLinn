import { DisplayContainer } from "../components/DisplayContainer";
import { usePocketbase } from "../components/PocketbaseProvider";
import { useState, useEffect } from "react";

export const RootRoute = () => {
  //om map används för att loopa igenom sätt alltid state som en rom array i början
  const [resp, setResp] = useState([]);
  const pbClienttest = usePocketbase();
  //res klagar på grund av typescript
  useEffect(() => {
    pbClienttest
      .collection("test")
      .getFullList()
      .then((res) => {
        setResp(res);
      });
  }, []);
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

      {resp.map((task) => (
        <div>
          <input type="checkbox"></input>
          <h1>
            {task.key} : {task.value}
          </h1>
        </div>
      ))}
      <h1>Create task</h1>
      <input type="text" placeholder="Key:" required></input>
      <input type="text" placeholder="Value:" required></input>
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
