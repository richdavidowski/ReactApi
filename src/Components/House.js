import React from 'react';
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;

    //when deleting room also updating house because need to re-render with new info
    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            //create new rooms array with deleted room removed 
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        //send data to the API
        updateHouse(updatedHouse);
    }
 
    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room]});

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label> {`${room.name} Area: ${room.area}`}</label>
                    <button onClick={(e) => deleteRoom(room._id)}>Delete Room</button>
                </li>
            ))}
        </ul>
    );
    
    return (
        <div className='container'>
            <br/><br/>
            <div className='card text-white bg-info house-card'>
                <div className='card-header'>
                    <h1>{house.name}</h1>
                </div>
                <div className='card-body'>
                    <h3>Rooms</h3>
                {
                    rooms({ rooms, houseId: house._id, deleteRoom })
                }
                </div>
                <div className='card-footer'>
                <NewRoomForm addNewRoom={addNewRoom} />
                </div>
            </div>
        </div>
    );

};