import React from "react";
import withData from "./withData";

const styles = {
  flex: () => ({
    display: "flex",
    flexWrap: "wrap"
  }),
  gallery: () => ({
    display: "flex",
    flexDirection: "column",
    margin: "5px",
    width: "150px"
  })
};
const maxImage = 52;
const showDesc = true;
const Gallery = ({ imageInfo, showDesc }) => {
  return (
    <div>
      <h1>This is the image Gallery</h1>
      <div style={styles.flex()}>
        {imageInfo.map((image, index) =>
          index <= maxImage ? (
            <div style={styles.gallery()}>
              <img src={image.thumbnailUrl} alt={index} />
              {showDesc ? (
                <div>
                  {image.id}. {image.title}
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default withData(maxImage, showDesc)(Gallery);
