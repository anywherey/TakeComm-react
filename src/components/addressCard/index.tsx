import React, { FC, useState } from 'react';
import AllTags from '@/components/allTags';
import { Arrow,Edit } from '@react-vant/icons';
import './index.less'

interface AddressListProps {
  address: string;
  name: string;
  // 0男1女
  sex: number;
  phone: string;
  // 0家1公司2学校3父母家
  tag?: number;
}

interface AddressCardProps {
  addressList: AddressListProps;
  cardType?: string | number;
}

const AddressCard: FC<AddressCardProps& React.HTMLAttributes<HTMLDivElement>> = ({ addressList, cardType = 0,...rest }) => {
  const [showAddress, setShowAddress] = useState(false);
  const [showTime, setShowTime] = useState(false);

  return (
    <div className="addresscard" {...rest}>
      <div className="addresscard__left">
        {/* <AllTags className="addresscard__left--top--tag" setData={addressList.tag} /> */}
        <span className="addresscard__left--top--address">{addressList.address}</span>
      </div>
      <div className="addresscard__main">
        <div className="addresscard__main--left">
          <span className="addresscard__subtitle">{addressList.name}</span>
          <span className="addresscard__subtitle">{addressList.sex === 0 ? '先生' : '女士'}</span>
          <span className="addresscard__subtitle">{addressList.phone}</span>
        </div>
        {cardType === 0 && <Arrow className="addresscard__right"/>}
        {cardType === 1 && <Edit  className="addresscard__right edit" />}
      </div>
      {/* <span className="block">点餐请适量，环保又健康</span>
        <section className="addresscard__bottom" onClick={() => setShowAddress(true)}>
          <span>立即送出</span>
          <span>时间显示</span>
        </section> */}
    </div>
  );
};

export default AddressCard;