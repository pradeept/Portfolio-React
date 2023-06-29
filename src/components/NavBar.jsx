import { AiOutlineMenu } from 'react-icons/ai';
import ThemeToggle from './ThemeToggle';
import {useTheme} from '../context/ThemeContext';
import { useState } from 'react';



const NavBar = () => {

    const { colors } = useTheme();

    const [collapse,setCollapse] = useState(false);

    
    const handleClick = ()=>{
        setCollapse((prev)=>{
            setCollapse(!prev);
        })
    }


    return<>
          <div className={` py-2 ${colors.bg.primary} flex justify-between fixed w-screen`}>
            <AiOutlineMenu  className={`ms-2 ${colors.text.textClr} text-3xl cursor-pointer`} onClick={handleClick}/>
            <ThemeToggle classNames={ "cursor-pointer" } onClick={handleClick}/>  
        </div>
    </> 
  
}

export default NavBar;