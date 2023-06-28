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
        <div className="my-16">
            <div className="title text-center w-full mx-auto my-10">
                <h3 className="w-[20%] mx-auto  text-4xl font-bold">My Skills</h3>
                <span className='relative -top-0 inline-block w-20 border-[3px] border-primary'></span>
            </div>
            <div className="skill-container md:w-full mx-auto gap-4 md:grid grid-cols-3">
                <div className="card bg-base-100 shadow-xl">
                    <div className="text-center">
                        <h3 className="border p-2 mt-2">Front End Technologies</h3>
                    </div>
                    <div className="gap-x-4 p-4 ml-3 text-center items-center grid grid-cols-3">
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img1} alt="" />
                            <p className="pt-2 text-sm">Next.js</p>
                        </div>
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img2} alt="" />
                            <p className="pt-2 text-sm">React</p>
                        </div>
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img3} alt="" />
                            <p className="pt-2 text-sm">JavaScript</p>
                        </div>
                    </div>
                    <div className="gap-x-4 p-4 ml-3 text-center items-center grid grid-cols-3">
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img4} alt="" />
                            <p className="pt-2 text-sm">TypeScript</p>
                        </div>
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img5} alt="" />
                            <p className="pt-2 text-sm">Tailwind CSS</p>
                        </div>
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square  rounded-xl" src={img6} alt="" />
                            <p className="pt-2 text-sm">Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="text-center">
                        <h3 className="border p-2 mt-2">Back End Technologies</h3>
                    </div>
                    <div className="gap-x-4 p-4 ml-3 text-center items-center grid grid-cols-3">
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img7} alt="" />
                            <p className="pt-2 text-sm">Node.JS</p>
                        </div>
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img8} alt="" />
                            <p className="pt-2 text-sm">ExpressJS</p>
                        </div>
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img9} alt="" />
                            <p className="pt-2 text-sm">MongoDB</p>
                        </div>
                    </div>
                    <div className="gap-x-4 p-4 ml-3 text-center items-center grid grid-cols-3">
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img1} alt="" />
                            <p className="pt-2 text-sm">NextJS</p>
                        </div>
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img10} alt="" />
                            <p className="pt-2 text-sm">Firebase</p>
                        </div>
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img8} alt="" />
                            <p className="pt-2 text-sm">ExpressJS</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="text-center">
                        <h3 className="border p-2 mt-2">Tools</h3>
                    </div>
                    <div className="gap-x-4 p-4 ml-3 text-center items-center grid grid-cols-3">
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img11} alt="" />
                            <p className="pt-2 text-sm">VSCode</p>
                        </div>
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img12} alt="" />
                            <p className="pt-2 text-sm">DevTools</p>
                        </div>
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img13} alt="" />
                            <p className="pt-2 text-sm">Git</p>
                        </div>
                    </div>
                    <div className="gap-x-4 p-4 ml-3 text-center items-center grid grid-cols-3">
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img14} alt="" />
                            <p className="pt-2 text-sm">GitHub</p>
                        </div>
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img15} alt="" />
                            <p className="pt-2 text-sm">Netlify</p>
                        </div>
                        <div className="bg-base-100 shadow-xl p-2 my-2">
                            <img className="w-[80%] aspect-square rounded-xl" src={img10} alt="" />
                            <p className="pt-2 text-sm">Firebase</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;