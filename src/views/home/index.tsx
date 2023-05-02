
import Shopcard from '../components/shop-card/index'

const home=()=>{
    const dataSave:object={
        id:1,
        shopName: "蜜雪冰城",
        shopScore: "4.8",
        shopMonthSales: 2043,
        shopAverageSales: 8,
        StartingSale: 15,
        deliverableSale: 1.5,
        shopTimeSpending: 37,
        shopDistance: 8422,
        normalIndex: "点评收录7年",
        regionIndex: "广东冰淇淋人气榜第2名",
        promotionIndex: "最高7元无门槛红包",
      };
      const cardClick=()=>{
        console.log('111')
      }
      const mouseMove=()=>{
        console.log('move')
      }
      const events={
        onClick:cardClick,
        onMouseMove:mouseMove
      }
    return(
        <>
        <div>首页</div>
        <Shopcard dataSave={dataSave} events={events}></Shopcard>
        </>
    )
}
export default home