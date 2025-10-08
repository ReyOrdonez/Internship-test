export default function MessageLoading() {
  return (
    <div
      className={`
         animate-blink
        ${
          Math.floor(Math.random() * 2) === 1
            ? "AIMessageContainer"
            : "userMessageContainer"
        }`}
    >
      <p className={`my-1 min-h-[1.2rem] min-w-[30vw] bg-black rounded-md`}></p>
      <h6 className="min-w-[10vw] rounded-md min-h-[1rem] bg-black"></h6>
    </div>
  );
}
