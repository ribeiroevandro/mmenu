import React from 'react';

import { OrderProvider } from './cart';

const AppProvider: React.FC = ({ children }) => (
  <OrderProvider>{children}</OrderProvider>
);

export default AppProvider;
