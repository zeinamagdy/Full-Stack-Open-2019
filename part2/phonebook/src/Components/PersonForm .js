import React from 'react';

const PersonForm = (props) => {
    return (
        <form>
            <div>
                name: <input type='text' onChange={props.onChangeName} value={props.newName} />
            </div>
            <div>
                number: <input type='text' onChange={props.onChangeNumber} value={props.newNumber} />
            </div>
            <div>
                <button type="submit" onClick={props.OnNameAdded}>add</button>
            </div>
        </form>
    )
}
export default PersonForm 