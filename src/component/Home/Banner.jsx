import { FaLinkedinIn, FaGithub, FaFacebook, FaFacebookMessenger } from 'react-icons/fa';
import bannerImg from '../../../public/banner/profile-img.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">HEY THERE!</h1>
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