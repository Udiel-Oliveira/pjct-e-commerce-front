'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Styles from './datail.module.css';
import NavBar from '../components/layout/NavBar/Navbar';
import GameShowcase from '../components/layout/Slide/GameShowCase';
import Footer from '../components/layout/Footer/Footer';
import { ST } from 'next/dist/shared/lib/utils';

const DetailPageContent = () => {
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const price = searchParams.get('price');

  if (!id) {
    return <p>Carregando informações...</p>;
  }

  return (
    <div className={Styles.body}>
      <NavBar />
      <div className={Styles.Games}>
        <div className={Styles.detalhe} id="img">
          <div className={Styles.img}></div>
        </div>

        <div className={Styles.detalhe}>
          
          
          <div className={Styles.itens}>
          <h1 className={Styles.txtTl}>{title}</h1>
            
            <p className={Styles.txt}>
            {description}

            </p>
           
          <p className={Styles.txt}>
            <strong>Preço:</strong>{' '}
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(price))}
          </p>


          <div className={Styles.btn}><button className={Styles.button}>Comprar</button></div>

          </div>

          

         
        </div>
      </div>
  <Footer/>
    </div>
  );
};

const DetailPage = () => (
  <Suspense fallback={<p>Carregando página...</p>}>
    <DetailPageContent />
  </Suspense>
);

export default DetailPage;