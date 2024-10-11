"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

type TypingProps = {
  text: string[];
  speed?: number;
};

const ContinualTypings = ({ text, speed = 100 }: TypingProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [inView, setInView] = useState(false);

  function getRandomElement(arr: string[]) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  useEffect(() => {
    if (inView) {
      let currentText = "";
      let index = 0;

      const chosenText = getRandomElement(text);

      const typingInterval = setInterval(() => {
        currentText += chosenText[index];
        setDisplayedText(currentText);
        index++;

        if (index === chosenText.length) {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => clearInterval(typingInterval);
    }
  }, [inView, text, speed]);

  return (
    <InView as="div" onChange={(inView) => setInView(inView)}>
      {({ ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {displayedText}
        </motion.div>
      )}
    </InView>
  );
};

export default ContinualTypings;
