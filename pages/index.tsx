import { NextPage } from "next";
import { useEffect, useState } from "react";

const IndexPage: NextPage = () => {
    const [imageUrl, setImageUrl] = useState(""); // imageUrlは 初期値空文字
    const [loading, setLoading] = useState(true); // loadingは 初期値 true
    useEffect(() => {
        fetchImage().then((newImage) => { // 非同期処理
            setImageUrl(newImage.url); // 画像URL情報を更新
            setLoading(false); // ローディング状態を更新
        });
    }, []);
    return <div>{loading || <img src={imageUrl} />}</div>
};

export default IndexPage;

type Image = {
    url: string;
};
const fetchImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    console.log(images);
    return images[0];
};

fetchImage();
