import React from 'react';
import { createRoot } from 'react-dom/client';
import { Clock, ShieldCheck, Thermometer, MapPin, PackageCheck, Phone, Mail, Truck, ClipboardCheck, Star, ArrowRight, Menu, X } from 'lucide-react';
import './styles.css';

const services = [
  { icon: PackageCheck, title: 'Lab Specimen Delivery', text: 'Reliable pickup and delivery for bloodwork, samples, diagnostics, and lab paperwork.' },
  { icon: Thermometer, title: 'Temperature-Controlled Transport', text: 'Insulated containers and cold-chain handling options for sensitive medical materials.' },
  { icon: Truck, title: 'Pharmacy & Medical Supply Runs', text: 'Scheduled and on-demand transport for prescriptions, supplies, equipment, and records.' },
  { icon: ClipboardCheck, title: 'Chain-of-Custody Support', text: 'Documented handoffs, route notes, delivery confirmation, and professional procedures.' }
];

const steps = ['Request a pickup', 'Courier is dispatched', 'Secure transport', 'Delivery confirmation'];
const areas = ['Hospitals', 'Diagnostic Labs', 'Clinics', 'Pharmacies', 'Dental Offices', 'Home Healthcare'];

function App() {
  const [open, setOpen] = React.useState(false);
  const nav = ['Services', 'Compliance', 'Process', 'Contact'];

  return <>
    <header className="header">
      <a className="brand" href="#top"><span>🚑 MedSwiftCare</span> Medical Courier</a>
      <button className="menuBtn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav open' : 'nav'}>
        {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
        <a className="navCta" href="#contact">Get a Quote</a>
      </nav>
    </header>

    <main id="top">
      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">HIPAA-aware • Same-day • Scheduled routes</p>
          <h1>Fast, secure medical courier services you can trust.</h1>
          <p className="heroLead">Professional delivery for labs, clinics, pharmacies, and healthcare providers with careful handling, tracking, and dependable turnaround.</p>
          <div className="heroActions">
            <a className="btn primary" href="#contact">Request Service <ArrowRight size={18}/></a>
            <a className="btn secondary" href="tel:+14642494850"><Phone size={18}/> Call Now</a>
          </div>
          <div className="stats">
            <div><strong>24/7</strong><span>Available routes</span></div>
            <div><strong>STAT</strong><span>Urgent delivery</span></div>
            <div><strong>100%</strong><span>Professional handling</span></div>
          </div>
        </div>
        <div className="heroCard">
          <div className="pulse"><Truck size={52}/></div>
          <h3>On-time medical transport</h3>
          <p>Specimens, supplies, prescriptions, documents, and equipment delivered with care.</p>
          <ul>
            <li><ShieldCheck/> Secure handling</li>
            <li><MapPin/> GPS-supported routing</li>
            <li><Clock/> Same-day options</li>
          </ul>
        </div>
      </section>

      <section className="section logos">
        <span>Serving healthcare partners across your community</span>
        <div>{areas.map(area => <b key={area}>{area}</b>)}</div>
      </section>

      <section className="section" id="services">
        <div className="sectionHead">
          <p className="eyebrow">What we deliver</p>
          <h2>Medical courier solutions for daily operations and urgent needs.</h2>
        </div>
        <div className="grid cards">
          {services.map(({icon: Icon, title, text}) => <article className="card" key={title}>
            <Icon className="cardIcon"/>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>)}
        </div>
      </section>

      <section className="split section" id="compliance">
        <div>
          <p className="eyebrow">Built for healthcare</p>
          <h2>Professional handling, privacy-minded operations, and dependable records.</h2>
          <p>We help your team reduce missed pickups, delayed lab runs, and uncertain handoffs through clear procedures and trained couriers.</p>
        </div>
        <div className="checklist">
          {['HIPAA-aware courier practices', 'OSHA bloodborne pathogen training ready', 'Temperature monitoring available', 'Signed pickup and delivery logs', 'Commercial insurance documentation'].map(x => <p key={x}><ShieldCheck/> {x}</p>)}
        </div>
      </section>

      <section className="section process" id="process">
        <div className="sectionHead center">
          <p className="eyebrow">Simple process</p>
          <h2>From pickup request to delivery confirmation.</h2>
        </div>
        <div className="steps">
          {steps.map((step, i) => <div className="step" key={step}><span>{i + 1}</span><h3>{step}</h3></div>)}
        </div>
      </section>

      <section className="testimonial section">
        <Star/><Star/><Star/><Star/><Star/>
        <h2>“Dependable, professional, and exactly what our clinic needed for daily lab runs.”</h2>
        <p>Healthcare Client</p>
      </section>

      <section className="contact section" id="contact">
        <div>
          <p className="eyebrow">Start today</p>
          <h2>Request a medical courier quote.</h2><p><strong>Contact:</strong> Johnathan van Dyck</p>
          <p>Tell us your pickup location, delivery destination, delivery frequency, and any special handling needs.</p>
          <div className="contactLinks">
            <a href="tel:+14642494850"><Phone/> +1 464-249-4850</a>
            <a href="mailto:jvd3589@yahoo.com"><Mail/> jvd3589@yahoo.com</a>
          </div>
        </div>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Your name" />
          <input placeholder="Business / facility name" />
          <input placeholder="Phone number" />
          <input placeholder="Email address" />
          <textarea placeholder="Tell us what you need delivered" rows="5"></textarea>
          <button className="btn primary" type="submit">Submit Request</button>
        </form>
      </section>
    </main>

    <footer>
      <b>MedSwiftCare Medical Courier</b>
      <span>Reliable healthcare logistics for your community.</span>
    </footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
