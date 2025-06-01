import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="text-red-500 text-5xl mb-4">❗❗</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Authentication Required
          </h2>
          <p className="text-gray-600">Please login to view your profile</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center text-indigo-600 text-3xl font-bold">
            {user.userName.charAt(0).toUpperCase()}
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Welcome back,
        </h2>
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          {user.userName}
        </h1>

        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h3 className="font-medium text-gray-700 mb-2">Account Details</h3>
          <p className="text-gray-600">Username: {user.userName}</p>
          <p className="text-gray-600">Password: ••••••••</p>
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
  