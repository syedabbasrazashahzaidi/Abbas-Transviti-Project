import React from "react";
import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Flex,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import "./Navbar.css";
import logo from "../../assets/Images/logo.svg";
import { LuSearch, LuUser } from "react-icons/lu";
import { IoChevronDownSharp, IoMenuOutline } from "react-icons/io5";
import {
  addSvg,
  bellSvg,
  chatSvg,
  locationSvg,
} from "../../assets/SvgIcons/SvgIcons";

const Navbar = () => {
  const { Option } = Select;
  const smallIcons = [
    { id: 1, icon: bellSvg },
    { id: 2, icon: chatSvg },
    { id: 3, icon: addSvg },
    { id: 4, icon: <LuUser color="#F85F35" /> },
  ];
  return (
    <div className="navbarMainDiv">
      <Row justify="space-between">
        <Col xs={12} sm={12} md={4} lg={4} xl={6} xxl={6}>
          <Flex justify="center">
            <div className="navbarLogo">
              <img src={logo} alt="Company Logo" height="100%" width="100%" />
            </div>
          </Flex>
        </Col>
        <Col xs={12} sm={12} md={12} className="mobNavbarCol">
          <Flex justify="center" align="center">
            <IoMenuOutline size={23}/>
          </Flex>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={6}
          xl={5}
          xxl={7}
          className="navbarCol"
        >
          <div className="navbarSearchSelectDiv">
            <Input
              prefix={<LuSearch color="#9D9DAF" />}
              variant="borderless"
              placeholder="Search"
            />
            <div className="navbarLocationSelect">
              {locationSvg}
              <Select
                variant="borderless"
                defaultValue={"Canada"}
                style={{ width: "7rem" }}
                suffixIcon={<IoChevronDownSharp />}
              >
                <Option value="Canada">Canada</Option>
                <Option value="USA">USA</Option>
                <Option value="UK">UK</Option>
              </Select>
            </div>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={10}
          xl={7}
          xxl={7}
          className="navbarCol"
        >
          <Flex gap="small" align="center">
            <Button size="large">
              <Flex align="center" gap="small">
                Explore <IoChevronDownSharp />
              </Flex>
            </Button>
            {smallIcons?.map((data) => (
              <Avatar key={data.id} className="smallAvatar" icon={data.icon} />
            ))}
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
