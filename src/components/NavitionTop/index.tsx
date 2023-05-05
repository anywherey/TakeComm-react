
import React from 'react'
import { NavBar, Search } from 'react-vant';
import './index.less'
import { useNavigate, NavigateFunction } from 'react-router-dom';

interface props {
    navType?: number;
    title?: string;
}
const NavitionTop: React.FC<props&React.HTMLAttributes<HTMLDivElement>> = ({ navType, title,...rest }) => {
    const navigate: NavigateFunction = useNavigate()
    navType=navType||0
    let navBar;
    function onClickLeft() {
        navigate(-1)
    }
    function onAddressRight() {
        console.log('router')
    }
    function handleFocus() {
        console.log('focus')
    }
    if (navType === 0) {
        navBar = (
            <NavBar title={title} fixed={true}  placeholder={true} onClickLeft={onClickLeft} />
        )
    }else if (navType === 2) {
        navBar = (
            <NavBar
                title={title}
                fixed={true}
                placeholder={true}
                rightText="按钮"
                onClickLeft={onClickLeft}
                onClickRight={onAddressRight}
            />
        )
    }else if (navType === 3) {
        navBar = (
            <div className="flex navitiontop" {...rest}>
                <section>
                    <div onClick={onClickLeft} style={{ marginLeft: '7px' }}>
                        <span style={{ color: 'white' }}>←</span>
                    </div>
                </section>
                {/* <Search
                    className="navitiontop-search"
                    placeholder="想吃点什么就搜一下吧!"
                    onFocus={handleFocus}
                /> */}
                <section className="flex">
                    <div style={{ marginRight: '20px' }}>搜索</div>
                    <div style={{ marginRight: '20px' }}>对话</div>
                    <div style={{ marginRight: '20px' }}>收藏</div>
                    <div style={{ marginRight: '10px' }}>···</div>
                </section>
            </div>
        )
    }
        return (
            <>
                {navBar}
            </>
        )
    }
export default NavitionTop