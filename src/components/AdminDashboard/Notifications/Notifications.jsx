
import React from 'react';
import socket from '../../../socket';
import { useEffect } from 'react';
import { useState } from 'react';

const Notifications = () => {
    const [msg, setMsg] = useState({});
    useEffect(() => {
        socket.on('notification', (message) => {
            console.log('Notification recieved:', message);
        });
        return () => {
            socket.off('notification');
        }
    }, [])

    return (
        <div>
            <h2>Notifications</h2>
        </div>
    );
};

export default Notifications;