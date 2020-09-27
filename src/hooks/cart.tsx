import React, { createContext, useCallback, useState, useContext } from 'react';

interface ProductProps {
  id: number;
  product_name: string;
  category: string;
  price: number;
}

interface OrderContextProps {
  products: ProductProps[];
  addOrder(product: ProductProps): void;
  openModal(): void;
  isModal: boolean;
}
const OrderContext = createContext({} as OrderContextProps);

const OrderProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ProductProps[]>([]);
  const [modal, setModal] = useState(false);

  const addOrder = useCallback((product) => {
    setData((current) => [...current, product]);
  }, []);

  const openModal = useCallback(() => {
    setModal((state) => !state);
  }, []);

  return (
    <OrderContext.Provider
      value={{ products: data, addOrder, openModal, isModal: modal }}
    >
      {children}
    </OrderContext.Provider>
  );
};

function useCart(): OrderContextProps {
  const context = useContext(OrderContext);

  if (!context) throw new Error('useCart must be used within an OrderProvider');

  return context;
}

export { OrderProvider, useCart };
