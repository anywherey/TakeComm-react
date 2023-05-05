import React, { useState } from 'react';
import { Popup, Radio, Tabs, Switch } from 'react-vant';
import { Arrow } from '@react-vant/icons';
import AddressCard from '@/components/addressCard';
import PayPageShopCard from '@/components/payPageShopCard';
import './index.less'
interface Address {
    address: string;
  name: string;
  // 0男1女
  sex: number;
  phone: string;
}

interface Payment {
    type: string;
    isChoose: boolean;
}

interface Props {
    addressChoosing:{[key:string]:any} 
    // Address[];
}

const PayPage: React.FC<Props> = ({ addressChoosing }) => {
    const [active, setActive] = useState(0);
    const [nowPayWay, setNowPayWay] = useState('支付宝');
    const [checked, setChecked] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [showPayWay, setShowPayWay] = useState(false);
    const [payWayList, setPayWayList] = useState<Payment[]>([
        { type: '支付宝', isChoose: true },
        { type: '微信支付', isChoose: false },
    ]);
    const [showAddress, setShowAddress] = useState(false);
    const [addressList, setAddressList] = useState<Address[]>([
        { name: '张三', phone: '13800000001',sex:0, address: '广州市天河区xxx路xx号' },
        { name: '李四', phone: '13800000002',sex:0, address: '广州市白云区yyy路yy号' },
    ]);
    const [checkedAddress, setCheckedAddress] = useState(0);
    const [popupHeight, setPopupHeight] = useState('30%');

    const showAdds = () => {
        setShowAddress(true);
        setShowPopup(true);
        setPopupHeight('70%');
    };

    const changeSwitch = (value: boolean) => {
        setChecked(value);
    };

    const payWay = () => {
        setShowPayWay(true);
        setShowPopup(true);
        setPopupHeight('50%');
    };

    function payWayChoose (index: number){
        const newList = payWayList.map((item, i) =>
            i === index ? { ...item, isChoose: true } : { ...item, isChoose: false }
        );
        setPayWayList(newList);
        setNowPayWay(newList[index].type);
        setShowPopup(false);
    }

    function radioChoose(index: number){
        setCheckedAddress(index);
        setShowPopup(false);
    }
    return (
        <div className="payPage">
            <section className="payPage--takemode pdl6">
                <div className="payPage--takemode__content">
                    <Tabs v-model={active}>
                        <Tabs.TabPane title="外卖配送" />
                        <Tabs.TabPane title="到店自取" />
                        <div className="pdl6" onClick={showAdds}>
                            { <AddressCard addressList={addressList[0]} />}
                        </div>
                    </Tabs>
                </div>
            </section>
            <section className="pdl6 mg6 payPage-payway">
                <div className="keepToSide" onClick={payWay}>
                    <div>支付方式</div>
                    <div className="flex">
                        <div>{nowPayWay}</div>
                        <Arrow style={{ margin: 'auto 0' }} />
                    </div>
                </div>
                <div className="payPage-payway__grey">
                    开启<span className="payPage-payway__grey--gold">极速支付</span>,一键下单并支付,方便快捷<Switch
                        className="payPage-payway__grey--switch" size="18px" v-model="checked" onChange={changeSwitch} /></div>
            </section>

        <PayPageShopCard className="pdl6 mg6"></PayPageShopCard>



            <Popup visible={showPopup} style={{ height: popupHeight }}
        position='bottom'>
                {/* 支付弹出层 */}
                {showPayWay && (
                    <section>
                        <div className="payPage-popup__title">支付方式</div>
                        {payWayList.map((item: any, index: number) => (
                            <div className='keepToside' key={index} onClick={()=>payWayChoose(index)}>
                                <span>{item.type}</span>
                                {item.isChoose && (<span>√</span>)}
                            </div>
                        ))}
                    </section>
                )}

                {/* 支付弹出层 */}
                {showAddress && (
                    <section>
                        <div className="payPage-popup__title">选择收货地址</div>
                        <Radio.Group>
                            {addressList.map((item: any, index: number) => (
                                <div className='keepToside' key={index} onClick={()=>radioChoose(index)}>
                                    <Radio style={{ padding: '0 10px' }} name={index}></Radio>
                                </div>
                            ))}
                        </Radio.Group>
                    </section>
                )}
            </Popup>

        </div>
    )
}
export default PayPage;