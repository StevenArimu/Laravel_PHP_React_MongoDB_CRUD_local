import axios from "axios";
import backEnd_API from "../../../config";
import toastify from "../../../components/React_Toastify/Toastify";
export const types = {
  ADD_USER: "ADD_USER",
  DEL_USER: "DEL_USER",
  SAVE_USER: "SAVE_USER",
  GET_USERS: "GET_USERS",
  SET_USERS: "SET_USERS",
};

export const apidAddUser = (data) => (dispatch) => {
  axios
    .post(`${backEnd_API}/users/add`, data)
    .then((res) => {
      toastify.success("Add user successed");
      dispatch({ type: types.ADD_USER, payload: res.data.saveUser });
    })
    .catch((error) => {
      toastify.warning(error.response.data.errorMsg);
    });
};
export const apiDelUser = (data) => (dispatch) => {
  axios
    .delete(`${backEnd_API}/users/deleteUser/?eMail=${data}`)
    .then((res) => {
      toastify.success(res.data.message);
      dispatch({ type: types.DEL_USER, payload: res.data.eMail });
    })
    .catch((err) => console.log(err));
};
export const apiSaveUser = (data) => (dispatch) => {
  axios
    .post(`${backEnd_API}/users/update`, data)
    .then((res) => {
      toastify.success("Updated Success");
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
export const apiGetUsers = () => (dispatch) => {
  axios
    .get(`${backEnd_API}/users/findAll`)
    .then((res) => {
      dispatch({ type: types.SET_USERS, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
    });
};
