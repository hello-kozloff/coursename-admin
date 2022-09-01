import * as React from 'react';
import { RootStore } from 'stores/RootStore'
import { StoreContext } from './StoreContext'

export const StoreProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <StoreContext.Provider value={new RootStore()}>
      {children}
    </StoreContext.Provider>
  );
}
