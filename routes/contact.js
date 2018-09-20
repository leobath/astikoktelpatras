
/*
 * GET contact page.
 */

exports.index = function(req, res){
  res.render('contact', { title: 'Επικοινωνία', siteTitle: 'ΑΣΤΙΚΟ ΚΤΕΛ ΠΑΤΡΩΝ ΑΕ' });
};