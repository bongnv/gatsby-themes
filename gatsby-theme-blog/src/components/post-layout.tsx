import React, { ReactNode, FC } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default PageLayout;
