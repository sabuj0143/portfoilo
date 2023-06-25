import { FaLinkedinIn, FaGithub, FaFacebook, FaFacebookMessenger } from 'react-icons/fa';
import bannerImg from '../../../public/banner/profile-img.jpg';
import { TypeAnimation } from 'react-type-animation';
const PDF_FILE_URL= '../../../public/resume/SabujHowladerResume01.pdf';

const downloadFileURL = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
}

const Banner = () => {
    return (
        <div className='w-full h-[100vh] mx-auto mb-4'>
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
                            {/* <a href={resume} download='Resume'> */}
                                <button onClick={() => downloadFileURL(PDF_FILE_URL)} className="btn btn-primary">View Resume</button>
                            {/* </a> */}
                            <button className="btn btn-primary ml-5">Hire Me</button>

                        </div>
                    </div>
                    <div className="img-div md:w-1/2">
                        <img style={{ borderRadius: "0 300px 300px 300px" }} src={bannerImg} className="rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;