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

              <footer>

                    <p>2025 © direitos reservados</p>

              </footer>

        </div>
    )
}