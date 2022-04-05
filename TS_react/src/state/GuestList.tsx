import { useState } from "react";

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guestList, setGuestList] = useState<string[]>([])

    const setNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);

        setName(e.currentTarget.value);
    }

    const addNameHandler = () => {
        setName('');
        setGuestList([...guestList, name]);
    }

    return (
        <>
            <h1>guest list</h1>
            <ul>
                {
                    guestList.map((gl, index) => <li key={index}>{gl}</li>)
                }
            </ul>
            <input type="text" onChange={setNameHandler} value={name} />
            <button onClick={addNameHandler}>add value</button>
        </>
    )
}

export default GuestList;