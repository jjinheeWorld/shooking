import SubHeader from "../components/SubHeader";
import AddCardButton from "../components/AddCardButton";
import PaymentCard from "../components/PaymentCard";

const mockData = [
  {
    id: 1,
    cardNumber: "1111-2222-3333-4444",
    cardDate: "05/27",
    cardOwner: "LEEJINHEE",
    securityCode: "123",
    cardPassword: "12",
  },
];

const CardsPage = () => {
  return (
    <div>
      <SubHeader title={"보유카드"} />
      <div className="flex flex-col items-center">
        <div className="mt-[69px]">
          {mockData.map((item) => {
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
        {!mockData.length ? (
          <div className="pb-[9px] text-[#575757] text-center font-bold text-sm">
            새로운 카드를 등록해주세요.
          </div>
        ) : (
          <div className="pt-[40px]">
            <AddCardButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardsPage;
