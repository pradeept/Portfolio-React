import { useTheme } from "../context/ThemeContext";

export default function Experience(){
  const { colors } = useTheme();

    return <>
        <div
          className={`flex-row p-10 m-20 rounded-[2rem] space-y-8 ${colors.bg.secondary2} ${colors.boxShadow.card}`}
        >
            <h3 className={`${colors.text.textClr} text-2xl`}>Experience</h3>
            <ul >
                <li className={`${colors.text.textClr} font-semi-bold text-lg list-disc p-3`} > DevOps Engineer | <small> Sirpi Products & Services </small>| <small className="font-Baumans">(Mar 2024 - Dec 2024)</small></li>
                <li className={`${colors.text.textClr} font-semi-bold text-lg list-disc p-3`}> React.js Development Intern | <small> Sirpi Products & Services </small>| <small className="font-Baumans">(Sep 2023 - Feb 2024)</small></li>
            </ul>
        </div>
    </>
}