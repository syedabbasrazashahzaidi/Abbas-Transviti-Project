import React from "react";
import "./ProfileAboutWidget.css";
import { Divider, Flex, Space } from "antd";
import { miniLocationSvg } from "../../assets/SvgIcons/SvgIcons";

const ProfileAboutWidget = () => {
  const aboutLsit = [
    { id: 1, icon: miniLocationSvg, text: "Yogyakarta, ID" },
    { id: 2, icon: miniLocationSvg, text: "Single" },
    { id: 3, icon: miniLocationSvg, text: "Joined June 2012" },
    { id: 4, icon: miniLocationSvg, text: "dribble.com/fawait" },
    { id: 5, icon: miniLocationSvg, text: "Working at Sebo Studio" },
  ];
  return (
    <div className="aboutMainDiv">
      <Space direction="vertical" size={10}>
        <div style={{ fontSize: "var(--heading2)" }}>
          <b>About</b>
        </div>
        <p
          style={{ color: "var(--primary-color)", fontSize: "var(--heading2)" }}
        >
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam,{" "}
        </p>
      </Space>
      <div className="aboutStats">
        <Space direction="vertical" align="center" size={5}>
          <span
            style={{
              fontSize: "var(--heading3)",
              color: "var(--primary-color)",
            }}
          >
            Posts
          </span>
          <span style={{ fontSize: "var(--heading2)" }}>1.3K</span>
        </Space>
        <div className="aboutVerticalLine" />
        <Space direction="vertical" size={5} align="center">
          <span
            style={{
              fontSize: "var(--heading3)",
              color: "var(--primary-color)",
            }}
          >
            Following
          </span>
          <span style={{ fontSize: "var(--heading2)" }}>3,154</span>
        </Space>
        <div className="aboutVerticalLine" />
        <Space direction="vertical" size={5} align="center">
          <span
            style={{
              fontSize: "var(--heading3)",
              color: "var(--primary-color)",
            }}
          >
            Followers
          </span>
          <span style={{ fontSize: "var(--heading2)" }}>2,054</span>
        </Space>
      </div>

      <div className="aboutDetailList">
        {aboutLsit.map((data) => (
          <Flex gap="middle" key={data.id} style={{ marginBottom: "1rem" }}>
            {data.icon}
            {data.text}
          </Flex>
        ))}
      </div>
    </div>
  );
};

export default ProfileAboutWidget;
