'use client'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

type BtModalProps = {
    title:string | undefined,
    body: string | undefined
    show: boolean | undefined,
    closeModal: React.MouseEventHandler<HTMLButtonElement> | undefined,
    saveBtnClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
    hide:any,

}

const ReactBootstrapModal = (props: BtModalProps) => {

    return (
        <Modal show={props.show} onHide={props.hide} backdrop='static' keyboard={false} >
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.saveBtnClick}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ReactBootstrapModal