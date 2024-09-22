import { Button, Flex } from 'antd';
import { CameraFilled, GithubFilled, LinkedinFilled } from '@ant-design/icons';


const linkStyle = {fontSize: '24px', color: '#000000', padding: '1em'}
function Portfolio() {
  return (
    <Flex vertical={false} justify='center' align='center'>
        <a target='blank' href='https://www.linkedin.com/in/sophia-gigliotti/'>
            <LinkedinFilled style={linkStyle}/>
        </a>
        <a target='blank' href='https://github.com/skgigliotti'>
            <GithubFilled style={linkStyle}/>
        </a>
        <a target='blank' href='https://www.flickr.com/photos/201411402@N02/albums/72177720320260147/'>
            <CameraFilled style={linkStyle}/>
        </a>
    </Flex>
  );
}

export default Portfolio;
