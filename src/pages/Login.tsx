export const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <br />
        <button type="submit">Login</button>
        <button type="button">Cancel</button>
        <a href="#">Forgotten password?</a>
      </form>
    </>
  );
};
