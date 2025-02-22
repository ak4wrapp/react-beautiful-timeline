import React from "react";
import "./my-button.css";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: "dark" | "light" | "primary" | "secondary";
}

const MyButton: React.FC<MyButtonProps> = ({ theme, children }) => {
  return (
    <button className="my-button" data-theme={theme}>
      {children}
    </button>
  );
};

export default MyButton;
