import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MhomePage from "./pages/md-sm/MhomePage";
import ContactPage from "./pages/ContactPage";
import { useMediaQuery } from 'react-responsive';


const App = ()=>{

    const {theme,handleTheme} = useContext(ThemeContext);


    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });
    

    /* later: for light/dark theme setting */

    // const handleClick = ()=>{
    //     if (theme === 'light'){
    //         handleTheme('dark');
    //     }else{
    //         handleTheme('light');
    //     }
    // }


    return <div className="flex ">
        <Routes>
            {isDesktopOrLaptop?<Route path='/' element={<HomePage />} />:<Route path='/' element={<MhomePage/>} />}
            
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </div>
}

export default App;