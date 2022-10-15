import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Container: React.FC = () => (
  <main className="main">
    <Header />
    <section className="layout">layout</section>
    <Footer />
  </main>
);
