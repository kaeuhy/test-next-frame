import React, { useEffect, useState } from 'react';
import './Button.css';

function TicketButton() {
    const [seconds, setSeconds] = useState(10);
    const [available, setAvailable] = useState(false);

    useEffect(() => {
        if (seconds <= 0) {
            setAvailable(true);
            return;
        }

        const timer = setInterval(() => {
            setSeconds(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    return (
        <div className="page-center">
            <button className="ticket-button" disabled={!available}>
                {available ? '예매하기' : `${seconds}초 후 일반예매 시작`}
            </button>
        </div>
    );
}

export default TicketButton;