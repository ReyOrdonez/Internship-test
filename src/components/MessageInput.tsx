export default function MessageInput() {
  return (
    <div className="p-5">
      <input
        type="text"
        name="userMessage"
        id="userMessage"
        placeholder="Ask something..."
        aria-label="message"
        required
        className="rounded-md w-full p-4 focus:outline-none focus:border-none"
      />
    </div>
  );
}
