import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer as cart } from "./cartslc";
import { categoryReducer as category } from "./categoryslc";
import { currencyReducer as currency } from "./currencyslc";
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage
};
const combinedReducer = combineReducers({ currency, category, cart });
const persistedReducer = persistReducer(persistConfig, combinedReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}
    })
});
export default store;