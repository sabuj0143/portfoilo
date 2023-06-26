import bannerImg from '../../../public/banner/profile-img.jpg';



const Projects = () => {
    return (
        <div className='my-4 md:my-12'>
            <div className="text-center">
                <h1 className='text-4xl font-bold'>All Projects</h1>
                <span className='relative -top-0 inline-block w-28 border-[3px] border-primary'></span>
            </div>
            <div className="w-[100%] mx-auto p-6 gap-4 md:grid grid-cols-3">
                <div className="card w-96 h-[65vh] bg-base-200 shadow-xl rounded-xl">
                    <figure><img className='w-full h-[40vh] p-4 rounded-xl' src={"https://i.ibb.co/6tbgqMr/academy.png"} alt="Shoes" /></figure>
                    <div className="m-5">
                        <div className="card-actions justify-center">
                            <div className="badge badge-secondary">React</div>
                            <div className="badge badge-primary">JavaScript</div>
                            <div className="badge badge-warning">JQuery</div>
                            <div className="badge badge-info">Express</div>
                            <div className="badge badge-accent">Firebase</div>
                            <div className="badge badge-error">MongoDb</div>
                        </div>
                        <div className='text-center'>
                            <h3 className='mt-4 text-2xl font-bold'>Food Academy</h3>
                            <p>A fully responsive Academy Classes provider</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[65vh] bg-base-200 shadow-xl rounded-xl">
                    <figure><img className='w-full h-[40vh] p-4 rounded-xl' src={"https://i.ibb.co/dgwMTNs/bistro-Boss.png"} alt="Shoes" /></figure>
                    <div className="m-5">
                        <div className="card-actions justify-center">
                            <div className="badge badge-secondary">React</div>
                            <div className="badge badge-accent">React Route</div>
                            <div className="badge badge-primary">JavaScript</div>
                            <div className="badge badge-info">Express</div>
                            <div className="badge badge-primary">MongoDb</div>
                            <div className="badge badge-secondary">Firebase</div>
                        </div>
                        <div className='text-center'>
                            <h3 className='mt-4 text-2xl font-bold'>Bistro Boss</h3>
                            <p>A Home responsive E-Commerce provider</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[65vh] bg-base-200 shadow-xl rounded-xl">
                    <figure><img className='w-full h-[40vh] p-4 rounded-xl' src={"https://i.ibb.co/X5rQ4dv/teddy.png"} alt="Shoes" /></figure>
                    <div className="m-5">
                        <div className="card-actions justify-center">
                            <div className="badge badge-secondary">React</div>
                            <div className="badge badge-accent">React Route</div>
                            <div className="badge badge-primary">JavaScript</div>
                            <div className="badge badge-info">Express</div>
                            <div className="badge badge-primary">MongoDb</div>
                        </div>
                        <div className='text-center'>
                            <h3 className='mt-4 text-2xl font-bold'>Teddy Bear</h3>
                            <p>A Fully responsive E-Commerce provider</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;