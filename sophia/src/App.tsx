import './App.css';
import { Breadcrumb, Card, Flex, Layout, Menu, MenuProps, Space, Typography } from 'antd';
import { ProfileOutlined, RocketOutlined, UserOutlined } from '@ant-design/icons';

import About from './Content/About';
import Portfolio from './Portfolio';
import Projects from './Content/Projects';
import Experience from './Content/Experience';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;


function App() {

  return (
    <Layout className='App'>
      <Flex vertical={true} justify='center' align='center' style={{backgroundColor: '#ffffff'}}>
        <Title level={1}>Sophia Gigliotti</Title>
        <Portfolio/>
      </Flex>
      <Content style={{backgroundColor: '#ffffff', minHeight: '75%', padding: '4em'}}>
        <Title level={2}>About</Title>
        <About/>
        <Title level={2}>Experience</Title>
        <Experience/>
        <Title level={2}>Projects</Title>
        <Projects/>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: '#ffffff' }}>
        ©{new Date().getFullYear()} Sophia Gigliotti
      </Footer>
    </Layout>
  );
}

export default App;
