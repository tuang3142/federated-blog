import Head from 'next/head';
import Prism from 'Prismjs';
import React, { useEffect } from 'react';
import Header from '../Header';
import styles from './Layout.module.css';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}
const Layout = ({ children, title }: LayoutProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: 'WeBuild Community Blog'
};

export default Layout;
