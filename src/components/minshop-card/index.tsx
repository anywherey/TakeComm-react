import React, { useState, useEffect } from "react";
import './index.less'
interface MiniShopCardProps {
  currentList: { [key: string]: any },
//   {
//     goodsName: string;
//     goodsOldPrice: number;
//     goodsPrice: number;
//     amount: number;
//     foodList: {
//       name: string;
//       price: number | string;
//       isChoose: boolean;
//     }[];
//   };
}

const MiniShopCard: React.FC<MiniShopCardProps&React.HTMLAttributes<HTMLDivElement>> = ({ currentList,...rest }) => {
  const [oldPrice, setOldPrice] = useState(0);
  const [totalPrices, setTotalPrices] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentList) {
      console.log(currentList);
      setDescription("");
      let price = 0;
      currentList.foodList.forEach((item:any, index:number) => {
        if (item.isChoose === true) {
          price += parseInt(item.price) || 0;
        }

        if (index !== currentList.foodList.length - 1) {
          setDescription(description + item.name + ",");
        } else {
          setDescription(description + item.name);
        }
      });
      console.log(description);
      setOldPrice(
        (parseInt(currentList.goodsOldPrice) + price) * parseInt(currentList.amount)
      );
      setTotalPrices(
        (parseInt(currentList.goodsPrice) + price) * parseInt(currentList.amount)
      );
    }
  }, [currentList]);

  return (
    <div className="minishopcard" {...rest}>
      <div className="minishopcard-img">
        <img src="@/assets/pics/reconnect.jpg" alt="none" />
      </div>
      <div className="minishopcard-mid__title">
        <span>{currentList.goodsName}</span>
      </div>
      <span className="minishopcard-mid__subtitle">{description}</span>
      <span className="minishopcard-mid__subtitle">
        x{currentList.amount}
      </span>
      <span className="minishopcard-mid__bprice">¥{oldPrice}</span>
      <span className="minishopcard-mid__aprice">{totalPrices}</span>
      <span className="minishopcard-mid__subtitle minishopcard-mid__subtitle--jt">
        含5元津贴
      </span>
    </div>
  );
};

export default MiniShopCard;