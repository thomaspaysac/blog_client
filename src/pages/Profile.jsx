import { useState, useEffect } from "react";
import Header from "../components/Header";

export const Profile = () => {
  const [user, setUser] = useState();

  const getUser = async () => {
    const res = await fetch(`https://blogapi-production-5dee.up.railway.app/users/profile`);
    const data = await res.json();
    setUser(data);
  }

  useEffect(() => {
    getUser();
  }, [user]);

  return (
    <div>
      <Header />
      <button onClick={() => console.log(user)}>Click</button>
    </div>
  )
}