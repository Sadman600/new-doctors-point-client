import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots, } = treatment;
    const [user] = useAuthState(auth);
    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatmentName: name,
            date: e.target.date.value,
            slot,
            patientName: user.displayName,
            patientEmail: user.email,
            phone: e.target.phone.value
        };
        fetch('https://fathomless-wave-72199.herokuapp.com/booking', {
            method: 'POST',
            body: JSON.stringify(booking),
            headers: {
                'Content-type': 'application/json',
            },
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Appointment is set, ${date} at ${slot} `);
                } else {
                    toast.error(`Alreadyn have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`);
                }
                refetch();
                setTreatment(null);
            });
    }
    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>
                        <input type="text" name='date' disabled readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs my-1" />
                        <select name='slot' className="select select-bordered w-full max-w-xs mt-1">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs my-1" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs my-1" />
                        <input type="text" name='phone' placeholder="Your phone number" className="input input-bordered w-full max-w-xs my-1" />

                        <input type="submit" className="btn btn-primary w-full max-w-xs " />
                    </form>
                </div>
            </div>


        </div >
    );
};

export default BookingModal;