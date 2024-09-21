import { Footer, Header } from "./components"
import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Layout