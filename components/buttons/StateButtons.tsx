interface ButtonProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

export default function StateButton({ text, onClick, isActive }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-white text-black ${
        isActive ? "bg-blue-400" : "bg-white"
      }  rounded-lg p-2 text-lg font-semibold`}
    >
      {text}
    </button>
  );
}
