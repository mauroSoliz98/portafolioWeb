import React from 'react'
import Retrato from '../assets/auto-retrato.png'
import { skillsData, certificationsData } from '../consts'
import { GradianTitle, ProgressBar, CertificationCard } from '../components/ui'
import { Flex, Typography } from 'antd'
const { Title, Paragraph } = Typography

const About = () => {
  const titleStyle = {
    fontSize: "45px",
    textAlign: 'center',
    margin: 0
  }
  return (
    <Flex vertical align='center' justify='center' style={{ minHeight: '100vh', padding: '20px' }}>
      {/*sección de más detalles sobre mí */}
      <Flex align='center' justify='space-around' gap={50} style={{ flexWrap: 'wrap' }}>
        <img src={Retrato} alt="retrato" />
        <Flex vertical gap={10} style={{ maxWidth: 600 }}>
          <GradianTitle>Profile</GradianTitle>
          <Paragraph style={{ color: '#bfbfbf', fontSize: 18, textAlign: 'justify' }}>
            I am a responsible, self-taught, and persevering individual with a strong desire to grow professionally and take on new challenges. I enjoy working in teams and value the importance of listening and considering different opinions to achieve better results.
            <br />
            I'm passionate about web development and constantly seek to update and expand my knowledge in this area. Additionally, in my free time, I enjoy watching movies and learning new languages, which helps me broaden my vision, develop creativity, and improve my communication skills.
          </Paragraph>
          <GradianTitle>My Skills</GradianTitle>
          <Flex wrap="wrap" gap={16} style={{ width: '100%' }}>
            {skillsData.map(({ skill, level, color }) => (
              <ProgressBar
                key={skill}
                label={skill}
                percent={level}
                percentPosition={{ align: 'end', type: 'inner' }}
                strokeColor={color}
                size={[250, 20]}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex vertical align='center' justify='center' style={{ width: '100%', marginTop: 50 }}>
        <GradianTitle>Certifications</GradianTitle>
        <Flex wrap="wrap" justify='center' style={{ maxWidth: 1000, marginTop: 20 }}>
          {
            certificationsData.map(({ image, name, date, parner }, index) => (
              <CertificationCard
                key={index}
                image={image}
                title={name}
                description={`${parner} - ${date}`}
              />
            ))
          }
        </Flex>
      </Flex>
      <Flex vertical align='center' justify='center' style={{ width: '100%', marginTop: 50 }}>
        <GradianTitle>Education</GradianTitle>
        <Flex wrap="wrap" justify='center' style={{ maxWidth: 1000, marginTop: 20 }}>
          <CertificationCard
            image="https://i.imgur.com/ZnJtc91.png"
            title="Bachelor's Degree in Humanities"
            description="Latinoamerican institude - Graduated in 2017"
          />
          <CertificationCard
            image="https://i.imgur.com/3O6w5eK.png"
            title="Engineering Systems Degree"
            description="Universidad Privada Franz Tamayo - in progress"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default About