import OrbitingCircles from "./magicui/orbiting-circles";
import myPhot from '../assets/myPhoto.png'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";

import javaLogo from "../assets/java.svg";
export function OrbitingCirclesHome() {
    return (
        <div className="relative flex h-96 w-96 max-w-[32rem] items-center justify-center overflow-hidden   bg-white rounded-full">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                {/* Circles */}
                <img src={myPhot} alt='' className="rounded-full  h-36 w-auto" />
            </span>

            {/* Inner Circles */}
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={25}
                radius={80}
            >
                <TbBrandJavascript className="text-4xl text-amber-400" />
            </OrbitingCircles>

            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={80}
            >
                <FaCss3Alt className="text-3xl text-blue-700" />
            </OrbitingCircles>

            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={15}
                radius={80}
            >
                <SiTypescript className="text-2xl text-blue-700" />
            </OrbitingCircles>

            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={80}
            >
                {/* <Icons.notion /> */}
                <FaHtml5 className="text-3xl text-orange-500" />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                reverse
                radius={160}
                duration={20}
            >
                <FaReact className="text-9xl text-sky-700" />
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                reverse
                radius={160}
                duration={20}
                delay={25}
            >
                <BiLogoMongodb className="text-9xl text-green-500" />
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                reverse
                radius={160}
                duration={20}
                delay={20}
            >
                <FaNodeJs className="text-5xl text-emerald-700" />
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                reverse
                radius={160}
                duration={20}
                delay={15}
            >
                {/* <FaJava className="text-9xl text-green-500" /> */}
                <img src={javaLogo} alt='' />
            </OrbitingCircles>
        </div>
    );
}

