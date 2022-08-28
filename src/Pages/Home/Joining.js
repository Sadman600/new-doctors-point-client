import React from 'react';
import bg from '../../images/bg-2.jpg';
const Joining = () => {
    return (
        <div className="hero min-h-screen drop-shadow-2xl  " style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center ">
                <div className="px-24">
                    <h1 className="text-4xl font-bold text-primary my-5">Benefits of joining!</h1>
                    <p className="py-2 text-xl text-start">Doctors can join the platform using our simple on boarding process. We verify every doctor to make sure only BMDC authorised doctors are providing consultation using our latest technology.</p>
                    <p className="py-2 text-xl text-start">You will be at the forefront of digital healthcare innovations providing accessible patient care for all.</p>
                    <p className="py-2 text-xl text-start">You will be working independently, making autonomous medical decisions, and supported by our DocTime technical team who are here to assist both patient and yourself when you’re on session or outside sessions.</p>
                </div>
            </div>
        </div>
    );
};

export default Joining;