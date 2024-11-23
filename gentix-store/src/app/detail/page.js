'use client';

import { useSearchParams } from 'next/navigation';
import Styles from './datail.module.css'
import NavBar from '../components/layout/NavBar/Navbar';
import Footer from '../components/layout/Footer/Footer';

const DetailPage = () => {
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const price = searchParams.get('price');

  if (!id) {
    return <p>Carregando informações...</p>;
  }

  return (
    <div>
      <NavBar/>
    <div className={Styles.Games}>
      <div className={Styles.Containerimg} id="img">
        <div className={Styles.img}></div>
      </div>

      <div className={Styles.detalhe}>

      <h1>{title}</h1>
      <p>{description}</p>
      <p>
        <strong>Preço:</strong>{' '}
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}
      </p>
      <button onClick={() => alert(`Adquirindo ${title}`)}>Adquirir</button>

      </div> 

    </div>

    </div>

  );
};

export default DetailPage;
