interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function ButtonBlue({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="shadow bg-background-black text-white rounded-lg py-2 text-lg font-semibold"
    >
      {text}
    </button>
  );
}
