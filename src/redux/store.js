// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import reducer from "./reducer";

// export const middlewares = [logger];

// export const store = createStore(reducer, applyMiddleware(...middlewares));

// export default store;


// import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./actions/cartSlice";

// const cartPersistConfig = {
// 	key: "cart",
// 	storage,
// };

// localStorage.setItem("cart", JSON.stringify(storage));
// const persistCartData =  JSON.parse(localStorage.getItem("cart"));


const cartReducer = (cartSlice.reducer);

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
	
});

export default store;
