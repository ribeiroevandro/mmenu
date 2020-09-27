import React from 'react';
import ReactDOM from 'react-dom';

import * as S from './styles';


interface ModalProps {
  isOpen: boolean;
  onClickClose?(): void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClickClose }) => {
  if (!isOpen) {
    return null;
  }

  const portalRoot = document.getElementById('portal-root');

  return ReactDOM.createPortal(
    <S.Container>
      <div>
        <div>
          <button type="button" onClick={onClickClose}>
            X
          </button>
          {children}
        </div>
      </div>
    </S.Container>,
    portalRoot as HTMLElement,
  );
};

export default Modal;
