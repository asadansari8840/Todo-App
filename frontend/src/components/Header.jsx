import React from "react";
import "../styles/Header.scss";
import { motion } from "framer-motion";
import Switch from "@mui/material/Switch"

const Header = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className="header">
      <div className="logo">
        <motion.button whileHover={{ scaleX: 1.2, scaleY: 1.1 }}>
          TODO - W3WEB{" "}
        </motion.button>
      </div>
      <div className="mode">
        <Switch {...label} defaultChecked />
      </div>
    </div>
  );
};

export default Header;
