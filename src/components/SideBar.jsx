import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const SideBar = () => {
  const { colors } = useTheme();

  const { pathname } = useLocation();

  return (
    <div
      className={` min-h-screen w-80 ${colors.bg.secondary} ${colors.text.textClr} flex flex-wrap place-content-center `}
    >
      <div className='fixed flex-row '>
        <div className='flex-col items-center justify-center text-center p-10'>
          <img
            src='/image.png'
            alt=''
            className='rounded-full w-36  border-4 border-text-grey'
          />
        </div>

        <div
          className={`p-3 h-2/3 ${colors.bg.secondary2} m-2 text-center rounded-2xl grid grid-row-4 gap-4 items-center font-Baumans text-lg`}
        >
          <NavLink
            className={`p-4 ${
              pathname === "/" ? colors.bg.menuBtnActive : colors.bg.menuBtn
            } rounded-xl`}
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className={`p-4 ${
              pathname === "/skills"
                ? colors.bg.menuBtnActive
                : colors.bg.menuBtn
            }  rounded-xl`}
            to='/skills'
          >
            Skills
          </NavLink>
          <NavLink
            className={`p-4 ${
              pathname === "/projects"
                ? colors.bg.menuBtnActive
                : colors.bg.menuBtn
            }  rounded-xl`}
            to='/projects'
          >
            Projects
          </NavLink>
          <NavLink
            className={`p-4  ${
              pathname === "/contact"
                ? colors.bg.menuBtnActive
                : colors.bg.menuBtn
            }  rounded-xl`}
            to='/contact'
          >
            Contact
          </NavLink>

          <div>
            <footer className={`${colors.text.textClrLight}`}>
              &#169; Pradeep Taarkar
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
