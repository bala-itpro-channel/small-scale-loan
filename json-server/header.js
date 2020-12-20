module.exports = (req, res, next) => {
  res.header('X-app-id', 'BankId123')
  next()
}