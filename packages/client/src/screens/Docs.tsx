import {
  AppBar,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { orange, red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Logo from "../assets/brand/JSBlueprints.png";
import { docs as docsRoutes } from "@workspace/lib/docs/routes";
import DisplayDocument from "../components/Docs/displayDoc";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Docs() {
  const [ActiveRoute, setActiveRoute] = useState<{
    name: string;
    text: (baseurl: string) => string;
    path: string;
  } | null>(null);

  const projectId = useSelector((state: RootState) => state.projectId);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const route = docsRoutes.find((route) => route.path === id);
      if (route) {
        setActiveRoute(route);
      } else {
        setActiveRoute(docsRoutes[0]);
      }
    } else {
      setActiveRoute(docsRoutes[0]);
    }
  }, [id]);

  const Navigate = useNavigate();

  if (ActiveRoute === null) {
    return <>Please wait</>;
  }

  return (
    <React.Fragment>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <img
            alt=".."
            src={Logo}
            style={{
              width: 100,
              cursor: "pointer",
            }}
            onClick={() => {
              Navigate("/");
            }}
          />
          <div style={{ flexGrow: 1 }} />
          <Stack
            sx={{
              px: 2,
              py: 3,
            }}
            direction="row"
            spacing={3}
          >
            <Typography>
              <NavLink
                to={`/editor/${projectId}`}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  backgroundColor: isActive ? orange[200] : "transparent",
                  color: "black",
                  fontWeight: isActive ? 700 : 200,
                  fontSize: "1.2rem",
                  padding: "10px",
                })}
              >
                Editor
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                to={`/docs`}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  backgroundColor: isActive ? orange[600] : "transparent",
                  color: isActive ? "white" : "black",
                  fontWeight: isActive ? 700 : 200,
                  fontSize: "1.2rem",
                  padding: "17px",
                  borderRadius: "15px",
                })}
              >
                Documentation
              </NavLink>
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <Grid
        container
        sx={{
          minHeight: "89.5vh",
        }}
      >
        <Grid
          item
          sm={2}
          sx={{
            borderRight: "3px solid #e0e0e0",
          }}
        >
          <List>
            {docsRoutes.map((route, index) => (
              <ListItemButton
                key={index}
                onClick={() => {
                  Navigate(`/docs/${route.path}`);
                }}
                sx={{
                  p: 2,
                }}
              >
                <Typography>
                  <ListItemText
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: ActiveRoute.path === route.path ? 700 : 200,
                    }}
                    disableTypography
                  >
                    {route.name}
                  </ListItemText>
                </Typography>
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid
          item
          xs={5}
          sm={10}
          sx={{
            p: 2,
          }}
        >
          <DisplayDocument ActiveRoute={ActiveRoute} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Docs;
