import React from 'react';

function Contact() {
  return (
    <>
    <div id="contact" className="anchor"></div>
    <div className="min-vh-100 d-flex">
      <div className="container align-self-center">
        
        <div className="row my-3">
          <div className="col-12">
            <h2>Contact Me</h2>
          </div>
        </div>

        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control rounded-0" id="firstName" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control rounded-0" id="lastName" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control rounded-0" id="email" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="needs">How can I help you?</label>
              <select id="inputState" className="form-control rounded-0">
                <option defaultValue>Select a topic...</option>
                <option>Web Development</option>
                <option>For Hire</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary rounded-sm">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
