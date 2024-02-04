import { useTheme } from "../context/ThemeContext";

const SkillsCard = ({ classNames }) => {
  const { colors, darkTheme } = useTheme();

  return (
    <>
      <div className={`flex-col ${classNames} `}>
        <div
          className={`flex-row p-10 m-20 rounded-[2rem] space-y-8 ${colors.bg.secondary2} ${colors.boxShadow.card}`}
        >
          <p className={`${colors.text.textClr} text-xl `}>
            Languages and Frameworks
          </p>
          <div className='flex flex-wrap gap-10'>
            <img src='/icons/html.png' alt='html' title="HTML5"/>
            {/* <img
              src={`https://skillicons.dev/icons?i=html,css,js,react,redux,tailwind,nodejs,express,jquery,python,java&theme=${
                darkTheme ? "dark" : "light"
              }&perline=3`}
              alt='skill icons'
            /> */}
            <img src='/icons/css3.png' alt='css' title="CSS3" />
            <img src='/icons/javascript.png' alt='js' title="Javascript"/>
            <img src='/icons/react.png' alt='react' title="React JS"/>
            <img src='/icons/redux.png' alt='redux' title="Redux Toolkit"/>
            <img src='/icons/tailwind.png' alt='tailwind' title="Tailwind CSS"/>
            <img src='/icons/node.png' alt='node js' title="Node JS" />
            {darkTheme ? (
              <img src='/icons/express_light.png' alt='express' title="Express JS"/>
            ) : (
              <img src='/icons/express_dark.png' alt='express' title="Express JS"/>
            )}
            <img src='/icons/jquery.png' alt='jquery' title="JQuery"/>
            <img src='/icons/python.png' alt='python' title="Python"/>
            <img src='/icons/java.png' alt='java' title="Java Core"/>
          </div>
        </div>
        <div
          className={`flex-row p-10 m-20 rounded-[2rem] space-y-8 ${colors.bg.secondary2} ${colors.boxShadow.card}`}
        >
          <p className={`${colors.text.textClr} text-xl `}>
            Databases and Tools
          </p>
          <div className={`flex flex-wrap gap-10 ${classNames}`}>
            <img src='/icons/mongodb.png' alt='mongodb' title="Mongo DB"/>
            <img src='/icons/mysql.png' alt='mysql' title="MySQL"/>
            <img src='/icons/androidStudio.png' alt='androidStudio' title="Android Studio" />
            <img src='/icons/figma.png' alt='figma' title="Figma"/>
            <img src='/icons/photoshop.png' alt='photoshop' title="Photoshop"/>
          </div>
        </div>
        <div
          className={`flex-row p-10 m-20 rounded-[2rem] space-y-8 ${colors.bg.secondary2} ${colors.boxShadow.card}`}
        >
          <p className={`${colors.text.textClr} text-xl `}>OS & DevOps tools</p>
          <div className={`flex flex-wrap gap-10 ${classNames}`}>
            <img src='/icons/linux.png' alt='linux' title="Debian & Arch"/>
            <img src='/icons/git.png' alt='git' title="Git"/>
            <img src='/icons/bash.png' alt='bash' title="Shell"/>
            <img src='/icons/aws.png' alt='aws' title="AWS"/>
            <img src="/icons/docker.png" alt="docker" title="Docker"/>
            <img src="/icons/kubernetes.png" alt="k8s logo" title="Kubernetes"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsCard;
