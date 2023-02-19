import { FC } from "react";
import { ConfigProvider, theme } from "antd";
import Router from "./pages";
const App: FC = () => {
  const { darkAlgorithm } = theme;
  return (
    <ConfigProvider
      theme={{ algorithm: darkAlgorithm, token: { colorPrimary: "#642ab5" } }}
    >
      <Router />
    </ConfigProvider>
  );
};

export default App;
