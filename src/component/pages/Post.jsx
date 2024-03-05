import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBackgroundImagesApiResponse, postRecipientApiResponse } from "../../util/api";
import styles from "./Post.module.css";
import Input from "../common/textField/input/Input";
import Button from "../common/button/Button";
import ToggleButton from "../common/button/ToggleButton";
import ColorOption from "../common/option/ColorOption";
import ImageOption from "../common/option/ImageOption";


const BUTTON_NAME = ["컬러", "이미지"];
const NEW_PAGE = {
  name: '',
  backgroundColor: 'beige',
  backgroundImageURL: null,
}

function Post() {
  const [inputValue, setInputValue] = useState("");
  const [selectedButtonName, setSelectedButtonName] = useState(BUTTON_NAME[0]);
  const [clickItem, setClickItem] = useState('beige');
  const [baseImages, setBaseImages] = useState([]);
  const navigate = useNavigate();

  const handleClick = (e) => {
    setClickItem(e.target.value === clickItem ? '' : e.target.value);
  }
  
  const handleInputValue = (value) => setInputValue(value);
  const handleButtonClick = (e) => setSelectedButtonName(e.target.innerText);

  const upLoadImg = async (imgFile) => {
    try {
      const formData = new FormData();
      formData.append('image', imgFile);
      const response = await fetch("https://api.imgbb.com/1/upload?key=d0683b0869118bab9113ca272a7d46b1", {
        method: 'POST',
        body: formData,
      })

      if (!response?.ok) {
        throw new Error('이미지를 업로드 하는 데 실패했습니다.')
      }
      const data = await response.json();
      return data.data.url

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }

  const handleAddImageDataChange = async (e) => {
    const { files } = e.target;
    const uploadFile = files[0];

    if (!uploadFile) return;

      const newImageUrl = await upLoadImg(uploadFile);
      setBaseImages((prev) => ([newImageUrl, ...prev]));
    } 


  const getBaseImages = async () => {
    const { imageUrls } = await getBackgroundImagesApiResponse();
    
    if (!imageUrls) return;

    setBaseImages(imageUrls);
  }

  useEffect(() => {
    getBaseImages();
  }, [])

  const createRolling = async () => {
    NEW_PAGE.name = inputValue;
    clickItem.includes('http') ? NEW_PAGE.backgroundImageURL = clickItem
    : NEW_PAGE.backgroundColor = clickItem;
    
    const { id } = await postRecipientApiResponse(NEW_PAGE);

    if (!id) return;

    navigate(`/post/${id}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.inputBox}>
          <div className={styles.inputName}>To. {inputValue}</div>
          <Input
            inputValue={inputValue}
            onInputValueChange={handleInputValue}
          />
        </div>

        <div className={styles.describeBackgroundInfo}>
          <h2 className={styles.describeTitle}>배경화면을 선택해 주세요</h2>
          <p className={styles.describeSubtitle}>
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>
        </div>
        <div className={styles.selectButton}>
          <div onClick={handleButtonClick}>
            <ToggleButton />
          </div>
        </div>
        {selectedButtonName === BUTTON_NAME[0] && <ColorOption clickItem={clickItem} onClick={handleClick} />}
        {selectedButtonName === BUTTON_NAME[1] && <ImageOption clickItem={clickItem} imageData={baseImages} onChange={handleAddImageDataChange} onClick={handleClick} />}

        <div className={styles.createButton}>
          <div style={{ textDecoration: "none" }}>
            <Button type="primary" height="tall" disabled={!inputValue} onClick={createRolling}>
              생성하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
