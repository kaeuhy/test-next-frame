
import React, { useEffect, useState } from 'react';

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

        return () => clearInterval(timer); // 정리
    }, [seconds]);

    return (
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <button disabled={!available} style={{ fontSize: '20px', padding: '10px 20px' }}>
                {available ? '예매하기' : `${seconds}초 후 활성화`}
            </button>
        </div>
    );
}

export default TicketButton;