import Image from 'next/image';
import React from 'react';
import bg from '../public/3376592.jpg'
const styling = {
    backgroundImage: `url('${bg}')`,
    width:"100%",
    height:"100%",

}

const Content = () => {

    return (
        <>
            <h2>This is content</h2>
        </>
    );
};

export default Content;