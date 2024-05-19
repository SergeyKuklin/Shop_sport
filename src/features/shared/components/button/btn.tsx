import { Children, ReactNode } from 'react';
import s from './btn.module.css';

type PropsBtn = {
    text: string,
    className?: ReactNode
}

export const ButtonGrey = ({text, className}: PropsBtn) => {
    return (
        <div>
            <div>
                <button className={s.btnBlock}>{text}</button>
            </div>
        </div>
    )
}