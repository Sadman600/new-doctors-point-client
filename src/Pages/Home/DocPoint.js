import React from 'react';
import docpoint from '../../images/doc-point.jpg';
import bg from '../../images/bg.png';
const DocPoint = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={docpoint} className="lg:max-w-2xl rounded-lg lg:h-screen" alt='' />
                    <div className='text-start' style={{ backgroundImage: `url(${bg})` }}>
                        <h1 className="text-5xl font-bold text-primary">Why use Doctors Point?</h1>

                        <ul className="steps steps-vertical pt-10">
                            <li className="step step-success py-4">
                                <p className='text-2xl text-start'>
                                    Access hundreds of certified and trusted doctors and
                                    specialists at anytime from anywhere.
                                </p>
                            </li>
                            <li className="step step-success ">
                                <p className='text-2xl text-start'>
                                    Improve your and loved ones' health and
                                    wellbeing, without having to queue or travel.
                                </p>
                            </li>
                            <li className="step step-success ">
                                <p className='text-2xl text-start'>
                                    Access your past consultations and prescriptions
                                    at any time, and even get your medicine
                                    delivered.
                                </p>
                            </li>
                            <li className="step step-success ">
                                <p className='text-2xl text-start'>
                                    Doctors point experienced doctors, specialists and therapists are selected carefully. .
                                </p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocPoint;