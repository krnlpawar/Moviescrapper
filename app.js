import express from 'express'
import request from 'request'
import * as cheerio from 'cheerio';

const app = express()

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/scrape', (req, res) => {
	const url = 'https://www.imdb.com/search/title/?title=warm%20bodies'
	let movieNames = []
	request(url, (error, response, html) => {
		if (error) {
			console.log(error)
		} else {
			const $ = cheerio.load(html)
			const title = $('.ipc-metadata-list-summary-item a.ipc-title-link-wrapper .ipc-title__text')
			console.log(title)
			
			title.each((index, element) => {
				movieNames.push($(element).text())
			})

			console.log(movieNames)
			res.send(movieNames)
		}
	})
})
	
app.listen(3001, () => {
	console.log('app listening on port 3001!')
})