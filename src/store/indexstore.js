import {configureStore, createSlice} from '@reduxjs/toolkit';


const initialUserDataState = { name: '', email: '',message:''};
const userDataSlice = createSlice({
    name:'userData',
    initialState:initialUserDataState,
    reducers:{
        concatenate(state,action){
           return {...state,[action.payload.name]:action.payload.value};
        },
        update(state,action){
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.message = action.payload.message !== undefined?action.payload.message:state.message;
        },
        clearInput(state){
            state.name='';
            state.email='';
            state.message='';
        },
    }
});
const store = configureStore({
    reducer:{userData:userDataSlice.reducer},
});

export const userDataActions = userDataSlice.actions;
export default store;