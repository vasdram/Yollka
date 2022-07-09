import {FC, useState} from 'react';

import {Contacts} from '@components/Header/components/Contacts';
import {MobileNav} from '@components/Header/components/MobileNav/MobileNav';
import {Nav} from '@components/Header/components/Nav';

import {Logo} from '@elements/Logo';
import cn from 'classnames';

import styles from './Header.module.scss';

export const Header: FC = () => {
    const [active, setActive] = useState(false);
    const clickBurgerHandler = () => setActive(!active);

    return (
        <header className={styles.header}>
            <div className="wrapper flex justify-between items-center">
                <Logo />
                <Nav/>
                <Contacts/>
                <button onClick={clickBurgerHandler} className={cn(styles.burger, {[styles.active]: active})} />
                {active && <MobileNav/>}
            </div>
        </header>
    );
};
