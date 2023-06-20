import { useEffect, useRef } from 'react';
import NavBar from '../../components/NavBar';
import Typed  from 'typed.js'

const MhomePage = () => {

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
    }, []);
    
    return <div className='bg-secondary-dark-2 w-screen h-screen '>
        <NavBar />
        <div className='grid place-items-center gap-12 mt-8'>
            <img src='/prof1.jpg' alt='profile pic' className='rounded-full w-1/3 '/>
            
            
            <div className="text-center w-full font-Itim ">
                
                <div>
                    <h3 className="text-2xl mb-8 text-text-white">👋   <span className="text-3xl " ref={el}>Hola </span></h3>
                    <h4 className=" text-text-white">I am</h4>
                    <h1 className="text-4xl text-text-color-heading">Pradeep Taarkar</h1>
                    <small className="text-text-grey text-xs">Aspiring Web Developer and Cyber-Security Enthusiast</small>
                </div>
                <div className="w-48 h-48 bg-text-color-heading rounded-full fixed bottom-[-40px] right-[-70px] opacity-30"></div>
             </div>
        </div>
    </div>
} 

export default MhomePage;