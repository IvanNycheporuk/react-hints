import { useState } from "react";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
    const [packageName, setPackageName] = useState<string>('');
    const { searchRepositories } = useActions();
    const { data, loading, error } = useTypedSelector((state) => state.repositories);

    console.log(data, loading, error);

    const changeInputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPackageName(e.target.value);
    }

    const findPackageHandler: React.MouseEventHandler<HTMLButtonElement> = async () => {
        searchRepositories(packageName);
    }

    return (
        <div>
            <input value={packageName} type="text" onChange={changeInputHandler} />
            <button onClick={findPackageHandler}>find!</button>
            {error && <p>some error occured!</p>}
            {loading && <p>loading!</p>}
            {!error && !loading && data.map((d, index) => <div key={index}>{d}</div>)}
        </div>
    )
}

export default RepositoriesList;