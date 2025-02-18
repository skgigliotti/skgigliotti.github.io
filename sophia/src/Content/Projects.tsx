import { Card, Flex, Modal } from 'antd';
import { useState } from 'react';

const { Meta } = Card;

const cardStyle = {width: '25em', fontSize: '18px'}
const imgStyle = {width: '100%'}
const imgContainerStyle = { overflow: "hidden", height: "8em" }


function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Flex gap='4em' wrap justify='left'>
    <Card 
        cover={
            <div style={imgContainerStyle}>
                <img 
                    alt='Screenshot of the Fetch, Compare, Build app'
                    style={imgStyle}
                    src={require("./images/fetch_compare_build.png")}/>
            </div>}
        style={cardStyle}>
    <Meta
      title={<a href='https://github.com/ASTHA22/Hack-for-social-impact---Bay-area-affordable-housing-development' target='blank'>Fetch, Compare, Build</a>}
      description="Hackathon project to retreive and compare building codes to help developers maximize housing resources in the Bay Area, created with Fetch.ai agents. Placed in the top 10 projects."
    />
    </Card>
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
      title={<a onClick={showModal}>Fridge Poetry</a>}
      description="Project to learn about React and deepen knowledge of Flexbox and responsive design"
    />
    <Modal width='75%' styles={{body: {height: '75em'}}} title="Fridge Poetry" open={isModalOpen} footer={null} onCancel={handleCancel}>
        <iframe style={{ width: '100%', height: '100%' }} src='https://skgigliotti.github.io/fridge-poetry/'></iframe>
    </Modal>
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
      title='Lost in Translation'
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
