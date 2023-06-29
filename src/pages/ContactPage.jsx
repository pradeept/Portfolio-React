import SideBar from "../components/SideBar";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const ContactPage = () => {

    const {colors} = useTheme();

    return <>
        <SideBar />
        <div className={`${colors.bg.primary} w-screen h-screen  font-Itim`}>
            <ThemeToggle  classNames={"absolute right-4 top-4"}/>
            <div className={`text-center mt-28 ${colors.text.textClr}`}>
                <h1 className="text-3xl">Thank You! for stopping by..</h1>
                <div className={`m-auto w-1/2 ${colors.bg.secondary2} p-10 mt-4 rounded-2xl `}>
                    <h1 className="text-start">I am on</h1>
                    <div className="flex flex-wrap gap-6 justify-center  py-4 shadow-inner-xl rounded-xl">
                        <a href="https://www.linkedin.com/in/pradeep-tarakar/" target="_blank" rel="noreferrer"><img src="/icons/linkedin.png" alt="linkedin" className="p-2 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"/></a>
                        <a href="https://www.github.com/pradeept" target="_blank" rel="noreferrer"><img src="/icons/github.png" alt="github" className="p-2 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"  /> </a>
                        <a href="https://twitter.com/pradeep_taarkar" target="_blank" rel="noreferrer"><img src="/icons/twitter.png" alt="twitter" className="p-2 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"  /> </a>
                        <a href="mailto: pradeep.tarakar17@gmail.com" target="_blank" rel="noreferrer"><img src="/icons/mail.png" alt="mail" className="p-2 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"  /></a>
                    </div>
                </div>
                <div>
                <a href="https://www.linkedin.com/in/pradeep-tarakar/" target="_blank" rel="noreferrer">
                    <button className={`p-4 border-2  mt-6 ${colors.buttons.bg} ${colors.buttons.hover}`} >HIRE ME</button>
                </a>
                               
                </div>
            </div>
            <div className={`w-80 h-80 ${colors.vector.circle} rounded-full fixed bottom-[-80px] right-[-70px] opacity-40`}></div>

        </div>
    
    </>
}

export default ContactPage;