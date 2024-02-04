import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import NavBar from "../../components/NavBar";
import { useTheme } from "../../context/ThemeContext";

const McontactPage = () => {
  const { colors } = useTheme();

  return (
    <>
      <div
        className={`${colors.bg.secondary} w-screen h-screen overflow-y-scroll pb-10 font-Itim `}
      >
        <NavBar />
        <div
          className={`text-center ${colors.text.textClr} flex-row justify-center `}
        >
          <div className={`flex justify-center pt-20 `}>
            <img
              src='/prof1.jpg'
              alt='profile pic'
              className='rounded-full w-1/3 border-4 border-text-grey  '
            />
          </div>
          <h1 className={`text-3xl pt-10 ${colors.text.heading}`}>
            Thank You!{" "}
          </h1>
          <h3>for stopping by..</h3>

          <div
            className={`m-auto w-2/3 ${colors.bg.secondary2} p-10 mt-4 rounded-2xl `}
          >
            <h1 className='text-start'>I am on</h1>
            <div className='flex flex-wrap gap-3 justify-center  py-4 shadow-inner-xl rounded-xl'>
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
          <a
            href='https://www.linkedin.com/in/pradeep-tarakar/'
            target='_blank'
            rel='noreferrer'
          >
            <button
              className={`p-4 border-2 rounded-xl mt-6 ${colors.buttons.bg} ${colors.buttons.hover}`}
            >
              HIRE ME
            </button>
          </a>
        </div>
        <div
          className={`${colors.vector.circle} w-48 h-48 rounded-full fixed bottom-[-40px] right-[-70px] opacity-30`}
        ></div>
      </div>
    </>
  );
};

export default McontactPage;
