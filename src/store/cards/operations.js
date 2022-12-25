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
		upperBlock: values.upperBlock ? values.upperBlock : "30%",
		downBlock: values.downBlock ? values.downBlock : "50%",
		upperLine: values.upperLine ? values.upperLine : "300",
		downLine: values.downLine ? values.downLine : "300",

  };
  dispatch(setCard(cardInfo));
};

export default { editCardInfo };
