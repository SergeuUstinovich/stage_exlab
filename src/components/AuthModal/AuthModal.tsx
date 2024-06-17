import { lazy } from "react";
import Modal from "../../ui/Modal/Modal"

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
    hiddenClose?: boolean;
}

const AuthForm = lazy(()=> import('../AuthForm/AuthForm'))

function AuthModal({isOpen, onClose, lazy, hiddenClose }:AuthModalProps) {
    return(
        <Modal isOpen={isOpen} onClose={onClose} hiddenClose={hiddenClose} lazy={lazy}>
            <AuthForm />
        </Modal>
    )
}

export default AuthModal