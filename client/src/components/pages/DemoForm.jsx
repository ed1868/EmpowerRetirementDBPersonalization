import React, { useState } from 'react'
import api from '../../api'

export default function DemoForm(props) {




  const currentUser = api.getLocalStorageUser();
  let accuCode = false;
  // let partnerUser = [];
  if (currentUser.role === 'SalesAdmin') {
    accuCode = true;
  }

  // if (currentUser) {
  //   const userPool = api.getCompanyUsers(currentUser.partnerCode)
  //     .then(result => {
  //       console.log('EL RESULT L : ', result)
  //       if (result.length > 0) {
  //         console.log('ENTRO EN SOLO UNO')
  //         partnerUser = result;
  //         return partnerUser
  //       }
  //     })
  //     .catch(err => {
  //       if (err) {
  //         console.log('ERROR : ', err)
  //       }
  //     })


  // }



  const [state, setState] = useState({
    partnerName: '',
    typeOfDemo: '',
    users: [],
    details: '',
  })

  const [message, setMessage] = useState(null)



  function handleInputChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  function handleInputApiSearh(event) {

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
      <h1 className="text-center mt-5">Create A Demo</h1>


      <div class="accordion" id="accordionExample">
        <form>
          <div class="accordion-item ">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Step 1 - Demo Site Information
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="list-group-item py-3" data-acc-step>
                  {/* <h5 class="mb-0" data-acc-title>Name &amp; Email</h5> */}
                  <div data-acc-content>
                    <div class="my-3">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Demo Site Name:</label>
                            {/* <input type="text" name="demoName" class="form-control" /> */}
                            <input
                              className="form-control"
                              type="text"
                              value={state.demoName}
                              name="demoName"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div class="form-group">
                            <label>Plan Asset Size:</label>
                            <input
                              className="form-control"
                              type="text"
                              value={state.assetSize}
                              name="assetSize"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Site Access:</label>
                            {/* <input type="text" name="demoName" class="form-control" /> */}
                            <input
                              className="form-control"
                              type="text"
                              value={state.demoName}
                              name="demoName"
                              onChange={handleInputChange}
                            />
                          </div>
                          {
                            accuCode && (
                              <div class="form-group">
                                <label>Accu Code: </label>
                                {/* <input type="text" name="demoName" class="form-control" /> */}
                                <input
                                  className="form-control"
                                  type="text"
                                  value={state.accuCode}
                                  name="accuCode"
                                  onChange={handleInputChange}
                                />
                              </div>
                            )
                          }

                          <br></br>
                          <a href="#" class="addButtonPlacement btn btn-primary">Next</a>
                        </div>

                      </div>



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Step 2 - Sales Contact Information
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Sales Rep:</label>
                      {/* <input type="text" name="demoName" class="form-control" /> */}
                      <input
                        className="form-control"
                        type="text"
                        value={state.salesRep}
                        name="salesRep"
                        onChange={handleInputApiSearh}
                      />
                    </div>

                    <div class="form-group">
                      <label>Title:</label>
                      {/* <input type="text" name="demoName" class="form-control" /> */}
                      <input
                        className="form-control"
                        type="text"
                        value={state.title}
                        name="title"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div class="form-group">
                      <label>Phone Number:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={state.phoneNumber}
                        name="phoneNumber"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div class="form-group">
                      <label>Mobile Number: </label>
                      {/* <input type="text" name="demoName" class="form-control" /> */}
                      <input
                        className="form-control"
                        type="email"
                        value={state.mobileNumber}
                        name="mobileNumber"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">

                    <div class="form-group">
                      <label className="mt-3">Email Notification:</label>
                      <br></br>
                      <br></br>
                      <label>Primary Email:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={state.primaryEmail}
                        name="primaryEmail"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div class="form-group">
                      <label>Secondary CC: </label>
                      {/* <input type="text" name="demoName" class="form-control" /> */}
                      <input
                        className="form-control"
                        type="email"
                        value={state.secondaryCc}
                        name="secondaryCc"
                        onChange={handleInputChange}
                      />
                    </div>



                    <br></br>
                    <div className="row">
                      <div class="col-md-6">
                        <a href="#" class="addButtonPlacement btn btn-secondary">Back</a>
                      </div>
                      <div class="col-md-6">
                        <a href="#" class="addButtonPlacement btn btn-primary">Next</a>
                      </div>
                    </div>


                  </div>



                </div>

              </div>
            </div>
          </div>


          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Step 3 - User Information
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Title Category:</label>
                      {/* <input type="text" name="demoName" class="form-control" /> */}
                      <input
                        className="form-control"
                        type="text"
                        value={state.category}
                        name="category"
                        onChange={handleInputApiSearh}
                      />
                    </div>

                    <div class="form-group">
                      <label>First Name:</label>
                      {/* <input type="text" name="demoName" class="form-control" /> */}
                      <input
                        className="form-control"
                        type="text"
                        value={state.clientFirstName}
                        name="clientFirstName"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div class="form-group">
                      <label>Last Name:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={state.clientLastName}
                        name="clientLastName"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div class="form-group">
                      <label>Title : </label>
                      {/* <input type="text" name="demoName" class="form-control" /> */}
                      <input
                        className="form-control"
                        type="text"
                        value={state.clientTitle}
                        name="clientTitle"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div class="form-group">
                      <label>Phone Number: </label>
                      {/* <input type="text" name="demoName" class="form-control" /> */}
                      <input
                        className="form-control"
                        type="text"
                        value={state.clientPhoneNumber}
                        name="clientPhoneNumber"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div class="form-group">
                      <label>Email: </label>
                      {/* <input type="text" name="demoName" class="form-control" /> */}
                      <input
                        className="form-control"
                        type="email"
                        value={state.mobileNumber}
                        name="mobileNumber"
                        onChange={handleInputChange}
                      />
                    </div>


                  </div>
                  <div class="col-md-6">

                    <div class="form-group">


                      <label>Advisor Company Name: </label>
                      <input
                        className="form-control"
                        type="text"
                        value={state.clientAdvisorCompanyName}
                        name="clientAdvisorCompanyName"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div class="form-group">
                      <label>Plan Company Name : </label>

                      <input
                        className="form-control"
                        type="text"
                        value={state.clientCompanyName}
                        name="clientCompanyName"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div class="form-group">
                      <label>Username : </label>

                      <input
                        className="form-control"
                        type="text"
                        value="mcg-test"
                        name="clientUserName"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div class="form-group">
                      <label>Username : </label>

                      <input
                        className="form-control"
                        type="password"
                        value={state.clientPassword}
                        name="clientPassword"
                        onChange={handleInputChange}
                      />
                    </div>



                    <br></br>
                    <div className="row">
                      <div class="col-md-6">
                        <a href="#" class="addButtonPlacement btn btn-secondary">Back</a>
                      </div>
                      <div class="col-md-6">
                        <a href="#" class="addButtonPlacement btn btn-primary">Next</a>
                      </div>
                    </div>


                  </div>



                </div>

              </div>
            </div>
          </div>
        </form>
        {message && <div className="info">{message}</div>}
      </div>


    </div>
  )
}
