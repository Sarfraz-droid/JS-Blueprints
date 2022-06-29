import React, { useState } from "react";
import { motion, PanInfo, useMotionValue } from "framer-motion";
import ArrowLeft from "../../assets/svg/ArrowLeft.svg";
import { useDispatch } from "react-redux";
import { deleteNode } from "../../redux/features/activeNodeSlice";

function Drawer() {
  const mWidth = useMotionValue(200);
  const [isDragging, setIsDragging] = useState(false);

  const dispatch = useDispatch();

  const handleDrag = React.useCallback((event: MouseEvent, info: PanInfo) => {
    let newWidth = mWidth.get() - info.delta.x;
    if (newWidth > 200 && newWidth < window.innerWidth - 100) {
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
          zIndex: 9999,
        }}
        exit={{ x: "100%" }}
        className="bg-white shadow-2xl flex justify-start items-start"
      >
        <motion.div
          className="bg-blue-300/50 rounded-l-md flex flex-col justify-center items-center"
          style={{
            height: "100vh",
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
          className="text-blue-500 inline h-auto cursor-pointer"
          whileHover={{
            rotate: 45,
          }}
          onClick={() => {
            dispatch(deleteNode());
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
      </motion.div>
    </React.Fragment>
  );
}

export default Drawer;
