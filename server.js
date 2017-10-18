const express = require('express')
const app = express()

app.use(express.static('./public'))

app.get('/:id', function(request, response) {
  response.send('Hallo ' + request.params.id);
});

app.listen(prosses.evn.PORT || 8080, function () {
  console.log('Example app listening on port 8080!')
})

