import React from 'react';

const AvailService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-error'>Try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions">
                    <label onClick={() => setTreatment(service)} for="booking-modal" className="btn btn-primary text-lg capitalize text-white font-bold" disabled={slots.length === 0}>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailService;