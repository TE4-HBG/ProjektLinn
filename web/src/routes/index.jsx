export const RootRoute = () => {
    return (
        <div>
            <h1>RootRoute</h1>
        </div>
    )
}

/**
 * @type {import('react-router-dom').RouteObject}
 */
// eslint-disable-next-line react-refresh/only-export-components
export const rootRoute = {
    path: '/',
    element: <RootRoute />,
}