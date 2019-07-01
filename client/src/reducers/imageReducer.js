import { GET_IMAGES, IMAGES_LOADING } from '../actions/actions';

const initialState = {
	images: [],
	loading: false
};

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_IMAGES:
			return {
				...state,
				images: action.payload,
				loading: false
			};
		case IMAGES_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};