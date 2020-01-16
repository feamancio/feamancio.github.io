import styled from 'styled-components';
import picture from '../../assets/portbackground.png'


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
`
export const Header = styled.div`
font-size: 18px;
padding: 1.5em;
font-family: 'PT Sans', sans-serif;

`
export const Bodytext = styled.div`
font-size: 16px;
font-family: 'PT Sans', sans-serif;
text-align: center;

`
export const Title = styled.div`
font-size: 25px;
font-family: 'Dosis', sans-serif;
color: black;
`
export const PictureContainer = styled.div`
padding: 1em;
`