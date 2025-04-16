import { Outlet } from "react-router-dom"
import { Menu } from "../menu/Menu"
import './layout.css'

export const Layout = () => {
    return (
        <div className="bodyLayout">
                <Menu/>
               
                <main>

                    <Outlet />

                </main>

              <footer className="h-7 flex align-bottom justify-center">

                    <p>2025 © direitos reservados</p>

              </footer>

        </div>
    )
}