import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
}) {
  return <button className="px-3 py-1.5 border border-blue-600 bg-">{children}</button>;
}
Button.prototype = {
  checkVariationValue: ({ primary, secondary, success, danger, warning }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!danger) +
      Number(!!warning);
    if (count > 1) {
      throw new Error("You can only have one variation");
    }
  },
};
export default Button;
