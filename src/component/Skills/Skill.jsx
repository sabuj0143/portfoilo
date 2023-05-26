import img1 from "../../../public/skills/NextJS.png"
import img2 from "../../../public/skills/React.png"
import img3 from "../../../public/skills/JavaScript.png"
import img4 from "../../../public/skills/TypeScript.png"
import img5 from "../../../public/skills/TailwindCSS.png"
import img6 from "../../../public/skills/Bootstrap.jpg"
import img7 from "../../../public/skills/NodeJS.jpg"
import img8 from "../../../public/skills/ExpressJS.png"
import img9 from "../../../public/skills/MongoDB.jpg"
import img10 from "../../../public/skills/Firebase.jpg"
import img11 from "../../../public/skills/VSCode.png"
import img12 from "../../../public/skills/DevTools.jpg"
import img13 from "../../../public/skills/Git.png"
import img14 from "../../../public/skills/GitHub.png"
import img15 from "../../../public/skills/Netlify.png"

const Skill = () => {
    return (
        <div>
            <div className="title text-center w-full mx-auto my-10">
                <h3 className="w-[20%] mx-auto lilita text-4xl border-0 border-b-2 border-primary">My Skills</h3>
            </div>
            <div className="skill-container gap-4 md:flex">
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="text-center">
                        <h3 className="border p-2 mt-2">Front End Technologies</h3>
                    </div>
                    <div className="space-x-4 p-4 ml-3 flex">
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img1} alt="" />
                            <p className="pt-2">Next.js</p>
                        </div>
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img2} alt="" />
                            <p className="pt-2">React</p>
                        </div>
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img3} alt="" />
                            <p className="pt-2">JavaScript</p>
                        </div>
                    </div>
                    <div className="space-x-4 p-4 ml-3 flex">
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img4} alt="" />
                            <p className="pt-2">TypeScript</p>
                        </div>
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img5} alt="" />
                            <p className="pt-2">Tailwind CSS</p>
                        </div>
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img6} alt="" />
                            <p className="pt-2">Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="text-center">
                        <h3 className="border p-2 mt-2">Back End Technologies</h3>
                    </div>
                    <div className="space-x-4 p-4 ml-3 flex">
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img7} alt="" />
                            <p className="pt-2">Node.JS</p>
                        </div>
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img8} alt="" />
                            <p className="pt-2">ExpressJS</p>
                        </div>
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img9} alt="" />
                            <p className="pt-2">MongoDB</p>
                        </div>
                    </div>
                    <div className="space-x-4 p-4 ml-3 flex">
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img1} alt="" />
                            <p className="pt-2">NextJS</p>
                        </div>
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img10} alt="" />
                            <p className="pt-2">Firebase</p>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="text-center">
                        <h3 className="border p-2 mt-2">Tools</h3>
                    </div>
                    <div className="space-x-4 p-4 ml-3 flex">
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img11} alt="" />
                            <p className="pt-2">VS Code</p>
                        </div>
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img12} alt="" />
                            <p className="pt-2">Dev Tools</p>
                        </div>
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img13} alt="" />
                            <p className="pt-2">Git</p>
                        </div>
                    </div>
                    <div className="space-x-4 p-4 ml-3 flex">
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img14} alt="" />
                            <p className="pt-2">GitHub</p>
                        </div>
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img15} alt="" />
                            <p className="pt-2">Netlify</p>
                        </div>
                        <div className="bg-base-100 shadow-xl w-[30%] px-8 py-4 my-4">
                            <img className="w-[50px] h-[50px] rounded-xl" src={img10} alt="" />
                            <p className="pt-2">Firebase</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;