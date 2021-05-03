import React, { PropsWithChildren } from "react";
import { Flex } from "@chakra-ui/react";

type Props = {};
const Layout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <Flex>
      <div>{children}</div>
    </Flex>
  );
};

export default Layout;
