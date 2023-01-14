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
  justify-content: space-between;

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

  
 
  @media(width < 1100px){
    & .suggestions{
      display: none;
    }
  }

`
