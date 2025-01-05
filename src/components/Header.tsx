import styled from "styled-components";

const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding-top: 45px;
`;

const Logo = styled.span`
  font-size: 24px;
  font-family: "White Angelica";
`;

const CloseButton = styled.span`
  position: absolute;
  right: 6%;
  font-size: 30px;
  cursor: pointer;
`;

interface HeaderProps {
  type: "logo" | "list";
  withClose?: boolean;
}

const Header = ({ type, withClose }: HeaderProps) => {
  return (
    <LogoWrapper>
      <Logo>{type === "logo" ? "SumHeart" : "List"}</Logo>
      {type === "logo" && withClose && <CloseButton>x</CloseButton>}
    </LogoWrapper>
  );
};

export default Header;
