import styled from 'styled-components';
import picture from '../../assets/skills5.png'

export const Container = styled.div`
 min-height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: flex-start;
 color: black;
 padding: 2em;
 font-family: 'PT Sans', sans-serif;
 background-image: url(${picture});
 background-size: cover;
 text-align: center;

`
export const Header = styled.div`
font-size: 18px;
font-weight: bold;
color: burlywood;
padding: 1em;

`
export const Bodytext = styled.div`
font-size: 16px;
color: azure;
`
export const BackColor = styled.div`
background: rgba(38, 44, 44, 0.7);
padding: 1em; 
`
export const Title = styled.div`
font-size: 25px;
font-family: 'Dosis', sans-serif;
color: white;
`

