import React from 'react'
import { format } from 'fecha';
import './modal.css'

function Modal({singleEvent, setOpenModal}: any) {
    const {id} = singleEvent;
  return (
    <div className="modal-container">
      <div className="modal-inner">
        <div className="modal-header">Modal Content</div>
        <div>ID: {id}</div>   
        {/* <div>Description: {description}</div>   
        <div>Category: {category}</div>   
        <div>Virtual: {isVirtual ? "Yes" : "No"}</div>
        <div>Date: {format(new Date(date), 'dddd MMMM Do, YYYY')}</div>   
        <div>Address: {address}</div> */}
        <button onClick={() => setOpenModal(false)}>Close</button> 
      </div>
    </div>
  )
}

export default Modal