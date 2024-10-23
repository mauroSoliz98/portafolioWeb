import {Flex, Card} from 'antd'

function Aboutme() {
    const informations = [
        {
            title: "Passionate",
            content:"I dedicate all my effort and commitment each project i do."
        },
        {
            title: "Innovative",
            content:"I always look for new ways to resolve troubles and improving processes."
        },
        {
            title: "Collaborative",
            content: "I like woriking in teams and contributing ideas that adds to the common objetives."
        }
    ]
  return (
    <Flex vertical justify='center' style={{marginTop:40, marginBottom:40 }}>
        <h1>About me</h1>
        <Flex gap={20} style={{marginTop:20}}>
           {
            informations.map((info,index) => 
            <Card   key={index}  
                    hoverable
                    className='cardStyle' >
                <h1 style={{fontSize: 22}}>
                    {info.title}
                </h1>
                <p style={{fontSize: 18}}>
                    {info.content}
                </p>
            </Card>
            )
           } 
        </Flex>
    </Flex>
  )
}

export default Aboutme