import toast from "react-hot-toast";
import * as api from "../api/index";

export const createUser = (formData) => async (dispatch) => {
  try {
    const response = await api.registerUser(formData);
    dispatch(getUsers()); 
    toast.success(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const response = await api.getUser();
    dispatch({ type: "User", payload: response.data.data });
    toast.success(response.message);
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};
