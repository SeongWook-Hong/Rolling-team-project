import { useEffect, useState } from "react";
import {
  getBackgroundImagesApiResponse,
  getProfileImagesApiResponse,
} from "../../util/api";
import HeaderService from "../common/header/HeaderService";

function PostDetail({ contextMenuVisibleList }) {
  const [testList, setTestList] = useState([]);
  const apiFunc = async () => {
    const res = await getProfileImagesApiResponse();
    setTestList(res.imageUrls);
  };
  useEffect(() => {
    apiFunc();
  }, []);
  return (
    <>
      <HeaderService contextMenuVisibleList={contextMenuVisibleList} />
      {testList?.map((item, i) => (
        <img key={i} src={item} alt={i} />
      ))}
    </>
  );
}

export default PostDetail;
