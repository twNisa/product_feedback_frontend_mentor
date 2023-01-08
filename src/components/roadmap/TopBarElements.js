import styled, { keyframes } from "styled-components"
import { COLORS } from "../../utils/ThemeConstants"
import { FaCheck } from "react-icons/fa"

export const TopBarContainer = styled.div`
  background-color: ${COLORS.darkBlueDark};
  color: white;
  border-radius: 10px;
  display: flex;
  padding: 2rem;
  align-items: center;


  & > button:last-of-type{
    margin-left: auto;
    padding: .6rem 1rem;
    line-height: 1.6;
    background-color: ${COLORS.purple};
    color: white;
    transition: all .3s ease;
    &:hover{
      filter: brightness(1.2);
    }
  }

  a {
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: .5rem;
    text-decoration: none;
    font-size: .9rem;
    margin-bottom: .5rem;
    span{
      position: relative;
    }
    span:after{
      content: "";
      position: absolute;
      background-color: white;
      height: 1.6px;
      width: 0;
      left: 0;
      bottom: 0;
      transition: width .3s ease
    }

    &:hover span:after{
      width: 100%;
      /* transition-duration: 1s; */
    }
  }

  @media(width < 1100px){
    & .suggestions{
      display: none;
    }
  }

`
