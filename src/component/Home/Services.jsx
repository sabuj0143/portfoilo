import img1 from '../../../public/services/design.png'
import img2 from '../../../public/services/developmentIcon.png'
import img3 from '../../../public/services/uiIcon.png'
const Services = () => {
    return (
        <div className="my-12">
            <div className="title text-center w-full mx-auto">
                <h2 data-aos="fade-right" className='text-3xl font-bold'>My Services</h2>
                <span className='relative -top-0 inline-block w-28 border-[3px] border-primary'></span>
                <p data-aos="fade-left" className="text-xl font-bold mb-8">Client satisfaction is my first priority</p>
            </div>
            <div className="service-container mt-4 grid md:grid-cols-3 gap-4">
                <div data-aos="fade-right"
                    className="card w-96 bg-base-100 hover:bg-[#0D6EDA] hover:text-white shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-semibold">Web Design</h2>
                        <span className='relative -top-0 inline-block w-20 border-[3px] border-primary'></span>
                        <p>I can make a fully responsive front end and static website like Portfolio, E-commerce & others.</p>
                    </div>
                </div>
                <div data-aos="fade-up"
                    className="card w-96 bg-base-100 hover:bg-[#0D6EDA] hover:text-white shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-semibold">Full Stack Development</h2>
                        <span className='relative -top-0 inline-block w-20 border-[3px] border-primary'></span>
                        <p>I can develop website with clean, fresh and issue free code to make your website dynamic perfectly..</p>
                    </div>
                </div>
                <div data-aos="fade-left"
                    className="card w-96 bg-base-100 hover:bg-[#0D6EDA] hover:text-white shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold text-2xl">UI/UX Design</h2>
                        <span className='relative -top-0 inline-block w-20 border-[3px] border-primary'></span>
                        <p>I can design creative UI for your app or website as per your demand and specification.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;