import axios from 'axios';
import { flickrKey } from '../config/keys';
import { GET_IMAGES, IMAGES_LOADING } from './actions';

/* export const getImages = () => dispatch => {
	dispatch(setImagesLoading());
	axios.get('/api/images')
		.then(res =>
			dispatch({
				type: GET_IMAGES,
				payload: res.data
			})
		)
}; */

export const getImages = () => dispatch => {
	dispatch(setImagesLoading());
	let urls = [];
	axios.get("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos", {
		params: {
			api_key: flickrKey,
			photoset_id: "72157709321735101",
			user_id: "146427448@N05",
			format: "json",
			nojsoncallback: 1
		}
	})
		.then(res => {
			res.data.photoset.photo.forEach(photo => {
				let farm = photo.farm;
				let server = photo.server;
				let id = photo.id;
				let secret = photo.secret;
				urls.push(`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`);
			});
			dispatch({
				type: GET_IMAGES,
				payload: urls
			});
		})
};

export const setImagesLoading = () => {
	return {
		type: IMAGES_LOADING
	}
};