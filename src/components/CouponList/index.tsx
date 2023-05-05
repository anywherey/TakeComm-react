import React, { FC } from 'react';
import './index.less'
interface ShopBasicProps {
  memberRedEnvelope?: {
    reach: number;
    haveAThreshold: boolean;
  };
  dailyGodVoucher?: Array<{
    sub: number;
    reach: number;
  }>;
  allowance?: Array<{
    deduction: number;
  }>;
  fullSubtraction?: Array<{
    sub: number;
    reach: number;
  }>;
  maximumNoThreshold?: number;
}

const ShopBasic: FC<{ shopBasic: ShopBasicProps &React.HTMLAttributes<HTMLDivElement> }> = ({ shopBasic,...rest }) => {
  return (
    <>
    <div {...rest}></div>
    </>
  )
}