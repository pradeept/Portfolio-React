import { useEffect, useRef } from "react";
import NavBar from "../../components/NavBar";
import Typed from "typed.js";
import { useTheme } from "../../context/ThemeContext";

const MhomePage = () => {
  const el = useRef(null);

  const { colors } = useTheme();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello!", "नमस्ते", "ನಮಸ್ಕಾರ", "¡Hola!", "Bonjour!"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      cursorChar: "_",
    });

    //cleanup function
    return () => typed.destroy();
  }, []);

  return (
    <div className={`${colors.bg.secondary2} w-screen h-screen`}>
      <NavBar />

      <div className='grid place-items-center gap-2 mt-20'>
        <img
          src='/image.png'
          alt='profile pic'
          className='rounded-full w-1/3 '
        />

        <div className='text-center font-Itim mt-10 '>
          <div>
            <h3 className={`text-2xl mb-8 ${colors.text.textClr}`}>
              👋{" "}
              <span className='text-3xl ' ref={el}>
                Hola{" "}
              </span>
            </h3>
            <h4 className={`${colors.text.textClr} text-start`}>I am</h4>
            <h1 className={`${colors.text.heading} text-4xl`}>
              Pradeep Tarakar
            </h1>
            <small className={`${colors.text.textClrLight} text-xs`}>
            Aspiring Fullstack Developer with DevOps skills.
            </small>
          </div>
          <div
            className={`${colors.vector.circle} w-48 h-48 rounded-full fixed bottom-[-40px] right-[-70px] opacity-30`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MhomePage;
