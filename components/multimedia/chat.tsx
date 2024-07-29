export default function ChatService() {
  return (
    <div>
      <p>
        Enter a username:
        <input id="name" type="text" required placeholder="Username" />
        <input type="button" name="login" value="Log in" />
      </p>
    </div>
  );
}
