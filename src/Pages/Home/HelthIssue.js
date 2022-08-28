import React from 'react';
import bg from '../../images/bg-3.jpg';
import banner from '../../images/health-issue.jpg';
const HelthIssue = () => {
    return (

        <div className="hero min-h-screen p-5" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="lg:max-w-3xl rounded-lg lg:max-h-full" alt='' />
                <div className='text-start'>
                    <h1 className="text-4xl font-bold text-primary">When to use Doctor Point?</h1>

                    <h2 className="text-2xl font-bold mt-3">Common health issue</h2>
                    <p className="py-2 text-xl">Ask anything you would normally ask your GP. You can have an instant video with one of our GPs via a digital consultation from anywhere, at any time of day.</p>

                    <h2 className="text-2xl font-bold mt-3">Specialist advice</h2>
                    <p className="py-2 text-xl">Sometimes it’s helpful to see a specialist when you want. And get educational advice, pre- screening, monitoring and follow-ups. For maternal and infant health care, chronic diseases such as diabetes, or other conditions, Doctors Point can help you to connect with the right specialist doctor and to stay healthy. More than 20 different specialities are available on Doctors point.</p>

                    <h2 className="text-2xl font-bold mt-3">Mental health and wellbeing</h2>
                    <p className="py-2 text-xl">In a fast paced world, it is important to monitor and protect your mental health and wellbeing. Doctors can help you stay healthy whether you have symptoms at home or in your workplace of stress, smoking, anxiety, bereavement or depression.</p>


                </div>
            </div>
        </div>

    );
};

export default HelthIssue;