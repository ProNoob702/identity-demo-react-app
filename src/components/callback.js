import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userManager from "../utils/userService";

const doSignInCallback = async () => {
  return await userManager.signinCallback();
};

export const CallbackComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    doSignInCallback()
      .then((res) => {
        navigate("/home");
      })
      .catch((err) => {
        console.error(err);
      });
  }, [navigate]);
  return <div>Redirecting...</div>;
};
