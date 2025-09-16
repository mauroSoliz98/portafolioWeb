import React from 'react'
import { Flex, Typography, Card } from 'antd'
import { servicesData } from '../../consts';
const { Title, Text } = Typography;

const Services = () => {
    const titleStyle = {
        fontSize: "45px",
        textAlign: 'center',
        margin: 0
    }
    return (
        <Flex vertical justify='center' align='center' style={{marginBottom: 50}} >
            <Flex gap={10} style={{ marginBottom: 20 }}>
                <Title style={{ ...titleStyle, color: "#dededfff" }}>About</Title>
                <Title style={{ ...titleStyle, color: "#1890ff" }}>My Work</Title>
            </Flex>
            <Text style={{ marginBottom: 16, color: '#bfbfbf', fontSize: 18 }}>
                Discover my main skills and the services I provide:
            </Text>
            <Flex wrap='wrap' justify='center' align='center' gap={20}>
                {
                    servicesData.map((service, index) => (
                        <Card
                            key={index}
                            hoverable
                            style={{
                                width: 300,
                                height: 250,
                                borderRadius: 10,
                                background: "linear-gradient(135deg, #1f1f1f, #0e0a24ff)",
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ marginBottom: 16 }}>
                                {service.icon}
                            </div>
                            <Title level={3} style={{ color: '#ffffff' }}>{service.title}</Title>
                            <Text style={{ color: '#bfbfbf' }}>{service.description}</Text>
                        </Card>
                    ))
                }
            </Flex>
        </Flex>
    )
}

export default Services