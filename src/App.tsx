import { FC } from "react";
import { ConfigProvider, theme } from "antd";
import Router from "./pages";
import { ApolloApp } from "./apollo";
const App: FC = () => {
  const { darkAlgorithm } = theme;
  return (
    <ApolloApp>
      <ConfigProvider
        theme={{ algorithm: darkAlgorithm, token: { colorPrimary: "#642ab5" } }}
      >
        <Router />
      </ConfigProvider>
    </ApolloApp>
  );
};

export default App;
