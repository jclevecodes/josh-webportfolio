import styled from 'styled-components';

export const HeaderRow = styled.div`
display: flex;
margin: 50px -15px -15px -15px;
flex-wrap: wrap;
align-items: center;

@media screen and (max-width: 812px) {
    /* margin-top: -100px; */
}
`

export const HeaderColumn = styled.div`
margin-bottom: -205px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;

@media screen and (max-width: 812px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    z-index: 2;
    /* margin-bottom: -250px; */
}
`

export const HeaderPicColumn = styled.div`
margin-bottom: -205px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;

@media screen and (max-width: 812px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    margin-top: 20px;
    justify-content: center;
}
`

export const TextWrapper = styled.div`
max-width: 540px;
padding: 16px;
padding-top: 30px;
padding-bottom: 30px;
box-shadow: 0 2px 2px rgb(0 0 0 / 3%), 0 6px 5px rgb(0 0 0 / 5%);
border-radius: 5px;
background-color: #fff;

&:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2);
}

@media screen and (max-width: 812px) {
    padding-bottom: 125px;
    max-width: 100%;
    /* padding-top: 100px; */
}
`
export const TopLine = styled.div`
color: #2E3630;
font-size: 22px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
font-family: 'Montserrat', sans-serif;
font-weight: 100;
`;

export const Heading = styled.h1`
/* margin-bottom: 24px; */
font-size: 48px;
line-height: 1.1;
color: #1c2237;
font-family: 'Montserrat', sans-serif;
font-weight: 800;
`;

export const SubText = styled.div`
margin-bottom: 20px;
font-size: 30px;
line-height: 1.1;
color: #2E3630;
font-family: 'Montserrat', sans-serif;
font-weight: 100;
`;


export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: flex-end;

@media screen and (max-width: 812px) {
    margin-top: 105px;
    /* padding-top: 100px; */
    /* margin-bottom: 50px; */
}
`;

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 600px;
border-radius: 5px;
box-shadow:
    0 2px 2px rgba(0, 0, 0, 0.034),
    0 6px 5px rgba(0, 0, 0, 0.048),
    0 12px 10px rgba(0, 0, 0, 0.06),
    0 22px 17px rgba(0, 0, 0, 0.052);

@media screen and (max-width: 812px) {
    /* margin-top: 105px; */
    /* padding-top: 100px; */
    margin-bottom: 50px;
}
`

export const SocialIconLink = styled.a`
color: #808080;
font-size: 24px;

&:hover {
    color: #0030f0;
}

@media screen and (max-width: 812px) {
    margin-right: 10px;
}
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 400px;

@media screen and (max-width: 812px) {
    max-width: 30%;
}
`;

export const SocialStarter = styled.div`
display: flex;
font-size: 20px;
margin-top: -20px;
padding-right: 20px;
color: #0030f0;
font-weight: bolder;

@media screen and (max-width: 812px) {
    /* max-width: 20%; */
    font-size: 16px;
}
`
