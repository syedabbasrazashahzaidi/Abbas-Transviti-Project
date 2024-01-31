import React from "react";
import "./ProfileFeedsWidget.css";
import { Avatar, Col, Divider, Flex, Input, Row, Space } from "antd";
import { IoImageOutline } from "react-icons/io5";
import profileImageThumb from "../../assets/Images/profileImageThumb.svg";
import { RxDotsHorizontal } from "react-icons/rx";
import { BiComment } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { GoShareAndroid, GoSmiley } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";

const ProfileFeedsWidget = () => {
  return (
    <>
      <Space direction="vertical" size={20} style={{ width: "100%" }}>
        <div className="postTextFieldDiv">
          <Flex>
            <img src={profileImageThumb} alt="Profile Icon" />
            <Input
              placeholder="Post Something..."
              variant="borderless"
              suffix={<IoImageOutline size={23} />}
            />
          </Flex>
        </div>

        <div className="postTextFieldDiv">
          <Flex justify="space-between">
            <Flex gap="small">
              <div className="postImageIcon">
                <img
                  src={profileImageThumb}
                  alt="Profile Icon"
                  height="100%"
                  width="100%"
                />
              </div>
              <Space direction="vertical" size={4}>
                <b>Ahmad Nur Fawaid</b>
                <span style={{ color: "var(--primary-color)" }}>
                  12 April at 09.28 PM
                </span>
              </Space>
            </Flex>
            <div>
              <RxDotsHorizontal />
            </div>
          </Flex>
          <br />
          <div>Peace On Earth A Wonderful Wish But No Way</div>
          <Divider />
          <Flex justify="space-between">
            <Flex
              align="center"
              gap="small"
              style={{
                fontSize: "var(--heading3)",
                color: "var(--primary-color)",
              }}
            >
              <BiComment /> 7 Comments
            </Flex>
            <Flex
              align="center"
              gap="small"
              style={{
                fontSize: "var(--heading3)",
                color: "var(--primary-color)",
              }}
            >
              <CiHeart /> 12 Likes
            </Flex>
            <Flex
              align="center"
              gap="small"
              style={{
                fontSize: "var(--heading3)",
                color: "var(--primary-color)",
              }}
            >
              <GoShareAndroid /> 0 Share
            </Flex>
          </Flex>
          <Divider />
          <Flex gap={"small"}>
            <img src={profileImageThumb} alt="Profile Icon" />
            <Input
              placeholder="Write your comment"
              variant="borderless"
              suffix={
                <>
                  <GrAttachment size={23} /> <GoSmiley size={23} />{" "}
                  <IoImageOutline size={23} />
                </>
              }
              style={{ backgroundColor: "#F4F5F7" }}
            />
          </Flex>
        </div>

        <div className="postTextFieldDiv">
          <Flex justify="space-between">
            <Flex gap="small">
              <div className="postImageIcon">
                <img
                  src={profileImageThumb}
                  alt="Profile Icon"
                  height="100%"
                  width="100%"
                />
              </div>
              <Space direction="vertical" size={4}>
                <b>Ahmad Nur Fawaid</b>
                <span style={{ color: "var(--primary-color)" }}>
                  12 April at 09.28 PM
                </span>
              </Space>
            </Flex>
            <div>
              <RxDotsHorizontal />
            </div>
          </Flex>
          <br />
          <div>
            One of the perks of working in an international company is sharing
            knowledge with your colleagues.{" "}
          </div>
          <br />
          <Row gutter={[16, 16]}>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="postingImage1" />
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Space direction="vertical" size={10} style={{ width: "100%" }}>
                <div className="postingImage2" />
                <div className="postingImage3" />
              </Space>
            </Col>
          </Row>
          <Divider />
          <Flex justify="space-between">
            <Flex
              align="center"
              gap="small"
              style={{
                fontSize: "var(--heading3)",
                color: "var(--primary-color)",
              }}
            >
              <BiComment /> 7 Comments
            </Flex>
            <Flex
              align="center"
              gap="small"
              style={{
                fontSize: "var(--heading3)",
                color: "var(--primary-color)",
              }}
            >
              <CiHeart /> 12 Likes
            </Flex>
            <Flex
              align="center"
              gap="small"
              style={{
                fontSize: "var(--heading3)",
                color: "var(--primary-color)",
              }}
            >
              <GoShareAndroid /> 0 Share
            </Flex>
          </Flex>
          <Divider />
          <Flex gap={"small"}>
            <img src={profileImageThumb} alt="Profile Icon" />
            <Input
              placeholder="Write your comment"
              variant="borderless"
              suffix={
                <>
                  <GrAttachment size={23} /> <GoSmiley size={23} />{" "}
                  <IoImageOutline size={23} />
                </>
              }
              style={{ backgroundColor: "#F4F5F7" }}
            />
          </Flex>
        </div>
      </Space>
      <Flex justify="space-between" style={{ marginTop: "1rem" }}>
        <Flex
          align="center"
          gap="small"
          style={{
            fontSize: "var(--heading3)",
            color: "var(--primary-color)",
          }}
        >
          Contact Us
        </Flex>
        <Flex
          align="center"
          gap="small"
          style={{
            fontSize: "var(--heading3)",
            color: "var(--primary-color)",
          }}
        >
          Terms of use
        </Flex>
        <Flex
          align="center"
          gap="small"
          style={{
            fontSize: "var(--heading3)",
            color: "var(--primary-color)",
          }}
        >
          Cookies Policy
        </Flex>
        <Flex
          align="center"
          gap="small"
          style={{
            fontSize: "var(--heading3)",
            color: "var(--primary-color)",
          }}
        >
          Help & Support
        </Flex>
      </Flex>
      <Divider />
      <Flex justify="space-between">
        <Flex
          align="center"
          gap="small"
          style={{
            fontSize: "var(--heading3)",
            color: "var(--primary-color)",
          }}
        >
          Facebook
        </Flex>
        <Flex
          align="center"
          gap="small"
          style={{
            fontSize: "var(--heading3)",
            color: "var(--primary-color)",
          }}
        >
          TLinkedin
        </Flex>
        <Flex
          align="center"
          gap="small"
          style={{
            fontSize: "var(--heading3)",
            color: "var(--primary-color)",
          }}
        >
          Instagram
        </Flex>
        <Flex
          align="center"
          gap="small"
          style={{
            fontSize: "var(--heading3)",
            color: "var(--primary-color)",
          }}
        >
          Youtube
        </Flex>
      </Flex>
      <Divider />
      <Flex
        style={{
          fontSize: "var(--heading3)",
          color: "var(--primary-color)",
        }}
        justify="center"
        wrap="wrap"
        gap={"small"}
      >
          <span>Halal Networks © 2023. All rights reserved</span>{" "}
          <span> User Agreement&nbsp;&nbsp;Privacy Pplicy</span>
      </Flex>
    </>
  );
};

export default ProfileFeedsWidget;
