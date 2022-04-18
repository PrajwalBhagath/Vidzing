import { ReactNode, InputHTMLAttributes, ForwardRefRenderFunction, useEffect } from "react";
import style from "./../common.module.css";
import { useState } from "react";
import React from "react";


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ children, ...props },ref) => {
    return (
        <input
            {...props}
            ref={ref}
            className={style.input}
        />
    );
}

const FormInput = React.forwardRef(Input);

export default FormInput;
