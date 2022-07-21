import React, { useState } from "react";
import findByType from "./findByType";
import { motion } from "framer-motion";

interface IUDropdownProps {
  children: Array<JSX.Element>;
}

interface IUDropdownButtonProps {
  children: JSX.Element;
  className?: string;
  onClick?: () => void;
}

function UncontrolledDropdown({ children }: IUDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(children);
  const [onPanel, setOnPanel] = useState(false);

  const ButtonElement = findByType(children, Button);
  const PanelElement = findByType(children, Panel);

  return (
    <React.Fragment>
      <div
        className="flex flex-col justify-end items-start"
        onBlur={() => {
          if (!onPanel) setIsOpen(false);
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={ButtonElement.props.className}
        >
          {ButtonElement && ButtonElement.props.children}
        </button>
        <motion.div
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? "105%" : "100%",
            zIndex: 9999,
            position: "absolute",
            border: isOpen ? "" : "none",
            pointerEvents: isOpen ? "all" : "none",
          }}
          onHoverStart={() => setOnPanel(true)}
          onHoverEnd={() => setOnPanel(false)}
          className="flex flex-col bg-white w-40 rounded-md shadow-xl border-blue-500 border-2 mt-4 p-2 justify-start items-start"
        >
          {isOpen && PanelElement && PanelElement.props.children}
        </motion.div>
      </div>
    </React.Fragment>
  );
}

const Button = ({ children, className }: IUDropdownButtonProps) => (
  <div className={className}> {children} </div>
);
const Panel = ({ children, className }: IUDropdownButtonProps) => (
  <div className={className}> {children} </div>
);

const Item = ({ children, className, onClick }: IUDropdownButtonProps) => (
  <button
    className={`text-left hover:text-white hover:bg-blue-500 px-3 py-1 w-full rounded-md ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

UncontrolledDropdown.Button = Button;
UncontrolledDropdown.Panel = Panel;
UncontrolledDropdown.Item = Item;

export default UncontrolledDropdown;
