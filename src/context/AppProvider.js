import React from "react";
import { AppContextProvider } from "./AppContext.js";


const AppProvider = ({ children }) => {
    return (
        <AppContextProvider>
            {/* <AuthContextProvider> */}
                {children}
            {/* </AuthContextProvider> */}
        </AppContextProvider>
    );
};

export default AppProvider;
