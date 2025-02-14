import { createContext, useEffect, useReducer, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";
import CardRegisterPage from "./pages/CardRegisterPage";
import { products } from "./constants/products";

function cartReducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data;
    case "ADD_TO_CART":
      nextState = [action.data, ...state];
      break;
    default:
      return state;
  }
  return nextState;
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

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();
export const CardStateContext = createContext();
export const CardDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, dispatchCart] = useReducer(cartReducer, []);
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
    const product = products.find((item) => item.id === id);

    dispatchCart({
      type: "ADD_TO_CART",
      data: product,
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
      <CartStateContext.Provider value={cart}>
        <CartDispatchContext.Provider value={{ onAddToCart }}>
          <CardStateContext.Provider value={cards}>
            <CardDispatchContext.Provider value={{ onAddCard }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cards" element={<CardsPage />} />
                <Route path="/cards/register" element={<CardRegisterPage />} />
              </Routes>
            </CardDispatchContext.Provider>
          </CardStateContext.Provider>
        </CartDispatchContext.Provider>
      </CartStateContext.Provider>
    </>
  );
}

export default App;
