import { CgSun, CgMoon } from 'react-icons/cg';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const ThemeToggle = ({classNames}) => {

    const { darkTheme, handleTheme } = useContext(ThemeContext);

    const handleClick = () => {
        if (darkTheme){
            handleTheme(false);
        }else{
            handleTheme(true);
        }
    }
    
    return(
        darkTheme ? <CgSun style={{ color: "#fad46b", fontSize: "2rem" }} className={`me-4 ${classNames}`} onClick={handleClick} /> :
            <CgMoon  style={{ color: "#111111", fontSize: "2rem" }} className={` me-4 ${classNames}`} onClick={handleClick}/>
    )
}

export default ThemeToggle;