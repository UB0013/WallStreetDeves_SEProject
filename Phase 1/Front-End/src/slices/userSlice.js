import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// make HTTP POST req to login user
export const userLogin = createAsyncThunk('loginuser', async (userCredentialsObject, thunkApi) => {
  try {
    console.log(userCredentialsObject)
    const response = await axios.post('/user-api/login', userCredentialsObject);
    console.log(response)
    const data = response.data;

    if (data.message === 'success') {
      // store token in local storage
      localStorage.setItem('token', data.payload);
      return data.userObj;
    }

    if (data.message === 'Invalid user' || data.message === 'Invalid password') {
      return thunkApi.rejectWithValue(data);
    }
  } catch (error) {
    // handle other errors if needed
    return thunkApi.rejectWithValue({ message: 'An error occurred' });
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userObj: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    errMsg: '',
  },
  reducers: {
    clearLoginStatus: (state) => {
      state.isSuccess = false;
      state.userObj = null;
      state.isError = false;
      state.errMsg = '';
    },
  },
  extraReducers: (builder) => {
    // track life cycle of promise returned by createAsyncThunk function
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.userObj = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.errMsg = '';
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.errMsg = action.payload.message;
      });
  },
});

// export action creators
export const { clearLoginStatus } = userSlice.actions;
// export reducer
export default userSlice.reducer;

