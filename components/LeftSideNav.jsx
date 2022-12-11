import React from 'react';

const LeftSideNav = () => {
    return (
        <div className='container h-full w-full'>
            <div className="drawer h-full">
               
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu h-full p-4 w-full  text-base-content">

                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;