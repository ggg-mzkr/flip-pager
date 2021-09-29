## usage

```tsx
function App() {

    const [selected, setSelected] = useState(0)

    return (
        <div className="container">
            <FlipPager
                page={selected}
            >
                <div style={{backgroundColor: "red"}} className="page">PAGE1</div>
                <div style={{backgroundColor: "blue"}} className="page">PAGE2</div>
                <div style={{backgroundColor: "yellow"}} className="page">PAGE3</div>
                <div style={{backgroundColor: "green"}} className="page">PAGE4</div>
                <div style={{backgroundColor: "orange"}} className="page">PAGE5</div>
            </FlipPager>

            <ul>
                <li><span onClick={() => {setSelected(0)}}>PAGE1</span></li>
                <li><span onClick={() => {setSelected(1)}}>PAGE2</span></li>
                <li><span onClick={() => {setSelected(2)}}>PAGE3</span></li>
                <li><span onClick={() => {setSelected(3)}}>PAGE4</span></li>
                <li><span onClick={() => {setSelected(4)}}>PAGE5</span></li>
            </ul>
        </div>
    );
}
```

### option of FlipPager
```tsx
{
    page: 0,
    direction: DIRECTION.LTR,
    speed: 1000,
    easing: 'ease-in-out',
    shadowSides: 0.2,
    shadowFlip: 0.1,
    perspective: 1200,
    onBeforeFlip: (current: number) => void,
    onEndFlip: (prev: number, current: number) => void
}
```

## demo

https://ggg-mzkr.github.io/flip-pager/

## based on
https://github.com/codrops/BookBlock