import React, { useState } from 'react';
import Header from '../components/header';
import { useNavigate } from 'react-router-dom';

export default function Client() {
    const [data, setData] = useState({
        Name: "",
        Description: "",
        Points: "",
        Age: "",
        Gender: ""
    });

    const navigate = useNavigate();

    const HandleSubmitButton = (e) => {
        e.preventDefault();

        // Basic validation
        if (
            !data.Name.trim() ||
            !data.Description.trim() ||
            !data.Age ||
            !data.Points ||
            !data.Gender
        ) {
            alert("Please fill in all fields and select a gender.");
            return;
        }

        // Prepare payload with numeric conversion
        const payload = {
            ...data,
            Points: Number(data.Points),
            Age: Number(data.Age)
        };

        fetch("http://localhost:8000/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then(async (res) => {
                if (!res.ok) {
                    // Try to get error message from backend
                    const error = await res.text();
                    throw new Error(error || "Failed to create user.");
                }
                return res.json();
            })
            .then((res) => {
                alert("User created successfully!");
                setData({ Name: "", Description: "", Points: "", Age: "", Gender: "" });
                navigate("/");
            })
            .catch((err) => {
                console.error(err);
                alert("Failed to create user: " + err.message);
            });
    };

    return (
        <div>
            <Header />

            <div className='mt-10 py-5'>
                <form onSubmit={HandleSubmitButton} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800">User Information</h2>

                    {/* Gender Selection */}
                    <div className='flex gap-10 justify-center'>
                        <div onClick={() => setData({ ...data, Gender: "Male" })}>
                            <img
                                src="/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"
                                className={`w-16 h-16 rounded-full object-cover border-2 ${data.Gender === "Male" ? "border-blue-600" : "border-gray-300"} cursor-pointer`}
                            />
                        </div>
                        <div onClick={() => setData({ ...data, Gender: "Female" })}>
                            <img
                                src="/Woman-Icon-Teen-Profile-Graphics-26722130-2-580x387.png"
                                className={`w-16 h-16 rounded-full object-cover border-2 ${data.Gender === "Female" ? "border-pink-600" : "border-gray-300"} cursor-pointer`}
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <div className="space-y-1">
                        <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Enter Your Name:</label>
                        <input
                            type="text"
                            id="Name"
                            name="Name"
                            placeholder="Name"
                            value={data.Name}
                            onChange={(e) => setData({ ...data, Name: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Description */}
                    <div className="space-y-1">
                        <label htmlFor="Description" className="block text-sm font-medium text-gray-700">Description:</label>
                        <input
                            type="text"
                            id="Description"
                            name="Description"
                            placeholder="Description"
                            value={data.Description}
                            onChange={(e) => setData({ ...data, Description: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Age */}
                    <div className="space-y-1">
                        <label htmlFor="Age" className="block text-sm font-medium text-gray-700">Enter Your Age:</label>
                        <input
                            type="number"
                            id="Age"
                            name="Age"
                            placeholder="Age"
                            value={data.Age}
                            onChange={(e) => setData({ ...data, Age: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Points */}
                    <div className="space-y-1">
                        <label htmlFor="Points" className="block text-sm font-medium text-gray-700">Current Points:</label>
                        <input
                            type="number"
                            id="Points"
                            name="Points"
                            placeholder="Points"
                            value={data.Points}
                            onChange={(e) => setData({ ...data, Points: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
