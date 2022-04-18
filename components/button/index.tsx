import { ReactNode } from "react";
import style from "./../common.module.css";
import { useState } from "react";
import React from "react";

export interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}


export default function Button({ children, ...rest }: Props): JSX.Element {
  return (
    <button 
    className={style.button}
    {...rest}>{children}</button>
  );
}
