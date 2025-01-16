const Button = ({ text }) => {
  return (
    <button className="self-start pl-[12px] pt-[5px] pr-[12px] pb-[5px] text-[10px] font-bold text-white bg-black rounded-[10px]">
      {text}
    </button>
  );
};

export default Button;
