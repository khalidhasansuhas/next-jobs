import NavBar from "./NavBar";
import Footer from './Footer';
import LeftSideNav from "./LeftSideNav";
import Content from "./Content";

export default function Layout({ children }) {
    return (
        <>
            <div>
                <NavBar></NavBar>
                <main>
                    {children}

                    {/* <div className="col-span-10 md:col-span-3 md:mb-5 mt-24 ">
                        <LeftSideNav></LeftSideNav>
                    </div>
                    <div className=" col-span-10 md:col-span-7 ps-5 mb-5 mt-24">
                        <Content></Content>
                    </div> */}

                </main>
                <Footer></Footer>
            </div>
        </>
    )
}