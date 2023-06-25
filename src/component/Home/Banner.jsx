import { FaLinkedinIn, FaGithub, FaFacebook, FaFacebookMessenger } from 'react-icons/fa';
import bannerImg from '../../../public/banner/profile-img.jpg'
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {
    return (
        <div className='w-full h-[100vh]'>
            <div className="hero md:min-h-screen md:w-full h-[80vh]">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className='md:w-1/2'>
                        <h4 className="text-3xl font-bold">HEY THERE!</h4>
                        <h2 className='text-5xl font-bold py-4 text-[#0D6EDA]'>I'M Sabuj Howlader</h2>
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer",
                                2000,
                                "JavaScript Developer",
                                2000,
                                "Mern Stack Developer",
                                2000,
                                "ReactJs Developer",
                                2000,
                            ]}
                            speed={50}
                            className="text-black"
                            wrapper="span"
                            repeat={Infinity}></TypeAnimation>

                        <p className="py-6">Web design & development is my passion.  I can design & develop website as per requirment.</p>

                        <div className='space-x-3'>
                            <a href="https://www.linkedin.com/in/sabuj-howladar-16b467247/">
                                <button className="btn btn-primary btn-circle btn-outline">
                                    <FaLinkedinIn />
                                </button>
                            </a>
                            <a href="https://github.com/sabuj0143">
                                <button className="btn btn-primary btn-circle btn-outline">
                                    <FaGithub />
                                </button>
                            </a>
                            <a href="https://www.facebook.com/sabujhowlader0143">
                                <button className="btn btn-primary btn-circle btn-outline">
                                    <FaFacebook />
                                </button>
                            </a>
                            <button className="btn btn-primary btn-circle btn-outline">
                                <FaFacebookMessenger />
                            </button>
                        </div>

                        <div className='block mt-4'>
                            <button className="btn btn-primary">View Resume</button>
                            <button className="btn btn-primary ml-5">Hire Me</button>

                        </div>
                    </div>
                    <div className="img-div md:w-1/2">
                        <img style={{borderRadius: "0 200px 200px 200px"}} src={bannerImg} className="rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;