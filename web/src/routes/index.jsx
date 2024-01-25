import { DisplayContainer } from "../components/DisplayContainer";
import { Veckoevents } from "../components/Veckoevents";

export const RootRoute = () => {
  return (
    <>
      <DisplayContainer />
      <Veckoevents />
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
