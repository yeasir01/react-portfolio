import React from 'react';

const Alert = ({errorMsg}) => {
  const alertClassName = errorMsg ? "alert-danger" : "alert-success";

  return (
    <div className='row'>
      <div className="col-12">
        <div className={`alert ${alertClassName}`} role="alert">
          {errorMsg ? errorMsg : "Thank You! Your submission has been sent."}
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  }

  const [isLoading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(initialState);

  const handleChange = (event) => {
    submitted && setSubmitted(false);
    const { name, value } = event.target;
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      setLoading(true);

      const response = await fetch('https://formspree.io/f/moqybjde', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
       setData(initialState);
       setError(null);
      } else {
        setError('Failed to send message');
      }

    } catch (err) {
      setError('Failed to send message');
      console.error(err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

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
          {submitted && <Alert errorMsg={error} />}
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control rounded-0" id="firstName" onChange={handleChange} name="firstName" value={data.firstName} required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control rounded-0" id="lastName" onChange={handleChange} name="lastName" value={data.lastName} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control rounded-0" id="email" onChange={handleChange} name="email" value={data.email} required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="needs">How can I help you?</label>
                <select id="inputState" className="form-control rounded-0" onChange={handleChange} name="topic" value={data.topic} required>
                  <option defaultValue>Select a topic...</option>
                  <option>Web Development</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="4" onChange={handleChange} name="message" value={data.message} required></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-primary rounded-sm">{isLoading ? "Sending..." : "Submit"}</button>
          </form>
        </div>
      </div>
    </>
  );
};