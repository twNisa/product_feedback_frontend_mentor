import styled from "styled-components";
import { COLORS } from "../../utils/ThemeConstants";

export const FeedbackViewCommentItem = styled.section`

  display: flex;
  gap: 2rem;
  position: relative;

  &[data-children="true"]:before{
    content:"";
    position: absolute;
    height: calc(100% - 3.5rem);
    top: 3.5rem;
    width: 1px;
    background-color: rgba(0,0,0, 0.2); 
    left: 0;
  
  }
  p{
    color: ${COLORS.textGrayLight};
  }
  h4{
    color: ${COLORS.textGrayDark};
    margin-bottom: 0.2rem;
  }
  & .user-comment{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    /* align-items: center; */

    & >p{
      margin-right:2rem;
    }
  }
  & .user-header{
    display: flex;
    
  }

  & .user-name p{
    font-size: .9rem;
  }
  & img{
    border-radius: 50%;
    height: 3rem;
  }

  & .user-header button{
    margin-left: auto;
    border: none;
    background: none;
    cursor: pointer;
    align-self: flex-start;
    font-weight: bold;
    color: ${props => props.active==="true" ? "red" : "black"};
    position: relative;

    &:after{
      content: "";
      position: absolute;
      height: 1px;
      width: 0;
      background-color: black;
      bottom: 0;
      left: 50%;
      transform: translateY(2px);
      transition: all .3s ease;
    }

    &:hover:after{
      width: 100%;
      transform: translateX(-50%) translateY(2px);
    } 
  }
`

export const CommentItemReply = styled.section`
  display: flex;
  width: 100%;
  gap: 1rem;
  button{
    align-self: flex-start;
    /* justify-self: flex-start; */
  }
  textarea{
    flex: 1;
    /* margin-top: 2rem; */
    background-color: ${COLORS.background};
    width: 100%;
    min-height: 8rem;
    padding: 1rem;
    resize: none;
    font-size: 1.1rem;
    border-radius: 10px;
    transition: all .2s ease;
  
  }

  textarea:focus-visible{
    border: none;
    outline-color: ${COLORS.blueLight};
    outline-width: thin;
    outline-style: solid;
  }

`