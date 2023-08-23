/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext)
    if(!context) {
        console.log("Contexto não encontrado")
    }
    return context
}