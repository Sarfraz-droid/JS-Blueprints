import React, { useState } from "react";
import { motion, PanInfo, useMotionValue } from "framer-motion";
import ArrowLeft from "../../assets/svg/ArrowLeft.svg";
import { useDispatch } from "react-redux";
import { deleteNode } from "../../redux/features/activeNodeSlice";
import styles from "./styles.module.scss";
import { style } from "@mui/system";

function Drawer({ children }: { children: React.ReactNode }) {
  const mWidth = useMotionValue(501);
  const [isDragging, setIsDragging] = useState(false);

  const dispatch = useDispatch();

  const handleDrag = React.useCallback((event: MouseEvent, info: PanInfo) => {
    let newWidth = mWidth.get() - info.delta.x;
    if (newWidth > 500 && newWidth < window.innerWidth - 100) {
      mWidth.set(mWidth.get() - info.delta.x);
    }
  }, []);

  return (
    <React.Fragment>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        style={{
          right: 0,
          top: 0,
          width: mWidth,
          height: "100vh",
          position: "fixed",
          zIndex: 100,
          backgroundColor: "white",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
        }}
        exit={{ x: "100%" }}
      >
        <motion.div
          className={styles.drawer}
          style={{
            height: "100%",
            width: 20,
            cursor: "col-resize",
          }}
          drag="x"
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragElastic={0}
          dragMomentum={false}
          onDragEnd={() => {
            setIsDragging(false);
          }}
          onDrag={handleDrag}
          onDragStart={() => {
            setIsDragging(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </motion.div>
        <motion.div
          className={styles.drawerClose}
          whileHover={{
            rotate: 45,
          }}
          onClick={() => {
            dispatch(deleteNode());
          }}
          style={{
            width: 20,
            height: 20,
            margin: 3,
            padding: 6,
            borderRadius: "50%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
        {children}
      </motion.div>
    </React.Fragment>
  );
}

export default Drawer;
