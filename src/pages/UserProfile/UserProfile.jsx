import { Col, Row, Space } from "antd";
import React from "react";
import ProfileBannerWidget from "../../components/ProfileBannerWidget/ProfileBannerWidget";
import ProfileAboutWidget from "../../components/ProfileAboutWidget/ProfileAboutWidget";
import ProfilePhotoWidget from "../../components/ProfilePhotoWidget/ProfilePhotoWidget";
import ProfileFeedsWidget from "../../components/ProfileFeedsWidget/ProfileFeedsWidget";

const UserProfile = () => {
  return (
    <div>
      <Row justify="center" >
        <Col xs={22} sm={22} md={22} lg={17} xl={16} xxl={16}>
          <ProfileBannerWidget />
          <Row style={{ marginTop: "1rem" }} gutter={[16,16]}>
            <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
              <Space direction="vertical" style={{ width: "100%" }} size={20}>
                <ProfileAboutWidget />
                <ProfilePhotoWidget />
              </Space>
            </Col>
            <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
                <ProfileFeedsWidget/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default UserProfile;
