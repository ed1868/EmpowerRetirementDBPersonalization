import React, { useState } from 'react'
import api from '../../api'

export default function AddDemo(props) {
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
      name: state.name,
      capitals: state.capitals,
      area: state.area,
      description: state.description,
    }
    api
      .addCountry(data)
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
      <form>
        Name:{' '}
        <input
          type="text"
          value={state.partnerName}
          name="name"
          onChange={handleInputChange}
        />{' '}
        <br />
        Demo Type:{' '}
        <input
          type="text"
          value={state.typeOfDemo}
          name="typeOfDemo"
          onChange={handleInputChange}
        />{' '}
        <br />
        <br />
        Details:{' '}
        <textarea
          value={state.details}
          name="description"
          cols="30"
          rows="10"
          onChange={handleInputChange}
        />{' '}
        <br />
        <button onClick={e => handleClick(e)}>Create a Demo</button>
      </form>
      {message && <div className="info">{message}</div>}
    </div>
  )
}
