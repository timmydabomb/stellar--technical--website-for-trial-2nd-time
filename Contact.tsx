"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState("");

  useEffect(() => {
    const solution = new URLSearchParams(window.location.search).get("solution");
    const options: Record<string, string> = {
      stellar: "Stellar Technical Services",
      atmos: "Atmos Nano Bubble Solutions",
      cosmic: "Cosmic Scent Diffuser",
    };
    if (solution && options[solution]) setInterest(options[solution]);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selectedInterest = String(formData.get("interest") ?? "");
    const subject = `Website enquiry — ${selectedInterest}`;
    const body = [
      `Name: ${formData.get("name") ?? ""}`,
      `Email: ${formData.get("email") ?? ""}`,
      `Interested in: ${selectedInterest}`,
      "",
      "Project details:",
      `${formData.get("message") ?? ""}`,
    ].join("\r\n");
    window.location.href = `mailto:timothydavid148@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <section className="contact-section section" id="contact">
      <div className="page-width contact-layout">
        <div className="contact-copy">
          <div className="eyebrow eyebrow-light"><span /> Project enquiry</div>
          <h2>Let’s make your<br /><em>space</em> feel different.</h2>
          <p>Tell us a little about your project. We’ll help you find a thoughtful place to start.</p>
          <div className="contact-details contact-details-spaced">
            <a href="tel:+971558455038"><span><Phone size={17} /></span><div><small>Mobile</small><strong>+971 55-8455038</strong></div></a>
            <div><span><Phone size={17} /></span><div><small>Immediate contacts</small><div className="contact-phones"><a href="tel:0555546541">055-5546541</a><a href="tel:0505540541">050-5540541</a></div></div></div>
            <a href="tel:+97142204041"><span><Phone size={17} /></span><div><small>Landline</small><strong>+971 -4-2204041</strong></div></a>
            <a href="mailto:tech_sol@eim.ae"><span><Mail size={17} /></span><div><small>Email</small><strong>tech_sol@eim.ae</strong></div></a>
            <div><span><MapPin size={17} /></span><div><small>Find us</small><strong>Dubai, United Arab Emirates</strong></div></div>
          </div>
          <p className="placeholder-note">Location shown is a placeholder for this demo.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>01 — 03</span><p>Tell us about your project</p></div>
          <label htmlFor="name">Your name</label><input id="name" name="name" type="text" placeholder="e.g. Alex Morgan" required />
          <label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@company.com" required />
          <label htmlFor="interest">I’m interested in</label>
          <select id="interest" name="interest" value={interest} onChange={(event) => setInterest(event.target.value)} required><option value="" disabled>Select a solution</option><option>Stellar Technical Services</option><option>Atmos Nano Bubble Solutions</option><option>Cosmic Scent Diffuser</option></select>
          <label htmlFor="message">A little about your project</label><textarea id="message" name="message" rows={3} placeholder="Share whatever you have in mind…" required />
          <button className="button button-aqua form-submit" type="submit">Send enquiry <ArrowUpRight size={17} /></button>
          {submitted && <p className="form-confirmation" role="status"><Check size={16} /> Your email app should open with the enquiry ready to review and send.</p>}
          <small className="form-privacy">Your email app will open so you can review and send this enquiry to timothydavid148@gmail.com.</small>
        </form>
      </div>
    </section>
  );
}
