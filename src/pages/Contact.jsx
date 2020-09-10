import React, {useState} from 'react';
import Header from '../components/header/Header';
import InteriorHero from '../components/hero/InteriorHero';
import {Formik} from 'formik';
import Footer from '../components/footer/Footer';
import emailjs from 'emailjs-com';

const Contact = props => {
  const [emailSent, setEmailSent] = useState(false);
  const [thankYou, setThankYou] = useState(null);
  return (
    <div className="Contact">
      <Header />
      <InteriorHero title="Contact" />
      <section className="flex flex-column justify-center form-container">
        <h4 className="w-100 tc">
          {thankYou === null
            ? "Send me a message and let's discuss you're next idea!"
            : thankYou}
        </h4>
        <Formik
          initialValues={{email: '', name: '', phone: '', comments: ''}}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
              errors.name = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, {setSubmitting}) => {
            emailjs
              .send(
                'ceph_gmail', //Email service as defined in EmailJS setting
                'template_pxi3qxw', // Email template ID provided by EmailJS
                {
                  from_name: values.name,
                  to_name: 'cephalodocs@gmail.com',
                  reply_to: values.email,
                  phone: values.phone,
                  comments: values.comments,
                },
                'user_rdlRbvk3JSM5R5cFZ07d8', // EmailJS user ID
              )
              .then(() => {
                setEmailSent(true);
                setSubmitting(false);
                setThankYou(
                  "Thank you for reaching out! I'll get back to you as soon as I can",
                );
              })
              .catch(error => {
                setSubmitting(false);
                alert("Hmmmm...something didn't work quite right.");
              });
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              className="contactForm ml-auto mr-auto flex flex-column w-30-l w-50-m w-90"
              onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="mv2 pa3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="mv2 pa3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="mv2 pa3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone && touched.phone && errors.phone}
              <textarea
                type="text"
                name="comments"
                placeholder="Additional Comments"
                className="mv2 pa3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comments}
              />
              {errors.comments && touched.comments && errors.comments}
              <button
                className="mainBtn mv2 w-50 ml-auto mr-auto"
                type="submit"
                disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
