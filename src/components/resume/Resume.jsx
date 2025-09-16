import React from 'react'
import { Flex, Typography, Button } from 'antd'
import orangeCat from '../../assets/orange_cat.png'
import { Link } from 'react-router';
import { GradianTitle } from '../ui';
const { Text, Title } = Typography;

const Resume = () => {
  const titleStyle = {
    fontSize: "45px",
    textAlign: 'center',
    margin: 0
  }

  // Define la altura máxima para ambos elementos
  const imageMaxHeight = 350;

  return (
    <Flex
      style={{
        justifyContent: "space-around",
        alignItems: 'flex-start', // Alinea arriba
        maxWidth: '100vw',
        padding: 20,
        gap: 20,
      }}
      wrap="wrap"
    >
      <img
        src={orangeCat}
        alt="cv"
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: imageMaxHeight,
          maxHeight: imageMaxHeight,
          borderRadius: 12,
          objectFit: 'cover',
        }}
      />
      <Flex
        vertical
        style={{
          maxWidth: 700,
          minHeight: imageMaxHeight, // Igual altura que la imagen
          height: '100%',
          gap: 20,
          alignItems: 'start',
          justifyContent: 'flex-start',
        }}
      >
        <Flex gap={10}>
          <GradianTitle>Full Stack</GradianTitle>
          <Title style={{ ...titleStyle, color:'#e6e6e6fb' }}>Dev</Title>
        </Flex>
        <Text style={{ fontSize: 20, maxWidth: 700, color:'#bfbfbf' }}>
          I am a responsible, self-taught, and persevering individual with a strong desire to grow professionally and take on new challenges. I enjoy working in teams and value the importance of listening and considering different opinions to achieve better results.
        </Text>
          <Button size='large' type='primary'>
            <Link to={'/my-website/about'}>
              Learn More
            </Link>
          </Button>
      </Flex>
    </Flex>
  )
}

export default Resume