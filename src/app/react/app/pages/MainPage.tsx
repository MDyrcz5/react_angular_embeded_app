import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import FormPage from "./FormPage";

const MainPage = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Form</Tab>
        <Tab>Buttons</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <FormPage />
        </TabPanel>
        <TabPanel>
          <p>Buttons!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MainPage;
