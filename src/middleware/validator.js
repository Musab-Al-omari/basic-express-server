module.exports = (request, response, next) => {
  if (request.query) {
    let checked = request.query.name;
    if (checked) {
      next()
    } else {
      next('error')
    }
  } else {
    next('error')
  }
}