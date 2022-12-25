import { setCard } from "./cardsSlice";

const editCardInfo = (values) => (dispatch) => {
  const cardInfo = {
    number: values.number,
    color: values.color,
    opacity: values.opacity,
    height: values.height,
    width: values.width,
    title: values.title ? values.title : "",
		colorText: values.colorText ? values.colorText : "white",
  };
  dispatch(setCard(cardInfo));
};

export default { editCardInfo };
