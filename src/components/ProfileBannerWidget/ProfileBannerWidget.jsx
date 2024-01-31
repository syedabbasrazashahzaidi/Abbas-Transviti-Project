import { Button, Card, Flex, Space } from "antd";
import React from "react";
import "./ProfileBannerWidget.css";
import profileImg from "../../assets/Images/profileImage.svg";
import { GoPencil } from "react-icons/go";

const ProfileBannerWidget = () => {
  return (
    <div className="profileWidgetMainDiv">
      <div className="bannerImage" />
      <div className="profileIntro">
        <div className="profileImageDiv">
          <div className="profileImageInnerDiv">
            <img
              src={profileImg}
              alt="profile Img"
              height="100%"
              width="100%"
            />
          </div>
        </div>
        <div className="profileNameAndBtn">
          <Flex justify="space-between" wrap="wrap" gap="small">
            <div>
              <div className="profileName">Ahmad Nur Fawaid</div>{" "}
              <div className="profileMention">@fawait</div>
            </div>
            <Button
              type="primary"
              style={{ backgroundColor: "var(--secondary-color)" }}
            >
              <Flex gap="small" align="center">
                <GoPencil /> Edit Profile
              </Flex>
            </Button>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default ProfileBannerWidget;
