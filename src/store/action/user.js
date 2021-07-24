export function login(dispatch, token) {
	dispatch({ type: "Login", payLoad: token });
}
