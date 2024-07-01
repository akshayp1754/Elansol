import toast from "react-hot-toast";
import * as api from "../api/index";

export const createUser = (formData) => async (dispatch) => {
  try {
    const response = await api.registerUser(formData);
    console.log(response);
    dispatch(getUsers());
    toast.success(response.message);
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

export const getUsers = async (dispatch) => {
  try {
    const response = await api.getUser();
    console.log(response);
    dispatch({ type: "User", payload: response.data });
    toast.success(response.message);
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};
