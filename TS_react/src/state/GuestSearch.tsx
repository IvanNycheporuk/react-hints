import { useState, useRef, useEffect } from "react";

const DATA = [
    { name: 'test', age: 1 },
    { name: 'test2', age: 12 }
]

const GuestSearch = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>(undefined);
    const nameInput = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        nameInput.current?.focus();
    }, [])

    const changeInputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value);
    }

    const searchHandler = () => {
        let result = DATA.find(item => item.name === name);

        setUser(result);
    }

    const dragHandler: React.DragEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target);
    }

    return (
        <div>
            <input onChange={changeInputHandler} value={name} ref={nameInput} />
            <input draggable onDrag={dragHandler} />
            <button onClick={searchHandler} >Find</button>
            <div>
                <span>result</span>
                <p>
                    {user && user.name}
                    {user && user.age}
                </p>
            </div>
        </div>
    )
}

export default GuestSearch;