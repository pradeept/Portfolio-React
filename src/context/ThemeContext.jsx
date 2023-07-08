import { createContext,useContext,useState } from "react"

const ThemeContext = createContext();


const ThemeProvider = ({ children })=>{

    const [darkTheme, setTheme] = useState(true);
    
    const colors = {
        bg: {
            primary: darkTheme ? "bg-[#282828]" : "bg-[#d6d4d4]",
            primaryHover: darkTheme?"hover:bg-[#075985]":"hover:bg-[#0ea5e9]",
            secondary: darkTheme ? "bg-[#111111]" : "bg-[#FFFFFF]",
            secondary2: darkTheme ? 'bg-[#232323]' : 'bg-[#ECECEC]',
            card: darkTheme ? 'bg-[#383838]' : 'bg-[F3EFEF]',
            menuBtn: darkTheme ? 'bg-[#504D4D]' : 'bg-[#C0C0C0]',
            menuBtnActive: darkTheme ? 'bg-[#A9A9A9]' : 'bg-[#828282]'
        },
       
        text: {
            heading: darkTheme ? "text-[#FD6060]" : "text-[#FD6060]",
            textClr: darkTheme ? "text-[#e3e3e3]" : "text-[#3E3E3E]",
            textClrLight:darkTheme?"text-[#9e9b9b]" : "text-[#7A7A7A]"
        },

        vector:{
            circle: darkTheme?"bg-[#FD6060]": "bg-[#FD6060]"
        },

        boxShadow: {
            card:"shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        },

        buttons:{
            bg:darkTheme?"bg-[#3B82F6]":"bg-[#6e9ff0]",
            hover:darkTheme?"hover:bg-[#60A5FA]":"hover:bg-[#8bb4f7]"
        },

        border:{
            btnBorder:darkTheme?"border-[#1D4ED8]":"border-[#abbfe0]",
            btnHover:darkTheme?"hover:border-[#abbfe0]":"hover:border-[#1D4ED8]"
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