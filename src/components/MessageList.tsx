import Message from "./Message";

export default function MessageList() {
  return (
    <div className="flex-1 mx-5 overflow-scroll mb-3 hide-scrollbar">
      {Array(20)
        .fill(0)
        .map((message, id) => (
          <Message
            userOrNot={Math.floor(Math.random() * 2) === 0 ? true : false}
          />
        ))}
    </div>
  );
}
