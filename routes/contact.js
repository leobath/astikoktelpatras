
/*
 * GET contact page.
 */

exports.index = function(req, res){
  res.render('contact', { title: 'ΕΠΙΚΟΙΝΩΝΙΑ', siteTitle: 'ΑΣΤΙΚΟ ΚΤΕΛ ΠΑΤΡΩΝ ΑΕ' });
};