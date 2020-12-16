import React, { ButtonHTMLAttributes, useState } from "react";

import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}
const Button: React.FC<ButtonProps> = ({ children, isLoading, ...rest }) => {
 
  // const [isLoading, setLoading] = useState(true);

  return (
    // <Container type="button" {...rest}>
    <Container type="button"  isLoading={isLoading} {...rest}>
      {children}
    </Container>
  );
};
export default Button;
