import MainHeader from "../components/MainHeader";
import CartList from "../components/\bCartList";
import CartSummary from "../components/CartSummary";

const CartPage = () => {
  return (
    <div>
      <MainHeader showBackBtn={true} showCartIcon={false} />
      <CartList />
      <CartSummary />
    </div>
  );
};

export default CartPage;
