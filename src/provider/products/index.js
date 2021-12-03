import { createContext, useState } from "react";
import api from "../../services/api";
import { useEffect } from "react";

export const ProductsContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  const CapturePerPage = (page) => {
    api
      .get(`/beers?page=${page}&per_page=10`)
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <ProductsContext.Provider value={{ products, CapturePerPage, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
