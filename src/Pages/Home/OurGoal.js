import React from 'react';

const OurGoal = ({ goal }) => {
    const { goalName, goalDis, image } = goal;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt='' />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{goalName}</h2>
                <p>{goalDis}</p>
            </div>
        </div>
    );
};

export default OurGoal;