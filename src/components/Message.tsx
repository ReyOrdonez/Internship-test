type MessageProps = {
  text: string;
  from: string;
  date: string;
};

export default function Message({ text, from, date }: MessageProps) {
  console.log({
    text: text,
    from: from,
    date: date,
  });
  return (
    <div
      className={`${
        from === "ai" ? "AIMessageContainer" : "userMessageContainer"
      }`}
    >
      <p className={`${from === "ai" ? " AIMessage" : "userMessage"}`}>
        {text}
      </p>

      <h6>{date}</h6>
    </div>
  );
}
