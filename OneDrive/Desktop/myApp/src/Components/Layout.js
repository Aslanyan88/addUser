import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";

const Layout = () => {

    return (
        <>
            <header>
                <Header/>
            </header>

                    <Outlet/>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout