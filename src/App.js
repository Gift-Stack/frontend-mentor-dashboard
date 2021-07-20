import { useEffect } from 'react';
import './App.scss';
import Main from './components/layouts/main/Main';

import Sidebar from './components/layouts/sidebar/Sidebar';

function App() {
    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    });
    return (
        <div className='container'>
            <Sidebar />
            <Main />
        </div>
    );
}

export default App;
