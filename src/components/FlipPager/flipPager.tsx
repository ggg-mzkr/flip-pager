import React, {Children, cloneElement, ReactElement, ReactNode, useEffect, useReducer} from "react";

import {DIRECTION} from "./constans";
import FlipItem from "./flipItem";
import Overlay from "./overlay";

import style from './style.module.css'

export type Props = {
    // page number
    page: number
    // ltr (left to right) or rtl (right to left)
    direction: DIRECTION
    // speed for the flip transition in ms
    speed: number
    // easing for the flip transition
    easing: string
    // if set to true, both the flipping page and the sides will have an overlay to simulate shadows
    shadows: boolean
    // opacity value for the "shadow" on both sides (when the flipping page is over it)
    // value : 0.1 - 1
    shadowSides: number
    // opacity value for the "shadow" on the flipping page (while it is flipping)
    // value : 0.1 - 1
    shadowFlip: number
    // 3d perspective
    perspective: number
    // callback before the flip transition
    // page is the current item´s index
    onBeforeFlip: (current: number) => void
    // callback after the flip transition
    // old is the index of the previous item
    // page is the current item´s index
    // isLimit is true if the current page is the last one (or the first one)
    onEndFlip: (prev: number, current: number) => void

    children: ReactNode
}

type ItemsState = {
    src: ReactNode[]
    dst: ReactNode[]
    current: number
}

enum ActionType {
    MOVE,
    ANIMATION_FINISH
}

type Action = {
    type: ActionType
    page: number
}

const FlipPager = ({children, page, ...props}: Props) => {

    const reducer = ({src, current}: ItemsState, {type, page}: Action) => {
        if (type === ActionType.ANIMATION_FINISH || current === page) {
            const items: ReactNode[] = src.map((child, index) => <FlipItem hidden={index !== page} children={child} />)
            props.onEndFlip(current, page)
            return {src, dst: items, current: page}
        }

        props.onBeforeFlip(current)
        const items: ReactNode[] = src.map((child, index) => <FlipItem hidden={true} children={child}/>)
        const overlay = <Overlay
            current={src[current]}
            next={src[page]}
            direction={current < page ? DIRECTION.LTR : DIRECTION.RTL}
            easing={props.easing}
            speed={props.speed}
            shadowSide={props.shadowSides}
            shadowFlip={props.shadowFlip}
            onTransitionEnd={() => dispatch({type: ActionType.ANIMATION_FINISH, page: page})}
        />
        const dst: ReactNode[] = Children.toArray(overlay).concat(items)
        return {src, dst, current}
    }

    const [state, dispatch] = useReducer(reducer, {src: Children.toArray(children), dst: [], current: page})

    useEffect(() => {
        dispatch({type: ActionType.MOVE, page: page})
    }, [page])

    return <div
        className={style.flipPager}
        style={{
            perspective: props.perspective.toString() + 'px'
        }}
    >
        {state.dst.map((child: ReactNode, index) => cloneElement(child as ReactElement, {key: index}))}
    </div>
}

FlipPager.defaultProps = {
    page: 0,
    direction: DIRECTION.LTR,
    speed: 1000,
    easing: 'ease-in-out',
    shadows: true,
    shadowSides: 0.2,
    shadowFlip: 0.1,
    perspective: 1200,
    onBeforeFlip: (current: number) => {
    },
    onEndFlip: (prev: number, current: number) => {
    },
}

export default FlipPager