import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("user");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <div>
      <h1>{user} Welcome To My Website..🎀</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
