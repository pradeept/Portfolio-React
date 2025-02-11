import { useTheme } from "../context/ThemeContext";

const ProjectCards = ({ data, classNames }) => {
  const { colors } = useTheme();
  return (
    <>
      <div
        className={`${colors.bg.secondary2} flex-row cursor-pointer rounded-3xl pt-4 ${classNames} hover:border-b-4 hover:${colors.border.btnBorder}`}
        onClick={()=>window.open(data.href,"_blank")}
      >
        <div>
          <img
            src={data.src}
            alt='profile'
            className='m-auto w-3/4 rounded-xl'
          ></img>
        </div>
        <div
          className={`${colors.text.textClr} ${colors.bg.secondary} px-10 py-4 rounded-lg`}
        >
          <h2 className='text-2xl font-medium'>{data.title}</h2>
          <p className='font-light'>{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
