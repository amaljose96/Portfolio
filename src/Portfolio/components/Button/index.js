import React from "react";
import colors from "../../config/colors";
import { ButtonContainer, ButtonSpacer } from "./styles";

function Button({
  text,
  onClick = () => { },
  variant = "primary",
  disabled = false,
}) {
  let buttonColors = {
    "primary": {
      backgroundColor: colors.primary,
      color: colors.shade
    },
    "secondary": {
      backgroundColor: colors.shade,
      color: colors.primary
    },
    "disabled": {
      backgroundColor: colors.text+"22",
      color: colors.background
    }
  }
  let { color, backgroundColor } = buttonColors[disabled ? "disabled" : variant];
  return <ButtonContainer
    disabled={disabled}
    color={color}
    backgroundColor={backgroundColor}
    onClick={() => {
      !disabled && onClick();
    }}
  >
    {text}
  </ButtonContainer>;
}
export default Button;