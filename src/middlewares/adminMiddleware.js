function adminMiddleware(req, res, next) {
	if (req.session.adminLogged) {
			next()
	} else {
		res.redirect('/')
	}
}
module.exports = adminMiddleware;