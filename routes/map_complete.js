
/*
 * GET the complete route map.
 */

exports.index = function(req, res){
  res.render('map_complete', { title: 'ΧΑΡΤΗΣ', siteTitle: 'ΑΣΤΙΚΟ ΚΤΕΛ ΠΑΤΡΩΝ ΑΕ' });
};