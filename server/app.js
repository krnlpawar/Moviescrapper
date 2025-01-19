import express from 'express'
import request from 'request'
import * as cheerio from 'cheerio';

const app = express()

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/scrape/:query', (req, res) => {
	const url = 'https://www.imdb.com/search/title/?title=' + req.params.query
	let movies = []
	request(url, (error, response, html) => {
		if (error) {
			console.log(error)
		} else {
			const $ = cheerio.load(html)

			$('ul li.ipc-metadata-list-summary-item').each(function() {
				const movie = {
				  title: $(this).find('a.ipc-title-link-wrapper .ipc-title__text').first().text(),
				  id: $(this).find('a.ipc-title-link-wrapper').attr('href').match(/tt\d+/)[0],
				  image: $(this).find('img.ipc-image').attr('src'),
				  year: $(this).find('span.sc-300a8231-7.eaXxft.dli-title-metadata-item').first().text(),
				  rating: $(this).find('span.ipc-rating-star--rating').text(),
				  description: $(this).find('div.ipc-html-content-inner-div').text().trim()
				};
				movies.push(movie);
			  });

			if (movies.length === 0) {
				res.send('No movies found')
			}

			console.log(movies)
			res.send(movies)
		}
	})
})
	
app.listen(3001, () => {
	console.log('app listening on port 3001!')
})