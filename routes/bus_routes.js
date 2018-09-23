
/*
 * GET bus routes page.
 */

exports.index = function(req, res){
  res.render('bus_routes', { title: 'ΔΡΟΜΟΛΟΓΙΑ', siteTitle: 'ΑΣΤΙΚΟ ΚΤΕΛ ΠΑΤΡΩΝ ΑΕ' });
};