import { MessageType } from "@/types";

export function groupMessagesByDate(messages: MessageType[]) {
  const groups: Record<string, MessageType[]> = {};

  const now = new Date();
  const today = now.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  messages.forEach((msg) => {
    const msgDate = new Date(msg.date);
    const msgDay = msgDate.toDateString();

    let groupKey = "";

    if (msgDay === today) {
      groupKey = "Today";
    } else if (msgDay === yesterday.toDateString()) {
      groupKey = "Yesterday";
    } else if (now.getTime() - msgDate.getTime() <= 7 * 24 * 60 * 60 * 1000) {
      groupKey = "This Week";
    } else {
      groupKey = msgDate.toLocaleDateString();
    }

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }

    groups[groupKey].push(msg);
  });

  return groups;
}
