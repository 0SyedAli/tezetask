import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const UserForm = () => {
    const [user, setUser] = useState(
        {
            profile_img: '',
            username: '',
            email: '',
            phone: '',
            prefered_time: '',
            role: '',
        }
    );
    const data = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const { profile_img, username, email, phone, prefered_time, role } = user;
    const getData = (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  // Corrected typo in 'application'
            },
            body: JSON.stringify({
                profile_img, username, email, phone, prefered_time, role
            })
        }
        const res = fetch("https://tezeract-task-736a0-default-rtdb.firebaseio.com/UserData.json", options);
        if (res) {
            alert('Data succesfully stored');
        }
        else {
            alert('Error Occured');
        }
    }
    return (
        <section className="user-form">
            <h1>User Form</h1>
            <div className="table_section">
                <form method='POST'>
                    <div className="upload_pic_main">
                        <label htmlFor="profileImg">Upload Profile Picture</label>
                        <div className='img_upload_container'>
                            <input
                                type="file"
                                id="profile_img"
                                name="profile_img"
                                autoComplete="off"
                                required
                                value={user.profile_img}
                                onChange={data}
                            />
                            <div className="img_upload">
                                <span>+ Browse</span>
                            </div>
                        </div>
                        <p>PNG, JPEG, JPG</p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className='d-flex flex-column'>
                                <label htmlFor="username">User name:</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    autoComplete="off"
                                    required
                                    placeholder='Enter username'
                                    value={user.username}
                                    onChange={data}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='d-flex flex-column'>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="off"
                                    required
                                    placeholder='Enter email'
                                    value={user.email}
                                    onChange={data}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='d-flex flex-column'>
                                <label>Enter your phone number:</label>
                                <input
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    placeholder='Enter phone'
                                    autoComplete="off"
                                    required
                                    value={user.phone}
                                    onChange={data}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='d-flex flex-column'>
                                <label htmlFor="email">Interview preferred time:</label>
                                <FormControl fullWidth>
                                    <Select
                                        value={user.prefered_time}
                                        onChange={data}
                                        name="prefered_time"
                                        autoComplete="off"
                                        required
                                        displayEmpty
                                        color='secondary'
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        style={{ borderRadius: '8px', }}
                                    >
                                        <MenuItem value="Morning">Morning</MenuItem>
                                        <MenuItem value="Afternoon">Afternoon</MenuItem>
                                        <MenuItem value="Evening">Evening</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className="check_area">
                        <div className="form-check form-switch toggle_">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Select Your Role (optional)</label>
                        </div>
                        <div className="my-4 radio_area">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    onChange={data}
                                    value="Student"
                                    type="radio"
                                    name="role"
                                    id="Student"
                                />
                                <label className="form-check-label" htmlFor="Student">Student</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    onChange={data}
                                    value="Teacher"
                                    type="radio"
                                    name="role"
                                    id="Teacher"
                                />
                                <label className="form-check-label" htmlFor="Teacher">Teacher</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    onChange={data}
                                    value="Other"
                                    type="radio"
                                    name="role"
                                    id="Other"
                                />
                                <label className="form-check-label" htmlFor="Other">Other</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" onClick={getData} className="sub_btn">ADD USER</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UserForm;
