import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[24px]",
  square: "rounded-[0px]",
};
const variants = {
  gradient: {
    indigo_900_02_blue_800: "bg-gradient text-white-A700",
  },
};
const sizes = {
  xs: "h-[48px] px-[35px] text-lg",
  sm: "h-[60px] px-[5px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "gradient",
  size = "xs",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["gradient"]),
  color: PropTypes.oneOf(["indigo_900_02_blue_800"]),
};

export { Button };
