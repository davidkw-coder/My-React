import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({children}){
    useEffect(() => {
    }, []);
    return(
        <UserContext.Provider value={{

        }}>
            {children}
        </UserContext.Provider>
    )
}

