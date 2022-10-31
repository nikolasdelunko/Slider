import { setCard } from "./cardsSlice";

const editCardInfo = (values) => (dispatch) => {
  const cardInfo = {
    number: values.number,
    color: values.color,
    opacity: values.opacity,
  };
  dispatch(setCard(cardInfo));
};

export default { editCardInfo };
