import React from 'react';
import banner from '../../images/banner.jpg';
import bg from '../../images/footer.png';
const Banner = () => {
    return (

        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="lg:max-w-3xl rounded-lg lg:max-h-full" alt='' />
                <div className='text-start'>
                    <h1 className="text-5xl font-bold text-primary">Instant video consultation
                        from the best Doctors!</h1>
                    <p className="py-6 text-xl">Do you need Doctors Point Dhaka Doctors list, contact number, with location to make an appointment? Well, we have done the homework for you. Here, we have listed all the specialized doctors’ names, departments, contact info, and addresses of this hospital.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;