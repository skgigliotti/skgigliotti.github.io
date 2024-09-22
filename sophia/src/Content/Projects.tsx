import { Breadcrumb, Card, Flex, Layout, Menu, MenuProps, theme } from 'antd';

const { Meta } = Card;

const cardStyle = {width: '25em', fontSize: '18px'}
const imgStyle = {width: '100%'}
const imgContainerStyle = { overflow: "hidden", height: "8em" }

function Projects() {

  return (
    <Flex gap='4em' wrap justify='left'>
    <Card 
        cover={
            <div style={imgContainerStyle}>
                <img 
                    alt='Virtual magnets creating poetry on a virual fridge'
                    style={imgStyle}
                    src={require("./images/letters.jpg")}/>
            </div>}
        style={cardStyle}>
    <Meta
      title={<a href='https://skgigliotti.github.io/fridge-poetry/' target='blank'>Fridge Poetry</a>}
      description="Project to learn about React and deepen knowledge of Flexbox and responsive design"
    />

    </Card>
    <Card 
        cover={
            <div style={imgContainerStyle}>
                <img
                    alt='Open book'
                    style={imgStyle}
                    src={require("./images/book.jpg")}/>
            </div>}
        style={cardStyle}>
    <Meta
      title={<a href='' target='blank'>Lost in Translation</a>}
      description='Capstone project to combine both college majors, Computer Science and Spanish Language, that used Markov models and sentiment analysis to compare human and computer translation accuracy'
    />
    </Card>
    <Card
        cover={
            <div style={imgContainerStyle}>
                <img 
                    alt='Project logo of two hands reaching out to each other'
                    style={imgStyle}
                    src={require("./images/helping_hands.png")}/>
            </div>}
        style={cardStyle}>
    <Meta
      title={<a href='https://github.com/Suzanna-Neely-Yates/education-app' target='blank'>Helping Hands</a>}
      description="Providing K-12 educators and guidance councilors with a tool to monitor students' mental well-being through daily/weekly check-ins to prevent against isolation, abuse and self-harm."
    />

    </Card>
    </Flex>
    
  );
}

export default Projects;
