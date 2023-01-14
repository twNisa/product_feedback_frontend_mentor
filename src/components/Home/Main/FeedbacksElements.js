import styled from "styled-components";
import { COLORS } from "../../../utils/ThemeConstants";

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

`

export const FeedbackItem = styled.div`
  background-color: white;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  position: relative;
  display: flex;
  gap: 2rem;
  overflow: hidden;

  &:before{
    content: "";
    height: 100%;
    width: 4px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background-color: ${COLORS.blue};
    transition: all .3s ease;
  }
  &:hover:before{
      opacity: 1;
      
  }
  & .details{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    text-transform: capitalize;
    h2{
      transition: all .3s ease;
      color:${COLORS.textGrayDark}
    }
    p{
      color: ${COLORS.textGrayLight};
    }


  }
  & .details:hover{
    h2{
      color: ${COLORS.blue};
    }
    cursor: pointer;
  }

  & .comments {
    align-self: center;
    margin-left: auto;
    display: flex;
    gap: .5rem;
    cursor: pointer;
    font-weight: bold;
  }
  
`
