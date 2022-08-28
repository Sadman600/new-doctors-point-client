import React, { useEffect, useState } from 'react';
import DocInfo from './DocInfo';

const DocInfos = () => {
    // const [docInfos, setDocInfos] = useState();
    // useEffect(() => {
    //     fetch('docinfos.json')
    //         .then(res => res.json())
    //         .then(data => setDocInfos(data))
    // }, [])
    return (
        <div className="grid lg:grid-cols-3 gap-3 my-5 mx-10">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='flex flex-row justify-items-center items-center'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=88560" alt='' />
                            </div>
                        </div>
                        <div className='mx-3'>
                            <h2 className="card-title">Dr. Sanchita Kanti</h2>
                            <h3 className="text-md text-start">MBBS</h3>
                        </div>
                    </div>
                    <p className='text-start mt-3'>Doctors Point enlightens my superpower each and every time...!I find DocTime a brand-able telemedicine platform with virtual waiting room, video consultation, e-prescription, beautifully planned user interface.Thank you for giving me the opportunity to serve humanity! Wishing you all the best!!</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='flex flex-row justify-items-center items-center'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=47449" alt='' />
                            </div>
                        </div>
                        <div className='mx-3'>
                            <h2 className="card-title">Dr. Puja Majumder</h2>
                            <h3 className="text-md text-start">MBBS</h3>
                        </div>
                    </div>
                    <p className='text-start mt-3'>Telehealth is fueled by digital technologies and DocTime telemedicine app has brought a great revolution in medical services specially an overpopulated country like Bangladesh where virtual chamber can create at anywhere thoughout country.I'm very happy to be a part of DocTime. Best wishes.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='flex flex-row justify-items-center items-center'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                            </div>
                        </div>
                        <div className='mx-3'>
                            <h2 className="card-title">Dr. Jhon Doe </h2>
                            <h3 className="text-md text-start">MBBS</h3>
                        </div>
                    </div>
                    <p className='text-start mt-3'>DocTime, a telemedicine app, integrates secure health communications, virtual care workflows to build and grow any telehealth platform. Which can easily save money, time and sufferings of rural people of Bangladesh.</p>
                </div>
            </div>

        </div>
    );
};

export default DocInfos;