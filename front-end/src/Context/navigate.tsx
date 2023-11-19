import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

type navigateContext = {
    navigate : NavigateFunction;
}

const ContextNavigate = React.createContext<null | navigateContext >(null)

export const useNavigateContext = () => {
    const context = React.useContext(ContextNavigate)
    if (!context) throw new Error("Adicione um elementos")
    return context
}

export function NavigateProvider ( { children } : React.PropsWithChildren) {
    const navigate = useNavigate()
    return <ContextNavigate.Provider value={{ navigate }} >{children}</ContextNavigate.Provider>
} 