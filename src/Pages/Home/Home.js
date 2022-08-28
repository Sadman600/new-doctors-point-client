import React from 'react';
import Banner from './Banner';
import DocInfos from './DocInfos';

import DocPoint from './DocPoint';
import HelthIssue from './HelthIssue';
import Joining from './Joining';
import OurGoals from './OurGoals';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DocPoint></DocPoint>
            <OurGoals></OurGoals>
            <HelthIssue></HelthIssue>
            <Joining></Joining>
            <DocInfos></DocInfos>
        </div>
    );
};

export default Home;