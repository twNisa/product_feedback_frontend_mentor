import styled, { keyframes } from "styled-components"
import { COLORS } from "../../../utils/ThemeConstants"
import { FaCheck } from "react-icons/fa"

export const TopContainer = styled.div`
  background-color: ${COLORS.darkBlueDark};
  color: white;
  border-radius: 10px;
  display: flex;
  padding: 1rem;
  align-items: center;

  & > div{
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  & .suggestions{
    display: flex;
    gap: 1rem;
  }
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

  & .sortDropdown {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    & > button{
      font-size: 1rem;
      background: none;
      color: white;
      border: none;
      padding: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;

      span{
        font-weight: bold;
      }

      .arrow{
        transition: all .3s ease;

      }
      
      .arrow[data-open="true"]{
          transform: rotate(180deg);
      }
    }
  }

  @media(width < 1100px){
    & .suggestions{
      display: none;
    }
  }

`



export const DropdownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 14rem;
  border-radius: 8px;
  overflow: hidden;
  z-index: 9999;
  top: 4.8rem;
  left: 1rem;
  box-shadow: rgb(0,0,0,.2) 0px 10px 40px 2px;
  animation: .2s linear normal 0s none 1 dropdownAni running;

  button{
    cursor: pointer;
    text-align: left;
    padding: .8rem;
    color: ${COLORS.textGrayLight};
    background-color: white;
    border: none;
    font-weight: 600;
    font-size: .8rem;
    position: relative;
    transition: color .3s ease;
    display: flex;

    span{
      margin-left: auto;
      color: ${COLORS.purple};
    }
  }
  
  button:not(:last-child){
    border-bottom: 1px solid ${COLORS.grayDark} ;

  }
  button:hover{
    color: ${COLORS.purple};
  }

  @keyframes dropdownAni{
    0%{
      opacity: 0;
      transform: translateY(-.8rem);
    }
    100%{
      opacity: 1;
    }
  }
`

