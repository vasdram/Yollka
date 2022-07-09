import { FC } from 'react';

import { appMenu, prodMenu } from '@constants/MenuData';
import Link from 'next/link';

import styles from './MobileNav.module.scss';

export const MobileNav: FC = () => {
    return (
        <nav className={styles.mobileNav}>
            <div className={styles.wrapper}>
                <div className={styles.prod}>
                    {prodMenu.map(({ id, link, name }) => (
                        <Link key={id} href={link}>
                            <a className={styles.link}>{name}</a>
                        </Link>
                    ))}
                </div>
                <div className={styles.app}>
                    {appMenu.map(({ id, link, name }) => (
                        <Link key={id} href={link}>
                            <a className={styles.link}>{name}</a>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};
