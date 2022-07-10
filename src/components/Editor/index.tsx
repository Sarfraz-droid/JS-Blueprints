import React, { Fragment } from "react";
import Drawer from "./Drawer";
import CardInfo from "./CardInfo";
import FunctionEditor from "./FunctionEditor";
import { Tabs, Tab, Box } from "@mui/material";
import { theme } from "../theme/theme";

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

function TabPanel({ value }: { value: number }) {
  const TabComponent = EditorTabs[value].component;
  return (
    <Box
      sx={{
        padding: "0.3rem",
        width: "100%",
      }}
    >
      <TabComponent />
    </Box>
  );
}

function EditorComponent() {
  const [tab, setTab] = React.useState(0);

  return (
    <React.Fragment>
      <Drawer>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Tabs
            value={tab}
            TabIndicatorProps={{
              children: <span className="MuiTabs-indicatorSpan" />,
            }}
            sx={{
              "& .MuiTabs-indicator": {
                display: "flex",
                justifyContent: "center",
                backgroundColor: "transparent",
                height: "5px",
                borderRadius: "10px",
              },
              "& .MuiTabs-indicatorSpan": {
                maxWidth: 40,
                width: "100%",
                height: "20px",
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            {EditorTabs.map((item, index) => (
              <Tab
                key={index}
                label={item.name}
                sx={{
                  fontWeight: "bold",
                }}
                disableRipple
                onClick={() => setTab(index)}
              />
            ))}
          </Tabs>

          <TabPanel value={tab} />
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

export default EditorComponent;
