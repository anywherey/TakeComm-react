import { useLocation } from 'react-router-dom'
import { Tabs, Swiper, Image } from 'react-vant'
import './index.less'
import OrderList from './shopContent/orderList';
import BottomShopping from '@/components/bottomShopping';
export default function ShopDetails() {
    const state = useLocation()
    const shopid = state.state.shopid
    const items = ['点菜', '评价', '商家']
    const images = [
        'https://img.yzcdn.cn/vant/apple-4.jpg',
        'https://img.yzcdn.cn/vant/apple-5.jpg',
        'https://img.yzcdn.cn/vant/apple-6.jpg',
    ];
    
    const orderList = (
    <>
    <Swiper autoplay={5000}>
        {images.map((image, index) => (
            <Swiper.Item key={index}>
                <div>
                    <Image className='image' lazyload src={image} />
                </div>
            </Swiper.Item>
        ))}
    </Swiper>
    <OrderList />
    </>
    )
    return (
        <>
            <div id='tabs'>
                <Tabs defaultActive={0} >
                    {items.map((item, index) => (
                        <Tabs.TabPane key={item} title={`${item}`}>
                            {index === 0 ?
                                orderList
                                : index === 1 ? <></> : null}
                        </Tabs.TabPane>
                    ))}
                </Tabs>
                <BottomShopping></BottomShopping>
            </div>
        </>
    )
}