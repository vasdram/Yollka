import { FC } from 'react';

import Link from 'next/link';

import { IMenuProd } from '@components/Header/components/Nav/types';

import styles from './MenuProd.module.scss';

export const MenuProd: FC<IMenuProd> = ({ menu }) => {
    return (
        <div className={styles.menuProd}>
            <span className={styles.menuLink}>Продукция</span>
            <div className={styles.list}>
                <div className={styles.listInner}>
                {menu.map(({ id, link, name }) => (
                    <Link key={id} href={link}>
                        <a className={styles.link}>{name}</a>
                    </Link>
                ))}
                </div>
            </div>
        </div>
    );
};
