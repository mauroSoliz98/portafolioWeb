import { Layout } from "antd"
import HeaderBar from "./HeaderBar"
import { Outlet } from "react-router"
import FooterPage from "./FooterPage"
const { Content } = Layout

const index = () => {
  const contentStyle = {  
    background: 'linear-gradient(180deg, #000103ff 0%, #000e46ff 100%)',
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <HeaderBar/>
        <Content style={contentStyle}>
            <Outlet/>
        </Content>
        <FooterPage/>    
    </Layout>
  )
}

export default index