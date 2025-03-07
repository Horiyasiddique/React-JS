import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div className="bg-red-600 text-4xl text-white font-bold py-2 text-center my-5 rounded-lg">
        Please Login ❗
      </div>
    );
  return (
    <div className="bg-pink-400 text-4xl font-bold py-2 text-center my-5 rounded-lg">
      Welcome {user.username} 👋
    </div>
  );
}

export default Profile;
