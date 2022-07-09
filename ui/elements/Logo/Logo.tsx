import logo from '@images/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const Logo: FC = () => (
    <Link href="/">
        <a className="flex-grow">
            <Image src={logo} width={143} height={50} alt="Yolka - пиломатериалы" />
        </a>
    </Link>
);
