import { createContext, useState } from "react";

export const FirstContext = createContext(null);

const FirstContextProvider = (props) => {
    const [username, setUsername] = useState("code hub myanmar");
    const address = "YGN"
    return <FirstContext.Provider value={{username,address}}>{props.children}</FirstContext.Provider>
};

export default FirstContextProvider;