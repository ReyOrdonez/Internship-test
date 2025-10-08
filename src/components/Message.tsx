import { useEffect, useState } from "react";

type MessageProps = {
  text: string;
  from: string;
  date: string;
};

export default function Message({ text, from, date }: MessageProps) {
  const dateToFormat = new Date(date);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div
      className={`${
        from === "ai" ? `AIMessageContainer` : `userMessageContainer`
      }
      opacity-0
      ${open && "opacity-100"}
       transition-all duration-1000 ease-in`}
    >
      <p className={` ${from === "ai" ? " AIMessage" : "userMessage"}`}>
        {text}
      </p>
    </div>
  );
}
