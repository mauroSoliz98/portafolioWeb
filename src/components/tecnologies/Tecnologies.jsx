import {Flex} from 'antd';
import { PythonOriginal,  
         JavascriptOriginal, 
         PhpOriginal, 
         ReactOriginal, 
         DjangoPlain, 
         LaravelOriginal,  
         Html5Original, Css3Original   } from 'devicons-react'
import { TagsTechs } from '../card/TagsTechs';

export default function Tecnologies() {
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
                }
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
                }
            ]
        }
    ]
  return (
    <div style={{display:'flex', flexDirection:'column', gap:10}}>
        <h1>Technologies</h1>
        <p>I know to use many tecnologies as: </p>
        <Flex gap={20}>
            {
                datas.map((data, index) => ( 
                <div key={index}>
                    <h3>{data.title}</h3>
                    <br />
                    <Flex gap="4px 0" wrap="wrap">
                        {
                            data.items.map(item =>(
                            <TagsTechs key={item.title} icon={item.icon} title={item.title}/>
                        ))}
                    </Flex>
                </div>
            ))}
        </Flex>
    </div>
  )
}
