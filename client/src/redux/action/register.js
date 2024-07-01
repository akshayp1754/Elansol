import toast from "react-hot-toast";
import * as api from "../api/index";

// Action to create a user
export const createUser = (formData) => async (dispatch) => {
  try {
    const response = await api.registerUser(formData);
    console.log(response);
    dispatch(getUsers()); // Fetch updated user list
    toast.success(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

// Action to get users
export const getUsers = () => async (dispatch) => {
  try {
    const response = await api.getUser();
    console.log(response);
    dispatch({ type: "User", payload: response.data.data });
    toast.success(response.message);
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};
