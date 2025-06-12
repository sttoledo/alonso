import React from 'react';
import './Hero.css';

function Hero() {
  // SET DATES HERE
  const dueDate = new Date('2025-10-06');
  const conceptionDate = new Date('2024-12-30'); // approx. 40 weeks before due date
  const today = new Date();

  const totalDays = Math.floor((dueDate - conceptionDate) / (1000 * 60 * 60 * 24));
  const elapsedDays = Math.floor((today - conceptionDate) / (1000 * 60 * 60 * 24));
  const progress = Math.min(100, Math.floor((elapsedDays / totalDays) * 100));

  return (
    <section className="hero">
      <img src="/baby.png" className="hero-image"></img>
      <h1 className="hero-title">Alonso is on the Way!</h1>
      <p className="hero-subtitle">Estimated due date: <strong>{dueDate.toDateString()}</strong></p>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <p className="progress-text">
        {progress}% complete ({elapsedDays} out of {totalDays} days)
      </p>
    </section>
  );
}

export default Hero;