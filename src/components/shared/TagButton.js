import styled from "styled-components";
import { COLORS } from "../../utils/ThemeConstants";

export const TagButton = styled.button`
  border-radius: 10px;
  padding: .5rem .8rem;
  cursor: pointer;
  background-color: rgb(240, 242, 255);
  color: rgb(71, 97, 230);
  transition: all .3s ease;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  
  &:hover{
    background-color: ${COLORS.blueHoverLight};
  }
  
  &[data-focus="true"]{
    background: ${COLORS.blue};
    color: white;
  }

  pointer-events: ${props => props.feedback ? "none" : ""};

`

export const UpvoteButton = styled(TagButton)`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 2.8rem;
  height: 4.2rem;
  gap: .5rem;

  span{
    color: black;
  }

`

export const HorizontalUpvoteButton = styled(UpvoteButton)`
  flex-direction: row;
  width: auto;
  height: 2.3rem;
  span{
    color: black;
  }
`