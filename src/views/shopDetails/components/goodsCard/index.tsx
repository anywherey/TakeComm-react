import React,{ FC } from 'react';
import GoodsChoose from './chooseButton/index';
// import { useNavigate, NavigateFunction } from 'react-router-dom';
import { Flex } from 'react-vant';
import './index.less'
type GoodsList = {
  goodsName: string;
  goodsDiscribe: string[];
  goodsSale: number;
  goodsfavor: number;
  goodsPrice: number;
};

type ShopBasic = {
  shopid: number|string;
};

type Props = {
  goodsList: GoodsList;
  shopBasic: ShopBasic;
};

const GoodsCard: FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({ goodsList, shopBasic,...rest }) => {
    // const navigate=useNavigate()
  // const toDetails = () => {
  //   const goodsid = 1;
  //   navigate('/goodsDetails',{
  //       state:{goodsid,
  //           shopid: shopBasic.shopid,
  //           goodsList,
  //           shopBasic,}
  //      })
  // };

  return (
      /* <div onClick={toDetails} className="shopmsg"> */
      <div className="shopmsg" {...rest}>
        <Flex>
          <Flex.Item span={9} style={{ marginRight: '3%' }}>
            <img
              src="@/assets/shop/shop-list.png"
              alt="noPic"
              style={{
                width: '100px',
                height: '120px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </Flex.Item>
          <Flex.Item span={14}>
            <div className="mgb-4" style={{ fontSize: '17px', fontWeight: 800 }}>
              {goodsList.goodsName}
            </div>
            <div className="mgb-4 flex">
              {goodsList.goodsDiscribe.map((item, index) => (
                <div className="shopmsg_Discribe" key={index}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mgb-4 flex" style={{ fontSize: '14px', color: 'grey' }}>
              <div>
                月售
                {goodsList.goodsSale / 100 < 1
                  ? goodsList.goodsSale
                  : `${parseInt(goodsList.goodsSale).toString()}+`}
              </div>
              <div style={{ marginLeft: '8px' }}>
                好评度{parseInt(goodsList.goodsfavor * 100) + '%'}
              </div>
            </div>
            <div className="flex keepToSide">
              <div>
                <span>
                  <span style={{ fontSize: '14px', color: '#f4534b' }}>¥</span>
                  <span style={{ fontSize: '18px', color: '#f4534b' }}>
                    {goodsList.goodsPrice}
                  </span>
                  <span style={{ color: 'grey', fontSize: '14px' }}>起</span>
                </span>
              </div>
              <GoodsChoose goodsList={goodsList} shopid={shopBasic.shopid} />
            </div>
          </Flex.Item>
        </Flex>
      </div>
  );
};

export default GoodsCard;