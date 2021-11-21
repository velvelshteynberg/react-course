import { useState } from "react";
import Modal from "./Modal";
import Backdrop from './Backdrop';

function Todo(props) {
    //name needs to be capital
    const [modalIsOpen, setModalIsOpen] = useState(false); //this is a hook. They must be used in react component functions. You call the second function to assign a new value to the state

    function deleteHandler() {
        setModalIsOpen(true);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>
                    Delete
                </button>
                {modalIsOpen && <Modal />}
                {modalIsOpen && <Backdrop />}
                {/* {modalIsOpen ? <Backdrop /> : null} */}
            </div>
        </div>
    );
}

export default Todo;
