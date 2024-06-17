import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
	const [data, setData] = useState({})
	const [location, setLocation] = useState('')
	const [citiesData, setCitiesData] = useState([])
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=ru&units=imperial&appid=d5a5c95bfdbbaf5eade4db93c367d0f4`
	//const weekweather = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=d5a5c95bfdbbaf5eade4db93c367d0f4`

	const searchLocation = event => {
		if (event.key === 'Enter') {
			axios.get(url).then(response => {
				setData(response.data)
				console.log(response.data)
			})
			setLocation('')
		}
	}

	const cities = [
		'Moscow',
		'Saint Petersburg',
		'Novosibirsk',
		'Yekaterinburg',
		'Kazan',
	]

	useEffect(() => {
		const fetchDataForCity = async city => {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=imperial&appid=d5a5c95bfdbbaf5eade4db93c367d0f4`
			try {
				const response = await axios.get(url)
				const newCityData = {
					name: response.data.name,
					temp: response.data.main.temp,
					description: response.data.weather[0].main,
				}
				setCitiesData(prevData => [...prevData, newCityData])
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		cities.forEach(city => fetchDataForCity(city))
	}, [])
	// fetchWeatherDataForCities()

	return (
		<div className='app'>
			<div className='weather-container'>
				{citiesData.map((city, index) => (
					<div className='weather-card' key={index}>
						<h2>{city.name}</h2>
						<p>{Math.round(((city.temp - 32) * 5) / 9)}°С</p>
						{city.description ? (
							city.description === 'Clouds' ? (
								<svg
									width='58'
									height='37'
									viewBox='0 0 58 37'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle cx='7.88349' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='7.88349'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='2.62835'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='7.88349'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='2.62835'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='7.88349'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='13.1434' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='13.1434'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='18.3952'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='18.3952' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='18.3952'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='18.3952'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='18.3952'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='23.6575' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='23.6575'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='23.6575'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='23.6575'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='28.9098' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='28.9098'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='2.62835'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='34.1721' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='34.1721'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='2.62835'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='39.4243' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='39.4243'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='2.62835'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='44.6828' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='44.6828'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='49.9384'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='49.9384' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle cx='55.1936' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='49.9384'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='55.1936'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='49.9384'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='55.1936'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='49.9384'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='34.1683'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='18.3952'
										cy='34.1683'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='23.6575'
										cy='34.1683'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='34.1683'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='34.1683'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='34.1683'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='34.1683'
										r='2.62835'
										fill='#E7EAE9'
									/>
								</svg>
							) : city.description === 'Clear' ? (
								<svg
									width='49'
									height='49'
									viewBox='0 0 49 49'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle cx='24.4896' cy='2.63' r='2.63' fill='#E7EAE9' />
									<circle cx='40.3251' cy='8.66122' r='2.63' fill='#E7EAE9' />
									<circle cx='46.3545' cy='24.4914' r='2.63' fill='#E7EAE9' />
									<circle cx='40.3251' cy='40.3223' r='2.63' fill='#E7EAE9' />
									<circle cx='24.4896' cy='46.353' r='2.63' fill='#E7EAE9' />
									<circle cx='8.66122' cy='40.3223' r='2.63' fill='#E7EAE9' />
									<circle cx='2.63' cy='24.4914' r='2.63' fill='#E7EAE9' />
									<circle cx='7.90565' cy='8.66122' r='2.63' fill='#E7EAE9' />
									<circle cx='19.2159' cy='13.9379' r='2.63' fill='#E7EAE9' />
									<circle cx='19.2159' cy='19.2142' r='2.63' fill='#E7EAE9' />
									<circle cx='13.935' cy='19.2142' r='2.63' fill='#E7EAE9' />
									<circle cx='35.0442' cy='19.2142' r='2.63' fill='#E7EAE9' />
									<circle cx='13.935' cy='24.4914' r='2.63' fill='#E7EAE9' />
									<circle cx='35.0442' cy='24.4914' r='2.63' fill='#E7EAE9' />
									<circle cx='13.935' cy='29.7687' r='2.63' fill='#E7EAE9' />
									<circle cx='35.0442' cy='29.7687' r='2.63' fill='#E7EAE9' />
									<circle cx='19.2159' cy='24.4914' r='2.63' fill='#E7EAE9' />
									<circle cx='19.2159' cy='29.7687' r='2.63' fill='#E7EAE9' />
									<circle cx='19.2159' cy='35.046' r='2.63' fill='#E7EAE9' />
									<circle cx='24.4896' cy='13.9379' r='2.63' fill='#E7EAE9' />
									<circle cx='24.4896' cy='19.2142' r='2.63' fill='#E7EAE9' />
									<circle cx='24.4896' cy='24.4914' r='2.63' fill='#E7EAE9' />
									<circle cx='24.4896' cy='29.7687' r='2.63' fill='#E7EAE9' />
									<circle cx='24.4896' cy='35.046' r='2.63' fill='#E7EAE9' />
									<circle cx='29.7705' cy='13.9379' r='2.63' fill='#E7EAE9' />
									<circle cx='29.7705' cy='19.2142' r='2.63' fill='#E7EAE9' />
									<circle cx='29.7705' cy='24.4914' r='2.63' fill='#E7EAE9' />
									<circle cx='29.7705' cy='29.7687' r='2.63' fill='#E7EAE9' />
									<circle cx='29.7705' cy='35.046' r='2.63' fill='#E7EAE9' />
								</svg>
							) : city.description === 'Rain' ? (
								<svg
									width='58'
									height='48'
									viewBox='0 0 58 48'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle cx='7.88348' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='7.88348'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='2.62835'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='7.88348'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='2.62835'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='7.88348'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='7.88348'
										cy='44.6816'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='13.1434' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='13.1434'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='39.4248'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='18.3952'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='18.3952' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='18.3952'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='18.3952'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='18.3952'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='23.6575' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='23.6575'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='23.6575'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='23.6575'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='23.6575'
										cy='44.6816'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='28.9098' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='28.9098'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='39.4248'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='2.62835'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='34.1721' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='34.1721'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='2.62835'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='39.4243' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='39.4243'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='44.6816'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='2.62835'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='44.6828' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='44.6828'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='39.4248'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='49.9384'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='49.9384' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle cx='55.1936' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='49.9384'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='55.1936'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='49.9384'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='55.1936'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='49.9384'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
								</svg>
							) : (
								<p>N/A</p>
							)
						) : null}
					</div>
				))}
			</div>
			<div className='container'>
				<div className='search'>
					<input
						value={location}
						onChange={event => setLocation(event.target.value)}
						onKeyPress={searchLocation}
						placeholder='Введите название города'
						type='text'
					/>
				</div>
				<div className='top'>
					<div>
						<div className='location'>
							<p>{data.name}</p>
						</div>
						<div className='temp'>
							{data.main ? (
								<h1>
									{Math.round(((data.main.temp.toFixed() - 32) * 5) / 9)}
									°C
								</h1>
							) : null}
						</div>
					</div>
					<div className='description'>
						{data.weather ? (
							data.weather[0].main === 'Clouds' ? (
								<svg
									width='58'
									height='37'
									viewBox='0 0 58 37'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle cx='7.88349' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='7.88349'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='2.62835'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='7.88349'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='2.62835'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='7.88349'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='13.1434' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='13.1434'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='18.3952'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='18.3952' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='18.3952'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='18.3952'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='18.3952'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='23.6575' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='23.6575'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='23.6575'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='23.6575'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='28.9098' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='28.9098'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='2.62835'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='34.1721' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='34.1721'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='2.62835'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='39.4243' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='39.4243'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='2.62835'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='44.6828' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='44.6828'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='49.9384'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='49.9384' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle cx='55.1936' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='49.9384'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='55.1936'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='49.9384'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='55.1936'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='49.9384'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='34.1683'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='18.3952'
										cy='34.1683'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='23.6575'
										cy='34.1683'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='34.1683'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='34.1683'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='34.1683'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='34.1683'
										r='2.62835'
										fill='#E7EAE9'
									/>
								</svg>
							) : data.weather[0].main === 'Clear' ? (
								<svg
									width='49'
									height='49'
									viewBox='0 0 49 49'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle cx='24.4896' cy='2.63' r='2.63' fill='#E7EAE9' />
									<circle cx='40.3251' cy='8.66122' r='2.63' fill='#E7EAE9' />
									<circle cx='46.3545' cy='24.4914' r='2.63' fill='#E7EAE9' />
									<circle cx='40.3251' cy='40.3223' r='2.63' fill='#E7EAE9' />
									<circle cx='24.4896' cy='46.353' r='2.63' fill='#E7EAE9' />
									<circle cx='8.66122' cy='40.3223' r='2.63' fill='#E7EAE9' />
									<circle cx='2.63' cy='24.4914' r='2.63' fill='#E7EAE9' />
									<circle cx='7.90565' cy='8.66122' r='2.63' fill='#E7EAE9' />
									<circle cx='19.2159' cy='13.9379' r='2.63' fill='#E7EAE9' />
									<circle cx='19.2159' cy='19.2142' r='2.63' fill='#E7EAE9' />
									<circle cx='13.935' cy='19.2142' r='2.63' fill='#E7EAE9' />
									<circle cx='35.0442' cy='19.2142' r='2.63' fill='#E7EAE9' />
									<circle cx='13.935' cy='24.4914' r='2.63' fill='#E7EAE9' />
									<circle cx='35.0442' cy='24.4914' r='2.63' fill='#E7EAE9' />
									<circle cx='13.935' cy='29.7687' r='2.63' fill='#E7EAE9' />
									<circle cx='35.0442' cy='29.7687' r='2.63' fill='#E7EAE9' />
									<circle cx='19.2159' cy='24.4914' r='2.63' fill='#E7EAE9' />
									<circle cx='19.2159' cy='29.7687' r='2.63' fill='#E7EAE9' />
									<circle cx='19.2159' cy='35.046' r='2.63' fill='#E7EAE9' />
									<circle cx='24.4896' cy='13.9379' r='2.63' fill='#E7EAE9' />
									<circle cx='24.4896' cy='19.2142' r='2.63' fill='#E7EAE9' />
									<circle cx='24.4896' cy='24.4914' r='2.63' fill='#E7EAE9' />
									<circle cx='24.4896' cy='29.7687' r='2.63' fill='#E7EAE9' />
									<circle cx='24.4896' cy='35.046' r='2.63' fill='#E7EAE9' />
									<circle cx='29.7705' cy='13.9379' r='2.63' fill='#E7EAE9' />
									<circle cx='29.7705' cy='19.2142' r='2.63' fill='#E7EAE9' />
									<circle cx='29.7705' cy='24.4914' r='2.63' fill='#E7EAE9' />
									<circle cx='29.7705' cy='29.7687' r='2.63' fill='#E7EAE9' />
									<circle cx='29.7705' cy='35.046' r='2.63' fill='#E7EAE9' />
								</svg>
							) : data.weather[0].main === 'Rain' ? (
								<svg
									width='58'
									height='48'
									viewBox='0 0 58 48'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle cx='7.88348' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='7.88348'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='2.62835'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='7.88348'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='2.62835'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='7.88348'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='7.88348'
										cy='44.6816'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='13.1434' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='13.1434'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='13.1434'
										cy='39.4248'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='18.3952'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='18.3952' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='18.3952'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='18.3952'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='18.3952'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='23.6575' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='23.6575'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='23.6575'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='23.6575'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='23.6575'
										cy='44.6816'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='28.9098' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='28.9098'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='28.9098'
										cy='39.4248'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='2.62835'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='34.1721' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='34.1721'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='34.1721'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='2.62835'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='39.4243' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='39.4243'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='39.4243'
										cy='44.6816'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='2.62835'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='44.6828' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='44.6828'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='44.6828'
										cy='39.4248'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='49.9384'
										cy='7.88564'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle cx='49.9384' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle cx='55.1936' cy='13.142' r='2.62835' fill='#E7EAE9' />
									<circle
										cx='49.9384'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='55.1936'
										cy='18.3979'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='49.9384'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='55.1936'
										cy='23.6549'
										r='2.62835'
										fill='#E7EAE9'
									/>
									<circle
										cx='49.9384'
										cy='28.9119'
										r='2.62835'
										fill='#E7EAE9'
									/>
								</svg>
							) : (
								<p>N/A</p>
							)
						) : null}
					</div>
				</div>

				{data.name !== undefined && (
					<div className='bottom'>
						<div className='feels'>
							<p>Ощущается как</p>
							{data.main ? (
								<p className='bold'>
									{Math.round(((data.main.feels_like.toFixed() - 32) * 5) / 9)}
									°C
								</p>
							) : null}
						</div>
						<div className='humidity'>
							<p>Влажность</p>
							{data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
						</div>
						<div className='wind'>
							<p>Скоротсь ветра</p>
							{data.wind ? (
								<p className='bold'>{data.wind.speed.toFixed()} м/c</p>
							) : null}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default App
