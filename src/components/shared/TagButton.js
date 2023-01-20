import styled from "styled-components";
import { COLORS } from "../../utils/ThemeConstants";
import { Link } from "react-router-dom";

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
  height: 3.6rem;
  gap: .5rem;
  align-self: flex-start;
  &[data-upvoted="true"]{
    background-color: ${COLORS.blue};
    color:white;
    span{
      color:white;
    }
  }
  span{
    color: black;
  }

`

export const LinkButton = styled(Link)`
  border-radius: 10px;
  padding: .8rem 1rem;
  cursor: pointer;
  background-color: ${props => props.primary ? COLORS.purple : COLORS.blue};
  color: white;
  transition: all .3s ease;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;

  transition: all .3s ease;
  &:hover{
    filter: brightness(1.2);
  }
`

export const Button = styled(LinkButton)`
  background-color: ${props => props.primary ? COLORS.purple : COLORS.darkBlue};
`

export const HorizontalUpvoteButton = styled(UpvoteButton)`
  flex-direction: row;
  width: auto;
  height: 2.3rem;
  span{
    color: black;
  }
`

