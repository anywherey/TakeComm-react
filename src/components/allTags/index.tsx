import { Tag } from 'react-vant';
import React, { FC } from 'react'
import './index.less'
type TagProps = {
    type: 'default' | 'primary' | 'success' | 'warning' | 'danger';
    size: '' | 'mini' | 'medium' | 'large';
    color: string;
    show: boolean;
    plain: boolean;
    round: boolean;
    mark: boolean;
    textColor: string;
    closeable: boolean;
    title: string;
}
interface TagEvents {
    onClick?:(e: React.MouseEvent) => void;
    onClose?:(e: React.MouseEvent) => void;
}
interface AllTagsProps {
    Props?: Partial<TagProps>;
    Events?: Partial<TagEvents>;
    // 0家1公司2学校3父母家4商家自配5专送
    setData?: number;
}
const AllTags: FC<AllTagsProps& React.HTMLAttributes<HTMLDivElement>> = ({ Props = {}, Events = {},setData=1,...rest }) => {

    const type = Props.type || 'default',
        size = Props.size || '',
        show = Props.show || true,
        plain = Props.plain || false,
        round = Props.round || false,
        mark = Props.mark || false,
        closeable = Props.closeable || false
    let color = Props.color || ''
    let textColor = Props.textColor || 'white'
    let title = Props.title || '标签'
    const { onClick = () => { console.log('点击') }, onClose = () => { console.log('关闭') } } = Events;
    switch (setData) {
        case 0:
            title = '家'
            color = "#fdf3d9"
            textColor = "#e9751a"
            break
        case 1:
            title = '公司'
            color = "#e8ebf7"
            textColor = "#387fcc"
            break;
        case 2:
            title = '学校'
            color = "#ecf9e5"
            textColor = "#4bad56"
            break;
        case 3:
            title = '父母家'
            color = "#f6e2e0"
            textColor = "#a86a43"
            break;
        case 4:
            title = '商家自配'
            color = "#ffffff"
            textColor = "#c0c0c0"
            break;
        case 5:
            title = '美团专送'
            color = "#e8c17d"
            textColor = "#412508"
            break;
        default:
            break;
    }

    return (
        <>
            <Tag
                {...rest}
                type={type}
                size={size}
                color={color}
                show={show}
                plain={plain}
                round={round}
                mark={mark}
                textColor={textColor}
                closeable={closeable}
                onClick={onClick}
                onClose={onClose}
            />
        </>
    )
}
export default AllTags;