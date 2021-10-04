import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState('');

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('Invalid Input');
        }
    };

    return (
        <div className='form-group'>
            <h4>Add New Room</h4>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input
                        className='form-group'
                        type='text'
                        placeholder='Room Name'
                        onChange={(e) => setName(e.target.value)} 
                        value={name}
                        /> <br/><br/>   
                    <input
                        className='form-group' 
                        type='text'
                        placeholder='Room Area'
                        onChange={handleAreaInput}
                        value={area} 
                        /><br/><br/>
                    <button className='btn btn-primary' type='submit'>Add New Room</button>
                </div>
            </form>
        </div>
    )
};