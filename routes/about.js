
/*
 * GET About page.
 */

exports.index = function(req, res){
  res.render('about', { title: 'ΕΤΑΙΡΙΑ', siteTitle: 'ΑΣΤΙΚΟ ΚΤΕΛ ΠΑΤΡΩΝ ΑΕ' });
};