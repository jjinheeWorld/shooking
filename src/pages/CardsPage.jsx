import SubHeader from "../components/SubHeader";
import AddCardButton from "../components/AddCardButton";
import CardList from "../components/CardList";

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
        <CardList data={mockData} />
        {mockData.length === 0 && (
          <div className="pb-[9px] text-[#575757] text-center font-bold text-sm">
            새로운 카드를 등록해주세요.
          </div>
        )}
        <div className={mockData.length === 0 ? "" : "pt-[40px]"}>
          <AddCardButton />
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
