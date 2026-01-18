import { useEffect, useState } from "react";

type MessageProps = {
  text: string;
  from: string;
};

export default function Message({ text, from }: MessageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div
      className={`my-3 ${
        from === "ai"
          ? `AIMessageContainer lg:ml-40`
          : `userMessageContainer lg:mr-40`
      }
      opacity-0
      ${open && "opacity-100"}
       transition-all duration-200 ease-in`}
    >
      <p className={` ${from === "ai" ? " AIMessage" : "userMessage"}`}>
        {text}
      </p>
    </div>
  );
}
