import {ReactNode} from "react";

import style from './style.module.css'

export type Props = {
    hidden: boolean,
    children: ReactNode
}

const FlipItem = ({children, ...props}: Props) => {
    return <div className={style.flipItem} style={{display: props.hidden? 'none': 'block'}}>{children}</div>
}

export default FlipItem