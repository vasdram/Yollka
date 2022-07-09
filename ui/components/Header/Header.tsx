import { FC } from 'react';

import { Contacts } from '@components/Header/components/Contacts';
import { Nav } from '@components/Header/components/Nav';

import { Logo } from '@elements/Logo';

import styles from './Header.module.scss';

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className="wrapper flex justify-between items-center">
                <Logo />
                <Nav />
                <Contacts />
                {/*<Burger />*/}
            </div>
        </header>
    );
};
