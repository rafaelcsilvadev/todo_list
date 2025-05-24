import type { ReactNode } from "react";
import style from "./nav.module.css";

interface NavProps {
    readonly title: string;  
}

function Nav({title}: NavProps): ReactNode {
    return (
        <nav className={style.nav}>
            <h1>{title}</h1>
        </nav>
    );
}

export default Nav;