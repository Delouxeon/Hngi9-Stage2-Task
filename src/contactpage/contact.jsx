import * as React from 'react';
import './contact.css';
import ContactHeader from './contact-header';
import FormSection from "./form-section"
import Horizontal from '../Indexpage/Horizontal';
import Footer from '../Indexpage/Footer';


function Contact() {

  return (
    <div>
      <ContactHeader />
      <FormSection />
      <Horizontal /> 
      <Footer />
    </div>
  );
}

export default Contact;

