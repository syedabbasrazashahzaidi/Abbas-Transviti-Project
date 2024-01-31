import React from "react";
import "./ProfilePhotoWidget.css";
import { Flex } from "antd";
import photo1 from "../../assets/Images/photo1.svg";
import photo2 from "../../assets/Images/photo2.svg";
import photo3 from "../../assets/Images/photo3.svg";
import photo4 from "../../assets/Images/photo4.svg";

const ProfilePhotoWidget = () => {
  const photoList = [
    { id: 1, image: photo1 },
    { id: 2, image: photo2 },
    { id: 3, image: photo3 },
    { id: 4, image: photo4 },
  ];
  return (
    <div className="photoMainDiv">
      <Flex justify="space-between">
        <div style={{ fontSize: "var(--heading2)" }}>
          <b>Photos</b>
        </div>
        <div
          style={{
            fontSize: "var(--heading2)",
            color: "var(--secondary-color)",
          }}
        >
          View all
        </div>
      </Flex>
      <br />
      <Flex gap="small" wrap="wrap">
        {photoList.map((data) => (
          <div className="imagesGrid" key={data.id}>
            <img src={data.image} alt="photos" height="100%" width="100%" />
          </div>
        ))}
      </Flex>
    </div>
  );
};

export default ProfilePhotoWidget;
