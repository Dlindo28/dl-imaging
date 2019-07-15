import axios from 'axios';
import { GET_IMAGES, IMAGES_LOADING } from './actions';

let flickrKey = process.env.REACT_APP_FLICKR_KEY;
/*
if (!flickrKey){
	flickrKey = require("../config/keys").flickrKey;
	console.log("not config var");
}
*/
console.log(process.env);
export const getImages = () => dispatch => {
	dispatch(setImagesLoading());
	let payload = [];

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
				axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.getInfo", {
					params: {
						api_key: flickrKey,
						photo_id: photo.id,
						format: "json",
						nojsoncallback: 1
					}
				})
					.then(res => {
						let tags = [];
						res.data.photo.tags.tag.forEach(tag => tags.push(tag.raw));
						payload.push({
							id: photo.id,
							url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
							title: photo.title,
							description: res.data.photo.description._content,
							tags,
							flickrUrl: res.data.photo.urls.url[0]._content
						});
						dispatch({
							type: GET_IMAGES,
							payload: payload
						});
					});
			});
		})
};

export const setImagesLoading = () => {
	return {
		type: IMAGES_LOADING
	}
};