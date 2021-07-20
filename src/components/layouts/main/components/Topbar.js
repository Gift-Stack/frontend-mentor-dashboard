import '../style.scss'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbar-left'>
        <i className="bi bi-award"></i>
        <p>6 suggesions</p>
        <p className='text-muted'>sort by : 
        <select>
          <option value="Most upvotes">Most Upvotes</option>
        </select>
        </p>
      </div>
      <div className='topbar-right'>
        <button>
          <i className='bi bi-plus'></i>
          Add Feedback
        </button> 
      </div>
    </div>
  )
}

export default Topbar
