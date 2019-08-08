import { REGISTER_SUCCESS, REGIST_FAIL } from '../actions/types';


const initialState = {
  token: localStorage.getItem('token')
  isAuthenticated:null
}