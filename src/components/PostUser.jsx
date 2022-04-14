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

  return alert("Posted");
}
