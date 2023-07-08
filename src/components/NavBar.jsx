import { AiOutlineMenu, AiOutlineAlignLeft} from 'react-icons/ai';
import ThemeToggle from './ThemeToggle';
import {useTheme} from '../context/ThemeContext';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { animated,useSpring } from 'react-spring';



const NavBar = () => {

    const { colors } = useTheme();

    const {pathname} = useLocation();

    const [isOpen,setIsOpen] = useState(false);

    
    const handleClick = ()=>{
        setIsOpen((prev)=>{
            return !prev;
        })
    }

    const styles = useSpring({
        opacity: isOpen ? 1 : 0,
      })
    
    

    return<>
          <div className={` py-2 ${colors.bg.primary} flex justify-between fixed w-screen`}>
            {!isOpen ? <AiOutlineMenu  className={`ms-2 ${colors.text.textClr} text-3xl cursor-pointer`} onClick={handleClick}/> : 
                <AiOutlineAlignLeft  className={`ms-2 ${colors.text.textClr} text-3xl cursor-pointer`} onClick={handleClick}/>
            }
            <ThemeToggle classNames={ "cursor-pointer" } onClick={handleClick}/>  
          
            {
                isOpen && 
                    <animated.div className={`absolute top-12 left-0 grid w-full font-bold font-Itim text-xl `} style={styles}>
                        <NavLink className={`p-4 ${pathname==='/'?colors.bg.menuBtnActive:colors.bg.menuBtn} rounded-sm ${colors.border.btnBorder} ${colors.bg.primaryHover} active:border-text-white active:border-2`} to='/'>
                            Home
                        </NavLink>
                        <NavLink className={`p-4 ${pathname==='/skills'?colors.bg.menuBtnActive:colors.bg.menuBtn}  rounded-sm ${colors.bg.primaryHover} active:border-text-white active:border-2`} to='/skills'>
                            Skills
                        </NavLink>
                        <NavLink className={`p-4 ${pathname==='/projects'?colors.bg.menuBtnActive:colors.bg.menuBtn}  rounded-sm ${colors.bg.primaryHover} active:border-text-white active:border-2`} to='/projects' >
                            Projects
                        </NavLink>
                        <NavLink className={`p-4  ${pathname==='/contact'?colors.bg.menuBtnActive:colors.bg.menuBtn}  rounded-sm ${colors.bg.primaryHover} active:border-text-white active:border-2`} to='/contact' >
                            Contact
                        </NavLink>
                    </animated.div>

            }
            </div>
    </> 
  
}

export default NavBar;