import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import backgroundImg from '../assets/startbackground.jpg';
import noise from '../assets/win1.mp3';
import { quiz } from '../reducers/quiz';
import { CurrentQuestion } from './CurrentQuestion';

const StartQuiz = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const StartContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(26, 25, 25, 0.3);
  border-radius: 5%;
  padding: 3%;
  text-align: center;

  @media (min-width: 668px) and (max-width: 1024px) {
    padding: 3%;
  }

  @media (min-width: 1025px) {
    padding: 10%;
  }
`;

const Title = styled.h1`
 font-family: var(--headings-font-family);
 font-size: 2rem;
 font-weight: 600;
 text-align: center;
 background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
//   position: absolute;
//   top: 0;
//  left: 50%;
//  transform: translateX(-50%)

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1025px) {
    font-size: 3.5rem;
    margin-bottom: 4rem;
    margin-top: -1rem;
  }
`;

const gradientAnimation = keyframes`
  0% {color: #eaac8b;}
  50% {color: #be56b6;}
  100% {color: #b56576;}
`;

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1rem);
  }
  100% {
    transform: translateY(0);
  }
`;

const Text = styled.h2`
  font-size: 1rem;
  color: #1a5e63;
  font-family: var(--second-headings-font-family);
  font-weight: bold;
  margin-bottom: 1rem;
  animation-name: ${gradientAnimation}, ${bounceAnimation};
  animation-duration: 5s, 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 1025px) {
    font-size: 2rem;
    margin-bottom: 4rem;
  }
`;

const Button = styled.button`
  font-size: 0.8rem;
  background-color: rgba(181, 101, 118, 0.3);
  color: #eff1f3; 
  // background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
  // color: #000000;
  font-weight: bold;
  border: 3px solid #fed766;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ffeedb; //This seems to get overridden by the linear gradient in the non-hover state
    color: #553739;
    box-shadow: 0 0 10px 0 #fed766, 0 0 20px 0 #fed766, 0 0 30px 0 #fed766, 0 0 40px 0 #fed766, 0 0 50px 1rem #fed766;
  }

   @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 1rem;
    padding: 0.8rem 1rem;
   }

   @media (min-width: 1025px) {
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
   }
`;

const Start = () => {
  const [isStarted, setIsStarted] = useState(false);
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const soundEffect = new Audio(noise);
  const dispatch = useDispatch();

  const handleClick = () => {
    soundEffect.play();
    dispatch(quiz.actions.restart());
    // dispatch(quiz.actions.setCurrentQuestionIndex(0));
    setIsStarted(true);
  }

  if (!isStarted) {
    return (
      <StartQuiz>
        <StartContainer>
          <Title>Welcome to the amazing trivia quiz!</Title>
          <Text>Test your knowledge of the quiz-creators</Text>
          <Button onClick={handleClick}>Click to start</Button>
        </StartContainer>
      </StartQuiz>
    )
  }

  if (isStarted) {
    return (
      <CurrentQuestion />
    )
  }
}

export default Start;