import {Flex, Col, Divider, Row} from 'antd';
import { PythonOriginal,  
         JavascriptOriginal, 
         PhpOriginal, 
         ReactOriginal, 
         DjangoPlain, 
         LaravelOriginal,  
         Html5Original, 
         Css3Original,
         FastapiOriginal,
         MysqlOriginalWordmark,
         PostgresqlOriginal,
         MongodbOriginal,
         TailwindcssOriginal,
         AntdesignOriginal,
         BootstrapOriginal,
         GitOriginal,
         GitlabOriginal   } from 'devicons-react'
import { TagsTechs } from '../card/TagsTechs';

export default function Tecnologies({isMobile}) {
    const datas = [
        {
            title: 'Programing languages',
            items: [
                {
                    title: 'JavaScrip',
                    icon: <JavascriptOriginal/>
                },
                {
                    title: 'Python',
                    icon: < PythonOriginal/>
                },
                {
                    title: 'PHP',
                    icon: <PhpOriginal/>
                }
            ],
        },
        {
            title: 'Databases',
            items: [
                {
                    title: 'MySQL',
                    icon: <MysqlOriginalWordmark/>
                },
                {
                    title: 'PostgreSQL',
                    icon: <PostgresqlOriginal/>
                },
                {
                    title: 'MongoDB',
                    icon: <MongodbOriginal/>
                }
            ]
        },
        {
            title: 'Frameworks',
            items:[
                {
                    title: 'ReactJS',
                    icon: <ReactOriginal/>
                },
                {
                    title: 'Django',
                    icon: <DjangoPlain/>
                },
                {
                    title: 'Laravel',
                    icon: <LaravelOriginal/>
                },
                {
                    title: 'FastAPI',
                    icon: <FastapiOriginal/>
                },
                {
                    title: 'React Native',
                    icon: <ReactOriginal/>
                },
            ]
        },
        {
            title: 'Design tools',
            items:[
                {
                    title: 'HTML',
                    icon: <Html5Original/>
                },
                {
                    title: 'CSS',
                    icon: <Css3Original/>
                },
                {
                    title: 'Tailwind CSS',
                    icon: <TailwindcssOriginal/>
                },
                {
                    title: 'Ant Design',
                    icon: <AntdesignOriginal/>
                },
                {
                    title: 'Bootstrap',
                    icon: <BootstrapOriginal/>
                },
            ]
        },
        {
            title: 'Version Control',
            items:[
                {
                    title: 'Git',
                    icon: <GitOriginal/>
                },
                {
                    title: 'GitLab',
                    icon: <GitlabOriginal/> 
                }
            ]
        }
    ]
  return (
    <div style={{display:'flex', flexDirection:'column', gap:10}}>
        <h1 style={{textAlign:'center'}}>Technologies</h1>
        <p style={{textAlign:'center'}}>I know to use many tecnologies such as: </p>
        <Row gutter={[24,10]}>
            {
                datas.map((data, index) => ( 
                <Col key={index} lg={8} md={12} sm={24} xs={24} >
                    <h3>{data.title}</h3>
                    <br />
                    <Row gutter={[8,8]} wrap="wrap">
                        {
                            data.items.map((item, index) =>(
                                <Col span={8} key={index}>
                                    <TagsTechs key={item.title} icon={item.icon} title={item.title}/>
                                </Col>
                        ))}
                    </Row>
                </Col>
            ))}
        </Row>
    </div>
  )
}
