import NavBar from "./NavBar";
import Footer from './Footer';
import LeftSideNav from "./LeftSideNav";
import Content from "./Content";

export default function Layout({ children }) {
    return (
        <>
            <div className="sm:h-full">
                <NavBar></NavBar>
                <main className="max-w-[1240px] mx-auto grid grid-cols-10 gap-2 ">

                    <div className="col-span-10 md:col-span-3 md:mb-5">
                        <LeftSideNav></LeftSideNav>
                    </div>
                    <div className=" col-span-10 md:col-span-7 mb-5">
                        <Content></Content>
                    </div>

                </main>
                <Footer></Footer>
            </div>
        </>
    )
}