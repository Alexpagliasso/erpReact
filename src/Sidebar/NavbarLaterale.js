import './sidebar.scss'
import { Link } from "react-router-dom";


function NavbarLaterale() {
    return (

        <div className="barraLaterale">
            <ul className="menuSidebar">
                <Link to="/dashboard">
                    <li className="sidebarItems">Dashboard</li>
                </Link>
                <Link to="/Ordini">
                    <li className="sidebarItems">Ordini</li>
                </Link>
                <li className="sidebarItems">Prodotti e categorie</li>
                <li className="sidebarItems">Clienti</li>
                <li className="sidebarItems">Spedizionieri e fornitori</li>
                <li className="sidebarItems">Dipendenti</li>
            </ul>
        </div>

    );
}

export default NavbarLaterale;
