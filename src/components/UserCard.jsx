import React, { useEffect, useState } from 'react';

const UserCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((Data) => {
        setData(Data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data.map((user) => (
        <div key={user.Id} className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
          <div className="flex items-center p-4 space-x-4">
            <img
              src="/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"
              alt={user.Name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">{user.Name}</h2>
              <p className="text-sm text-gray-500">{user.Discription}</p>
              <p className="text-sm text-gray-500">Age: {user.Age}</p>
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-2 border-t border-gray-200">
            <span className="text-sm text-gray-700">Total Points:</span>
            <span className="ml-2 text-base font-bold text-blue-600">{user.Points}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
