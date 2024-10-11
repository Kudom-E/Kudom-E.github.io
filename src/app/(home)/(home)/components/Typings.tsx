import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type TypingProps = {
  text: string;
  speed?: number;
};

const Typings = ({ text, speed = 100 }: TypingProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentText = "";
    let index = 0;

    const typingInterval = setInterval(() => {
      currentText += text[index];
      setDisplayedText(currentText);
      index++;

      if (index === text.length) {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.div>
  );
};

export default Typings;
