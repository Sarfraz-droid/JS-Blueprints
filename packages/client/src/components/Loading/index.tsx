import React from "react";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import { motion } from "framer-motion";
import { Box } from "@mui/system";

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background: "white",
        position: "fixed",
      }}>
      <motion.div
        initial={{}}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
        }}
        style={{
          transformOrigin: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <LoopOutlinedIcon
          sx={(theme) => ({
            width: 200,
            height: 200,
            color: theme.palette.primary.main,
          })}
        />
      </motion.div>
    </Box>
  );
}

export default Loading;
