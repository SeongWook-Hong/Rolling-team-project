import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import styles from "./Card.module.css";
import DOMPurify from "dompurify";
import { fontMappings } from "../textField/selectBox/fontMappings";
function Card({ messages, isAddMessageCardVisible, image }) {
  const navigate = useNavigate();
  const handleAddMessageButtonClick = () => {
    navigate("message");
  };
  return (
    <div
      className={styles.backGround}
      style={
        image?.includes("http")
          ? {
              backgroundImage: `url(${image})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            }
          : { backgroundColor: `${image}` }
      }
    >
      <div className={styles.cardBox}>
        {isAddMessageCardVisible && (
          <div className={styles.cardContainer}>
            <div className={styles.cardPlus}>
              <Button
                type="circle"
                icon="plus"
                onClick={handleAddMessageButtonClick}
              />
            </div>
          </div>
        )}
        {messages?.map((item) => (
          <div key={item.id} className={styles.cardContainer}>
            <div className={styles.profileContainer}>
              <div className={styles.profile}>
                <div
                  className={styles.img}
                  style={{ backgroundImage: `url(${item.profileImageURL})` }}
                />
                <div className={styles.nameAndBadgeContainer}>
                  <div className={styles.nameContainer}>
                    <span>From.</span>
                    <span>{item.sender}</span>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeText}>{item.relationship}</div>
                  </div>
                </div>
                {!isAddMessageCardVisible && (
                  <div className={styles.trashButton}>
                    <Button type="outlined" height="standard" icon="delete" />
                  </div>
                )}
              </div>
              <div className={styles.line} />
            </div>
            <div className={styles.textAreaContainer}>
              <div
                className={styles.textBox}
                style={{ fontFamily: `${fontMappings[item.font]}` }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.content),
                }}
              />
              <span className={styles.date}>{item.createdAt.slice(0, 10)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
