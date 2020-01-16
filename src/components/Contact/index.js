import React from 'react'
import Picture from '../../assets/profile.png'

import { Container,
Bodytext,
Insta,
Linked,
IconsContainer,
Title,
PictureContainer,
SocialIcon,
IconGithub,
Facebook,
 } from './styled'

const Contact = () => {

  return (
    <Container>
      <Title> CONTACT </Title>
      <PictureContainer>
      <img src={Picture} alt="" width={200} />
      </PictureContainer>
    <Bodytext>
        Send a message to my professional email: famanciogomes@gmail.com
    </Bodytext>
    <Bodytext>
      Or, let's get social:
    </Bodytext>
    <IconsContainer>
      <SocialIcon><a href="https://www.instagram.com/fe.amancio/" target="_blank" rel="noopener noreferrer"> <Insta style={{fontSize: '32px'}} /> </a></SocialIcon>
      <SocialIcon><a href="https://www.linkedin.com/in/fernanda-am%C3%A2ncio-gomes-a11a45196/" target="_blank" rel="noopener noreferrer"><Linked style={{fontSize: '32px'}} /></a></SocialIcon>
      <SocialIcon><a href="https://github.com/feamancio" target="_blank" rel="noopener noreferrer"><IconGithub style={{fontSize: '30px'}} /></a></SocialIcon>
      <SocialIcon><a href="https://www.facebook.com/fernanda.amancio.1232" target="_blank" rel="noopener noreferrer"><Facebook style={{fontSize: '32px'}} /></a></SocialIcon>

    </IconsContainer>

    </Container>
  )
}


export default Contact
