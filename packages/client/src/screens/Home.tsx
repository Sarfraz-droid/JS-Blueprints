import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/brand/JSBlueprints.png";
import { motion } from "framer-motion";
import { grey, red, yellow } from "@mui/material/colors";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArticleIcon from "@mui/icons-material/Article";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

import Bg from "../assets/Home/bg.png";
import Github from "../assets/brand/GitHub-Mark-32px.png";
function Home() {
  const Navigate = useNavigate();

  return (
    <React.Fragment>
      <img
        src={Bg}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
          opacity: 0.2,
        }}
      />
      <Grid
        container
        sx={{
          height: "100vh",
          width: "100vw",
        }}
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}>
            <img
              src={Logo}
              style={{
                width: 400,
              }}
            />
          </motion.div>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            sx={{
              p: 3,
            }}>
            BLOCK BASED JAVASCRIPT BLUEPRINTS
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            width: "60%",
            m: 4,
          }}>
          <Stack direction="row" spacing={3} justifyContent={"space-evenly"}>
            <Button
              sx={{
                p: 1,
                px: 4,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 4,
              }}
              variant="contained"
              onClick={() => {
                Navigate("/editor");
              }}
              disableRipple={false}>
              <PlayArrowIcon
                sx={{
                  p: 1,
                }}
              />
              Editor
            </Button>
            <Button
              variant="contained"
              sx={{
                p: 1,
                px: 4,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 4,
              }}
              color="secondary"
              disableRipple={false}
              onClick={() => {
                Navigate("/docs");
              }}>
              <ArticleIcon
                sx={{
                  p: 2,
                }}
              />
              Documentation
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          p: 2,
        }}>
        <Grid container>
          <Grid item>
            <Button
              sx={{
                textTransform: "none",
                "&:hover": {
                  boxShadow: "none",
                  transform: "scale(0.9)",
                },
                transition: "all 0.2s ease-in-out",
              }}
              onClick={() => {
                window.open("https://github.com/Sarfraz-droid/fflow");
              }}>
              <img src={Github} />
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  px: 1,
                }}>
                Github
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Home;
