import { Component } from "react";

interface UserData {
    name: string,
    age: number
}

interface GuestSearchProps {
    users: UserData[]
}

interface GuestSearchState {
    name: string,
    user: UserData | undefined
}

export default class GuestSearch extends Component<GuestSearchProps> {
    state: GuestSearchState = {
        name: '',
        user: undefined
    }

    changeInputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value);

        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    searchHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        let item = this.props.users.find(u => u.name === this.state.name);
        this.setState({
            ...this.state,
            user: item
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.changeInputHandler} />
                {/* <input draggable onDrag={dragHandler} /> */}
                <button onClick={this.searchHandler} >Find</button>
                <div>
                    <span>result</span>
                    <p>
                        {this.state.user && this.state.user.name}
                        {this.state.user && this.state.user.age}
                    </p>
                </div>
            </div>
        )
    }
}