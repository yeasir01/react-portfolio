import React from 'react';

const Alert = ({errorMsg}) => {
  const alertTypeClasses = errorMsg ? "alert-danger" : "alert-success";
  const iconTypeClasses = errorMsg ? "fa-times-circle": "fa-check-circle";

  return (
    <div className='row'>
      <div className="col-12">
        <div className={`alert ${alertTypeClasses} d-flex align-items-center`} role="alert">
          <i class={`fas ${iconTypeClasses} pr-2 fa-lg`}></i>
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
          <div className="row">
            <div className="col-12">
              <h3>Lets Talk</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className='text-secondary'>Looking for help with your project or just have a question? Fill out the form below, and I'll be in touch!</p>
            </div>
          </div>
          {submitted && <Alert errorMsg={error} />}
          <form onSubmit={handleSubmit}>
            <div className="form-row my-2">
              <div className="form-group col-md-6">
                <input type="text" className="form-control rounded-1 p-3 h-100" placeholder='First Name' id="firstName" onChange={handleChange} name="firstName" value={data.firstName} required />
              </div>
              <div className="form-group col-md-6">
                <input type="text" className="form-control rounded-1 p-3 h-100" placeholder='Last Name' id="lastName" onChange={handleChange} name="lastName" value={data.lastName} required />
              </div>
            </div>
            <div className="form-row my-2">
              <div className="form-group col-md-6">
                <input type="email" className="form-control rounded-1 p-3 h-100" placeholder='Email' id="email" onChange={handleChange} name="email" value={data.email} required />
              </div>
              <div className="form-group col-md-6">
                <select id="inputState" className="form-control rounded-1 p-3 h-100" onChange={handleChange} name="topic" value={data.topic} required>
                  <option value="">Select a subject...</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-row my-2">
              <div className="form-group col-md-12">
                <textarea className="form-control rounded-1 p-3 h-100" id="message" rows="7" placeholder='Enter your message in here...' onChange={handleChange} name="message" value={data.message} required></textarea>
              </div>
            </div>
            <div className="form-row mt-2">
              <div className="form-group col-sm-12 col-md-6 col-lg-2">
                <button type="submit" className="btn btn-outline-dark rounded-sm px-4 py-2 w-100">{isLoading ? "Sending..." : "Submit"}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};