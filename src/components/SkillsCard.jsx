import { useTheme } from "../context/ThemeContext";


const SkillsCard = ({classNames}) => {

    const { colors } = useTheme();

    return <>
        
        <div className={`flex-col ${classNames} `}>
            <div className={`flex-row p-10 m-20 rounded-[2rem] space-y-8 ${colors.bg.secondary2} ${colors.boxShadow.card}`}>
                <p className={`${colors.text.textClr} text-xl `}>Languages and Frameworks</p>
                <div className="flex flex-wrap gap-10  justify-between">
                    <img src="/icons/html.png" alt="html"  />
                    <img src="/icons/css3.png" alt="css" />
                    <img src="/icons/javascript.png" alt="js" />
                    <img src="/icons/react.png" alt="react" />
                    <img src="/icons/node.png" alt="node" />
                    <img src="/icons/jquery.png" alt="jquery" />
                    <img src="/icons/bootstrap.png" alt="bootstrap" />
                    <img src="/icons/tailwind.png" alt="tailwind" />
                    <img src="/icons/python.png" alt="python" className="" />
                    <img src="/icons/java.png" alt="java"/>
                </div>
            </div>
            <div className={`flex-row p-10 m-20 rounded-[2rem] space-y-8 ${colors.bg.secondary2} ${colors.boxShadow.card}`}>
                <p className={`${colors.text.textClr} text-xl `}>Databases and Tools</p>
                <div className={`flex flex-wrap gap-10 ${classNames}`}>
                    <img src="/icons/mysql.png" alt="mysql" />
                    <img src="/icons/mongodb.png" alt="mongo" />
                    <img src="/icons/androidStudio.png" alt="androidStudio" />
                    <img src="/icons/figma.png" alt="figma" />
                    <img src="/icons/photoshop.png" alt="photoshop" />

                </div>
            </div>
            <div className={`flex-row p-10 m-20 rounded-[2rem] space-y-8 ${colors.bg.secondary2} ${colors.boxShadow.card}`}>
                <p className={`${colors.text.textClr} text-xl `}>Other</p>
                <div className={`flex flex-wrap gap-10 ${classNames}`}>
                    <img src="/icons/linux.png" alt="linux" />
                    <img src="/icons/git.png" alt="git" />
                    <img src="/icons/bash.png" alt="bash" />
                    
                </div>
            </div>

        </div>
    </>
}

export default SkillsCard;