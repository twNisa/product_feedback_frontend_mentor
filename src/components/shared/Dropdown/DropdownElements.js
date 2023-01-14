import styled from "styled-components";
import { COLORS } from "../../../utils/ThemeConstants";
export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  & > button{
    font-size: 1rem;
    background: none;
    background-color: rgb(247, 248, 253);
    border-radius: 5px;
    color: ${COLORS.textGrayDark};
    border: none;
    padding: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    color: ${COLORS.textGrayDark};
    .arrow{
      transition: all .3s ease;

    }
    
    

    &[data-open="true"]{
      outline: solid 1px ${COLORS.blueLight};

      .arrow{
        transform: rotate(180deg);
      }
    }
  }
`

export const DropdownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  z-index: 9999;
  top: 4.8rem;
  
  box-shadow: rgb(0,0,0,.2) 0px 10px 40px 2px;
  animation: .2s linear normal 0s none 1 dropdownAni running;

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

export const DropdownMenuItem = styled.button`
    cursor: pointer;
    text-align: left;
    padding: 1rem;
    color: ${COLORS.textGrayLight};
    background-color: white;
    border: none;
    font-weight: 600;
    font-size: .8rem;
    position: relative;
    transition: color .3s ease;
    display: flex;

    &:not(:last-child){
      border-bottom: 1px solid ${COLORS.grayDark} ;
    }
    &:hover{
      color: ${COLORS.purple};
    }

    svg{
      margin-left: auto;
      color: ${COLORS.purple};
    }
`