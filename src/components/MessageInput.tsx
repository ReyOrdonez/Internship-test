import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { MessageType } from "@/types";

type Props = {
  setDataMessages: Dispatch<SetStateAction<MessageType[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export default function MessageInput({ setDataMessages, setLoading }: Props) {
  const [message, setMessage] = useState("");

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
    setMessage("");
  }

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/messages");
        const data = await res.json();
        /**
         * Before set message state, turn each message data into more simple objects
         */
        const messageArray: MessageType[] = data
          .map((msg: any) => ({
            /**
             * Note: some messages in the API data have inconsistent data.
             * I assume that 'bot_sender' means the message was sent by the AI,
             * and 'sent_by_customer' means it was sent by the user.
             */
            text: msg.message_text,
            date: msg.message_date,
            from: msg.bot_sender
              ? "ai"
              : msg.sent_by_customer
              ? "user"
              : "unknown",
          }))
          .sort(
            (a: any, b: any) =>
              new Date(a.date).getTime() - new Date(b.date).getTime()
          );
        /**
         * Delay simulation
         */
        setTimeout(() => {
          setLoading(false);
          setDataMessages(messageArray);
        }, 2000);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMessages();
  }, []);

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
