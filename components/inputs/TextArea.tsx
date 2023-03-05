interface TextAreaProps {
  placeholder: string;
}

const TextArea = ({ placeholder }: TextAreaProps) => {
  return (
    <div>
      <textarea
        className="w-full border-2 border-gray-200 rounded rounded-lg max-w-2xl p-2"
        placeholder={placeholder}
        rows={10}
      />
    </div>
  );
};
export default TextArea;
