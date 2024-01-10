import { useState, useEffect } from 'react';
const UserTable = () => {
  const [userTableData, setUserTableData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tezeract-task-736a0-default-rtdb.firebaseio.com/UserData.json');
        const data = await response.json();

        // Convert data to an array and update userTableData
        const dataArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setUserTableData(dataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className='user-details'>
      <h1>User Table</h1>
      <div className="table_section">
        <div className="show-entries">
          <label>Showing</label>
          <select>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <label>entries</label>
        </div>
        <div className="table-container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">EMAIL</th>
                <th scope="col">NAME</th>
                <th scope="col">PHONE NO</th>
                <th scope="col">INTERVIEW TIMINGS</th>
                <th scope="col">ROLE</th>
                <th scope="col">ACTIVE</th>
              </tr>
            </thead>
            <tbody>
              {userTableData.map((userData, index) => (
                <tr key={userData.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{userData.email}</td>
                  <td>
                    <span className="img_uname">
                      {userData.profile_img ? (
                        <img
                          src={userData.profile_img}
                          alt=""
                          className="userPhoto"
                        />
                      ) : (
                        <div className="img-placeholder">?</div>
                      )}
                      <p>{userData.username}</p>
                    </span>
                  </td>
                  <td>{userData.phone}</td>
                  <td>{userData.prefered_time}</td>
                  <td>{userData.role}</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id={`flexSwitchCheck${index}`}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="tableFooter">
          <div className="showingentries">
            Showing 1 to 10 of {userTableData.length} entries
          </div>

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="/">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default UserTable;
