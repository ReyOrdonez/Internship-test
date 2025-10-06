import Message from "./Message";

export default function MessageList() {
  return (
    <div className="max-h-[75vh] mx-5 overflow-scroll mb-3">
      {Array(8)
        .fill(0)
        .map((message, id) => (
          <Message
            userOrNot={Math.floor(Math.random() * 2) === 0 ? true : false}
          />
        ))}
    </div>
  );
}
