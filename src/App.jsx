import Home from "./pages/Home";
import { useState, createContext } from "react";

const mockData = [
  {
    id: 0,
    name: " 브랜드 A",
    content: "편안하고 착용감이 좋은 신발",
    price: 35000,
    isInCart: false,
  },
  {
    id: 1,
    name: " 브랜드 A",
    content: "힙한 컬러가 매력적인 신발",
    price: 25000,
    isInCart: false,
  },
  {
    id: 2,
    name: " 브랜드 B",
    content: "편안하고 착용감이 좋은 신발",
    price: 35000,
    isInCart: false,
  },
  {
    id: 3,
    name: " 브랜드 B",
    content: "힙한 컬러가 매력적인 신발",
    price: 35000,
    isInCart: false,
  },
  {
    id: 4,
    name: " 브랜드 C",
    content: "편안하고 착용감이 좋은 신발",
    price: 35000,
    isInCart: false,
  },
  {
    id: 5,
    name: " 브랜드 D",
    content: "힙한 컬러가 매력적인 신발",
    price: 35000,
    isInCart: false,
  },
];

export const ProductStateContext = createContext();

function App() {
  const [products, setProducts] = useState(mockData);

  return (
    <>
      <ProductStateContext.Provider value={products}>
        <Home />
      </ProductStateContext.Provider>
    </>
  );
}

export default App;
