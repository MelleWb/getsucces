import { MouseEventHandler, FC } from "react";
import "./Button.css";

export type ButtonProps = {
    text: string;
    type?: "button" | "submit" | "reset";
    href?: string;
    size?: "small" | "medium" | "large";
    hasIconOnly?: boolean;
    // onClick?:
    //     | MouseEventHandler<HTMLButtonElement>
    //     | MouseEventHandler<HTMLAnchorElement>;
    isloading?: boolean;
};

const Button: FC<ButtonProps> = ({
    text,
    type,
    href,
    size,
    hasIconOnly = false,
    // onClick,
    isloading = false,
}) => {
    const classNames = [
        "button",
        `button--${size}`,
        hasIconOnly ? "button--icon-only" : "",
        isloading ? "button--loading" : "",
    ]
        .filter(Boolean)
        .join(" ");

    if (href) {
        return (
            <a
                href={href}
                className={classNames}
                // onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
            >
                {isloading ? "Loading..." : text}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={classNames}
            // onClick={onClick}
        >
            {isloading ? "Loading..." : text}
        </button>
    );
};

export default Button;
