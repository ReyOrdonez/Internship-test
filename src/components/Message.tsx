type MessageProps = {
  text: string;
  from: string;
  date: string;
};

export default function Message({ text, from, date }: MessageProps) {
  const dateToFormat = new Date(date);

  const dateFormatted = dateToFormat.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
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

      <h6 className="date">{dateFormatted}</h6>
    </div>
  );
}
