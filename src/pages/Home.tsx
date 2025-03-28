import React from 'react';

const Home = () => {
    console.log('NODE_ENV', process.env.NODE_ENV);
    console.log('BASE_ENV', process.env.BASE_ENV);

    return (
        <div>
            <div>Home组件</div>
        </div>
    );
};

export default Home;
