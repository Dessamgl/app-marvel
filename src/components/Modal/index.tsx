/* eslint-disable react/prop-types */
import React, { ButtonHTMLAttributes } from 'react';
import { Comic } from '../../pages/Home';
import { Container, Content, Footer } from './styles';

interface ModalProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  show: boolean;
  comic?: Comic;
}

const Modal: React.FC<ModalProps> = ({ show, comic, ...rest }) => {
  if (!show) {
    return null;
  }

  return (
    <Container>
      <div className={`modal-overlay ${show ? 'active' : ''}`}>
        <div className="modal" id="modal">
          <div className="container">
            <h1>{comic?.title}</h1>

            <Content>
              <div className="comic-image">
                {comic?.images[0]?.path && (
                  <img
                    src={`${comic.images[0]?.path}.${comic.images[0]?.extension}`}
                    alt={comic.title}
                  />
                )}
              </div>

              <div className="comic-details">
                <div>
                  <strong>Páginas: </strong>
                  <span>{comic?.pageCount ? ' -' : comic?.pageCount}</span>
                </div>

                <div>
                  <strong>Descrição: </strong>
                  <span>{!comic?.description ? ' -' : comic.description}</span>
                </div>
              </div>
            </Content>
          </div>

          <Footer>
            <button className="toggle-button" type="button" {...rest}>
              Fechar
            </button>
          </Footer>
        </div>
      </div>
    </Container>
  );
};

export default Modal;
