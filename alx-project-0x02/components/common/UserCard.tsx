import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm mb-4 bg-white">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700 mt-1">{email}</p>
      <p className="text-sm text-gray-600 mt-2">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
