import React from 'react'
import { format } from 'fecha';
import './modal.css'

function Modal({singlePermit, setOpenModal}: any) {
    const {id, work_description, contact_1_city, contact_1_name, contact_1_state, issue_date, permit_type} = singlePermit;
  return (
    <div className="modal-container">
      <div className="modal-inner">
        <div className="modal-header">Permit Detail</div>
        <div>Contact Name: {contact_1_name}</div>
        <div>ID: {id}</div>   
        <div className="description">Description: {work_description.toLowerCase()}</div> 
        <div>Contact Location: {contact_1_state}, {contact_1_city}</div>
        <div>Date: {format(new Date(issue_date), 'dddd MMMM Do, YYYY')}</div>   
        <div>Permit Type: {permit_type}</div>
        <button type="button" className="btn" onClick={() => setOpenModal(false)}>Close</button> 
      </div>
    </div>
  )
}

export default Modal