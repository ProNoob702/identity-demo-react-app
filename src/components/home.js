import React, { useState } from "react";
import userManager from "../utils/userService";

export const HomeComponent = () => {
  const [user, setUser] = useState(null);
  const handleGetUser = async () => {
    const user = await userManager.getUser();
    setUser(user);
  };
  return (
    <div>
      <h3>Hello man</h3>
      <button onClick={handleGetUser}>FetchUser</button>
      <pre id="userStuff">{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
