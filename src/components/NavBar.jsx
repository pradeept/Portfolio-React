import { AiOutlineMenu } from 'react-icons/ai';
import ThemeToggle from './ThemeToggle';
import {useTheme} from '../context/ThemeContext';



const NavBar = () => {

    const { colors } = useTheme();


    return <div className={`w-screen py-2 ${colors.bg.primary} flex items-start content-center`}>
        <AiOutlineMenu  className={`ms-2 ${colors.text.textClr} text-3xl cursor-pointer`} />
        <ThemeToggle classNames={ "ms-auto cursor-pointer" } />
      
    </div>
}

export default NavBar;