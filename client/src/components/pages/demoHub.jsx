import React from 'react'
import api from '../../api'
import { Link, NavLink } from 'react-router-dom'
export default function DemoHub() {
  // const [countries, setCountries] = useState([])
  // useEffect(() => {

  let currentUser = api.getLocalStorageUser();
  // let
  // api
  //   .getCountries()
  //   .then(countries => {
  //     setCountries(countries)
  //   })
  //   .catch(err => console.log(err))
  // }, [])

  return (
    <div className="DemoHub">

      <h1 className="mt-5 text-center">DEMO HUB</h1>

      <div className="section">
        <div className="container">
          <div className="addButton mt-5">
            {/* {
              api.isLoggedIn() && (
                <Link to={`/demo/createDemo`}>
                  Demos
                </Link>
              )
            } */}
            <a href="/demo/createDemo" class="addButtonPlacement btn btn-danger">Add Demo</a>
          </div>
          <br></br>
          <br></br>
          <table className="table mt-5">
            <thead>
              <tr>
                <th scope="col">Demo Name</th>
                <th scope="col">Created By</th>
                <th scope="col">Assigned To</th>
                <th scope="col">Created On</th>
                <th scope="col">Expires On</th>
                <th scope="col">Sponsor</th>
                <th scope="col">Documents</th>
                <th scope="col">Site Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">AdminTest</th>
                <td>Empower Admin</td>
                <td>Metlife Client</td>
                <td>07/05/2021</td>
                <td>07/05/2022</td>
                <td>Met Life</td>
                <td></td>
                <td></td>
              </tr>
              {/* <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr> */}
              {/* <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr> */}
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
