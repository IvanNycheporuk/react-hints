interface ChildProps {
    color: string,
    clickHandler: () => void,
    children: React.ReactElement
}

export const Child = ({ color }: ChildProps) => {
    return (
        <h1>some child component</h1>
    )
}

export const ChildFC: React.FC<ChildProps> = ({ color, clickHandler, children }) => {
    return (
        <>
            <h1>hi from FC Component, color is {color}</h1>
            {children}
            <button onClick={clickHandler}>click me</button>
        </>
    )
}