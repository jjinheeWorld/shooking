import MainHeader from "../components/MainHeader";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { ProductStateContext } from "../App";

const HomePage = () => {
  const products = useContext(ProductStateContext);

  return (
    <div>
      <MainHeader />
      <ProductList data={products} />
    </div>
  );
};

export default HomePage;
