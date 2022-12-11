import NavBar from "./NavBar";
import Footer from './Footer';
import LeftSideNav from "./LeftSideNav";
import Content from "./Content";

export default function Layout({ children }) {
    return (
        <>
            <div className="sm:h-full">
                <NavBar></NavBar>
                <main className="grid sm:grid-flow-row-dense sm:grid-cols-6 sm:grid-rows-6 sm:h-screen">

                    <div className="sm:col-span-1">
                        <LeftSideNav></LeftSideNav>
                    </div>
                    <div className="sm:col-span-5 gap-2">
                        <Content></Content>

                    </div>

                </main>
                <Footer></Footer>
            </div>
        </>
    )
}