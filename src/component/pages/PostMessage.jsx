import { useEffect, useRef, useState } from "react";
import Input from "../common/textField/input/Input";
import SelectBox from "../common/textField/selectBox/SelectBox";
import TextArea from "../common/textField/textArea/TextArea";
import { SELECT_TYPE } from "../common/textField/selectBox/selectType";
import { getProfileImagesApiResponse } from "../../util/api";
import styles from "./PostMessage.module.css";
import Button from "../common/button/Button";
import DOMPurify from "dompurify";

function PostMessage() {
  const [inputValue, setInputValue] = useState("");
  const [currentRelation, setCurrentRelation] = useState("");
  const [currentFont, setCurrentFont] = useState("");
  const [quillValue, setQuillValue] = useState("");
  const [profileImgList, setProfileImgList] = useState([]);
  const textAreaRef = useRef(null);

  const handleInputValue = (value) => {
    setInputValue(value);
  };
  const handleCurrentRelation = (value) => {
    setCurrentRelation(value);
  };
  const handleCurrentFont = (font) => {
    setCurrentFont(font);
  };
  const handleQuillValue = (value) => {
    setQuillValue(value);
  };

  const getImgProfileList = async () => {
    const res = await getProfileImagesApiResponse();
    setProfileImgList(res.imageUrls);
  };

  const changeFontFamily = (style) => {
    textAreaRef.current.style.fontFamily = style;
  };

  console.log(currentFont);

  useEffect(() => {
    getImgProfileList();
    changeFontFamily(currentFont);
  }, [currentFont]);

  return (
    <div className={styles.container}>
      <div className={styles.inputText}>From.</div>
      <div className={styles.inputContainer}>
        <Input inputValue={inputValue} onInputValueChange={handleInputValue} />
      </div>

      <div className={styles.profileText}>프로필 이미지</div>
      {profileImgList?.map((profileImg, i) => (
        <img className={styles.img} key={i} src={profileImg} alt="profileImg" />
      ))}

      <div className={styles.selectBoxText}>상대와의 관계</div>
      <div className={styles.selectBoxContainer}>
        <SelectBox
          selectValue={currentRelation}
          onSelectValueChange={handleCurrentRelation}
          selectType={SELECT_TYPE.relation}
        />
      </div>

      <div
        ref={textAreaRef}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(quillValue),
        }}
        className="dompurifyBox"
      />
      <div>{quillValue}</div>

      <div className={styles.textAreaText}>내용을 입력해주세요</div>
      <div className={styles.textAreaContainer}>
        <TextArea onQuillValueChange={handleQuillValue} />
      </div>

      <div className={styles.selectBoxText}>폰트선택</div>
      <div className={styles.selectBoxContainer}>
        <SelectBox
          selectValue={currentFont}
          onSelectValueChange={handleCurrentFont}
          selectType={SELECT_TYPE.font}
        />
      </div>
      <Button type={"primary"} width={"100%"}>
        생성하기
      </Button>
    </div>
  );
}

export default PostMessage;
