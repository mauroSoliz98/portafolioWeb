import { Card, Button, Flex, Typography } from "antd"
import profilePicture from '../../assets/profilePicture.png'
import { GithubOriginal, GoogleOriginal } from "devicons-react"
import { AiOutlineDownload } from "react-icons/ai"

export const Title = ({ isMobile }) => {
  const { Text, Title } = Typography
  const textStyle = {
    fontSize: "45px",
    textAlign: 'center',
    margin: 0
  }
  const CardStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: "4px",
    borderRadius: 5,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#d0d9e2ff',
    border: '1px solid #001d52ff'
  }
  const handleDownload = () => {
  const fileUrl = '../../assets/mauro_soliz_cv.pdf'; // Replace with your file URL or data URL
  const filename = 'mauro_soliz_cv.pdf'; // Desired filename for download

  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
    <Flex style={{with: '100%', justifyContent: 'space-around', alignItems: 'center'}}>
      <Flex vertical style={{gap:5, alignItems: 'start'}}>
        <Title className = "title-1" style={{...textStyle, color:"#dededfff" }}>Full Stack Developer (FE)</Title>
        <Title className="title-2" style={{...textStyle, color:"#1890ff"}} >Mauro Soliz</Title>
        <Flex style={{gap: 10, alignItems: 'center'}}>
          <Card variant="borderless" styles={{body:{...CardStyle}}} >
              <GithubOriginal size="20" color="#001529" />
              <Text>mauroSoliz98</Text>
          </Card>
          <Card variant="borderless" styles={{body:{...CardStyle}}} >
              <GoogleOriginal size="20" color="#001529" />
              <Text>maurososoliz@gmail.com</Text>
          </Card>
        </Flex>
        <Button onClick={handleDownload} icon={<AiOutlineDownload/>} size="large" type="primary" style={{marginTop:25}}>
          Download CV
        </Button>
      </Flex>
      <img src={profilePicture} alt="Profile" style={{ width: isMobile ? '150px' : '385px', height: 500, borderRadius: 12}} />
    </Flex>
  )
}
