require('dotenv').config();

const getAllCity = async (req, res) => {
	try {
		const cities = await fetch('https://api.rajaongkir.com/starter/city', {
			method: 'GET',
			headers: {
				"Access-Control-Allow-Origin": "*",
				"key": process.env.RAJAONGKIR_API_KEY
			}
		});
		
		const response = await cities.json()

		if (response.rajaongkir.status.code === 400) {
			return res.status(429).json({
				code: 200,
				message: 'This key has reached the daily limit',
				data: null
			});
		}

		if (response.rajaongkir.status.code === 200) {
			return res.status(200).json({
				code: 200,
				message: 'Cities found',
				data: response.rajaongkir.results
			});
		}

	} catch (error) {
		console.log(error)
		return res.status(500).json({
			code: 500,
			message: 'Internal server error',
			data: null
		});
	}

};

module.exports = {
	getAllCity,
};