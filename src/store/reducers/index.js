function reducer(state, action) {
	switch (action.type) {
		case "Login":
			console.log("token", action.payLoad)
			return { ...state, token: action.payLoad };
		default:
			return state;
	}
}

export default reducer;
