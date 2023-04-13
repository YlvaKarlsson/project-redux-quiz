/* eslint-disable implicit-arrow-linebreak */
import React from 'react'
import { useSelector } from 'react-redux'
import { AnswerButton, NextQuestion } from './Button'
import { SummaryTest } from './SummaryTest';

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const userAnswer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id));
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  if (quizOver) {
    return (
      <SummaryTest />
    )
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <div className="options">
        {question.options.map((item, index) => (
          <AnswerButton
            key={item}
            item={item}
            index={index}
            questionId={question.id}
            question={question}
            answer={userAnswer}
            disabled={userAnswer} />
        ))}
        <NextQuestion />
      </div>
    </div>
  )
}
