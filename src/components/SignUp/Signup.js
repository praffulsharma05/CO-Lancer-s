import React from 'react';

const Signup = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        fetch('/submit_signup', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Signup successful!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
    };

    return (
        <div className="container" style={{backgroundColor: '#4d46c8'}}>
            <h1>Signup Page</h1>

            <form id="signupForm" onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>

                <div>
                    <label htmlFor="cv">Upload CV/Resume (optional):</label>
                    <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" />
                </div>

                <div>
                    <label htmlFor="feedback">How did you hear about us?</label>
                    <select id="feedback" name="feedback" required>
                        <option value="">--Select an option--</option>
                        <option value="social_media">Social Media</option>
                        <option value="friends_family">Friends/Family</option>
                        <option value="search_engine">Search Engine</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>

            <style jsx>{`
                .container {
                     background:#044e42;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    max-width: 400px;
                }

                h1 {
                    margin-bottom: 20px;
                    text-align: center;
                }

                form div {
                    margin-bottom: 15px;
                }

                label {
                    display: block;
                    margin-bottom: 5px;
                }

                input, select, button {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }

                button {
                    background-color: #5cb85c;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #4cae4c;
                }
            `}</style>
        </div>
    );
};

export default Signup;
