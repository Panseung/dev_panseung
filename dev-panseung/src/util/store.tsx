import { configureStore, createSlice } from '@reduxjs/toolkit'

let isManager = createSlice({
  name : 'isManager',
  initialState : false,
  reducers : {
    changeAccessRight( state, action ) {
      state = action.payload
      return state
    }
  }
})
export let { changeAccessRight } = isManager.actions

let isLogin = createSlice({
  name : 'isLogin',
  initialState : false,
  reducers : {
    changeLogin( state, action ) {
      state = action.payload
      return state
    }
  }
})
export let { changeLogin } = isLogin.actions


export default configureStore({
  reducer: {
    isManager: isManager.reducer,
    isLogin: isLogin.reducer,
  }
}) 