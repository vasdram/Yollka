import { FC } from 'react';

import Link from 'next/link';

import { IMenuApp } from '@components/Header/components/Nav/types';

import styles from './MenuApp.module.scss';

export const MenuApp: FC<IMenuApp> = ({ menu }) => {
    return (
        <div className={styles.menuApp}>
            {menu.map(({ id, link, name }) => (
                <Link key={id} href={link}>
                    <a className={styles.link}>{name}</a>
                </Link>
            ))}
        </div>
    );
};
