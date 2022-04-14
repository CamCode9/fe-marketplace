import { useState } from "react";

const ProfileForm = ({ inputs, setInputs }) => {
  const [showName, setShowName] = useState(false);
  const [error, setError] = useState(false);

  function handlePost(inputs) {
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
        if (res.msg) {
          setError(true);
        } else {
          inputs.kudos = res.user.kudos;
          setShowName(true);
        }
      });
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
          {error && <h2>Username taken</h2>}
        </form>
      )}
      {showName && (
        <div>
          <h1>{inputs.username}</h1>
          <h2>{inputs.kudos}</h2>
          <img
            className="profileimg"
            alt="Your profile"
            src={inputs.avatar_url}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileForm;
