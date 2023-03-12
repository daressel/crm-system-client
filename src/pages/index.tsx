import { Suspense, FC } from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../components/layouts/AuthLayout";
import Dashboard from "./Dashboard";
import LoginPage from "./Login";

const Router: FC = () => {
  return (
    // <Suspense fallback={<PageLoader firstRender={firstRender} />}>
    <Suspense>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
