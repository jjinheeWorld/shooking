import PaymentCard from "./PaymentCard";

const CardList = ({ data }) => {
  return (
    <div className="mt-[69px]">
      {data.map((item) => {
        return (
          <div key={item.id} className="flex flex-col gap-3">
            <PaymentCard {...item} />
            <button className="mb-[17px] py-2 bg-[#FFEF64] rounded-[20px] text-[10px] font-bold">
              이 카드로 결제하기
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
