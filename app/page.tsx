'use client'
import ReactBootstrapModal from "@/components/reactBootstrapModal";
import { useState } from "react";


export default function Page() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSaveBtnClick = () =>{
    alert('save btn clicked')
  }

  const onHide = () =>{
    handleClose()
  }
  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>handleShow()}>
        Launch demo modal
      </button>
      <ReactBootstrapModal title='Test Modal' body="Wow it's a bootstrap react modal" show={show} closeModal={handleClose} saveBtnClick={onSaveBtnClick} hide={handleClose}/>

    </>
  );
}
