import { useState } from 'react';
import { Tabs,Tag } from 'react-vant'
import { StarO,Star } from '@react-vant/icons';
// import GoodsChoose from './GoodsChoose';
import { useLocation } from 'react-router-dom'
import shoptopIMG from '@/assets/shop/shop-top.png'
import BottomShopping from '@/components/bottomShopping';
import './index.less'
interface Goods {
  goodsName: string;
  goodsSale: number;
  commentList: string[];
}

interface Detail {
  header: string;
  content: string;
}

interface Props {
  goodsList?:  { [key: string]: any },
  shopBasic?:  { [key: string]: any },
}

interface ChooseList {
  isCollect: boolean;
}

const GoodsDetails: React.FC<Props> = (Props) => {
  const state = useLocation()
    const goodsList = state.state.goodsList
    console.log(goodsList)
  // const goodsList=Props.goodsList
  const shopBasic=Props.shopBasic
  const  detailList=[
    {
        header: '掌柜描述:',
        content: '爆款热销'
    },
    {
        header: '主料:',
        content: '鸡肉'
    },
    {
        header: '份量:',
        content: '1人份'
    },
    {
        header: '口味:',
        content: '微辣'
    },
]
  const [chooseList, setChooseList] = useState<ChooseList>({ isCollect: false });

  const changeActive = (key: string) => {
    // handle tab change
  };

  const toComment = () => {
    // handle comment click
  };
  return(
    <>
    <div>
      <img
        src={shoptopIMG}
        alt="图"
        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
      />
      <section className="goodsdetail--simpleinfo pd16">
        <div className="goodsdetail--simpleinfo__title">
          <div className="goodsdetail--simpleinfo__title__left">{goodsList.goodsName}</div>
          <div onClick={() => setChooseList((prevState) => ({ ...prevState, isCollect: !prevState.isCollect }))} style={{ textAlign: 'center' }}>
            {chooseList.isCollect?<StarO />:<Star className="star" />}
            <div>收藏</div>
          </div>
        </div>
        <div>
          <Tag color="#f6f6f6" textColor="black">
            灰色
          </Tag>
        </div>
        <div>
        <Tag color="#fdf8e2" textColor="#e1943a">
            橙色
          </Tag>
        </div>
        <div className="goodsdetail--simpleinfo__sale">
          月售{goodsList.goodsSale / 100 < 1 ? goodsList.goodsSale : `${parseInt(goodsList.goodsSale.toString())}+`}
        </div>
        <div className="keepToSide goodsdetail--simpleinfo__choose">
          <div className="goodsdetail--simpleinfo__choose__left">
            <span className="goodsdetail--simpleinfo__choose__left__sign">¥</span>11
          </div>
          {/* <GoodsChoose goodsList={goodsList} shopid={shopBasic.shopid} /> */}
        </div>
      </section>
      <section className="goodsdetail--detail pd16">
        <Tabs defaultActive={0} onClickTab={changeActive}>
          <Tabs.TabPane  title={"详情"}>
            {detailList.map((item:any, index:number) => (
              <div className="goodsdetail--detail__main" key={index}>
                <span className="goodsdetail--detail__title">{item.header}</span>
                <div className="goodsdetail--detail__content">{item.content}</div>
              </div>
            ))}
            <div className="goodsdetail--detail__title">价格说明？</div>
          </Tabs.TabPane>
          <Tabs.TabPane  title={"评价"}></Tabs.TabPane>
        </Tabs>
      </section>
      <section className="goodsdetail--comment pd16">
        <div className="keepToSide">
        <div className="goodsdetail--comment__title__left">外卖评价</div>
                <div className="goodsdetail--comment__title__right" onClick={toComment}>
                    { goodsList&&goodsList.commentList&&goodsList.commentList.length != 0 ? `${goodsList.commentList.length}条评价`:'暂无评价'}</div>
        </div>
        </section>
        <BottomShopping></BottomShopping>
        </div>
    </>
  );
}
export default GoodsDetails;