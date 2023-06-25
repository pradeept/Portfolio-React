import { createContext,useContext,useState } from "react"

const ThemeContext = createContext();

const ThemeProvider = ({ children })=>{

    const [darkTheme, setTheme] = useState(true);
    
    const colors = {
        bg: {
            primary: darkTheme ? "bg-[#282828]" : "bg-[#d6d4d4]",
            secondary: darkTheme ? "bg-[#111111]" : "bg-[#FFFFFF]",
            secondary2: darkTheme ? 'bg-[#232323]' : 'bg-[#ECECEC]',
            card: darkTheme ? 'bg-[#383838]' : 'bg-[F3EFEF]',
            menuBtn: darkTheme ? 'bg-[#504D4D]' : 'bg-[#C0C0C0]',
            menuBtnActive: darkTheme ? 'bg-[#A9A9A9]' : 'bg-[#828282]'
        },
       
        text: {
            heading: darkTheme ? "text-[#FD6060]" : "text-[#FD6060]",
            textClr: darkTheme ? "text-[#FFFFFF]" : "text-[#3E3E3E]",
            textClrLight:darkTheme?"text-[#E3E1E1]" : "text-[#7A7A7A]"
        },

        vector:{
            circle: darkTheme?"bg-[#FD6060]": "bg-[#FD6060]"
        },

        boxShadow: {
            card:"shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        }
    }

    const handleTheme = (themeParam)=>{
        setTheme(themeParam);
    }
    return<>
            <ThemeContext.Provider value={{darkTheme, handleTheme, colors}}>
                {children}
            </ThemeContext.Provider>
        </>
}

const useTheme = () => {
    return useContext(ThemeContext);
}

export {ThemeProvider, useTheme};
export default ThemeContext;