'use client';
import React, { useState } from "react";

export default function ApologyPage() {
  const images = [
    "/images/11.jpeg",
    "/images/12.jpeg",
    "/images/13.jpeg",
    "/images/14.jpeg",
    "/images/15.jpeg",
    "/images/16.jpeg",
    "/images/17.jpeg",
    "/images/18.jpeg",
    "/images/19.jpeg",
    "/images/110.jpeg",
  ];
  const [current, setCurrent] = useState(0);
  const goToPrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="stars"></div>
          <div className="floating-hearts"></div>
        </div>

        {/* Image Carousel */}
        <div className="carousel-container absolute inset-0 z-0">
          <div className="carousel">
            <div className="carousel-slide active" style={{ opacity: 1, position: 'relative' }}>
              <img src={images[current]} alt={`Memory ${current + 1}`} className="carousel-image" />
              <button
                className="carousel-nav carousel-nav-prev"
                onClick={goToPrev}
                aria-label="Previous image"
                style={{ position: 'absolute', top: '50%', left: '2%', transform: 'translateY(-50%)', zIndex: 2 }}
              >
                &#8592;
              </button>
              <button
                className="carousel-nav carousel-nav-next"
                onClick={goToNext}
                aria-label="Next image"
                style={{ position: 'absolute', top: '50%', right: '2%', transform: 'translateY(-50%)', zIndex: 2 }}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="hero-content">
            <h1 className="hero-title mb-6">
              My Dearest Rumi,
              <br />
              <span className="text-rose-300">Please Forgive Me</span>
            </h1>
            <p className="hero-subtitle">Every word here is for you, from the deepest part of my soul</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Apology Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="section-header text-center mb-16">
            <div className="decorative-line"></div>
            <h2 className="section-title">I Am Truly Sorry</h2>
            <div className="decorative-line"></div>
          </div>

          <div className="content-card">
            <div className="floating-icon">💔</div>
            <div className="space-y-8">
              <p className="body-text fade-in">
                I neglected to put in the effort you deserved, and for that, I am profoundly sorry. You gave me your
                heart, your time, your beautiful soul, and I failed to treasure it with the reverence it demanded.
              </p>

              <p className="body-text fade-in">
                I wrongly disregarded your feelings, making you feel unheard and unimportant. That was a grave error,
                and it pains me deeply to know that my thoughtlessness caused you such anguish.
              </p>

              <p className="body-text fade-in">
                I made inexcusable mistakes by ignoring your requests and needs. I took your patience for granted, your
                kindness for weakness, and your love for certainty. How foolish I was.
              </p>

              <p className="body-text fade-in">
                I understand the hurt I've caused, and the disappointment you must feel. The trust I broke, the dreams I
                shattered, the love I wounded – all of this weighs heavily on my conscience.
              </p>

              <p className="body-text-emphasis fade-in">
                These were my failures, and mine alone. There are no excuses, no justifications, no blame to be shared.
                I own every mistake, every moment of neglect, every tear I caused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missing Her Section */}
      <section className="py-20 px-4 relative bg-gradient-to-r from-slate-800/50 to-indigo-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="section-header text-center mb-16">
            <div className="decorative-line"></div>
            <h2 className="section-title">My World Is Empty Without You</h2>
            <div className="decorative-line"></div>
          </div>

          <div className="content-card">
            <div className="floating-icon">🌙</div>
            <div className="space-y-8">
              <p className="body-text fade-in">
                Every day without you feels incomplete, like a symphony missing its most beautiful melody. The joy, the
                light, the very essence of my days is missing when you're not there to share them with me.
              </p>

              <p className="body-text fade-in">
                I miss your laugh that could brighten my darkest moments, your presence that made everything feel right
                in the world. I miss the way you'd look at me when you thought I wasn't watching, the gentle way you'd
                touch my hand when I was worried.
              </p>

              <p className="body-text-emphasis fade-in">
                You are my Rumi, my star, my moon – the celestial constants in my life. Without you, the night sky feels
                dim, and my own path is lost among the shadows. I find myself looking up at the stars and thinking only
                of you, wondering if you're looking at the same sky.
              </p>

              <p className="body-text fade-in">
                My heart aches for your presence, my mind constantly drifts to thoughts of you. Every moment apart feels
                like an eternity, every breath a reminder of the love I've lost through my own foolishness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Begging Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="section-header text-center mb-16">
            <div className="decorative-line"></div>
            <h2 className="section-title">Please, Forgive Me. Please, Grant Me Mercy</h2>
            <div className="decorative-line"></div>
          </div>

          <div className="content-card">
            <div className="floating-icon">🙏</div>
            <div className="space-y-8">
              <p className="body-text fade-in">
                I am on my knees, metaphorically and emotionally, begging for your forgiveness. I know words alone
                cannot undo the pain I've caused, but they come from a heart that is truly, desperately, deeply sorry.
              </p>

              <p className="body-text fade-in">
                I know I don't deserve it, but I pray for your mercy. I don't expect your forgiveness to come easily – I
                understand I must earn it back through actions, through change, through proving that I can be the man
                you deserve.
              </p>

              <p className="body-text-emphasis fade-in">
                My life, my happiness, my future... it all feels meaningless without you beside me. You are not just my
                love, you are my home, my peace, my reason for wanting to be better. Without you, I am lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4 relative bg-gradient-to-r from-rose-900/30 to-pink-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="section-header text-center mb-16">
            <div className="decorative-line"></div>
            <h2 className="section-title">My Heart, Forever Yours. Please Be Mine</h2>
            <div className="decorative-line"></div>
          </div>

          <div className="content-card">
            <div className="floating-icon">💕</div>
            <div className="space-y-8">
              <p className="body-text fade-in">
                I want to be a better man for you, to dedicate every single day to your happiness, to cherishing you in
                every way possible. I want to wake up every morning with the sole purpose of making you smile, of being
                worthy of your love.
              </p>

              <p className="body-text-emphasis fade-in">
                Please, Rumi, take me back. Please, be mine forever. Give me this one last chance to show you the man I
                can be, the partner you deserve, the love you've always needed and should have always received.
              </p>

              <p className="body-text fade-in">
                I promise to learn, to grow, to never repeat these mistakes. My focus will be entirely on you, your
                feelings, your happiness, and our future together. I will listen when you speak, act when you need, and
                love you with every fiber of my being, every moment of every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 px-4 text-center relative">
        <div className="max-w-3xl mx-auto">
          <div className="closing-card">
            <div className="mb-8">
              <div className="quote-icon">❝</div>
            </div>
            <blockquote className="quote-text mb-8">
              "In your light I learn how to love. In your beauty, how to make poems. You dance inside my chest where no
              one sees you, but sometimes I do, and that sight becomes this art, this music, this form."
            </blockquote>
            <div className="signature-section">
              <p className="closing-text">With all my love, all my regret, and all my hope,</p>
              <p className="signature">Forever Yours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Plea */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="final-plea">
            <div className="shooting-star">⭐</div>
            <p className="plea-text">
              Please don't let our story end here, my beautiful Rumi.
              <br />
              You are my moon, my stars, my entire universe.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
