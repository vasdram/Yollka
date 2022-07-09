import { FC } from 'react';

import cn from 'classnames';

import logo from '@images/Logo.svg';
import logoWhite from '@images/LogoWhite.svg';
import Image from 'next/image';
import Link from 'next/link';

import { ILogo } from '@elements/Logo/types';

import styles from './Logo.module.scss';

export const Logo: FC<ILogo> = ({ isWhite }) => (
    <Link href="/">
        <a className="flex-grow">
            <Image
                src={isWhite ? logoWhite : logo}
                width={143}
                height={50}
                alt="Yolka - пиломатериалы"
            />
        </a>
    </Link>
);
