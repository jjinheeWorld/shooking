const Button = ({ text, onClick, isDisabled = false }) => {
  return (
    <button
      className={`self-start btn ${isDisabled ? "btn-disabled" : ""}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
