import React from 'react';

import { useNavigate } from 'react-router-dom';

import { HOME_URL } from '@/config/config';

const NotAuth: React.FC = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate(HOME_URL);
    };
    return (
        <div>
            <h1>403</h1>
            <button onClick={goHome}>back</button>
        </div>
    );
};

export default NotAuth;
