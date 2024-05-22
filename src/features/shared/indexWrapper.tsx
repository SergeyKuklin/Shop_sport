import { ReactNode } from 'react';
import s from './index.module.css';

export const PageWrapper = ({children}: {children: ReactNode}) => {
    return (
        <div className={s.container}>{children}</div>
    )
}