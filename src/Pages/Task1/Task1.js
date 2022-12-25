import React, { useState } from "react";
import {
  MainBox,
  UpperBox,
  DownBox,
  Block1,
  Block2,
  Block3,
  Block4,
  Title,
  BtnBox,
} from "./Style";
import Modal from "../../components/Modal/Modal";
import { useSelector } from "react-redux";
import ButtonGroup from "../../components/BtnGroup/ButtonGroup";
import ChangeColor from "../../components/ChangeWindow/ChangeColor";
import ChangeSizes from "../../components/ChangeWindow/ChangeSizes";
import DownloadBtn from "../../components/BtnGroup/DownloadBtn";
import ChangeText from "../../components/Text/ChangeText";

import ButtonMain from "../../components/BtnGroup/ButtonMain";

export default function Task1() {
  const modal = useSelector((state) => state.helpers.modal);
  const page = useSelector((state) => state.helpers.page);
  const [btnOn, setBtnOn] = useState(false);
  const data = useSelector((state) => state.cards.card);

  const HoverSection = (sec) => {
    setBtnOn(sec);
  };

  const of = () => {
    setBtnOn(null);
  };

  // ! refactor disign start create, look component block

  return (
    <div>
      <MainBox>
        {page === 1 && (
          <UpperBox>
            <Block1
              background={`${data[0].color}`}
              opacity={`${data[0].opacity}%`}
              height={`${data[0].height}%`}
              width={`${data[0].width}%`}
              onMouseMove={() => HoverSection(1)}
              onMouseLeave={of}
            >
              <Title colorText={`${data[0].colorText}`}>{data[0].title}</Title>
              {modal === 1.1 && (
                <Modal text="Choose color" element={<ChangeColor />} />
              )}
              {modal === 1.2 && (
                <Modal
                  text="Change text"
                  element={<ChangeText placeholder="text" />}
                />
              )}
              {modal === 1.3 && (
                <Modal text="Set hight & weight" element={<ChangeSizes />} />
              )}
              {modal === 1.4 && (
                <Modal text="Upload photo" element={<DownloadBtn />} />
              )}
              {!modal && btnOn === 1 && (
                <ButtonGroup
                  color={1.1}
                  text={1.2}
                  sizes={1.3}
                  download={1.4}
                />
              )}
            </Block1>
            <Block2
              background={`${data[1].color}`}
              opacity={`${data[1].opacity}%`}
              height={`${data[1].height}%`}
              width={`${data[1].width}%`}
              onMouseMove={() => HoverSection(2)}
              onMouseLeave={of}
            >
              <Title colorText={`${data[1].colorText}`}>{data[1].title}</Title>
              {modal === 2.1 && (
                <Modal text="Choose color" element={<ChangeColor />} />
              )}
              {modal === 2.2 && (
                <Modal
                  text="Change text"
                  element={<ChangeText placeholder="text" />}
                />
              )}
              {modal === 2.3 && (
                <Modal text="Set hight & weight" element={<ChangeSizes />} />
              )}
              {modal === 2.4 && (
                <Modal text="Upload photo" element={<DownloadBtn />} />
              )}
              {!modal && btnOn === 2 && (
                <ButtonGroup
                  color={2.1}
                  text={2.2}
                  sizes={2.3}
                  download={2.4}
                />
              )}
            </Block2>
            <Block3
              background={`${data[2].color}`}
              opacity={`${data[2].opacity}%`}
              height={`${data[2].height}%`}
              width={`${data[2].width}%`}
              onMouseMove={() => HoverSection(3)}
              onMouseLeave={of}
            >
              <Title colorText={`${data[2].colorText}`}>{data[2].title}</Title>
              {modal === 3.1 && (
                <Modal text="Choose color" element={<ChangeColor />} />
              )}
              {modal === 3.2 && (
                <Modal
                  text="Change text"
                  element={<ChangeText placeholder="text" />}
                />
              )}
              {modal === 3.3 && (
                <Modal text="Set hight & weight" element={<ChangeSizes />} />
              )}
              {modal === 3.4 && (
                <Modal text="Upload photo" element={<DownloadBtn />} />
              )}
              {!modal && btnOn === 3 && (
                <ButtonGroup
                  color={3.1}
                  text={3.2}
                  sizes={3.3}
                  download={3.4}
                />
              )}
            </Block3>
            <Block4
              background={`${data[3].color}`}
              opacity={`${data[3].opacity}%`}
              height={`${data[3].height}%`}
              width={`${data[3].width}%`}
              onMouseMove={() => HoverSection(4)}
              onMouseLeave={of}
            >
              <Title colorText={`${data[3].colorText}`}>{data[3].title}</Title>
              {modal === 4.1 && (
                <Modal text="Choose color" element={<ChangeColor />} />
              )}
              {modal === 4.2 && (
                <Modal
                  text="Change text"
                  element={<ChangeText placeholder="text" />}
                />
              )}
              {modal === 4.3 && (
                <Modal text="Set hight & weight" element={<ChangeSizes />} />
              )}
              {modal === 4.4 && (
                <Modal text="Upload photo" element={<DownloadBtn />} />
              )}
              {!modal && btnOn === 4 && (
                <ButtonGroup
                  color={4.1}
                  text={4.2}
                  sizes={4.3}
                  download={4.4}
                />
              )}
            </Block4>
          </UpperBox>
        )}
        {page === 2 && (
          <DownBox>
            <Block1 onMouseMove={() => HoverSection(5)} onMouseLeave={of}>
              <Title>5</Title>
              {modal === 5.1 && (
                <Modal text="Choose color" element={<ChangeColor />} />
              )}
              {modal === 5.2 && (
                <Modal
                  text="Change text"
                  element={<ChangeText placeholder="text" />}
                />
              )}
              {modal === 5.3 && (
                <Modal text="Set hight & weight" element={<ChangeSizes />} />
              )}
              {modal === 5.4 && (
                <Modal text="Upload photo" element={<DownloadBtn />} />
              )}
              {!modal && btnOn === 5 && (
                <ButtonGroup
                  color={5.1}
                  text={5.2}
                  sizes={5.3}
                  download={5.4}
                />
              )}
            </Block1>
            <Block2 onMouseMove={() => HoverSection(6)} onMouseLeave={of}>
              <Title>6</Title>
              {modal === 6.1 && (
                <Modal text="Choose color" element={<ChangeColor />} />
              )}
              {modal === 6.2 && (
                <Modal
                  text="Change text"
                  element={<ChangeText placeholder="text" />}
                />
              )}
              {modal === 6.3 && (
                <Modal text="Set hight & weight" element={<ChangeSizes />} />
              )}
              {modal === 6.4 && (
                <Modal text="Upload photo" element={<DownloadBtn />} />
              )}
              {!modal && btnOn === 6 && (
                <ButtonGroup
                  color={6.1}
                  text={6.2}
                  sizes={6.3}
                  download={6.4}
                />
              )}
            </Block2>
            <Block3 onMouseMove={() => HoverSection(7)} onMouseLeave={of}>
              <Title>7</Title>
              {modal === 7.1 && (
                <Modal text="Choose color" element={<ChangeColor />} />
              )}
              {modal === 7.2 && (
                <Modal
                  text="Change text"
                  element={<ChangeText placeholder="text" />}
                />
              )}
              {modal === 7.3 && (
                <Modal text="Set hight & weight" element={<ChangeSizes />} />
              )}
              {modal === 7.4 && (
                <Modal text="Upload photo" element={<DownloadBtn />} />
              )}
              {!modal && btnOn === 7 && (
                <ButtonGroup
                  color={7.1}
                  text={7.2}
                  sizes={7.3}
                  download={7.4}
                />
              )}
            </Block3>
            <Block4 onMouseMove={() => HoverSection(8)} onMouseLeave={of}>
              <Title>8</Title>
              {modal === 8.1 && (
                <Modal text="Choose color" element={<ChangeColor />} />
              )}
              {modal === 8.2 && (
                <Modal
                  text="Change text"
                  element={<ChangeText placeholder="text" />}
                />
              )}
              {modal === 8.3 && (
                <Modal text="Set hight & weight" element={<ChangeSizes />} />
              )}
              {modal === 8.4 && (
                <Modal text="Upload photo" element={<DownloadBtn />} />
              )}
              {!modal && btnOn === 8 && (
                <ButtonGroup
                  color={8.1}
                  text={8.2}
                  sizes={8.3}
                  download={8.4}
                />
              )}
            </Block4>
          </DownBox>
        )}
        <BtnBox>
          <ButtonMain />
        </BtnBox>
      </MainBox>
      {modal === 0.1 && <Modal text="Change size" element={<ChangeSizes />} />}
      {modal === 0.2 && <Modal text="Change gap" element={<ChangeSizes />} />}
    </div>
  );
}
