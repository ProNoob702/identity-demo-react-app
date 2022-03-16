import React from "react";
import userManager from "../utils/userService";

export const LoginComponent = () => {
  const submit = async () => {
    await userManager.signinRedirect();
  };

  return (
    <div>
      <h3>Login man</h3>
      <button onClick={submit} type="submit">
        Login
      </button>
    </div>
  );
};
