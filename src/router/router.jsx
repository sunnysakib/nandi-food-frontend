import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Suspense, lazy } from "react";
import { LuLoader2 } from "react-icons/lu";

const Loadable = (Component) => {
  const LoadableComponent = (props) => (
    <Suspense
      fallback={
        <div className="h-screen w-full flex justify-center items-center">
          <LuLoader2 className="h-10 w-10 animate-spin text-gray-700" />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );

  return LoadableComponent;
};

// client pages routes import
const ErrorBoundary = Loadable(
  lazy(() => import("../shared/ErrorBoundary"))
);
const HomePage = Loadable(
  lazy(() => import("../pages/HomePage/HomePage"))
);


const Router = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default Router;
