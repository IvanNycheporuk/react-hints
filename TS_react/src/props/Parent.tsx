import { ChildFC } from './Child';

const Parent = () => {
    return (
        <ChildFC clickHandler={() => console.log('test')} color='red'>
            <p>some tes</p>
        </ChildFC>
    );
}