import React from 'react'

const Contact = () => {
  return (
    <div>
      <div>Contact Us</div>
      <div>
        <p>We'd love to hear from you!</p>
        <p>Feel free to reach out with any questions or feedback.</p>
      </div>
      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </form>
      </div>
    </div>
  )
}

export default Contact