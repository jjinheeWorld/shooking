import MainHeader from "../components/MainHeader";
import CartList from "../components/\bCartList";
import CartSummary from "../components/CartSummary";
import Button from "../components/Button";

const CartPage = () => {
  return (
    <div>
      <MainHeader showBackBtn={true} showCartIcon={false} />
      <div className="mt-[69px] mb-[28px] px-[23px]">
        <CartList />
        <CartSummary />
        <Button text={"결제하기"} size={"large"} />
      </div>
    </div>
  );
};

export default CartPage;
