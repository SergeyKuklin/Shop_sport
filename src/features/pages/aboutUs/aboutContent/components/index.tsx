import s from './index.module.css';

type PropsExpBlock = {
    title: string,
    text: string,
}

export const AboutExpBlock = ({title, text}: PropsExpBlock) => {
    return (
        <div>
            <div className={s.expItem}>
                <p>{title}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}