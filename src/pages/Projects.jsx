import React from 'react'
import { projectsData } from '../consts'
import { TagsTechs } from '../components/ui'
import { Flex, Typography, Card, Carousel } from 'antd'

const { Title, Text, Paragraph } = Typography

const Projects = () => {
  return (
    <Flex vertical align='center' justify='center' style={{ minHeight: '100vh', padding: '20px' }}>
      {
        projectsData.map((project, index) => (
          <Card
            key={index}
            style={{ width: '80%', marginBottom: 40, backgroundColor: '#1e2024ff' }}
            cover={
              <Carousel autoplay>
                {project.images.map((imgUrl, imgIndex) => (
                  <div key={imgIndex}>
                    <img
                      src={imgUrl}
                      alt={`Project ${project.name} Screenshot ${imgIndex + 1}`}
                      style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </Carousel>
            }
          >
            <Paragraph style={{ color: '#595959', fontSize: 16, textAlign: 'justify' }}>
              {project.description}
            </Paragraph>
            <Text strong style={{ color: '#182567' }}>Technologies:</Text>
            <Flex wrap="wrap" gap={10} style={{ marginTop: 10 }}>
              {project.technologies.map((tech, techIndex) => (
                <TagsTechs title={tech.title} icon={tech.icon}/>
              ))}
            </Flex>
          </Card>
      ))};
    </Flex>
  )
};

export default Projects;