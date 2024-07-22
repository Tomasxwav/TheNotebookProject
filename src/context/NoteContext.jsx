import React, { createContext, useState } from 'react';

export const noteContext = createContext();

export const NoteProvider = ({ children }) => {
    const [isNewNote, setIsNewNote] = useState(true);
    

    return (
        <noteContext.Provider value={{isNewNote, setIsNewNote}}>
            {children}
        </noteContext.Provider>
    );
};