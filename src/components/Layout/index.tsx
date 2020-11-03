import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type LayoutProps = {
  children: ReactNode;
};

const LayoutContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap");
  font-family: "PT Sans", sans-serif;
  max-width: 978px;
  min-width: 320px;
  margin: 0 auto;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 15px;
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export { Layout };
