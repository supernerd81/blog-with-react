import '../css/Header.css'
import {JSX} from "react";

type Props = { buttons: JSX.Element[] }

export default function Header(props: Props) {
    return (<header><div id="menu">

        {
            props.buttons.map(element => element)
        }
        {/*<button>Home</button>*/}
        {/*<button>Blog</button>*/}
        {/*<button>Kontakt</button>*/}
    </div></header>)
}