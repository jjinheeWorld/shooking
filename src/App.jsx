import { createContext, useEffect, useReducer, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";
import CardRegisterPage from "./pages/CardRegisterPage";

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

function ProductReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isInCart: true } : item
      );
    default:
      return state;
  }
}

function cardReducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data;
    case "ADD_CARD": {
      nextState = [action.data, ...state];
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("card", JSON.stringify(nextState));
  return nextState;
}

export const ProductStateContext = createContext();
export const ProductDispatchContext = createContext();
export const CardStateContext = createContext();
export const CardDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, dispatchProducts] = useReducer(ProductReducer, mockData);
  const [cards, dispatchCards] = useReducer(cardReducer, []);
  const cardIdRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("card");

    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });
    cardIdRef.current = maxId + 1;

    dispatchCards({
      type: "INIT",
      data: parsedData,
    });

    setIsLoading(false);
  }, []);

  const onAddToCart = (id) => {
    dispatchProducts({
      type: "ADD_TO_CART",
      targetId: id,
    });
  };

  const onAddCard = (card) => {
    dispatchCards({
      type: "ADD_CARD",
      data: {
        id: cardIdRef.current++,
        ...card,
      },
    });
  };

  if (isLoading) {
    return <div>데이터 로딩중...</div>;
  }

  return (
    <>
      <ProductStateContext.Provider value={products}>
        <ProductDispatchContext.Provider value={{ onAddToCart }}>
          <CardStateContext.Provider value={cards}>
            <CardDispatchContext.Provider value={{ onAddCard }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cards" element={<CardsPage />} />
                <Route path="/cards/register" element={<CardRegisterPage />} />
              </Routes>
            </CardDispatchContext.Provider>
          </CardStateContext.Provider>
        </ProductDispatchContext.Provider>
      </ProductStateContext.Provider>
    </>
  );
}

export default App;
