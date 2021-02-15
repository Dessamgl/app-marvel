/* eslint-disable react/prop-types */
import React, { ButtonHTMLAttributes } from 'react';
import { Comic } from '../../pages/Home';

import './styles.css';

interface ModalProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  show: boolean;
  comic?: Comic;
}

const Modal: React.FC<ModalProps> = ({ show, comic, ...rest }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={`modal-overlay ${show ? 'active' : ''}`}>
      <div className="modal" id="modal">
        <h1>{comic?.title}</h1>
        <div className="content">
          <div>
            <strong>Descrição:</strong>
            {!comic?.description
              ? 'Quadrinho sem descrição'
              : comic.description}
          </div>
          <div>
            <strong>Número de páginas:</strong>
            {!comic?.pageCount || comic?.pageCount === 0
              ? 'Quadrinho sem número de páginas'
              : comic.pageCount}
          </div>
        </div>
        <div className="actions">
          <button className="toggle-button" type="button" {...rest}>
            fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
