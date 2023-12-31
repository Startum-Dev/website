interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
  return (
    <div>
      <input
        className="w-full border-2 border-gray-200 rounded h-11 rounded-lg max-w-2xl bg-primary-black p-2"
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
