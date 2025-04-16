import { Outlet } from "react-router-dom"
import { Menu } from "../menu/Menu"

export const Layout = () => {
    return (
        <div>
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