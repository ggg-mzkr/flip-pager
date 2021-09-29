import classNames from "classnames";

import {ReactNode, useState} from "react";
import {DIRECTION} from "./constans";

import style from './style.module.css'

export type Props = {
    current: ReactNode
    next: ReactNode
    direction: DIRECTION
    speed: number
    shadowSide: number
    shadowFlip: number
    easing: string
    onTransitionEnd: () => void
}

const Overlay = ({current, next, direction, speed, shadowSide, shadowFlip, easing, onTransitionEnd}: Props) => {
    const [middleClassName, setMiddleClassName] = useState(direction === DIRECTION.LTR? style.overlay: classNames(style.overlay, style.flipInitial))
    const [edgeStyle2Opacity, setEdgeStyle2Opacity] = useState(shadowSide)
    const [middleStyle2Opacity, setMiddleStyle2Opacity] = useState(shadowFlip)

    const edgeStyle1 = {
        transition: `opacity ${speed / 2}ms linear ${speed / 2}ms`,
    }
    const edgeStyle2 = {
        transition: `opacity ${speed / 2}ms linear`,
        opacity: edgeStyle2Opacity,
    }

    const middleStyle1 = {
        transition: `opacity ${speed / 2}ms linear`,
    }
    const middleStyle2 = {
        transition: `opacity ${speed / 2}ms linear ${speed / 2}ms`,
        opacity: middleStyle2Opacity,
    }

    setTimeout(() => {
        setMiddleClassName(direction === DIRECTION.LTR? classNames(style.overlay, style.flipNext): classNames(style.overlay, style.flipInitial, style.flipPrev))
        setMiddleStyle2Opacity(0)
        setEdgeStyle2Opacity(0)
    }, 25)

    return <>
        {/* left */}
        <div className={classNames(style.overlay, style.ts180)} style={{zIndex: 102}}>
            <div className={classNames(style.oBack, style.ts180)}>
                <div className={style.oOuter}>
                    <div className={style.oBackContent}>
                        <div className={style.oInner}>
                            {direction === DIRECTION.LTR? current: next}
                        </div>
                    </div>
                    <div className={style.shadow} style={direction === DIRECTION.LTR? edgeStyle1: edgeStyle2}/>
                </div>
            </div>
        </div>
        {/* middle */}
        <div className={middleClassName}
             style={{zIndex: 103, transitionDuration: `${speed}ms`, transitionTimingFunction: easing}}
             onTransitionEnd={onTransitionEnd}
        >
            <div className={style.oFront}>
                <div className={style.oOuter}>
                    <div className={style.oFrontContent}>
                        <div className={style.oInner}>
                            {direction === DIRECTION.LTR? current: next}
                        </div>
                    </div>
                    <div className={style.flipShadow} style={direction === DIRECTION.LTR? middleStyle1: middleStyle2}/>
                </div>
            </div>
            <div className={style.oBack}>
                <div className={style.oOuter}>
                    <div className={style.oBackContent}>
                        <div className={style.oInner}>
                            {direction === DIRECTION.LTR? next: current }
                        </div>
                    </div>
                    <div className={style.flipShadow} style={direction === DIRECTION.LTR? middleStyle2: middleStyle1}/>
                </div>
            </div>
        </div>
        {/* right */}
        <div className={style.overlay} style={{zIndex: 101}}>
            <div className={style.oFront}>
                <div className={style.oOuter}>
                    <div className={style.oFrontContent}>
                        <div className={style.oInner}>
                            {direction === DIRECTION.LTR? next: current }
                        </div>
                    </div>
                    <div className={style.shadow} style={direction === DIRECTION.LTR? edgeStyle2: edgeStyle1}/>
                </div>
            </div>
        </div>
    </>
}

export default Overlay
