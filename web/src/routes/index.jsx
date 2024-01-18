export const RootRoute = () => {
    return (
        <>
            <h1 className='text-green-500'>RootRoute</h1>
        </>
    )
}

/**
 * @type {import('react-router-dom').RouteObject}
 */
// eslint-disable-next-line react-refresh/only-export-components
export const rootRoute = {
  path: "/",
  element: <RootRoute />,
};
