import { useState, useEffect } from "react";

export const TypingEffect = ({ text = "Hello, World!", speed = 90 }) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    };
  }, [index, text, speed]);

  return (
    <>
      {displayed}
      {index < text.length && <span className="cursor">_</span>}
    </>
  );
};