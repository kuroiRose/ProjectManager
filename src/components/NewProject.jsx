import { useRef } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({ onAdd, onCancel }){
    const modalRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave(){
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        //validation...
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            modalRef.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
        <Modal ref={modalRef} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input!</h2>
            <p className="text-stone-600 mb-4">Oops... Looks like you forgot to enter a value.</p>
            <p className="text-stone-600 mb-4">Please make sure you provide valid values for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16 ">
            <menu className="flex items-center justofy-end gap-4 my-4">
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>
                </li>
                <li>
                    <button className="text-stone-700 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={titleRef} FormLabel="Title" />
                <Input ref={descriptionRef} FormLabel="Description" IsTextarea />
                <Input type="date" ref={dueDateRef} FormLabel="Due Date" />
            </div>
        </div>
        </>
    )
}