import './Selectors.css'

const Selectors = (props) => {
  return (
    <div className="selector">
      {props.selections.map((selection, idx) =>
        <button 
          key={idx}
          className={ selection ? 'selected' : '' }
          onClick={ () => props.handleSelection(idx) }
        >
          Button {idx + 1}
        </button>
      )}
    </div>
  )
}

export default Selectors