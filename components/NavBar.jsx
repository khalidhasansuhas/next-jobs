import Link from 'next/link';

const NavBar = () => {
    return (
        <div className="navbar  flex mx-auto bg-[#0a192f] fixed h-[80px] text-gray-300 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <Link href='/'><li><a>Home</a></li></Link>
                    <Link href='/resume'><li><a>Resume</a></li></Link>
                    <Link href='/blog'><li><a>Blog</a></li></Link>
                    <Link href='/career'><li><a>Career Consultation</a></li></Link>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                All Jobs
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2 z-20 text-gray-300  border border-black bg-[#0a192f] ">
                                <li><a>Web Developer</a></li>
                                <li><a>Software Engineer</a></li>
                                <li><a>Mobile App Developer</a></li>
                            </ul>
                        </li>
                       
                    </ul>
                </div>
                <Link href='/'><li><a className="btn btn-ghost normal-case text-xl">Next-Jobs</a></li></Link>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    
                
                    <Link href='/'><li><a>Home</a></li></Link>
                    <Link href='/resume'><li><a>Resume</a></li></Link>
                    <Link href='/blog'><li><a>Blog</a></li></Link>
                    <Link href='/career'><li><a>Career Consultation</a></li></Link>
                    <li tabIndex={0}>
                        <a>
                            All Jobs
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 z-20 text-gray-300 border border-black bg-[#0a192f]">
                            <li><a>Web Developer</a></li>
                            <li><a>Software Engineer</a></li>
                            <li><a>Mobile App Developer</a></li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
            <div className="navbar-end">
                <button className='mr-2 btn-xs px-4'>Log In</button>
                <button className='mr-2 btn-xs px-4'>Register</button>
                
            </div>
        </div>
    );
};

export default NavBar;