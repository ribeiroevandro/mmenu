import React from 'react';
import ReactDOM from 'react-dom';
import { IconBaseProps } from 'react-icons';

import * as S from './styles';

interface ModalProps {
  isOpen: boolean;
  onClickClose?(): void;
  component?: React.ComponentType<IconBaseProps>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClickClose, component: Component }) => {
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
          {Component && <Component  />}
        </div>
      </div>
    </S.Container>,
    portalRoot as HTMLElement,
  );
};

export default Modal;
