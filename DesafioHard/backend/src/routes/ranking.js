const router = require('express').Router();
const fs = require('fs');

router.get('/', (req, res) => {
	const ranking = JSON.parse(
		fs.readFileSync('src/database/ranking.json', {
			encoding: 'utf8',
		})
	);

	ranking.sort((a, b) => b.score - a.score);

	res.send({ data: ranking });
});

module.exports = router;
