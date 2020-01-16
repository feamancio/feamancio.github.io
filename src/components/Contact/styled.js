import styled from 'styled-components';
import LinkedIn from '../Icons/LinkedIn'
import Instagram from '../Icons/Instagram'
import picture from '../../assets/skills1.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';




export const Container = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
color: black;
padding: 2em;
font-family: 'Zilla Slab Highlight', sans-serif;
background-image: url(${picture});
background-size: cover;
font-family: 'PT Sans', sans-serif;

`
export const Bodytext = styled.div`
font-size: 20px;
padding: 1em;
`
export const Insta = styled(Instagram)` 
color: black;
padding: 0.3em;
`
export const Linked = styled(LinkedIn)` 
color: black;
padding: 0.3em;
`
export const IconsContainer = styled.div`
color:red;
`
export const Title = styled.div`
font-size: 25px;
font-family: 'Dosis', sans-serif;
color: white;
`
export const PictureContainer = styled.div`
padding: 2em;
`
export const SocialIcon = styled.div`
display: inline;
`
export const IconGithub = styled(GitHubIcon)` 
color: black;
padding: 0.3em;
`
export const Facebook = styled(FacebookIcon)` 
color: black;
padding: 0.3em;

`
