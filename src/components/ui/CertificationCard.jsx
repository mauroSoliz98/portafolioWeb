import React from 'react'
import { Card } from 'antd'

const CertificationCard = ({image, title, description}) => {
  return (
    <Card 
      hoverable 
      style={{ width: 300, margin: '10px', backgroundColor: '#28282B', borderColor: '#333' }}
      cover={
        <img 
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: 180,
            objectFit: 'cover',
            borderRadius: '8px 8px 0 0'
          }}
        />
      }
    >
      <div>
        <div style={{ color: 'white', fontWeight: 600, fontSize: 18, marginBottom: 4 }}>{title}</div>
        <div style={{ color: 'white', fontSize: 15 }}>{description}</div>
      </div>
    </Card>
  )
}

export default CertificationCard