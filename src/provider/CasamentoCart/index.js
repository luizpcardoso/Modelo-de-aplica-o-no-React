import { createContext, useState } from "react";

export const CasamentoCartContext = createContext({});

export const CasamentoCartProvider = ({ children }) => {
  const [casamentoCart, setCasamentoCart] = useState([]);

  const addCasamentoCart = (item) => {
    console.log(casamentoCart);
    let isItemContent = false;

    if (casamentoCart.length === 0) {
      item.numberUnits = 1;
      setCasamentoCart([...casamentoCart, item]);
    }

    casamentoCart.forEach((elem) => {
      if (elem.id === item.id) {
        elem.numberUnits++;
        isItemContent = true;
      }
    });
    if (!isItemContent) {
      item.numberUnits = 1;
      setCasamentoCart([...casamentoCart, item]);
    }
  };

  const removeCasamentoCart = (itemRemove) => {
    const newCart = casamentoCart.filter((item) => {
      return itemRemove.id !== item.id;
    });
    setCasamentoCart(newCart);
  };

  return (
    <CasamentoCartContext.Provider
      value={{
        casamentoCart,
        addCasamentoCart,
        removeCasamentoCart,
      }}
    >
      {children}
    </CasamentoCartContext.Provider>
  );
};
