import SubHeader from "../components/SubHeader";
import AddCardButton from "../components/AddCardButton";

const Cards = () => {
  return (
    <div>
      <SubHeader title={"보유카드"} />
      <div className="mt-[69px] flex flex-col items-center">
        <div className="pt-[17px] pb-[9px] text-[#575757] font-bold text-sm">
          새로운 카드를 등록해주세요.
        </div>
        <AddCardButton />
      </div>
    </div>
  );
};

export default Cards;
