import SideBar from "../components/SideBar";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const HomePage = () => {
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
    <>
      <SideBar />
      <div
        className={`text-center w-full ${colors.bg.primary}  h-screen  grid grid-row justify-center items-center font-Itim`}
      >
        <div>
          <ThemeToggle classNames='absolute right-4 top-4' />
          <h3 className={`text-3xl mb-8 ${colors.text.textClr}`}>
            👋{" "}
            <span className='text-5xl ' ref={el}>
              Hola{" "}
            </span>
          </h3>
          <h2 className={`text-start ${colors.text.textClr}`}>I am</h2>
          <h1 className={`text-6xl ${colors.text.heading}`}>Pradeep Tarakar</h1>
          <small className={`${colors.text.textClrLight} text-lg`}>
            Aspiring Fullstack Developer with DevOps skills.
          </small>
          <div className='flex items-center justify-center gap-6 p-6 '>
            <a
              href='https://www.hackerrank.com/profile/pradeep_tarakar'
              className='cursor-pointer max-w-10 drop-shadow-lg '
              target='_blank'
              rel='noreferrer'
            >
              <img src='/icons/hackerrank.png' alt='css' title='Hackerrank' />
            </a>
            <a
              href='https://leetcode.com/u/Pradeept17/'
              className='cursor-pointer max-w-10 drop-shadow-lg'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/icons/leetcode.png' alt='css' title='LeetCode' />
            </a>
          </div>
        </div>
        <div
          className={`w-80 h-80 ${colors.vector.circle} rounded-full fixed bottom-[-40px] right-[-70px] opacity-40`}
        ></div>
      </div>
    </>
  );
};

export default HomePage;
