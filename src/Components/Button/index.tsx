import React, { ButtonHTMLAttributes, useState } from "react";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const [isLoading, setLoading] = useState(false);

  return (
    // <Container type="button" {...rest}>
    <Container type="button" className={isLoading ? "isLoading" : ""} {...rest}>
      {children}
    </Container>
  );
};
export default Button;
