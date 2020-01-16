import React from 'react'

import { Container,
Header,
Bodytext,
BackColor,
Title,
 } from './styled'

const Skills = () => {

  return (
      <Container>
          <BackColor>
          <Title> SKILLS</Title>
          <Header>
        Development: 
    </Header>
    <Bodytext>
        Frontend: <br />
             React  <br />
             CSS  <br />
             Javascript <br /> 
             Material-UI  <br />
             Jest  <br />
             Storybook  <br />
           
        More: <br />
          
             Git  <br />
             Docker  <br />
            Hotjar <br />
           
    </Bodytext>
    <Header>
        Linguistic <br />
    </Header>
    <Bodytext>
          
              Translator: Portuguese - English - Spanish   <br /> 
              Certiified Translator in Portuguese English - English Portuguese   <br />
              Interpreter: Portuguese - English - Spanish   <br />
           
    </Bodytext>
    <Header>
        Environment, Law and International Relations<br />
    </Header>
    <Bodytext>
          
         Cofounder of Verde+Limpo - Nonprofit Organization with the purpose of cleaning green areas of Minas Gerais.   <br />
         Intern and Law Assistant of Environmental Law - Analisis of International legislation regarding Environmental Law.  <br /> 
         Home Office Law Assistant - Compilation of Environment Legislation of South America and Moçambique.   <br />
           
    </Bodytext>
          </BackColor>
    </Container>
  )
}


export default Skills
