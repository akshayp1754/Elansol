import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import RegistrationForm from "./RegistrationPage";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const key = localStorage.getItem("token");
  useEffect(() => {
    if (key === null) {
      navigate("/login");
    }
  }, [key, navigate]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const openRegistrationModal = () => {
    setShowModal(true);
  };

  const closeRegistrationModal = () => {
    setShowModal(false);
  };

  return (
    <nav
      style={{
        background: "#0E131F",
      }}
      className="bg-white-800 shadow-md w-full"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="inset-y-0 text-xl text-white left-0 flex items-center">
            
            <img  className="w-full h-12" src="https://elansoltech.com/wp-content/uploads/2023/02/Elansol.png"/>
          </div>
         

          <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {key && (
              <>
                <button
                  onClick={openRegistrationModal}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600 mr-4"
                >
                  Register User
                </button>
                <Modal show={showModal} onClose={closeRegistrationModal}>
                  <RegistrationForm />
                </Modal>
              </>
            )}
            <div className="ml-32 relative">
              <div className="flex text-slate-100 cursor-pointer justify-center items-center">
              Logout 
                <svg
                  onClick={handleLogout}
                  className="ml-4 hover:cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 12L13 12"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
