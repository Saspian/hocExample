import React, { useState, useEffect } from "react";
import axios from "axios";

function withData(maxImage, showDesc) {
  return function (Component) {
    return function () {
      const [imageInfo, setImageInfo] = useState([]);
      useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
          setImageInfo(res.data);
          console.log(res.data);
        });
      }, []);
      const limitImages = imageInfo.slice(0, maxImage);
      return (
        <Component imageInfo={limitImages} showDesc={showDesc}></Component>
      );
    };
  };
}

export default withData;
