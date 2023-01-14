import styled from "styled-components";
import { COLORS } from "../../../utils/ThemeConstants";
import { FaAngleUp } from "react-icons/fa";
import arrowDown from "../../../assets/shared/icon-arrow-down.svg"
export const FeedbackFormContainer = styled.form`
  margin-top: 2rem;

  & > div{
    margin-bottom: 2rem;

    & > p{
      margin-bottom: 1rem;
    }
  }

  & > div:last-of-type{
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 1rem;
  }

  
  input,
  select,
  textarea{
    width: 100%;
    border-radius: 5px;
    border: none;
    background-color:rgb(247, 248, 253);
    font-size: 1rem;
    padding: 1rem;
    color: ${COLORS.textGrayDark};
  }

  input:focus-visible,
  textarea:focus-visible{
    outline-color: ${COLORS.blueLight};
    outline-width: thin;
    outline-style: solid;
  }

  textarea{
    min-height: 6rem;
    resize: vertical
  }

  label{
    color: ${COLORS.textGrayDark};
    font-weight: bold;
  }

  p{
    color:${COLORS.textGrayLight}

  }
`
