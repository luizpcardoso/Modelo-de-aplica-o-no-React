import { createContext, useState } from "react";

export const FormaturaCartContext = createContext({});

export const FormaturaCartProvider = ({ children }) => {
  const [formaturaCart, setFormaturaCart] = useState([]);

  const addFormaturaCart = (item) => {
    let isItemContent = false;

    if (formaturaCart.length === 0) {
      item.numberUnits = 1;
      setFormaturaCart([...formaturaCart, item]);
    }

    formaturaCart.forEach((elem) => {
      if (elem.id === item.id) {
        elem.numberUnits++;
        isItemContent = true;
      }
    });
    if (!isItemContent) {
      item.numberUnits = 1;
      setFormaturaCart([...formaturaCart, item]);
    }
  };

  const removeFormaturaCart = (itemRemove) => {
    const newCart = formaturaCart.filter((item) => {
      return itemRemove.id !== item.id;
    });
    setFormaturaCart(newCart);
  };

  return (
    <FormaturaCartContext.Provider
      value={{
        formaturaCart,
        addFormaturaCart,
        removeFormaturaCart,
      }}
    >
      {children}
    </FormaturaCartContext.Provider>
  );
};
