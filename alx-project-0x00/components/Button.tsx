import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({title, size= "medium", shape= "rounded-lg"}) => {

    const baseStyles = "border px-3 py-1 text-lg mt-3  bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"

    const sizes = {
        small: "px-2 py-1 text-sm",
        medium: "px-3 py-1.5 text-base",
        large: "px-4 py-2 text-lg"
    }

    const shapes = {
        "rounded-sm": "rounded-sm",
        "rounded-lg": "rounded-lg",
        "rounded-full": "rounded-full"
    }

    const style = `${baseStyles} ${sizes[size]} ${shapes[shape]}`;

    return (
        <button className={style}>
            {title}
        </button>
    );
}

export default Button;