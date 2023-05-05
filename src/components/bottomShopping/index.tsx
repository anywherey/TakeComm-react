import { useState } from "react";
import { FC } from "react";
import { Popup, Radio, Button, Cell } from "react-vant";
import './index.less'
interface Props {
    totalPay: number;
    StartingSale: number;
    deliverableSale: number;
}

const BottomShopping: FC<Props& React.HTMLAttributes<HTMLDivElement>> = ({ totalPay, StartingSale, deliverableSale,...rest }) => {
    const [payType, setPayType] = useState<"0" | "1">("0");
    const [popupPay, setPopupPay] = useState<boolean>(false);
    const [payChecked, setPayChecked] = useState<string>("");

    const toPay = () => {
        setPayType("1");
    };

    const openPopupPay = () => {
        setPopupPay(true);
    };

    const toHandle = () => {
        setPayType("0");
        setPopupPay(false);
    };

    const confirmDeal = () => {
        console.log("Confirmed deal with pay method:", payChecked);
    };
    return (
        <div className="bottomShopping" {...rest}>
            <div className="flex bottomShopping-box">
                <section className="flex bottomShopping-box__left">
                    <div style={{ position: "relative" }}>
                        <div
                            style={{
                                position: "absolute",
                                left: "23px",
                                top: "-45px",
                                width: "56px",
                                height: "78px",
                            }}
                        >
                            <img
                                src="@/assets/logo.png"
                                alt="222"
                                style={{ width: "inherit", height: "inherit" }}
                            />
                        </div>
                    </div>
                    <div className="flex bottomShopping-box__left--content">
                        {totalPay < StartingSale ? (
                            <div className="bottomShopping-box__left--content--noprice">
                                <span className="bottomShopping-box__left--content--noprice__pricecolumn">
                                    <span style={{ fontSize: "14px" }}>¥</span>
                                    <span style={{ fontSize: "22px" }}>{totalPay}</span>
                                </span>
                                <span className="bottomShopping-box__left--content--noprice__distributioncolumn">
                                    预估加配送费¥{deliverableSale}
                                </span>
                            </div>
                        ) : (
                            <div className="bottomShopping-box__left--content--price">
                                <div className="bottomShopping-box__left--content--price__pricecolumn">
                                    <span style={{ fontSize: "14px" }}>¥</span>
                                    <span style={{ fontSize: "18px" }}>{totalPay}</span>
                                </div>
                                <div className="bottomShopping-box__left--content--price__distributioncolumn">
                                    预估加配送费¥{deliverableSale}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                <section
                    className="bottomShopping-box__right"
                    style={{
                        background: totalPay >= StartingSale ? "#ffd165" : "",
                    }}
                >
                    {totalPay < StartingSale && (
                        <span
                            className="bottomShopping-box__right--content"
                            style={{ color: "gray", fontSize: "13px" }}
                        >
                            ¥{StartingSale}起送
                        </span>
                    )}
                    {totalPay >= StartingSale && payType === "0" && (
                        <span
                            className="bottomShopping-box__right--content"
                            style={{ color: "black" }}
                            onClick={toPay}
                        >
                            去结算
                        </span>
                    )}
                    {payType === '1' && (
                        <span className="bottomShopping-box__right--content" style={{ color: "black" }}
                            onClick={openPopupPay}>支付订单</span>
                    )}
                </section>
            </div>
            {payType === '1' && (
                <Popup className="bottomShopping-popup" visible={popupPay} style={{ height: "80%" }}
                    position='bottom' onClose={toHandle} closeable={true}>
                    <div className="bottomShopping-popup__title">{totalPay}</div>
                    <Radio.Group value={payChecked}>
                        <Cell.Group>
                            <Cell
                                clickable
                                title='单选框1'
                                icon={<img />}
                                onClick={() => setPayChecked('1')}
                                rightIcon={<Radio name='1' />}
                            />
                            <Cell
                                clickable
                                title='单选框2'
                                icon={<img />}
                                onClick={() => setPayChecked('2')}
                                rightIcon={<Radio name='2' />}
                            />
                        </Cell.Group>
                        <Cell.Group>
                            <Cell
                                clickable
                                title='微信支付'
                                icon={<img />}
                                onClick={() => setPayChecked('微信支付')}
                                rightIcon={<Radio name='微信支付' />}
                            />
                            <Cell
                                clickable
                                title='支付宝支付'
                                icon={<img />}
                                onClick={() => setPayChecked('支付宝支付')}
                                rightIcon={<Radio name='支付宝支付' />}
                            />
                        </Cell.Group>
                    </Radio.Group>
                    <Button className="bottomShopping-popup__button" type='primary' size='normal' block={true} onClick={confirmDeal}>确认交易</Button>
                </Popup>)}

        </div>
    )
}
export default BottomShopping