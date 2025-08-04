import { Flex, Button, Row, Col } from 'antd';
import FotoPortafolio from '../../assets/PerfilLinkedIn1.png';

export function Title({ isMobile }) {
  return (
    <Flex
      justify="center"
      align="center"
      gap={isMobile ? 20 : 40}
      vertical={isMobile}
      style={{
        maxHeight: 450,
        padding: isMobile ? '1rem' : '2rem',
      }}
    >
      <img
        src={FotoPortafolio}
        alt="picture"
        className="imageStyle"
        style={{
          objectFit: 'cover',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        }}
      />
      <Flex
        vertical
        gap={20}
        justify="center"
        style={{
          padding: 20,
          width: isMobile ? '100%' : 500,
          minWidth: isMobile ? 'unset' : 320,
        }}
      >
        <h1 style={{ fontSize: isMobile ? 32 : 62, textAlign: isMobile ? 'center' : 'left' }}>
          Welcome to my web page!
        </h1>
        <p style={{ fontSize: isMobile ? 16 : 18, textAlign: isMobile ? 'center' : 'left' }}>
          Find out my professional way and knowing me better
        </p>
        <Row style={{ gap: 20, justifyContent: isMobile ? 'center' : 'flex-start' }}>
          <Col>
            <Button size="large" className="button">
              Download CV
            </Button>
          </Col>
          <Col>
            <Button size="large" className="buttonGhost">
              Contact me
            </Button>
          </Col>
        </Row>
      </Flex>
    </Flex>
  );
}