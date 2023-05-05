
import { useState,useEffect } from 'react';
import { Popup } from 'react-vant';
import './index.less'
type GoodsListType = {
  goodsName: string;
  specifications: number;
  specificationsList: Array<Array<SpecificationsItemType>>;
  goodsSale: number;
};

type SpecificationsItemType = {
  name: string;
  isChoose: boolean;
  price: number;
};

type ChooseListType = {
  amount: number;
  selectedTags: Array<string>;
};
interface props {
  goodsList: { [key: string]: any },
  shopid: any,
  // shopBasic: {[key:string]:any};
}
const ChooseButton: React.FC<props> = (props: any) => {
  const goodsList = props.goodsList
  const shopid = props.shopid
  const [chooseList, setChooseList] = useState<any>({ amount: 0 });
  const [showPopup, setShowPopup] = useState(false);

  const [selectedStrings, setSelectedStrings] = useState("")


  // 方法
  const addOrChoose = () => {
    setShowPopup(!showPopup);
  };

  const toAddSub = (num: number) => {
    let newChooseList = chooseList
    newChooseList.amount += num
    console.log(chooseList)
    // 当数量减少到0时，重置
    newChooseList.amount===0?newChooseList={ amount: 0 }:''
    setChooseList({...newChooseList});
  };

  const close = () => {
    setShowPopup(false);
  };
  // 标签选中
  const selectTag = (item: any, inItem: any, inIndex: any, key: any) => {
    setChooseList({amount: 0})
    let selectedStrings = ""
    item.map((all: any, index: any) => {
      if (index != inIndex) {
        goodsList.specificationsList[key][index].isChoose = false
        console.log(all)
        all.isChoose = false
      } else {
        goodsList.specificationsList[key][index].isChoose = true
        all.isChoose = true
      }
    })
    goodsList.specificationsList.map((obj: any) => {
      console.log(obj)
      obj.map((selectName: any) => {
        if (selectName.isChoose === true) {
          selectedStrings += selectName.name + '、'
        }
      })
    })
    // 把末尾'、'去掉
    setSelectedStrings(selectedStrings.substring(0, selectedStrings.length - 1))

  };

  const buyButton = () => {
    let countType = 0;
    const maxType: number = goodsList.specificationsList.length;
    for (const k in goodsList) {
      if (k != 'commentList' && k != 'detailList' && k != 'goodsDiscribe' && k != 'specificationsList') {
        chooseList[k] = goodsList[k]
      }
    }
    setChooseList({...chooseList})

      const warnType:any = []

    goodsList.specificationsList.map((item:any, index:any) => {
      let searchWarnType = 0

      item.map((initem:any, inindex:any) => {
        if (initem.isChoose === true) {
          countType += 1
          searchWarnType = 0
          chooseList.foodList?'':chooseList.foodList=[]
          chooseList.foodList.push(initem)
          setChooseList({...chooseList})
          console.log(chooseList)
        } else {
          searchWarnType == item.length - 1 ?
            (warnType.push(item[0].specifiType), searchWarnType = 0)
            : searchWarnType += 1
        }
      })
    })

    
    if (countType < maxType) {
      let words = ''
      warnType.map((item:any, index:any) => {
        if (index < warnType.length - 1) {
          words += item + '、'
        } else {
          words += item
        }
      })
      alert(`请将${words}补齐`)
    } else {
      chooseList.amount = 1
      setChooseList({...chooseList})
    }

  };
  const popArrtibute = (goodsList.specificationsList.map((item: any, index: any) => (
    <div key={index}>
      <div className="mgb-10">{item[0].specifiType}</div>
      <div className="mgb-10 flex">
        {item.map((inItem: any, inIndex: any) => (
          <div
            key={inIndex}
            className={
              inItem.isChoose ? "popup_default popup_selected" : "popup_default"
            }
            onClick={() => selectTag(item, inItem, inIndex, index)}
          >
            <div
              className={
                inItem.isChoose
                  ? "popup_selectedin"
                  : "popup_selectednotin"
              }
            >
              {inItem.name}
            </div>
            {inItem.price && (
              <div
                className={
                  inItem.isChoose
                    ? "popup_selectedin_right"
                    : "popup_selectednotin_right"
                }
              >
                ¥<span>{inItem.price}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )))

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {goodsList.specifications === 1 ? (
        <div>
          <div onClick={addOrChoose} className="addbutton">
            选规格
            {chooseList.amount !== 0 && (
              <div className="addbutton_nums">{chooseList.amount >= 100 ? '...' : chooseList.amount}</div>
            )}
          </div>
        </div>
      ) : (
        <div>
          {chooseList.amount > 0 ? (
            <div className="flex">
              <div onClick={() => toAddSub(-1)} className="minussign">
                -
              </div>
              <div className="amount">{chooseList.amount}</div>
              <div onClick={() => toAddSub(1)} className="plussign">
                +
              </div>
            </div>
          ) : (
            <div onClick={() => setChooseList({ ...chooseList, amount: 1 })} className="addbutton">
              +
            </div>
          )}
        </div>
      )}
      {showPopup && (
        <section onClick={(e) => e.stopPropagation()}>
          <div onClick={() => setShowPopup(false)} className="cancel">
            X
          </div>
          <Popup className="popup pd16" visible={showPopup} onClose={() => setShowPopup(false)}>
            <div style={{ fontSize: '20px', fontWeight: 600 }}>{goodsList.goodsName}</div>
            <section className="popup_arrtibute">
              {popArrtibute}
            </section>
            <div className="mgb-10" style={{ backgroundColor: "#fbfbfb" }}>
              <div style={{ padding: "4px", marginBottom: "10px" }}>
                <span style={{ color: "gray" }}>已选规格：</span>
                <span>{selectedStrings}</span>
              </div>
            </div>
            <div className="keepToSide">
              <div>
                <div>
                  <span style={{ fontSize: "14px", fontWeight: 600 }}>总计 </span>
                  <span style={{ fontSize: "18px", color: "#f4534b" }}>¥</span>
                  <span style={{ fontSize: "18px", color: "#f4534b" }}>1.9</span>
                </div>
              </div>
              <section>
                {chooseList.amount === 0 ? (
                  <div
                    className="addbutton-medium"
                    onClick={buyButton}
                  >
                    + 加入购物车
                  </div>
                ) :
                  (
                    <div className="flex">
                      <div
                        className="minussign"
                        onClick={() => toAddSub(-1)}
                      >
                        -
                      </div>
                      <div className="amount">{chooseList.amount}</div>
                      <div
                        className="plussign"
                        onClick={() => toAddSub(1)}
                      >
                        +
                      </div>
                    </div>
                  )}
              </section>
            </div>
          </Popup>
        </section>)}
    </div>
  )
}
export default ChooseButton