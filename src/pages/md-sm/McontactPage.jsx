import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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
          className={`text-center ${colors.text.textClr} flex-row justify-center mt-20`}
        >
         
          <h1 className={`text-4xl pt-14 ${colors.text.heading}`}>
            Thank You!{" "}
          </h1>
          <h3>for stopping by..</h3>

          <div
            className={`m-auto w-2/3 ${colors.bg.secondary2} p-10 mt-4 rounded-2xl `}
          >
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
                href='https://www.hackerrank.com/profile/pradeep_tarakar'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/icons/hackerrank.png'
                  alt='hacker rank png'
                  title='hackerrank'
                  width={50}
                />
              </a>
              <a
                href='https://leetcode.com/u/Pradeept17/'
                className='cursor-pointer '
                target='_blank'
                rel='noreferrer'
              >
                <img src='/icons/leetcode.png' alt='css' title='LeetCode' />
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
