import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userManager from "../utils/userService";

const doSignInSilentCallback = async () => {
  return await userManager.signinSilentCallback();
};

export const SilentRenewComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("silent-renew");
    doSignInSilentCallback()
      .then((res) => {
        navigate("/home");
      })
      .catch((err) => {
        console.error(err);
      });
  }, [navigate]);
  return <div>Redirecting...</div>;
};
