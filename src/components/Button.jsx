const Button = ({ text, onClick, color, isDisabled = false }) => {
  const colorVariants = {
    yellow: "text-black bg-[#FFEF64]",
    gray: "px-[11px] text-black bg-[#D8D8D8]",
  };

  return (
    <button
      className={`self-start btn ${colorVariants[color]}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
