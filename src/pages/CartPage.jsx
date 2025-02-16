import MainHeader from "../components/MainHeader";
import CartList from "../components/\bCartList";

const CartPage = () => {
  return (
    <div>
      <MainHeader showBackBtn={true} showCartIcon={false} />
      <CartList />
    </div>
  );
};

export default CartPage;
