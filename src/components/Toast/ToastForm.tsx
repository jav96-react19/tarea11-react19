import { Toast, ToastContainer } from "react-bootstrap"
import {ToastProps } from '@/types/ToastType.tsx'


export const ToastForm = (props: ToastProps) => {
    const {onOpen, onClose, courseTitle} = props;

    return (
        <ToastContainer position="middle-start" className="p-3">
            <Toast show={onOpen} onClose={onClose}>
                <Toast.Header>
                    <strong className="me-auto">Form</strong>
                </Toast.Header>
                <Toast.Body>You joined to {courseTitle} course</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}