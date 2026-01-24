import { useState, Dispatch, SetStateAction } from "react";
import { MessageType } from "@/types";

type Props = {
  setDataMessages: Dispatch<SetStateAction<MessageType[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string | null>>;
};

export default function MessageInput({
  setDataMessages,
  setLoading,
  setError,
}: Props) {
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message) {
      return;
    }
    const newMessage: MessageType = {
      text: message,
      date: new Date().toISOString(),
      from: "user",
    };
    setDataMessages((prev: MessageType[]) => [...prev, newMessage]);
    //JUST TESTING nextjs API

    async function fetchMessage() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        });
        const data = await res.json();
        data && setLoading(false);
        const newMessage: MessageType = {
          text: data.reply,
          date: new Date().toDateString(),
          from: "ai",
        };
        setDataMessages((prev: MessageType[]) => [...prev, newMessage]);
      } catch (e) {
        setError("Something went wrong. Please try again");
      } finally {
        setLoading(false);
      }
    }
    fetchMessage();
    setMessage("");
  }

  return (
    <div className="p-5">
      <form className="lg:w-[60vw] mx-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          name="userMessage"
          id="userMessage"
          placeholder="Ask something..."
          aria-label="message"
          className="rounded-md w-full p-4 focus:outline-none focus:border-none"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          autoComplete="off"
          required
        />
      </form>
    </div>
  );
}
