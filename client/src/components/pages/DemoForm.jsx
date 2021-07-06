import React, { useState } from 'react'
import api from '../../api'

export default function DemoForm(props) {
  const [state, setState] = useState({
    partnerName: '',
    typeOfDemo: '',
    user: [],
    details: '',
  })

  const [message, setMessage] = useState(null)

  console.log(state)

  function handleInputChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  function handleClick(e) {
    e.preventDefault()
    console.log(state.name, state.description)
    let data = {
      partnerName: state.partnerName,
      typeOfDemo: state.typeOfDemo,
      details: state.details
    }
    api
      .createDemo(data)
      .then(result => {
        console.log('SUCCESS!')
        setState({
          name: '',
          capitals: '',
          area: '',
          description: '',
        })
        setMessage(`Your country '${state.name}' has been created`)
        setTimeout(() => {
          setMessage(null)
        }, 2000)
      })
      .catch(err => setState({ message: err.toString() }))
  }
  return (
    <div className="AddDemo">
      <h2>Create A Demo</h2>


      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>


      <div class="list-group accordion">


        <div class="list-group-item py-3" data-acc-step>
          <h5 class="mb-0" data-acc-title>Name &amp; Email</h5>
          <div data-acc-content>
            <div class="my-3">
              <div class="form-group">
                <label>Name:</label>
                <input type="text" name="name" class="form-control" />
              </div>
              <div class="form-group">
                <label>Email:</label>
                <input type="text" name="email" class="form-control" />
              </div>
            </div>
          </div>
        </div>



        <div class="list-group-item py-3" data-acc-step>
          <h5 class="mb-0" data-acc-title>Contact</h5>
          <div data-acc-content>
            <div class="my-3">
              <div class="form-group">
                <label>Telephone:</label>
                <input type="text" name="telephone" class="form-control" />
              </div>

              <div class="form-group">
                <label>Mobile:</label>
                <input type="text" name="mobile" class="form-control" />
              </div>
            </div>
          </div>
        </div>



        {message && <div className="info">{message}</div>}
      </div>
    </div>
  )
}
