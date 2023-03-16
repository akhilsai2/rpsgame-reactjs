import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameItem from '../GameItem'

import {
  MainContainer,
  Heading,
  ScoreContainer,
  Container,
  HeadContainer,
  UnOrderList,
  RuleButton,
  ScoreHeading,
  Score,
  ButtonContainer,
  RuleContainer,
  CloseButton,
  ImageRule,
  GameContainer,
  ResultContainer,
  YouCont,
  Paragraph,
  Image,
} from './styledComponents'

class GameFrame extends Component {
  state = {
    randomChoice: '',
    score: 0,
    FinishGame: false,
    MyChoice: '',
    result: '',
  }

  componentDidMount() {
    this.randomOption()
  }

  again = () => {
    this.setState({FinishGame: false})
    this.randomOption()
  }

  randomOption = () => {
    const {list} = this.props
    const randomNumber = Math.floor(Math.random() * list.length)
    this.setState({randomChoice: list[randomNumber]})
  }

  YourChoice = id => {
    const {randomChoice} = this.state
    const {list} = this.props
    const myChoice = list.find(each => each.id === id)
    if (randomChoice.id === id) {
      this.setState(prevState => ({
        score: prevState.score,
        FinishGame: true,
        MyChoice: myChoice.imageUrl,
        result: 'IT IS DRAW ',
      }))
    } else if (id === 'ROCK' && randomChoice.id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        FinishGame: true,
        MyChoice: myChoice.imageUrl,
        result: 'YOU WON',
      }))
    } else if (id === 'SCISSORS' && randomChoice.id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        FinishGame: true,
        MyChoice: myChoice.imageUrl,
        result: 'YOU WON',
      }))
    } else if (id === 'PAPER' && randomChoice.id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        FinishGame: true,
        MyChoice: myChoice.imageUrl,
        result: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        FinishGame: true,
        MyChoice: myChoice.imageUrl,
        result: 'YOU LOSE',
      }))
    }
  }

  render() {
    const {list} = this.props
    const {randomChoice, FinishGame, score, MyChoice, result} = this.state
    return (
      <>
        <MainContainer>
          <Container>
            <HeadContainer>
              <Heading>
                ROCK
                <br />
                PAPER
                <br />
                SCISSORS
              </Heading>
            </HeadContainer>
            <ScoreContainer>
              <ScoreHeading>
                Score
                <br />
                <Score>{score}</Score>
              </ScoreHeading>
            </ScoreContainer>
          </Container>
          {FinishGame ? (
            <>
              <GameContainer>
                <YouCont>
                  <Paragraph>YOU</Paragraph>
                  <Image src={MyChoice} alt="your choice" />
                </YouCont>
                <YouCont>
                  <Paragraph>OPPONENT</Paragraph>
                  <Image src={randomChoice.imageUrl} alt="opponent choice" />
                </YouCont>
              </GameContainer>
              <ResultContainer>
                <Paragraph game>{result}</Paragraph>
                <RuleButton again onClick={this.again}>
                  PLAY AGAIN
                </RuleButton>
              </ResultContainer>
            </>
          ) : (
            <UnOrderList>
              {list.map(each => (
                <GameItem item={each} key={each.id} Choice={this.YourChoice} />
              ))}
            </UnOrderList>
          )}
          <ButtonContainer>
            <Popup
              modal
              trigger={
                <RuleButton type="button" onClick="">
                  RULES
                </RuleButton>
              }
            >
              {close => (
                <RuleContainer>
                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseButton>
                  <ImageRule
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </RuleContainer>
              )}
            </Popup>
          </ButtonContainer>
        </MainContainer>
      </>
    )
  }
}
export default GameFrame
