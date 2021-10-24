import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialUserDataState = { name: '', email: '', message: '' };
const initialCartDataState = { cartCount: 0, totalAmount: 0, idList: [], items: [] };
const initialCurrentPupState = {};
const initialAdoptPupState = [];
const initialShopCartState = [];
const userDataSlice = createSlice({
    name: 'userData',
    initialState: initialUserDataState,
    reducers: {
        concatenate(state, action) {
            return { ...state, [action.payload.name]: action.payload.value };
        },
        update(state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.message = action.payload.message !== undefined ? action.payload.message : state.message;
        },
        clearInput(state) {
            state.name = '';
            state.email = '';
            state.message = '';
        },
    }
});

const cartSlice = createSlice({
    name: 'cartData',
    initialState: initialCartDataState,
    reducers: {
        addCart(state, action) {
            let matchingItems;
            let cartObject = action.payload;
            if (state.items.length > 0) {
                matchingItems = state.items.filter((item) => item.id === cartObject.id)
            } else {
                matchingItems = 0;
            }
            state.cartCount = state.cartCount + cartObject.quantity;
            state.totalAmount = state.totalAmount + cartObject.quantity * cartObject.amount;
            state.idList.push(cartObject.id);
            if (matchingItems.length > 0) {
                state.items.forEach((item) => {
                    if (item.id === cartObject.id) {
                        item.quantity = item.quantity + cartObject.quantity;
                    }
                });
            } else
                state.items.push(cartObject);
        },
        deleteCart(state, action) {
            let matchingItems;
            let cartObject = action.payload;
            let itr = 0;
            if (state.items.length > 0) {
                matchingItems = state.items.filter((item) => item.id === cartObject.id)
            } else {
                matchingItems = 0;
            }
            const index = state.idList.indexOf(cartObject.id);
            if (index !== -1) {
                state.idList.splice(index, 1);
            }
            if (matchingItems.length > 0) {
                state.cartCount = state.cartCount - cartObject.quantity;
                state.totalAmount = state.totalAmount - (cartObject.quantity * cartObject.amount);
                state.items.forEach((item) => {
                    if (item.id === cartObject.id) {
                        let qty = item.quantity - cartObject.quantity;
                        item.quantity = item.quantity - cartObject.quantity;
                        if (qty === 0) {
                            state.items.splice(itr, 1);
                        }
                    }
                    itr = itr + 1;
                });
            }
        },
        initialiseCart(state) {
            return initialCartDataState;
        },
    }
});

const currentPupSlice = createSlice({
    name: 'currentPupData',
    initialState: initialCurrentPupState,
    reducers: {
        addCurrent(state, action) {
            return action.payload;
        },
    }
});

const shopCartSlice = createSlice({
    name: 'shopCartData',
    initialState: initialShopCartState,
    reducers: {
        addShopItem(state, action) {
            let matchingItems;
            let cartObject = action.payload;
            matchingItems = state.filter((item) => item.id === cartObject.id);
            if (matchingItems.length > 0) {
                state = state.map((item) => {
                    if (item.id === cartObject.id) {
                        let qty = item.quantity + cartObject.quantity;
                        item.quantity = item.quantity + cartObject.quantity;
                        item.total = qty * item.price;
                    }
                    return state;
                });
            } else
                state.push(cartObject);
        },
        deleteShopItem(state, action) {
            let matchingItems;
            let cartObject = action.payload;
            let index = 0;
            if(state.length > 0){
                matchingItems = state.filter((item) => item.id === cartObject.id);
            }else{
                matchingItems = 0;
            }
            if (matchingItems.length > 0) {
                state = state.map((item) => {
                    if (item.id === cartObject.id) {
                        let qty = item.quantity - cartObject.quantity;
                        item.quantity = item.quantity - cartObject.quantity;
                        item.total = qty * item.price;
                        if (qty === 0) {
                            state.splice(index, 1);
                        }
                    }
                    index = index + 1;
                    return state;
                });
            }
        },
        initialiseShopCart(state) {
            return initialShopCartState;
        },
    }
});

const adoptPupSlice = createSlice({
    name: 'adoptPupData',
    initialState: initialAdoptPupState,
    reducers: {
        addAdoptPup(state, action) {
            state.push(action.payload);
        },
        removeAdoptPup(state, action) {
            let index = 0;
            state.forEach((item) => {
                if (item.id === action.payload.id) {
                    state.splice(index, 1);
                }
                index = index + 1;
            });
        },
    }
});
const store = configureStore({
    reducer: { userData: userDataSlice.reducer, cartData: cartSlice.reducer, currentPupData: currentPupSlice.reducer, shopCartData: shopCartSlice.reducer, adoptPupData: adoptPupSlice.reducer },
});

export const userDataActions = userDataSlice.actions;
export const cartActions = cartSlice.actions;
export const currentPupActions = currentPupSlice.actions;
export const shopCartActions = shopCartSlice.actions;
export const adoptPupActions = adoptPupSlice.actions;
export default store;