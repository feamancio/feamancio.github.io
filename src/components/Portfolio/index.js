import React from 'react'

import { Container,
Bodytext,
Title,
PictureContainer,
Header,
} from './styled'

import VertraWork from '../../assets/vertra.png'


const Portfolio = () => {

  return (

    <Container>
      <Title> PORTFOLIO</Title>
        <Header>
        Selection of my work on the continuous process to project ideas and achieve solutions
        </Header>
        <img src={VertraWork} alt="" width={700} />
        <PictureContainer> </PictureContainer>
        <Bodytext>I’m currently working on Vertra’s frontend and UX Design. Since 2019, <br /> I’ve been supporting the team on the best solutions for the visual and usability of the platform. </Bodytext>

    </Container>
  )
}


export default Portfolio 
