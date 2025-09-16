import { Typography, Progress, Flex } from "antd"

const ProgressBar = ({label, ...props}) => {
  return (
    <Flex vertical style={{ maxWidth: 600 }}>
        <Typography.Paragraph style={{color:"white", marginBottom:0}}>{label}</Typography.Paragraph>
        <Progress {...props} />
    </Flex>
  )
}

export default ProgressBar