import { useState, useEffect } from "react";

export default function PostUser() {
  const [user, setUser] = useState({});
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    fetch(`https://jim-cam-marketplace.herokuapp.com/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Test19",
        avatar_url:
          "https://static.simpsonswiki.com/images/thumb/9/97/Cyrus_Manley.png/200px-Cyrus_Manley.png",
      }),
    })
      .then((res) => res.json())
      .then((res) => setUser(res))
      .catch((error) => {
        console.error("Error", error);
      });
  }, [submit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.body, "e.target");
    setSubmit(true);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="username">username</label>
      <input type="text" id="username" name="username" />
      <button>Submit profile</button>
    </form>
  );
}
