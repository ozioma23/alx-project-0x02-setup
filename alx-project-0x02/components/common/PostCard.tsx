import React from "react";
import { PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
      <p className="text-sm text-blue-600 mt-3">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
