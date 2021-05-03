import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import BasicReactPage from "./BasicReactPage";
import FormPage from "./FormPage";

const MainPage = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Form</Tab>
        <Tab>Logo</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <FormPage />
        </TabPanel>
        <TabPanel>
          <BasicReactPage />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MainPage;
