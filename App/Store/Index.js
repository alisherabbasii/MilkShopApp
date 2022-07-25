import {configureStore, createSlice} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {    
    isAuth:false
};
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
    login(state) {
        state.isAuth=true;
    },
    logout(state) {
        state.isAuth =false;
    }
    }
});

const persistedReducer = persistReducer(persistConfig, authSlice.reducer)

const store =  configureStore({
    reducer:{auth:persistedReducer}
});
export const authActions = authSlice.actions;
export const persistor = persistStore(store)
export default store;