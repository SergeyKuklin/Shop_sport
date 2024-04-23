import { CardItem } from "./cardItem/carditem";
import s from './cards.module.css';
import { mockCards } from "./model/mockCards";

export const Cards = () => {

    const listItem = mockCards.filter((Card) => (
        Card.id <= 3
    ));

    return (
        <div>
            <div className={s.cardsPosition}>

                {listItem.map((cards, id) => <CardItem cardData={cards} key={id}/>)}
                {/* <CardItem /> */}
            </div>
        </div>
    )
}