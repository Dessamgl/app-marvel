import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';

import Modal from '../../components/Modal';
import logoMarvel from '../../assets/marvel.png';

import { Title, Form, Comics, Error } from './styles';

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
}

const Home: React.FC = () => {
  const [comicName, setComicName] = useState('');
  const [comicsData, setComicsData] = useState<Comic[]>([]);
  const [card, setCard] = useState<Comic>();
  const [inputError, setInputError] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!comicsData || comicName) {
      loadComics();
    }
  }, [comicName]);

  async function loadComics(): Promise<void> {
    const response = await api.get('v1/public/comics', {
      params: {
        titleStartsWith: comicName,
      },
    });

    const { results } = response.data.data;
    setComicsData(results);
  }
  const showModal = useCallback(() => {
    setShow(!show);
  }, [show]);

  async function comicsSearch(text: any): Promise<void> {
    const { value } = text.target;

    try {
      if (value.length) {
        await setTimeout(() => {
          setComicName(value);
        }, 500);
      } else {
        setComicsData([]);
      }
      setInputError('');
      setComicName('');
    } catch (err) {
      setInputError('Erro na busca por esse quadrinho');
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
      <Form hasError={!!inputError} onSubmit={comicsSearch}>
        <input
          onChange={comicsSearch}
          placeholder="Digite o título do quadrinho"
          type="text"
        />
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Comics>
        {comicsData.length !== 0 &&
          comicsData.map(result => (
            <>
              <li key={result.id}>
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
      <Modal onClick={showModal} show={show} comic={card} />
    </>
  );
};

export default Home;
