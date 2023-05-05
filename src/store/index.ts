import { configureStore,createSlice } from '@reduxjs/toolkit'
import { getToken } from '@/utils/authority';
// 创建一个slice来管理userInfo状态
const userSlice = createSlice({
  name: 'user',
  initialState: { userInfo: null,token:getToken() },
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    setUserToken(state,action){
      state.token = action.payload;
    }
  }
});

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  },
})

// 导出action
export const { setUserInfo,setUserToken } = userSlice.actions;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch