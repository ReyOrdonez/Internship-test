import { useRef, useEffect, useState } from "react";
import Message from "./Message";
import MessageLoading from "./MessageLoading";
import { MessageType } from "@/types";

type Props = {
  dataMessages: MessageType[];
  loading: boolean;
};

export default function MessageList({ dataMessages, loading }: Props) {
  const messagesRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    messagesRef.current?.scrollIntoView({ behavior: "smooth" });

    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const distanceFromBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight;
      setShowButton(distanceFromBottom > 100);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [dataMessages]);

  return (
    <div
      className="flex-1 mx-5 overflow-scroll mb-3 hide-scrollbar"
      ref={containerRef}
    >
      {loading === true
        ? Array(20)
            .fill(0)
            .map((_) => <MessageLoading />)
        : dataMessages.map(
            (mess: MessageType, key: number) =>
              mess.from !== "unknown" && (
                <Message
                  text={mess.text}
                  from={mess.from}
                  date={mess.date}
                  key={key}
                />
              )
          )}
      <div ref={messagesRef}></div>
      {showButton && (
        <button
          title="returnButton"
          onClick={() =>
            messagesRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="fixed bottom-32 left-1/2 transform -translate-x-1/2 bg-[#57126E] text-white px-4 py-2 rounded-full"
        >
          See Latest
        </button>
      )}
    </div>
  );
}
