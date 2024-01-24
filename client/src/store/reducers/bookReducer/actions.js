import axios from "axios";
import backEnd_API from "../../../config";
import toastify from "../../../Swan_Components/SwaN_React_Toastify/SwaN_Toastify";
// import browserHistory from "../../../config/history";
export const types = {
  ADD_BOOK: "ADD_BOOK",
  DELETE_BOOK: "DELETE_BOOK",
  UPDATE_BOOK: "UPDATE_BOOK",
  ALL_BOOKS: "ALL_BOOKS",
  SET_BOOKS: "SET_BOOKS",
  EDIT_BOOK: "EDIT_BOOK",
};

export const apiAddBook = (data) => (dispatch) => {
  // const token = localStorage.getItem("token");
  // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios
    .post(`${backEnd_API}/books/add`, data)
    .then((res) => {
      toastify.success(res.data.msg);
      dispatch({ type: types.ADD_BOOK, payload: res.data.book });
    })
    .catch((error) => {
      toastify.error("Book add failed");
      console.log(error);
    });
};
export const apiAllBooks = () => (dispatch) => {
  axios
    .get(`${backEnd_API}/books/all`)
    .then((res) => {
      dispatch({ type: types.SET_BOOKS, payload: res.data.books });
    })
    .catch((error) => {
      toastify.error("Books finding failed");
      console.log(error);
    });
};
export const apiDeleteALL = () => (dispatch) => {
  axios
    .delete(`${backEnd_API}/books/all`)
    .then((res) => {
      toastify.success(`${res.data} books Deleted`);
      dispatch({ type: types.SET_BOOKS, payload: null });
    })
    .catch((error) => {
      toastify.error("Books finding failed");
      console.log(error);
    });
};

export const apiBookDelete = (id) => (dispatch) => {
  axios
    .delete(`${backEnd_API}/books?id=${id}`)
    .then((res) => {
      toastify.success(res.data.msg);
      dispatch({ type: types.DELETE_BOOK, payload: res.data.book._id });
    })
    .catch((error) => {
      toastify.error("Book Delete failed");
      console.log(error);
    });
};

export const editBook = (data) => (dispatch) => {
  dispatch({ type: types.EDIT_BOOK, payload: data });
};
export const apiSaveBook = (data) => (dispatch) => {
  axios
    .put(`${backEnd_API}/books/update`, data)
    .then((res) => {
      console.log(res.data.book);
      toastify.success(res.data.msg);
      dispatch({ type: types.UPDATE_BOOK, payload: res.data.book });
    })
    .catch((error) => {
      toastify.error("Book Update failed");
      console.log(error);
    });
};
