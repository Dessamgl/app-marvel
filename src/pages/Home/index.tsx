import React, { useState, useCallback, FormEvent } from 'react';

import { FiMail, FiSend } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';
import Modal from '../../components/Modal';
import logoMarvel from '../../assets/marvel.png';
import sendEmail from '../../utils/sendEmail';

import { Title, Form, Comics, Error, ButtonFloat } from './styles';

export interface Comic {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  images: {
    path: string;
    extension: string;
    0: any;
  };
  thumbnail: {
    path: string;
    extension: string;
  };
  selected: boolean;
}

const Home: React.FC = () => {
  const [inputComicName, setInputComicName] = useState('');
  const [comicsData, setComicsData] = useState<Comic[]>([]);
  const [comicsSelected, setComicsSelected] = useState<Comic[]>([]);
  const [card, setCard] = useState<Comic>();
  const [inputError, setInputError] = useState('');
  const [inputMailBox, setInputMailBox] = useState(false);
  const [show, setShow] = useState(false);
  const [userEmailValue, setUserEmailValue] = useState('');

  async function getComics(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!inputComicName) {
      setInputError('Digite o título do quadrinho em inglês');
      return;
    }
    try {
      const response = await api.get('v1/public/comics', {
        params: {
          titleStartsWith: inputComicName,
        },
      });
      if (response.data.data.count === 0) {
        setInputError('Nenhum quadrinho encontrado');
        return;
      }

      const { results } = response.data.data;
      setComicsData(results as Comic[]);
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse quadrinho');
    }
  }

  const showModal = useCallback(() => {
    setShow(!show);
  }, [show]);

  function handleSelectCard(comicId: number): void {
    const comicIndex = comicsData.findIndex(comic => comic.id === comicId);
    const newComic = comicsData[comicIndex];

    newComic.selected = !newComic.selected;

    const newComicList = [...comicsData, newComic];

    setComicsData(newComicList);

    if (newComic.selected) {
      setComicsSelected([newComic, ...comicsSelected]);
    } else {
      const newSelectedComics = comicsSelected.filter(
        comics => comics.id !== comicId,
      );

      if (newSelectedComics.length === 0) {
        setInputMailBox(false);
      }

      setComicsSelected(newSelectedComics);
    }
  }

  async function sendMailToUser(): Promise<void> {
    const message = `
    ${comicsSelected.map(
      comic =>
        `Título: ${comic.title}
      Descrição: ${comic.description}
      <img src="data:image/jpg;base64,${btoa(
        `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      )}" >
      `,
    )}
    `;

    const response = await sendEmail(userEmailValue, message);

    if (response) {
      toast.success('E-mail enviado com sucesso!');
    } else {
      toast.error('Ops! Erro ao enviar o e-mail');
    }
  }

  const showModalWithData = useCallback(
    (data: Comic) => {
      setCard(data);
      setShow(!show);
    },
    [show],
  );

  return (
    <>
      <img
        src={logoMarvel}
        style={{ width: 150, height: 70, backgroundColor: '#b5b5b5' }}
        alt="Marvel"
      />
      <Title>Explore os quadrinhos da Marvel</Title>
      <Form hasError={!!inputError} onSubmit={getComics}>
        <input
          onChange={event => setInputComicName(event.target.value)}
          placeholder="Digite o título do quadrinho"
          type="text"
        />

        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Comics>
        {comicsData.length !== 0 &&
          comicsData.map(result => (
            <>
              <li
                key={result.id}
                className={result.selected ? 'selected-card' : ''}
                onClick={() => handleSelectCard(result.id)}
              >
                <img
                  src={`${result.images[0]?.path}.${result.images[0]?.extension}`}
                  alt={result.title}
                />
                <div>
                  <strong>{result.title}</strong>
                </div>
                <button type="button" onClick={() => showModalWithData(result)}>
                  Detalhes
                </button>
              </li>
            </>
          ))}
      </Comics>
      {comicsSelected.length > 0 && (
        <ButtonFloat
          type="button"
          hasOpened={inputMailBox}
          onClick={() => setInputMailBox(true)}
        >
          <FiMail color="#9fdcfa" className="open-box-email" />
          <input
            type="text"
            value={userEmailValue}
            onChange={event => setUserEmailValue(event.target.value)}
          />

          <FiSend className="send-email" onClick={sendMailToUser} />
        </ButtonFloat>
      )}

      <ToastContainer />
      <Modal onClick={showModal} show={show} comic={card} />
    </>
  );
};

export default Home;
