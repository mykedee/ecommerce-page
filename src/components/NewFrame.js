import { motion } from "framer-motion";
import React from "react";

const NewFrame = () => {
  return (
    <div className="place-content-center grid h-[50vh] gap-1">
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        // transition={{ duration: 1 }}
        className="h-[250px] w-[250px] bg-black"
      ></motion.div>
    </div>
  );
};

export default NewFrame;
