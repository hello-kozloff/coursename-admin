import * as React from 'react';
import { RootStore } from 'stores/RootStore'
import { StoreContext } from 'context/StoreContext'

export const useStore = (): RootStore => {
  return React.useContext(StoreContext)
}
