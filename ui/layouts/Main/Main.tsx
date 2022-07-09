import { FC } from 'react';

import { IMain } from '@layouts/Main/types';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import styles from './Main.module.scss';

export const Main: FC<IMain> = ({ children }) => (
    <div>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
    </div>
);
