

interface ButtonProps{
    text: string,
    onClick: () => void
}

export default function ButtonBlue({text, onClick}: ButtonProps){
    return(
        <button onClick={onClick} className="bg-ocean-blue text-white rounded-lg p-2 text-lg font-semibold">
            {text}
        </button>
    )
}