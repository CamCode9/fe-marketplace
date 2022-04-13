import { useState, useEffect } from "react";

export default function PostUser() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jim-cam-marketplace.herokuapp.com/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Test134",
        avatar_url:
          "https://static.simpsonswiki.com/images/thumb/9/97/Cyrus_Manley.png/200px-Cyrus_Manley.png",
      }),
    })
      .then((res) => res.json())
      .then((res) => setUser(res))
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  if (user.msg) {
    return <h1>This user already exists</h1>;
  }

  return (
    console.log(user.user.username, "this is user"),
    (
      <div>
        <h2>username: {user.user.username}</h2> <p>kudos: {user.user.kudos}</p>
        <img
          className="ProfilePicture"
          src={user.user.avatar_url}
          alt="Profile "
        />
      </div>
    )
  );
}
