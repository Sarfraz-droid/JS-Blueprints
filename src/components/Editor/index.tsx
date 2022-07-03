import React, { Fragment } from "react";
import Drawer from "./Drawer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CardInfo from "./CardInfo";
import FunctionEditor from "./FunctionEditor";

const EditorTabs = [
  {
    name: "Card Info",
    component: CardInfo,
  },
  {
    name: "Function Editor",
    component: FunctionEditor,
  },
];

function EditorComponent() {
  return (
    <React.Fragment>
      <Drawer>
        <div className="p-3 w-full">
          <Tabs>
            <TabList className={`flex gap-5`}>
              {EditorTabs.map((value, index) => (
                <Tab
                  key={index}
                  className={
                    "p-3 rounded-lg cursor-pointer transition-all duration-200"
                  }
                  selectedClassName="bg-blue-500 shadow-2xl text-white"
                >
                  {value.name}
                </Tab>
              ))}
            </TabList>

            {EditorTabs.map((value, index) => (
              <TabPanel>
                <value.component />
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default EditorComponent;
