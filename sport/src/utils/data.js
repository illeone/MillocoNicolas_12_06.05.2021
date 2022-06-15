import axios from 'axios';

export const userInfos = async (id) => {

		const res = await axios.get(`./../../${id}/users.json`);
		return res.data;

};
