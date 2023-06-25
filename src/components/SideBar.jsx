import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";


// prev = w-1/4 for main div
//Baumans not adopting

const SideBar = () => {
    
    const { colors } = useTheme();

    const path = window.location.pathname;


    return <div className={`sticky w-80 h-scren ${colors.bg.secondary} text-text-color-dark `}> 


        <div className="flex items-center justify-center text-center p-2 ">
            <img src="/prof1.jpg" alt="" className="rounded-full w-36  border-4 border-text-grey" />
        </div>
            {path !== "/" ? <h1 className={`${colors.text.heading} font-Itim text-center text-xl mb-3`} >Pradeep Tarakar</h1> : null}

        

        <div className={`p-3 h-2/3 ${colors.bg.secondary2} m-2 text-center rounded-2xl grid grid-row-4 items-center font-Baumans text-lg`}>
            <div className={`p-4 ${colors.bg.menuBtnActive} rounded-xl`}><Link to='/' >Home</Link></div>
            <div className={`p-4 ${colors.bg.menuBtn}  rounded-xl`}><Link to='/skills' >Skills</Link></div>
            <div className={`p-4 ${colors.bg.menuBtn}  rounded-xl`}><Link to='/projects' >Projects</Link></div>
            <div className={`p-4 ${colors.bg.menuBtn}  rounded-xl`}><Link to='/contact' >Contact</Link></div>
            <div>
                <footer className="text-item-bg-dark">&#169; Pradeep Taarkar</footer>
            </div>
        </div>


    </div>
}

export default SideBar;