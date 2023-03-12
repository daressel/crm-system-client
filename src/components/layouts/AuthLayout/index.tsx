import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { ContentWrapper } from "./AuthLayout.styled";

const AuthLayout: FC = () => {
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content>
          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};
export default AuthLayout;
