import React, { useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";

const Ranking = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchRanking = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/ranking");
                setUsers(res.data);
            } catch (err) {
                console.error("Failed to fetch ranking", err);
            }
        };
        fetchRanking();
    }, []);

    const leaders = users.slice(0, 3);
    const rest = users.slice(3);

    return (
        <div>
            <Header />
            <div className="min-h-screen  p-4">
                

                {/* Top 3 */}
                <div className="flex justify-center gap-4 mb-6 mt-6">
                    {leaders.map((user, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow-lg p-2 w-28 flex flex-col items-center border-2 ${index === 0
                                    ? "border-yellow-400"
                                    : index === 1
                                        ? "border-gray-400"
                                        : "border-orange-400"
                                }`}
                        >
                            <img
                                src={
                                    user.Gender === "Male"
                                        ? "/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"
                                        : "/Woman-Icon-Teen-Profile-Graphics-26722130-2-580x387.png"}                                alt={user.Name}
                                className="w-16 h-16 rounded-full object-cover"
                                onError={e => { e.target.onerror = null; e.target.src = "/default.png"; }}
                            />
                            <span className="mt-1 text-sm capitalize text-gray-600">{user.Name}</span>
                            <span className="font-semibold text-sm text-black">
                                {user.Points?.toLocaleString?.() ?? user.Points}
                            </span>
                            <div className="mt-1 text-sm font-bold text-yellow-500">
                                #{index + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Others */}
                <div className="flex flex-col gap-4 w-3/5 m-auto mt-10  p-6 rounded-2xl ">
                    {rest.map((user, i) => (
                        <div key={i} className="flex items-center justify-between bg-[#CFFFE2] p-3 rounded-2xl border-white border-2 ">
                            <div className="flex items-center gap-3">
                                <img
                                src={
                                    user.Gender === "Male"
                                        ? "/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"
                                        : "/Woman-Icon-Teen-Profile-Graphics-26722130-2-580x387.png"}                                alt={user.Name}
                                className="w-16 h-16 rounded-full object-cover"
                                onError={e => { e.target.onerror = null; e.target.src = "/default.png"; }}
                            />
                                <span className="text-lg font-semibold capitalize text-gray-800">{user.Name}</span>
                            </div>
                            <span className="text-sm font-semibold text-black">
                                {user.Points?.toLocaleString?.() ?? user.Points}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ranking;
