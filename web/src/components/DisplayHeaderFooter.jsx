import { useState, useEffect } from 'react';
import NtiLogo from '../assets/whitelogo.png';

const ClockComponent = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</>
    );
};

const DateComponent = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <>
            {date.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
        </>
    );
};

export const DisplayHeader = () => {
    return (
        <>
            <div className="flex justify-between items-center px-[5%] h-[10vh] fixed top-0 left-0 right-0 font-bold">
                <div className="flex">
                    <img src={NtiLogo} />
                </div>

                <div className="flex text-white text-6xl">
                    <ClockComponent />
                </div>
            </div>
        </>
    );
};

export const DisplayFooter = () => {
    return (
        <>
            <div className="flex text-6xl justify-between items-center px-[5%] h-[10vh] fixed bottom-0 left-0 right-0 font-bold">
                <div className="flex text-white">
                    <DateComponent />
                </div>

                <div className="flex text-6xl text-white">
                    TE4
                </div>
            </div>
        </>
    );
};
