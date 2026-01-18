import { useRef, useEffect, useState } from "react";
import Message from "./Message";
import SendingMessage from "./sendingMesssage";
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
      setShowButton(distanceFromBottom > 200);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [dataMessages]);

  return (
    <div
      className="flex-1 mx-5 overflow-scroll mb-3 hide-scrollbar"
      ref={containerRef}
    >
      {dataMessages.length < 1 && (
        <h2 className="w-64 mx-auto text-center text-xl mt-[30dvh] opacity-40">
          Type your first message…
        </h2>
      )}
      {dataMessages.map((msg: MessageType) => (
        <Message text={msg.text} from={msg.from} />
      ))}
      {loading && <SendingMessage />}
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
