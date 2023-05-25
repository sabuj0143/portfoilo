import img1 from '../../../public/services/design.png'
import img2 from '../../../public/services/developmentIcon.png'
import img3 from '../../../public/services/uiIcon.png'
const Services = () => {
    return (
        <div className="my-12">
            <div className="title text-center mx-auto">
                <button className="text-3xl font-bold btn btn-outline btn-primary border-0 border-b-4">My Services</button>
                <p className="text-xl font-bold mt-6">Client satisfaction is my first priority</p>
            </div>
            <div className="service-container mt-4 grid md:grid-cols-3 gap-4">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title border-0 border-b-2 border-primary">Web Design</h2>
                        <p>I can make a fully responsive front end and static website like Portfolio, E-commerce & others.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title border-0 border-b-2 border-primary">Full Stack Development</h2>
                        <p>I can develop website with clean, fresh and issue free code to make your website dynamic perfectly..</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title border-0 border-b-2 border-primary">UI/UX Design</h2>
                        <p>I can design creative UI for your app or website as per your demand and specification.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;