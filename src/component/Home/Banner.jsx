import { FaLinkedinIn, FaGithub, FaFacebook, FaFacebookMessenger } from 'react-icons/fa';
import bannerImg from '../../../public/banner/profile-img.jpg'
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 md:min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h4 className="text-3xl font-bold">HEY THERE!</h4>
                        <h2 className='text-5xl font-bold py-4 text-[#0D6EDA]'>I'M Sabuj Howlader</h2>
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer",
                                2000,
                                "JavaScript Developer",
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
                            <button className="btn btn-primary btn-circle btn-outline">
                                <FaLinkedinIn />
                            </button>
                            <button className="btn btn-primary btn-circle btn-outline">
                                <FaGithub />
                            </button>
                            <button className="btn btn-primary btn-circle btn-outline">
                                <FaFacebook />
                            </button>
                            <button className="btn btn-primary btn-circle btn-outline">
                                <FaFacebookMessenger />
                            </button>
                        </div>

                        <div className='block mt-4'>
                            <button className="btn btn-primary">View Resume</button>
                            <button className="btn btn-primary ml-5">Hire Me</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;