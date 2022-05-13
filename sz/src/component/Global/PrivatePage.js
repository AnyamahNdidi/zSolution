import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "./AuthProvider";

const PrivatePage = ({ children }) => {
	// const { currentUser } = useContext(AuthContext);
   const user = JSON.parse(localStorage.getItem("userInfo"))
	return <div>{ user ? children : <Navigate to="/login" />}</div>;
};

export default PrivatePage;