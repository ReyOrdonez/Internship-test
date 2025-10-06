export default function MessageInput() {
  return (
    <div className="w-[100vw] px-5">
      <input
        type="text"
        name="userMessage"
        id="userMessage"
        placeholder="Ask something..."
        aria-label="message"
        required
        className=" rounded-md mt-5 w-full p-4"
      />
    </div>
  );
}
