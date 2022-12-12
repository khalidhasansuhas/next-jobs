import React from 'react';

const LeftSideNav = () => {
    return (
        <div className='container w-full shadow-xl'>
            <div >

                <div >
                   
                    <ul className="menu h-full p-4 w-full  text-base-content">

                        <div className='w-full p-3'>
                        <label htmlFor="Select Job Category"> Select Job Type</label>
                            <select name='categoryName' className="w-full px-4 py-3 rounded-md" required>
                                <option selected disabled>Job Type</option>
                                <option >On Site</option>
                                <option>Remote</option>
                                <option>Hybrid</option>
                            </select>
                        </div>
                        <div className='w-full p-3'>
                        <label htmlFor="Select Job Category"> Select Job Type</label>
                            <select name='categoryName' className="w-full px-4 py-3 rounded-md" required>
                                <option selected disabled>Job Category</option>
                                <option >Internship</option>
                                <option>Full Time</option>
                                <option>Part Time</option>
                            </select>
                        </div>
                        <div className='w-full p-3'>
                            <h3>Minimum Salary Expectation</h3>
                        <fieldset className="space-y-1 sm:w-48 dark:text-gray-100">
                            <input type="range" className="w-full accent-violet-400" min="1" max="5" />
                            <div aria-hidden="true" className="flex justify-between px-1">
                                <span>0</span>
                                <span>2k</span>
                                <span>5k</span>
                                <span>10k</span>
                                <span>20k</span>
                            </div>
                        </fieldset>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;