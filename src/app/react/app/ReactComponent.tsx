import React, { useState, useEffect } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import Routes from "./Routes/Routes";

const ReactComponent: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading)
    return (
      <Flex justify="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  else return <Routes />;
};

export default ReactComponent;
