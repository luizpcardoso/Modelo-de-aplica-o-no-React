import { createContext, useState } from "react";

export const ConfraternizacaoCartContext = createContext({});

export const ConfraternizacaoCartProvider = ({ children }) => {
  const [confraternizacaoCart, setConfraternizacaoCart] = useState([]);

  const addConfraternizacaoCart = (item) => {
    let isItemContent = false;

    if (confraternizacaoCart.length === 0) {
      item.numberUnits = 1;
      setConfraternizacaoCart([...confraternizacaoCart, item]);
    }

    confraternizacaoCart.forEach((elem) => {
      if (elem.id === item.id) {
        elem.numberUnits++;
        isItemContent = true;
      }
    });
    if (!isItemContent) {
      item.numberUnits = 1;
      setConfraternizacaoCart([...confraternizacaoCart, item]);
    }
  };

  const removeConfraternizacaoCart = (itemRemove) => {
    const newCart = confraternizacaoCart.filter((item) => {
      return itemRemove.id !== item.id;
    });
    setConfraternizacaoCart(newCart);
  };

  return (
    <ConfraternizacaoCartContext.Provider
      value={{
        confraternizacaoCart,
        addConfraternizacaoCart,
        removeConfraternizacaoCart,
      }}
    >
      {children}
    </ConfraternizacaoCartContext.Provider>
  );
};
