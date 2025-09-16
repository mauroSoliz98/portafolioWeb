import React from 'react'
import { Typography } from 'antd'
const { Title } = Typography;
const GradianTitle = ({children}) => {
    const titleStyle = {
        fontSize: "45px",
        textAlign: 'center',
        margin: 0,
        background: 'linear-gradient(90deg, #36008dff, #0056a7ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        display: 'inline-block',
    }
  return (
    <Title style={titleStyle}>
        {children}
    </Title>
  )
}

export default GradianTitle