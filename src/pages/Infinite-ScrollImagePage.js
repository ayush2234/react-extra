import React, { useEffect, useState } from "react";
import "../styles/infiniteScrollImagePage.css";
import { imageResponse } from "../Apis/api";
import InfiniteScroll from "react-infinite-scroll-component";
import { images } from "../constant/images/images";

export default function Infinite_ScrollImagePage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const [isScrollBarVisible, setIsScrollBarVisible] = useState(false);
  const [pagination, setPagination] = useState({
    skip: 0,
    limit: 10,
  });

  useEffect(() => {
    console.log("pagination====", pagination);
    getImages(pagination);
  }, [pagination]);

  const getImages = async (pagination) => {
    setLoading(true);
    const data = await imageResponse(pagination);
    console.log(data);
    setImages((prevState) => {
      const newState = [...prevState];
      newState.push(...data?.products);
      return newState;
    });

    if (data.products.length === 0) {
      setNoData(true);
    }
    setLoading(false);
  };

  console.log("called=====", images);

  const handleImage = (id, image) => {
    console.log(images.find((image) => image.id === id));
    const width = 1590;
    const height = 920;
    let newImageUrl = images
      .find((image) => image.id === id)
      .images[0].split("/")
      .slice(3, image.length)
      .join("/");
    let newWindow = window.open("_target");
    newWindow.document.write(`
      <html>
        <head>
           <title>image ${id}</title>
        </head>
        <body>
          <img class="resizedImage" src="${image}">
          <script>
            document.querySelector(".resizedImage").style.width=${width}
            document.querySelector(".resizedImage").style.height=${height}
            window.history.replaceState({}, document.title, "${newImageUrl}")
          </script>
        </body>
      </html>
    `);
  };

  const fetchMoreData = () => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      skip: prevPagination.skip + prevPagination.limit,
    }));
  };
  console.log(pagination);

  const showScrollBar = () => {
    setIsScrollBarVisible(true);
  };

  const hideScrollbar = () => {
    setIsScrollBarVisible(false);
  };

  return (
    <>
      <div
        className="infinite-scroll-container"
        onMouseEnter={showScrollBar}
        onMouseLeave={hideScrollbar}
      >
        <InfiniteScroll
          dataLength={images.length}
          next={fetchMoreData}
          hasMore={true}
          scrollThreshold={1}
          height={"32rem"}
          style={{ overflowY: isScrollBarVisible ? "scroll" : "hidden" }}
        >
          <div className="infinite-scroll">
            {images.map((data, index) => {
              let image = data.images[0];
              let modifiedImage = image.substring(
                image.indexOf("h"),
                image.lastIndexOf("g") + 1
              );
              return (
                <div key={index}>
                  <div className="infinite-image-container">
                    <img src={modifiedImage} />
                    <button
                      className="image-button"
                      onClick={() => handleImage(data.id, modifiedImage)}
                    >
                      Click Me!
                    </button>
                  </div>
                  <div className="image-name">image no {data.id}</div>
                </div>
              );
            })}
            {loading ? (
              <h5 style={{ marginLeft: "-5rem", marginTop: "15rem" }}>
                Loading...
              </h5>
            ) : noData ? (
              <p style={{ marginLeft: "28rem", marginTop: "2rem" }}>
                <b>Yay! You've seen it all!</b>
              </p>
            ) : (
              ""
            )}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
