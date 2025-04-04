import React, { createContext, useState, useContext, ReactNode } from "react";

export type ToastType = 'success' | 'error' | 'warning' | null;

interface ToastContextType {
    message: string,
    type: ToastType
    setMessage: (message: string, type?: ToastType) => void,
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {

    const [message, setToastMessage] = useState<string>('');
    const [type, setToastType] = useState<ToastType>(null);

    const setMessage = (message: string, type: ToastType = null) => {
        setToastMessage(message);
        setToastType(type);
    };

    return (
        <ToastContext.Provider value={{ message, type, setMessage }}>
            {children}
        </ToastContext.Provider>
    );
}

export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("có vấn đề xảy ra");
    }
    return context;
}
