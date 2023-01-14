import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../utils/ThemeConstants";

export const BackButtonNavLink = styled(NavLink)`
  color: ${props => props.lightBg ? `${COLORS.textGrayDark}` : "white" };
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: .5rem;
  text-decoration: none;
  font-size: .9rem;
  margin-bottom: .5rem;
  
  max-width: 6rem;
  span{
    position: relative;
  }
  span:after{
    content: "";
    position: absolute;
    background-color: ${props => props.lightBg ? `${COLORS.textGrayDark}` : "white" };
    height: 1.5px;
    width: 0;
    left: 0;
    bottom: 0;
    transition: width .3s ease
  }

  &:hover span:after{
    width: 100%;
    /* transition-duration: 1s; */
  }
`
