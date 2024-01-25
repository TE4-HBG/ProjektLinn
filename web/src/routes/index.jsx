import { DisplayContainer } from "../components/DisplayContainer";

export const RootRoute = () => {
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
