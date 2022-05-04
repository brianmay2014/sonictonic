import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import './LoginForm.css';
import '../../index.css';

function LoginFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [credential, setCredential] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

    //uf there is already a sessionUser in the store, redirect to home page
	if (sessionUser) return <Redirect to="/" />;


	const handleDemoLogin = (e) => {
		e.preventDefault();
		
		//log in the demo user
		return dispatch(sessionActions.login( { credential: "Demo", password: "password" })).catch(
			async (res) => {
				const data = await res.json();
				if (data && data.errors) setErrors(data.errors);
			}
		);

	}

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors([]);

        //thunk action login from sessions
		return dispatch(sessionActions.login({ credential, password })).catch(
			async (res) => {
				const data = await res.json();
				if (data && data.errors) setErrors(data.errors);
			}
		);
	};

	return (
		<form onSubmit={handleSubmit}>
			<ul className="form-errors">
				{errors.map((error, idx) => (
					<li key={idx}>{error}</li>
				))}
			</ul>
			<label>
				Username or Email
				<input
					type="text"
					value={credential}
					onChange={(e) => setCredential(e.target.value)}
					required
				/>
			</label>
			<label>
				Password
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</label>
			<div>
			<button class="btn login-btn" type="submit">
				Log In
			</button>
			<button class="btn login-btn" onClick={handleDemoLogin}>
				Demo Login
			</button>

			</div>
		</form>
	);
}

export default LoginFormPage;
