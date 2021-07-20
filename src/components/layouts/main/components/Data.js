import '../style.scss'
const Data = ({datum}) => {
  const {caret,title,description,type,messages_no} = datum
  return (
    <div className='grid'>
            <div className='grid-left'>
                <p className='caret'>
                    <span>^</span>
                    <span>{caret}</span>
                </p>
                <div className='description'>
                    <h3 className='title'>{title}</h3>
                    <p className='desc'>{description}</p>
                    <li className='tag'>{type}</li>
                </div>
            </div>
            <div className='grid-right'>
                <div></div>
                <div>
                    <i className='bi bi-chat' style={{color: 'grey'}}></i> <strong>{messages_no}</strong>
                </div>
            </div>
        </div>
  )
}

export default Data