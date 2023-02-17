import { Suspense, FC } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Login";

const Router: FC = () => {
  return (
    // <Suspense fallback={<PageLoader firstRender={firstRender} />}>
    <Suspense>
      <Routes>
        <Route path="/" element={<LoginPage />}>
          <Route path="login" element={<LoginPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
