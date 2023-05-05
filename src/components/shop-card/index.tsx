import React from 'react'
import './index.less'
interface props {
    dataSave:{[key:string]:any},
    }
const shopCard:React.FC<props&React.HTMLAttributes<HTMLDivElement>>=({dataSave,...rest})=>{
    return (
            <div  className="shopCard pd16 mg-5" {...rest}>
                <img src="" alt="未查找到图片" />
                <div className="shopCard_words">
                    <section>
                        <h2>{dataSave.shopName}</h2>
                    </section>
                    <section className="font">
                        <span>{dataSave.shopScore}分</span>
                        <span> 月售{dataSave.shopMonthSales}</span>
                        <span> 人均¥{dataSave.shopAverageSales}</span>
                        <span className="float-right">美团专送</span>
                    </section>
                    <section className="font">
                        <div>
                            <span>起送¥{dataSave.StartingSale}</span>
                            <span>配送 约¥{dataSave.deliverableSale}</span>
                            <div className="float-right">
                                <span>{dataSave.shopTimeSpending}分钟</span
                                ><span
                                    v-html="
                    dataSave.shopDistance / 1000 >= 1
                      ? ` ${(dataSave.shopDistance / 1000).toFixed(2)}km`
                      : ` ${dataSave.shopDistance}m`
                  "
                                ></span>
                            </div>
                        </div>
                    </section>
                    <section className="font flex">
                        <div><div className="normalIndex">{dataSave.normalIndex}</div></div>
                        <div><div className="regionIndex margin-left-xs">{dataSave.regionIndex}</div></div>
                    </section>
                    <section className="font flex margin-top-xs">
                        <div><div className="promotionIndex">{dataSave.promotionIndex}</div></div>
                        <div></div>
                    </section>
                </div>
            </div>
    )
    
}
export default shopCard