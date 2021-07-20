import './sidebar.scss';

const Sidebar = () => {
    return (
        <div>
            <div className='card title-card'>
                <h3>Frontend Mentor</h3>
                <p>Feedback board</p>
            </div>
            <div className='card features-card'>
                <ul>
                    <li className='card-sm active'>All</li>
                    <li className='card-sm'>UI</li>
                    <li className='card-sm'>UX</li>
                    <li className='card-sm'>Enhancement</li>
                    <li className='card-sm'>Bug</li>
                    <li className='card-sm'>Feature</li>
                </ul>
            </div>
            <div className='card roadmap'>
                <div className='flex'>
                    <h4>Roadmap</h4>
                    <a href='/'>View</a>
                </div>
                <ul>
                    <li>
                        <span>
                            <span className='circle circle-orange'></span>{' '}
                            <span className='text-muted'>Planned</span>
                        </span>
                        <strong>2</strong>
                    </li>
                    <li>
                        <span>
                            <span className='circle circle-purple'></span>{' '}
                            <span className='text-muted'>In-Progress</span>
                        </span>
                        <strong>3</strong>
                    </li>
                    <li>
                        <span>
                            <span className='circle circle-blue'></span><span className='text-muted'> Live</span>
                        </span>
                        <strong>1</strong>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
