import { ReactElement } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "p-4",
    "lg": "p-6",
}

const defaultStyles = "rounded-md p-4" 

const variantStyles = {
    "primary": "bg-purple-600 text-white",
     "secondary": "bg-purple-400 text-purple-600"
}

export const Button = (props: ButtonProps) => {
    // props.variant, props.onClick etc
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}` }>{props.text}</button>
}

<Button variant="primary" size="md" onClick={() => {}} text={"asd"} />