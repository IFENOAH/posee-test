import { ReactNode } from "react";

interface IButtonProps {
    onClick?: () => void;
    leftIcon?: ReactNode;
    children?: ReactNode;
    rightIcon?: ReactNode;
    fullWidth?: boolean
}

export const Button = ({onClick, leftIcon, children, rightIcon, fullWidth, ...rest }: IButtonProps) => (
  <button
    type = "button"
    onClick={onClick}
    className=
     {`md:text-sm text-white rounded text-xs cursor-pointer select-none [outline:none]
        ${fullWidth ? "w-full text-center flex items-center justify-center" : "flex items-center justify-between"}
        space-x-2 px-6 py-[10px] bg-gray-900 focus:ring-gray-800 text-doc-white hover:bg-gray-700 focus:bg-gray-950 focus:ring-bg-gray-700
        transition-all ease-in-out duration-300 transition`
    }
    {...rest}
  >
    {!!leftIcon && leftIcon}
    {children ? <span className="whitespace-nowrap">{children}</span> : null}
    {!!rightIcon && rightIcon}
  </button>
);
