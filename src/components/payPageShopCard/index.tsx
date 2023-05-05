import { useState } from "react";
import { Arrow } from "@react-vant/icons";
import AllTags from "@/components/allTags";
import MiniShopCard from "@/components/minshop-card";
import './index.less'
type CurrentList = {
  name: string;
  price: number;
  count: number;
};

type ShopCardProps = {
  cartList: { [key: string]: any };
  packingCharge: number;
  totalPay: number;
  isCoupon: boolean;
  toCoupon: (type: number) => void;
};

const PayPageShopCard: React.FC<ShopCardProps & React.HTMLAttributes<HTMLDivElement>> = ({
  cartList,
  packingCharge,
  totalPay,
  isCoupon,
  toCoupon,
  ...rest
}) => {
  const [setData] = useState<number>(5);
  cartList = [
    {
      amount: 2,
      category: "鲜萃咖啡",
      foodList: [{
        id: 1,
        isChoose: true,
        name: "标准",
        price: 7
      },
      {
        id: 1,
        isChoose: true,
        name: "正常冰"
      },
      {
        id: 1,
        isChoose: true,
        name: "正常糖",
      }, {
        id: 1,
        isChoose: true,
        name: "原味",
      }],
      goodsId: 1,
      goodsName: "雪王雪顶咖啡",
      goodsOldPrice: 7,
      goodsPrice: 9,
      goodsSale: 4000,
      goodsfavor: 0.83,
      isCollect: false,
      packingCharge: 1,
      shopid: 1,
      specifications: 1
    }
  ]
  return (
    <div className="shopcard" {...rest}>
      <div className="shopcard-top">
        <span>商家名</span>
        <AllTags setData={setData} />
      </div>
      {cartList.map((item:any, index:number) => (
        <MiniShopCard key={index} currentList={item} />
      ))}
      <div className="keepToSide">
        <span>打包费</span>
        <span>¥{packingCharge}</span>
      </div>
      <div className="keepToSide">
        <div>
          <span>用户配送费</span>
          <span>活动减2元配送费</span>
        </div>
        <span>¥3.5</span>
      </div>
      <div className="keepToSide">
        <span>门店新门客立减</span>
        <span>¥2</span>
      </div>
      {isCoupon && (
        <>
          <div onClick={() => toCoupon(0)} className="keepToSide">
            <span>美团红包</span>
            <Arrow />
          </div>
          <div onClick={() => toCoupon(1)} className="keepToSide">
            <span>商家代金券</span>
            <Arrow />
          </div>
        </>
      )}
      <section className="keepToSide shopcard-bottom">
        <div className="shopcard-bottom__prules">优惠规则</div>
        <div>
          已优惠<span className="shopcard-bottom__discounted">¥2</span>
          <span className="shopcard-bottom__subtotal">小计</span>
          <span className="shopcard-bottom__total">¥{totalPay}</span>
        </div>
      </section>
    </div>
  );
};
export default PayPageShopCard;