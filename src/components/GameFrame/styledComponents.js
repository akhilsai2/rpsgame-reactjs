import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 110vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Container = styled.div`
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 75%;
  height: 18%;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 20px;
`
export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.4;
`
export const Heading = styled.h1`
  color: ${props => (props.check ? '#223a5f' : 'white')};
  font-size: 25px;
  font-family: 'Bree Serif';
  font-weight: 100;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 2;
  }
`
export const ScoreContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 20%;
  @media screen and (max-width: 768px) {
    width: 40%;
  }
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 25px;
  font-family: 'Bree Serif';
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const Score = styled.span`
  font-size: 55px;
  font-family: 'Roboto';
  color: #223a5f;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
`

export const UnOrderList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 35%;
  margin-top: 80px;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`
export const ButtonContainer = styled.div`
  align-self: flex-end;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    align-self: center;
  }
`
export const RuleButton = styled.button`
  background-color: white;
  border: 0px solid white;
  color: #223a5f;
  font-size: 13px;
  font-weight: 600;

  font-family: 'Roboto';
  width: ${props => (props.again ? '150px' : '90px')};
  height: 40px;
  border-radius: 5px;
`
export const RuleContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 0px solid white;
  align-self: flex-end;
`
export const ImageRule = styled.img`
  width: 500px;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`
export const GameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin-top: 80px;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
`
export const YouCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Paragraph = styled.p`
  color: white;
  font-family: 'Roboto';
  font-size: ${props => (props.game ? '23px' : '18px')};
  font-weight: ${props => (props.game ? '500' : null)};
`
export const Image = styled.img`
  width: 180px;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0;
`
