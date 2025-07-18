import { useState, useEffect } from "react";

import axios from "axios";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import FlipSwitch from "../components/FlipSwitch/FlipSwitch";

import "./headerSection.scss";
import NotificationCenter from "../components/NotificationCenter/NotificationCenter";

const HeaderSection = ({ HOST_IP, showSidebar, setShowSidebar, CONFIG, isLoading }) => {

  const iconVariants = {
    opened: {
      rotate: 90,
      //scale: 2
    },
    closed: {
      rotate: 0,
      //scale: 1
    },
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading indicator while CONFIG is loading
  }
// #region HTML
  return (
    <div className="topbarRight">
      <motion.div
        className="hamburger"
        initial={false}
        variants={iconVariants}
        animate={showSidebar ? "opened" : "closed"}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <FaBars />
      </motion.div>

      <NotificationCenter
        HOST_IP={HOST_IP}
        CONFIG={CONFIG}
      />
    </div>
  );
};

export default HeaderSection;
