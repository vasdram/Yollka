import { FC } from 'react';

import { appMenu, prodMenu } from '@constants/MenuData';

import { MenuApp } from '@components/Header/components/Nav/components/MenuApp';
import { MenuProd } from '@components/Header/components/Nav/components/MenuProd';
import styles from './Nav.module.scss';

export const Nav: FC = () => {
    return (
        <nav className={styles.nav}>
            <MenuProd menu={prodMenu} />
            <MenuApp menu={appMenu} />
        </nav>
    );
};
