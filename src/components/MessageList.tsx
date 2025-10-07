import Message from "./Message";
import { MessageType } from "@/types";

type Props = {
  dataMessages: MessageType[];
};

export default function MessageList({ dataMessages }: Props) {
  return (
    <div className="flex-1 mx-5 overflow-scroll mb-3 hide-scrollbar">
      {dataMessages.map(
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
    </div>
  );
}
