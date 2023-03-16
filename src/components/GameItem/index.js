import {ItemList, SelectButton, Image} from './styledComponent'

const GameItem = props => {
  const {item, Choice} = props
  const {id, imageUrl} = item
  const choose = () => {
    Choice(id)
  }
  // console.log(id.toLowerCase())
  const word = id.toLowerCase()
  return (
    <ItemList>
      <SelectButton
        data-testid={`${word}Button`}
        type="button"
        onClick={choose}
      >
        <Image src={imageUrl} alt={id} />
      </SelectButton>
    </ItemList>
  )
}
export default GameItem
