import { useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!");
    console.log(enteredValues);
  }

  function handleInputChange() {}

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* can use `type="button"` to prevent submitting*/}
        <button className="button">Login</button>
      </p>
    </form>
  );
}
