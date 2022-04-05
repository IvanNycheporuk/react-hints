import ReactDOM from "react-dom";
import GuestSearch from "./state/GuestSearch";

const DATA = [
    { name: 'test', age: 1 },
    { name: 'test2', age: 12 }
]

const App = () => {
    return (
        <div>
            <h1>Hi there!</h1>
            <GuestSearch />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)