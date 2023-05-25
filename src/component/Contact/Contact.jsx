import { FaTelegramPlane } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className='my-16'>
            <div className="title text-center mx-auto">
                <h3 className="w-[20%] mx-auto lilita text-4xl border-0 border-b-2 border-primary">Contact Me</h3>
            </div>
            <div>
                <div className='w-full mx-auto my-5'>
                    <div className="card-body w-[80%] mx-auto border rounded-lg">
                        <form>
                            <div className='md:grid grid-cols-2 gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="text" placeholder="Mobile Number" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className='md:grid grid-cols-2 gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="email" placeholder="Email Address" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="text" placeholder="subject" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <textarea type="textarea" name='description'  placeholder='Description...' className="input input-bordered h-[150px] py-4" required />
                            </div>
                        </form>
                        <div className="md:w-[30%] mt-4">
                            <button className="btn btn-outline btn-primary rounded-2xl"> <FaTelegramPlane className='mr-2' /> SENT YOUR MESSAGE</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;