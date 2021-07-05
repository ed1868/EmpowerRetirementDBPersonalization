import React from 'react'
import api from '../../api'

export default function DemoHub() {
  // const [countries, setCountries] = useState([])
  // useEffect(() => {
  //   api
  //     .getCountries()
  //     .then(countries => {
  //       setCountries(countries)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <div className="DemoHub">
      <h2 className="mt-5">DEMO HUB</h2>

      <div className="section">
        <div className="container">
          <div className="addButton mt-5">
            <a href="#" class="addButtonPlacement btn btn-danger">Add Demo</a>
          </div>
          <br></br>
          <br></br>
          <table className="table mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* {countries.map(c => (
        <li key={c._id}>{c.name}</li>
      ))} */}
    </div>
  )
}
