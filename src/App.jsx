import Home from "./pages/Home";
import { createContext, useReducer } from "react";

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

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isInCart: true } : item
      );
    default:
      return state;
  }
}

export const ProductStateContext = createContext();
export const ProductDispatchContext = createContext();

function App() {
  const [products, dispatch] = useReducer(reducer, mockData);

  const onAddToCart = (id) => {
    dispatch({
      type: "ADD_TO_CART",
      targetId: id,
    });
  };

  return (
    <>
      <ProductStateContext.Provider value={products}>
        <ProductDispatchContext.Provider value={{ onAddToCart }}>
          <Home />
        </ProductDispatchContext.Provider>
      </ProductStateContext.Provider>
    </>
  );
}

export default App;
