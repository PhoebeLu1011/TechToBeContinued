import { useState } from 'react';
import faqTitle from '../../assets/images/titles/FAQ.png';
import sparkle from '../../assets/images/decorations/03Loading .png';
import cornerArrow from '../../assets/images/decorations/02箭頭三.png';
import chevrons from '../../assets/images/decorations/02箭頭二.png';
import questions from './questions.json';
import './qa.css';

export default function QA() {
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(
    () => new Set(questions[0] ? [questions[0].id] : []),
  );

  const toggleQuestion = (id: string) => {
    setOpenQuestions((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  return (
    <main className="qa-page">
      <section className="qa-hero" aria-labelledby="qa-page-title">
        <img className="qa-hero__sparkle" src={sparkle} alt="" aria-hidden="true" />
        <div className="qa-hero__title-lockup">
          <h1 id="qa-page-title" className="qa-hero__title">
            <img src={faqTitle} alt="FAQ" />
          </h1>
          <img className="qa-hero__corner-arrow" src={cornerArrow} alt="" aria-hidden="true" />
        </div>
      </section>

      <section className="qa-list" aria-label="常見問題">
        {questions.map(({ id, question, answers }, index) => {
          const isOpen = openQuestions.has(id);
          const answerId = `${id}-answer`;

          return (
            <article
              className={`qa-card qa-card--${answers.length === 1 ? 'single' : 'double'}${
                isOpen ? ' is-open' : ''
              }`}
              key={id}
            >
              <button
                className="qa-card__trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => toggleQuestion(id)}
              >
                <span className="qa-card__number">Ｑ{index + 1}:</span>
                <span className="qa-card__question">{question}</span>
                <span className="qa-card__state" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              <div id={answerId} className="qa-card__answer" aria-hidden={!isOpen}>
                <div className="qa-card__answer-inner">
                  {answers.map((answer, answerIndex) => (
                    <p key={`${id}-${answerIndex}`}>{answer}</p>
                  ))}
                </div>
              </div>

              {index === questions.length - 1 && (
                <img
                  className="qa-card__chevrons"
                  src={chevrons}
                  alt=""
                  aria-hidden="true"
                />
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
}
