import React, { useEffect, useState } from "react";

const UserPoint = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleClaimPoints = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/api/users/${id}/points`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      alert(result.message);
      
      // Refresh users to show updated points
      const updatedRes = await fetch("http://localhost:8000/api/users");
      const updatedData = await updatedRes.json();
      setUsers(updatedData);
    } catch (err) {
      console.error("Error claiming points:", err);
    }
  };

  return (
    <div className="flex flex-wrap gap-6 p-4">
      {users.map((user) => (
        <div
          key={user._id}
          className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
        >
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
              <p className="text-sm text-gray-800 font-semibold">Points: {user.Points}</p>
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-2 border-t border-gray-200 flex item-center justify-center w-full">
            <button
              onClick={() => handleClaimPoints(user._id)}
              className="p-2 bg-black text-white rounded-xl"
            >
              Claim Points
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPoint;
