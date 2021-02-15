import React from 'react';

const Home = () => {
    return (
        <div id={'home'}
            className={'container-fluid'}
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/media/home_background.jpg)` }}>
            <div>
                <h1>לירי פנחס</h1>
                <h2>הרצאות ותכנים לאנשים חשובים מאוד</h2>
                <h2>בנושאים מרתקים</h2>
                <h2>עם ערך מוסף מדהים כמובן</h2>
            </div>
        </div>
    );
};

export default Home;