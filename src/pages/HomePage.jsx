import SideBar from "../components/SideBar";
import Typed from 'typed.js';
import { useEffect, useRef } from "react";
import ThemeToggle from "../components/ThemeToggle";

const HomePage = () => {
    
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Hello!", "नमस्ते", "ನಮಸ್ಕಾರ", "¡Hola!", "Bonjour!"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            cursorChar:'_'
        });

        //cleanup function
        return () => typed.destroy();
},[]);

    return <>
        
        <SideBar />
        <div className="text-center w-full bg-secondary-dark h-screen  grid grid-row justify-center items-center font-Itim">
          
            <div className="w-80 h-80 bg-text-color-heading rounded-full fixed bottom-[-40px] right-[-70px] opacity-40"></div>
            <div>
                <h3 className="text-3xl mb-8 text-text-white">👋   <span className="text-5xl " ref={el}>Hola </span></h3>
                
                <h2 className="text-start text-text-white">I am</h2>
                <h1 className="text-6xl text-text-color-heading">Pradeep Taarkar</h1>
                <small className="text-text-grey">Aspiring Web Developer and Cyber-Security Enthusiast</small>
            </div>
            
        </div>
    </>
}


export default HomePage;