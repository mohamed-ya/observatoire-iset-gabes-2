import { useState } from 'react';
import { sanitize } from './s';
import Loading from './loading';


const NewsletterForm = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            //var address = document.getElementById[email].value;
            if (reg.test(email) == false) 
            {
                alert('Invalid Email Address');
                return (false);
            }
 
    

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize( formattedMessage ) : null;
  }

  return (
    <div className=''>
      <div className="row d-flex justify-content-center align-items-center rows ">
    <div className="col-md-6">
        <div className="card">
            <div className="text-center"> <img src="https://i.imgur.com/Dh7U4bp.png" width="200"/> <span className="d-block mt-3">abonner vous a notre newsletter </span>
                <div className="mx-5">
                    <div className="input-group mb-3 mt-4"> <input onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="votre email"
            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            onKeyUp={(event) => handleInputKeyEvent(event)}/> 
            <button className="btn btn-success border-rad" onClick={handleFormSubmit}>abonner</button> </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        { 'sending' === status ? <Loading showSpinner message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false}/> : null }
        {'error' === status || error ? (
          <div
            className=".text-danger h2"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {'success' === status && 'error' !== status && !error && (
          <div className=".text-success h2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
        )}
      </div>
</div>
      
    </div>
  );
}

export default NewsletterForm