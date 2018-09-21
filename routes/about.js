
/*
 * GET About page.
 */

exports.index = function(req, res){
  res.render('about', { title: 'Η Εταιρία μας', siteTitle: 'ΑΣΤΙΚΟ ΚΤΕΛ ΠΑΤΡΩΝ ΑΕ' });
};