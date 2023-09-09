import React, {useState} from "react";
import css from "./card.module.scss";
import { Link } from "react-router-dom"
import IconHeartSolid from "src/assets/icons/heart.solid.red";
import IconHeartOutline from "src/assets/icons/heart.outline.red";
const data = {
  id: 1,
  name: "Adidas Prophere",
  alias: "adidas-prophere",
  price: 350,
  description:
    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
  size: "[36,37,38,39,40,41,42]",
  shortDescription:
    "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
  quantity: 995,
  deleted: false,
  categories:
    '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
  relatedProducts: "[2,3,5]",
  feature: true,
  image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
};
export type TCard = {
  image: string;
  name: string;
  shortDescription: string;
  price: number;
  id: number;
};
type Props = {
  data: TCard;
};

export function Card(props: Props) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
      setIsLiked(isLiked => !isLiked); // Đảo ngược trạng thái khi biểu tượng được click
  };
  const { data } = props;
  return (
    <div className={css["card"]}>
            <div className={css['icon-heart']}>
        {isLiked ? <div className={css['icon-heart-solid']} onClick={toggleLike}><IconHeartSolid /></div> : <div onClick={toggleLike} className={css['icon-heart-outline']}><IconHeartOutline /></div>}
      </div>
      <img className={css["img"]} src={data.image} />

      <div className={css["content1"]}>
        <p className={css["title"]}>{data.name}</p>
        <p className={css["desc"]}>{data.shortDescription}</p>
      </div>
      <div className={css["action"]}>
        <Link className={css["action-buy"]} to={`/detail/${data.id}`}>
          Buy
        </Link>
        <Link className={css["action-price"]} to={`/detail/${data.id}`}>
          {data.price}$
        </Link>
      </div>
    </div>
  );
}
