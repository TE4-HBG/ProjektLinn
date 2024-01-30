import { DisplayContainer } from "../components/DisplayContainer";
import { Veckoevents1x1 } from "../components/Veckoevents";

export const RootRoute = () => {
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
   
    <DisplayContainer/>
    <Veckoevents1x1/>  

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
