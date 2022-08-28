import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AvailService from './AvailService';
import BookingModal from './BookingModal';

const AppointmentAvailable = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP');
    const { isLoading, data: services, refetch } = useQuery(['available', formatedDate], () => fetch(`https://fathomless-wave-72199.herokuapp.com/available?date=${formatedDate}`)
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-lg'>You are Available On: {format(date, 'PP')} </h1>
            <div className='grid lg:grid-cols-3 gap-5 mx-20'>
                {
                    services?.map(service => <AvailService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AvailService>)
                }
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    date={date}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AppointmentAvailable;