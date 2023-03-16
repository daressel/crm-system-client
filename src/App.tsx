import { FC } from "react";
import Router from "./pages";
import { ApolloApp } from "./apollo";

const App: FC = () => {
  return (
    <ApolloApp>
      <Router />
    </ApolloApp>
  );
};

export default App;
