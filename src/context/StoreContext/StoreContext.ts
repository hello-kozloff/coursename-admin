import * as React from 'react';
import { RootStore } from 'stores/RootStore'

export const StoreContext = React.createContext<RootStore>(new RootStore())
