
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import appointmentBanner from '../../images/appointment-2.jpg';
import bg from '../../images/bg.png';
const AppointmentBanner = ({ date, setDate }) => {

    return (

        <div className="" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={appointmentBanner} className="lg:max-w-3xl rounded-lg " alt='' />
                <div>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>

        </div>

    );
};

export default AppointmentBanner;