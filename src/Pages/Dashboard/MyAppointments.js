import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import { useQuery } from 'react-query';
// import Loading from '../Shared/Loading';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://fathomless-wave-72199.herokuapp.com/booking?patientEmail=${user?.email}`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          navigate('/');
          signOut(auth);
          localStorage.removeItem('accessToken');
        }
        return res.json();
      })
      .then((data) => setAppointments(data));
  }, [navigate, user]);
  //     const { isLoading,data } = useQuery(['booking', user], () =>
  //      fetch(`https://fathomless-wave-72199.herokuapp.com/booking?patientEmail =${user?.email}`).then(res =>
  //        res.json()
  //      )
  //    )
  //     if (isLoading) {
  //         return <Loading></Loading>
  //     }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              appointments.map((appointment, index) => <tr key={index}>
                <th>{index + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.treatmentName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.patientEmail}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;