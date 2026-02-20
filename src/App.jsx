import React, { useEffect, useState } from "react";

const partnerNames = [
  "Cambridge Extension",
  "Northbridge Labs",
  "AstraTech",
  "Global Scholar Fund",
  "Open Research Guild"
];

const outcomes = [
  { value: "94%", label: "Learners report measurable skill growth in 8 weeks" },
  { value: "2.8x", label: "Higher interview callback rate after capstone completion" },
  { value: "1,200+", label: "Mentor office-hour sessions hosted each month" },
  { value: "48 hrs", label: "Average feedback turnaround from expert instructors" }
];

const programs = [
  {
    title: "Data Analytics & Decision Science",
    duration: "12 weeks",
    focus: "Excel, SQL, and storytelling with real business datasets"
  },
  {
    title: "Product Strategy & UX Leadership",
    duration: "10 weeks",
    focus: "User research, roadmap design, and product communication"
  },
  {
    title: "AI for Modern Professionals",
    duration: "8 weeks",
    focus: "Prompt design, AI workflows, and responsible deployment"
  },
  {
    title: "Frontend Engineering Studio",
    duration: "14 weeks",
    focus: "Production React architecture, testing, and performance"
  },
  {
    title: "Digital Marketing Intelligence",
    duration: "9 weeks",
    focus: "Channel analytics, lifecycle campaigns, and attribution"
  },
  {
    title: "Leadership Communication Masterclass",
    duration: "6 weeks",
    focus: "Executive writing, negotiation, and team influence"
  }
];

const steps = [
  {
    title: "Choose your path",
    detail:
      "Start with a guided skill assessment, then get a personalized roadmap based on your goals and schedule."
  },
  {
    title: "Practice with mentors",
    detail:
      "Join weekly live seminars and submit practical assignments reviewed by instructors from top institutions and industry teams."
  },
  {
    title: "Ship portfolio outcomes",
    detail:
      "Graduate with a polished capstone, interview-ready talking points, and a certificate employers understand."
  }
];

const testimonials = [
  {
    quote:
      "Learnora felt like a graduate seminar with real-world urgency. I moved from operations into product analytics in four months.",
    name: "Maya Thompson",
    role: "Product Analyst, Finova"
  },
  {
    quote:
      "The mentor feedback loop is exceptional. Every assignment challenged my thinking and sharpened my communication.",
    name: "Daniel Kim",
    role: "Marketing Lead, Auric Health"
  },
  {
    quote:
      "I finally had structure, accountability, and outcomes. My capstone became the centerpiece of every interview.",
    name: "Sofia Patel",
    role: "UX Researcher, Meridian Studio"
  }
];

const plans = [
  {
    name: "Starter",
    price: "$29",
    term: "/month",
    description: "Build consistency with structured weekly lessons.",
    features: ["Access to 40+ foundational lessons", "Weekly learning tracker", "Community discussion groups"],
    cta: "Start free trial"
  },
  {
    name: "Pro",
    price: "$79",
    term: "/month",
    description: "Career-focused learning with expert guidance.",
    features: [
      "Everything in Starter",
      "Live mentor office hours",
      "Project feedback in under 48 hours",
      "Verified completion certificate"
    ],
    cta: "Start free trial",
    featured: true
  },
  {
    name: "Team",
    price: "$199",
    term: "/month",
    description: "Upskill teams with aligned outcomes and reports.",
    features: ["Up to 10 seats included", "Manager progress dashboard", "Custom learning pathways"],
    cta: "Book a strategy call"
  }
];

const faqs = [
  {
    question: "How much time should I plan each week?",
    answer:
      "Most learners succeed with 4-6 focused hours weekly. Lessons are modular, so you can distribute study sessions across your schedule."
  },
  {
    question: "Are programs beginner-friendly?",
    answer:
      "Yes. Every path includes orientation modules and optional prep content before advanced assignments begin."
  },
  {
    question: "Do I get instructor feedback?",
    answer:
      "Pro and Team plans include detailed project feedback and mentor office hours. Starter learners receive guided peer review."
  },
  {
    question: "Can I switch programs after starting?",
    answer:
      "You can switch once per billing cycle and keep completed modules on your transcript."
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every plan starts with a 7-day trial so you can explore lessons and platform tools before committing."
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const rootElement = document.documentElement;
    const motionQuery =
      typeof window.matchMedia === "function" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
    const revealItems = [...document.querySelectorAll("[data-reveal]")];

    if ((motionQuery && motionQuery.matches) || typeof window.IntersectionObserver !== "function") {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    rootElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    revealItems.forEach((item, index) => {
      const delay = `${(index % 6) * 70}ms`;
      item.style.setProperty("--reveal-delay", delay);
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
      rootElement.classList.remove("reveal-ready");
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page-root" id="top">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" onClick={closeMenu}>
            Learnora
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <nav id="primary-navigation" className={`primary-nav ${menuOpen ? "open" : ""}`}>
            <a href="#programs" onClick={closeMenu}>
              Programs
            </a>
            <a href="#process" onClick={closeMenu}>
              How It Works
            </a>
            <a href="#testimonials" onClick={closeMenu}>
              Stories
            </a>
            <a href="#pricing" onClick={closeMenu}>
              Pricing
            </a>
            <a className="btn btn-primary nav-cta" href="#pricing" onClick={closeMenu}>
              Start free trial
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section" id="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Evidence-based online learning platform</p>
              <h1>Master in-demand skills with academic rigor and real career outcomes.</h1>
              <p className="lead">
                Learnora blends university-level instruction, mentor coaching, and portfolio-building projects so every week
                you learn, apply, and progress with confidence.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#pricing">
                  Start free trial
                </a>
                <a className="btn btn-secondary" href="#programs">
                  Explore courses
                </a>
              </div>
              <ul className="hero-notes">
                <li>7-day free trial</li>
                <li>Mentor-reviewed projects</li>
                <li>Certificate on completion</li>
              </ul>
            </div>

            <aside className="hero-card" aria-label="Student progress and outcomes">
              <p className="card-kicker">Student progress snapshot</p>
              <h2>Week 5: Applied Data Strategy</h2>

              <div className="progress-row">
                <div className="progress-meta">
                  <span>Learning pace</span>
                  <span>82%</span>
                </div>
                <div className="progress-track" aria-hidden="true">
                  <span className="progress-fill fill-82"></span>
                </div>
              </div>

              <div className="progress-row">
                <div className="progress-meta">
                  <span>Project completion</span>
                  <span>68%</span>
                </div>
                <div className="progress-track" aria-hidden="true">
                  <span className="progress-fill fill-68"></span>
                </div>
              </div>

              <div className="outcome-chip" aria-label="Outcome summary">
                <strong>Mentor note:</strong> Your dashboard prototype now meets stakeholder review standards.
              </div>
            </aside>
          </div>
        </section>

        <section className="section trust" id="trust">
          <div className="container" data-reveal>
            <p className="section-kicker">Trusted by learners from</p>
            <ul className="trust-row" aria-label="Partner and employer names">
              {partnerNames.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section outcomes" id="outcomes">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">Measured outcomes</p>
              <h2>Learning designed for momentum, not just content consumption.</h2>
            </div>

            <div className="outcome-grid">
              {outcomes.map((item) => (
                <article className="stat-card" key={item.value + item.label} data-reveal>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section programs" id="programs">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">Featured programs</p>
              <h2>Choose a pathway aligned to your next professional milestone.</h2>
            </div>

            <div className="program-grid">
              {programs.map((program) => (
                <article className="program-card" key={program.title} data-reveal>
                  <p className="program-duration">{program.duration}</p>
                  <h3>{program.title}</h3>
                  <p>{program.focus}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">How learning works</p>
              <h2>A clear three-step system that keeps you accountable and progressing.</h2>
            </div>

            <div className="step-grid">
              {steps.map((step, index) => (
                <article className="step-card" key={step.title} data-reveal>
                  <span className="step-index">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials" id="testimonials">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">Learner stories</p>
              <h2>Ambitious professionals using Learnora to accelerate their careers.</h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <figure className="testimonial-card" key={testimonial.name} data-reveal>
                  <blockquote>{testimonial.quote}</blockquote>
                  <figcaption>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">Pricing</p>
              <h2>Start free, then choose the support level that matches your goals.</h2>
            </div>

            <div className="pricing-grid">
              {plans.map((plan) => (
                <article
                  className={`price-card ${plan.featured ? "featured" : ""}`}
                  key={plan.name}
                  data-reveal
                  aria-label={`${plan.name} plan`}
                >
                  {plan.featured ? <span className="badge">Most popular</span> : null}
                  <h3>{plan.name}</h3>
                  <p className="price">
                    {plan.price}
                    <span>{plan.term}</span>
                  </p>
                  <p className="plan-copy">{plan.description}</p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a className={`btn ${plan.featured ? "btn-primary" : "btn-secondary"}`} href="#top">
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">FAQ</p>
              <h2>Everything you need before starting your free trial.</h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} data-reveal>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <a className="brand" href="#top">
              Learnora
            </a>
            <p>Premium online learning built for modern careers.</p>
          </div>

          <nav aria-label="Footer links" className="footer-links">
            <a href="#programs">Programs</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#top">Start free trial</a>
          </nav>

          <p className="copyright">© {new Date().getFullYear()} Learnora. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
