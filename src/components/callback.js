import React, { useEffect } from "react";
import userManager from "../utils/userService";

const doSignInCallback = async () => {
  return await userManager.signinCallback();
};

export const CallbackComponent = () => {
  useEffect(() => {
    doSignInCallback()
      .then((res) => {})
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return <div>Redirecting...</div>;
};
