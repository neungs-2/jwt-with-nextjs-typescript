export default function Home() {
  return (
    <div>
      <h1>I am index page and not hello</h1>
      <form method="POST" action="/api/login">
        <input type="text" name="username" defaultValue="admin" />
        <br />
        <input type="password" name="password" defaultValue="admin" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
