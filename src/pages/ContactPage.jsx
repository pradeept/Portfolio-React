import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import SideBar from "../components/SideBar";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const ContactPage = () => {
  const { colors } = useTheme();

  return (
    <>
      <SideBar />
      <div className={`${colors.bg.primary} w-screen h-screen  font-Itim`}>
        <ThemeToggle classNames={"absolute right-4 top-4"} />
        <div className={`text-center mt-28 ${colors.text.textClr}`}>
          <h1 className='text-3xl'>Thank You! for stopping by..</h1>
          <div
            className={`m-auto w-1/2 ${colors.bg.secondary2} p-10 mt-4 rounded-2xl `}
          >
            <h1 className='text-start'>I am on</h1>
            <div className='flex flex-wrap gap-6 justify-center  py-4 shadow-inner-xl rounded-xl'>
              <a
                href='https://www.linkedin.com/in/pradeep-tarakar/'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillLinkedin size={48} color='#0077B5' />
              </a>
              <a
                href='https://www.github.com/pradeept'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillGithub size={48} />
              </a>
              <a
                href='https://twitter.com/pradeep_taarkar'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillTwitterCircle size={48} color='#1DA1F2' />
              </a>
            </div>
          </div>
          <div>
            <a
              href='https://www.linkedin.com/in/pradeep-tarakar/'
              target='_blank'
              rel='noreferrer'
            >
              <button
                className={` p-4 border-2 rounded-xl mt-6 ${colors.buttons.bg} ${colors.buttons.hover}`}
              >
                HIRE ME
              </button>
            </a>
          </div>
        </div>
        <div
          className={`w-80 h-80 ${colors.vector.circle} rounded-full fixed bottom-[-80px] right-[-70px] opacity-40`}
        ></div>
      </div>
    </>
  );
};

export default ContactPage;
