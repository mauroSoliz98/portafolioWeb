import { Flex, Card } from 'antd';

function Aboutme({ isMobile }) {
  const informations = [
    {
      title: "Passionate",
      content: "I dedicate all my effort and commitment each project i do."
    },
    {
      title: "Innovative",
      content: "I always look for new ways to resolve troubles and improving processes."
    },
    {
      title: "Collaborative",
      content: "I like woriking in teams and contributing ideas that adds to the common objetives."
    }
  ];
  return (
    <Flex vertical justify='center' style={{ marginTop: 40, marginBottom: 40 }}>
      <h1 style={{ textAlign: 'center', marginBottom:15 }}>About me</h1>
      <Flex
        gap={isMobile ? 16 : 20}
        justify='center'
        vertical={isMobile}
        style={{
          alignItems: 'center',
          flexWrap: isMobile ? 'nowrap' : 'wrap',
        }}
      >
        {informations.map((info, index) =>
          <Card
            key={index}
            hoverable
            className='cardStyle'
            style={{
              width: isMobile ? '90vw' : 350,
              minWidth: isMobile ? 'unset' : 250,
              textAlign: 'center',
              marginBottom: isMobile ? 10 : 0,
            }}
          >
            <h1 style={{ fontSize: 22 }}>
              {info.title}
            </h1>
            <p style={{ fontSize: 18 }}>
              {info.content}
            </p>
          </Card>
        )}
      </Flex>
    </Flex>
  );
}

export default Aboutme;