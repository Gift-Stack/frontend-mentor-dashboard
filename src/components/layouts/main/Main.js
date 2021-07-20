import Topbar from './components/Topbar'
import data from '../../../data'
import Data from './components/Data'

const Main = () => {
    return <div>
        <Topbar/>
        {data.map((datum,index) => <Data key={index} datum={datum} />)}
    </div>;
};

export default Main;
