import { FC } from 'react';

import cn from 'classnames';

import IconMail from '@images/Icon-mail.svg';
import IconPhone from '@images/Icon-phone.svg';
import IconTelegram from '@images/Icon-telegram.svg';
import IconWhatsApp from '@images/Icon-whatsapp.svg';
import Image from 'next/image';

import styles from './Contacts.module.scss';

export const Contacts: FC = () => {
    return (
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
        </div>
    );
};
