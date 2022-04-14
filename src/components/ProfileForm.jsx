import { useState } from "react";
import { Link } from "react-router-dom";
import PostUser from "./PostUser";

const ProfileForm = ({ inputs, setInputs }) => {
  const [showName, setShowName] = useState(false);

  function handlePost(inputs) {
    {
      fetch(`https://jim-cam-marketplace.herokuapp.com/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputs.username,
          avatar_url: inputs.avatar_url,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setShowName(true);
          inputs.kudos = res.user.kudos;
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;

    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePost(inputs);
  };

  return (
    <div>
      {!showName && (
        <form onSubmit={handleSubmit}>
          <label>
            Enter your Username:
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your avatar URL:
            <input
              type="url"
              name="avatar_url"
              value={inputs.avatar_url || ""}
              onChange={handleChange}
            />
          </label>
          <input type="submit"></input>
          <Link to="/api/users/newprofile" />
        </form>
      )}
      {showName && (
        <div>
          <h1>{inputs.username}</h1>
          <img src={inputs.avatar_url} />
          <p>{inputs.kudos}</p>
        </div>
      )}
    </div>
  );
};
export default ProfileForm;
