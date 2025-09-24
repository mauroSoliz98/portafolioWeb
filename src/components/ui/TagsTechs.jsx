import {Flex, Tag} from 'antd'

export const TagsTechs = ({icon, title}) => {
  return (
    <Tag icon={icon} style={{padding:5, display: 'flex',gap:10, alignItems:'center', justifyContent:'center', fontSize:14}} 
          color='#182567'>
       {title}
    </Tag>
  )
}
