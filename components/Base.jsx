import React from 'react';
import Content from './Content';
import LeftSideNav from './LeftSideNav';

const Base = () => {
    return (
        <div className="max-w-[1240px] mx-auto grid grid-cols-10 gap-2" >
            <div className="col-span-10 md:col-span-3 md:mb-5 mt-24 ">
                <LeftSideNav></LeftSideNav>
            </div>
            <div className=" col-span-10 md:col-span-7 ps-5 mb-5 mt-24">
                <Content></Content>
            </div>

        </div>
    );
};

export default Base;