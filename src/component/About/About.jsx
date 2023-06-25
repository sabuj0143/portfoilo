import img from '../../../public/banner/profile-img.jpg'

const About = () => {
    return (
        <div className="my-14">
            <div className="title text-center mx-auto">
                <h3 className="w-[20%] mx-auto monospace text-4xl">About Me</h3>
                <span className='relative -top-0 inline-block w-28 border-[3px] border-primary'></span>
            </div>
            <div>
                <div className="hero mt-5">
                    <div className="hero-content flex-col lg:flex-row">
                        <img style={{borderRadius: "300px 300px 0 300px"}} src={img} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='pl-8'>
                            <p className="py-6 space">Hi, I'm Sabuj Howlader, a full stack web developer. Web design & development is my passion. I love to explore new tech things.
                                I'm very passionate and dedicated to my work. I have expertise in Front-End and Back-End Web development too. I can design a website fully responsive & dynamic as per requirment. I enjoy every step of the design & development process from discussion and collaboration.
                                I have experience in React JS, Next JS, Node JS, MongoDB, Experess, Tailwind CSS, Material UI, Bootstrap etc.</p>
                            <div className=''>
                                <h3 className='text-[#0D6EDA]'><span className='text-black'>Email</span> : sabujhowlader011@gmail.com</h3>
                                <h3 className='text-[#0D6EDA]'><span className='text-black'>Address</span> : Narayanganj Sadar, Dhaka-Bangladesh</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;