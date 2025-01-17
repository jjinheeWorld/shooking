import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { ProductStateContext } from "../App";

const Home = () => {
  const products = useContext(ProductStateContext);

  return (
    <div>
      <Header />
      <ProductList data={products} />
    </div>
  );
};

export default Home;
