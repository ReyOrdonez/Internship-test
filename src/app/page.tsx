"use client";

import MessageList from "@/components/MessageList";
import MessageInput from "@/components/MessageInput";
import { useState } from "react";
import { MessageType } from "@/types";

export default function Home() {
  const [dataMessages, setDataMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <main className="flex flex-col h-screen">
      <div className="text-center bg-white my-8 w-[70vw] py-4 rounded-lg font-medium m-auto">
        <h1 className="text-2xl">
          Chat with <label className="text-[#7B169D]">AI</label>
        </h1>
      </div>
      <MessageList dataMessages={dataMessages} loading={loading} />
      <div className="bg-black min-h-[1px] opacity-20 mx-5"></div>
      <MessageInput setDataMessages={setDataMessages} setLoading={setLoading} />
    </main>
  );
}
