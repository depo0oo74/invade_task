// ** Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Popup({title, description, modal, toggle, handleDelete}) {
    return (
        <section className='popup' style={modal ? {display: "flex"} : {display: "none"}}>
            <div className='pop-con'>
                <div className='pop-header'>
                    <h5>{title}</h5>
                    <button onClick={toggle}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </div>
                <div className='pop-body'>
                    <p>{description}</p>
                </div>
                <div className='pop-footer'>
                    <button className="cancel" onClick={toggle}>Cancel</button>
                    <button className="delete" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </section>
    )
}

export default Popup