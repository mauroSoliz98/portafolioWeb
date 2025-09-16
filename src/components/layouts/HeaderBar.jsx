import { Layout, Menu } from "antd"
import { navigationLinks } from "../../consts"
const {Header} = Layout

const HeaderBar = () => {
  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={navigationLinks}
      />
    </Header>
  )
}

export default HeaderBar