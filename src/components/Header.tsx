import styled from "styled-components";

const Logo = styled.span`
  display: flex;
  width: 100vw;
  justify-content: center;
  padding-top: 45px;
  font-size: 24px;
  font-family: "White Angelica";
`;

interface HeaderProps {
  type: "logo" | "list";
}

const Header = ({ type }: HeaderProps) => {
  return <Logo>{type === "logo" ? "SumHeart" : "List"}</Logo>;
};

export default Header;
