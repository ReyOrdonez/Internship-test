type MessageProps = {
  userOrNot: boolean;
};

export default function Message({ userOrNot }: MessageProps) {
  return (
    <div
      className={`${
        userOrNot === true ? "userMessageContainer" : "IAMessageContainer"
      }`}
    >
      <p className={`${userOrNot === true ? "userMessage" : "IAMessage"}`}>
        I am so exciting to start my internship and gain experience
      </p>

      <h6>Yesterday</h6>
    </div>
  );
}
