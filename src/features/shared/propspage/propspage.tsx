import { ReactNode } from 'react';
import s from './propspage.module.css';

type PropsWrapper = {
    children?: ReactNode,
}

export const PageContainer = ({children}:PropsWrapper) => {
    return (
        <div className={s.container}>{children}</div>
    )
}