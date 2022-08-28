import React, { useEffect, useState } from 'react';
import OurGoal from './OurGoal';

const OurGoals = () => {
    const [goals, setGoals] = useState([]);
    useEffect(() => {
        fetch('goals.json')
            .then(res => res.json())
            .then(data => setGoals(data))
    }, [])
    return (
        <div className='mx-20 mt-10'>
            <div className="grid lg:grid-cols-3 gap-3">
                {
                    goals.map(goal => <OurGoal key={goal.id} goal={goal}></OurGoal>)
                }
            </div>
        </div>

    );
};

export default OurGoals;