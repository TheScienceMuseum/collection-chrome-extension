var request = new XMLHttpRequest();
var imghost = 'https://coimages.sciencemuseumgroup.org.uk/';

request.addEventListener('load', function (e) {
  // response comes back as "{data: [{attributes: {locations: [{...}], summary_title: '...'} ...}, {} ...]}"
  JSON.parse(this.responseText).data.forEach(function (el) {
 
    document.getElementById('title').innerHTML = '<a href="' + el.links.self + '">' + el.attributes.summary.title + '</a>';
    document.getElementById('pinterest').innerHTML = '<a href="http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(el.links.self)  + '&media=' + imghost + el.attributes.multimedia[0]['@processed'].large.location +  '&description=' + el.attributes.summary_title + '" target="_blank"><img src="pinterest-5.svg" alt="Add to Pinterest"></a> ';
    document.getElementById('twitter').innerHTML = '<a href="http://www.twitter.com/intent/tweet/?text=' + encodeURIComponent(el.attributes.summary.title) + '&url=' + encodeURIComponent(el.links.self)  + '&via=sciencemuseum"  target="_blank" ><img src="twitter-5.svg" alt="Share on Twitter"></a> ';
    document.getElementById('facebook').innerHTML = '<a href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(el.links.self)  + '"  target="_blank" ><img src="facebook-5.svg" alt="Share on Facebook"></a> ';
    document.getElementById('pix').innerHTML = '<a href="' + el.links.self + '"><img alt="" src="' + imghost + el.attributes.multimedia[0]['@processed'].medium.location + '"></a> ';

  });
});

// Get a random object 
request.open('GET', 'https://collection.sciencemuseumgroup.org.uk/search/images/?random=1');
request.setRequestHeader('accept', 'application/json');
request.send();
