import {Flex, Button, Row, Col} from 'antd'
import FotoPortafolio from '../../assets/fotoPortafolio.jpg'

export function Title() {
  return (
    <>
      <Flex justify='center' gap={40} style={{maxHeight:450}}>
        <img src={FotoPortafolio} 
             alt="picture"
             className='imageStyle' 
        />
        <Flex vertical gap={20} justify='center' style={{padding:20, width:500}}>
          <h1 style={{fontSize: 62}}>Welcome to my web page!</h1>
          <p style={{fontSize:18}}>Find out my professional way and knowing me better</p>
          <Row style={{gap:20}}>
            <Col>
              <Button size='large' className='button'>
                Download CV
              </Button>
            </Col>
            <Col>
              <Button size='large' className='buttonGhost'>
                Contact me
              </Button>
            </Col>
          </Row>
        </Flex>
      </Flex>
    </>
  )
}
