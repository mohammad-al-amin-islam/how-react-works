import React, { useEffect, useState } from 'react';
import Tablet from '../components/Tablet/Tablet';
import Display from './Display/Display';

const StepCount = () => {
    const [steps, setSteps] = useState(0);
    const updateSteps = () => setSteps(steps + 1);
    useEffect(() => {
        console.log(steps)
    }, [steps])
    return (
        <div>
            <h3>Steps:{steps}</h3>
            <button onClick={updateSteps}>De Dour.....</button>
            <Display steps={steps}></Display>
            <Tablet></Tablet>
        </div>
    );
};

export default StepCount;