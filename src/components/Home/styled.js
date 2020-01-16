import styled from 'styled-components';
import picture from '../../assets/background.png'

export const Container = styled.div`
 min-height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: flex-start;
 font-family: 'Zilla Slab Highlight', sans-serif;
 text-align: center;
`
export const Bodytext = styled.div`
font-size: 1em;
text-align: justify;
margin: 10px 120px 10px;
font-family: 'PT Sans', sans-serif;
font-size: 17px;
color: cornsilk;

`
export const Header = styled.div`
font-size: 30px;
padding: 2em;
font-family: 'Dosis', sans-serif;
color: snow;
`

export const Background = styled.div`
 background-image: url(${picture});
 position: absolute; 
 min-height: 100%;
 background-size: cover;
`
