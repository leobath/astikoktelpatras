
/*
 * GET About page.
 */

exports.index = function(req, res){
  res.render('about', { title: 'About page', siteTitle: 'ΑΣΤΙΚΟ ΚΤΕΛ ΠΑΤΡΩΝ ΑΕ' });
};