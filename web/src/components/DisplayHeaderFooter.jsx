import { useState, useEffect } from 'react';

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
            <div className="flex justify-between items-center px-[5%] h-[10vh] fixed top-0 left-0 right-0 border-2 border-solid  border-black">
                <div className="flex">
                    Nti Gymnasiet Helsingborg
                </div>

                <div className="flex">
                    <ClockComponent />
                </div>
            </div>
        </>
    );
};

export const DisplayFooter = () => {
    return (
        <>
            <div className="flex justify-between items-center px-[5%] h-[10vh] fixed bottom-0 left-0 right-0">
                <div className="flex">
                    <DateComponent />
                </div>

                <div className="flex">
                    TE4
                </div>
            </div>
        </>
    );
};
