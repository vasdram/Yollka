import { FC } from 'react';

import cn from 'classnames';

import { appMenu, prodMenu } from '@constants/MenuData';
import IconMail from '@images/Icon-mail-white.svg';
import IconPhone from '@images/Icon-phone-white.svg';
import IconTelegram from '@images/Icon-telegram-white.svg';
import IconWhatsApp from '@images/Icon-whatsapp-white.svg';
import Image from 'next/image';
import Link from 'next/link';

import { Logo } from '@elements/Logo';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={cn(styles.top)}>
                <div className="wrapper flex flex-col md:flex-row justify-between px-[60px]">
                    <div className={styles.leftSide}>
                        <Logo isWhite />
                        <div className={styles.list}>
                            <a className={cn(styles.link, styles.whatsapp)} href="tel:+7482263-33-06">
                                <Image src={IconWhatsApp} width={24} height={24} alt="+7(4822) 63-33-06" />
                                <span className={styles.name}>WhatsApp</span>
                            </a>
                            <a className={cn(styles.link, styles.telegram)} href="tel:+7482263-33-06">
                                <Image src={IconTelegram} width={24} height={24} alt="+7(4822) 63-33-06" />
                                <span className={styles.name}>Telegram</span>
                            </a>
                            <a className={cn(styles.link, styles.mail)} href="mailto:info@yolkatrade.com">
                                <Image src={IconMail} width={24} height={24} alt="info@yolkatrade.com" />
                                <span className={styles.name}>info@yolkatrade.com</span>
                            </a>
                            <a className={cn(styles.link, styles.phone)} href={'tel:+7482263-33-06'}>
                                <Image src={IconPhone} width={20} height={16} alt="+7(4822) 63-33-06" />
                                <span className={styles.name}>+7(4822) 63-33-06</span>
                            </a>
                            <p className={styles.txt}>ООО «Империя Леса»</p>
                            <p className={styles.txt}>ОГРН 3094890458845</p>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.prodMenu}>
                            <Link href="/">
                                <a className={styles.link}>Главная</a>
                            </Link>
                            {prodMenu.map(({ id, link, name }) => (
                                <Link key={id} href={link}>
                                    <a className={styles.link}>{name}</a>
                                </Link>
                            ))}
                        </div>
                        <div className={styles.appMenu}>
                            {appMenu.map(({ id, link, name }) => (
                                <Link key={id} href={link}>
                                    <a className={styles.link}>{name}</a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn(styles.bottom, 'wrapper')}>
                <div>© 2022 yolkatrade.com</div>
                <div>Политика в отношении обработки персональных данных </div>
            </div>
        </footer>
    );
};
