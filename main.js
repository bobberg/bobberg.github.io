let played = false;
let playedDetailPage = false;

const cardBarShowDetails = new TimelineMax({
  paused: true,
});

const detailPageShow = new TimelineMax({
  paused: true,
});

cardBarShowDetails.to('#home-page', 0.5, {
  padding: 0,
}, 'start')
  .to('.card-bar', 0.5, {
    width: '100%',
  }, 'start')
  .from('.card-bar-graph', 1, {
    height: 0,
  }, 'start+=0.5')
  .from('.card-bar-details', 1, {
    height: 0,
    opacity: 0,
    paddinstag: 0,
  }, 'start+=0.5')
  .staggerFrom('.card-bar-small', 0.5, {
    opacity: 0,
    y: '-100%',
    ease: Back.easeOut.config(2),
  }, 0.25, 'start+=1')
/*
  .staggerFrom('.card-details', 0.5, {
    opacity: 1,
    y: '100%',
    ease: Elastic.easeOut.config(2),
  }, 0.25, 'start+=1')
*/

detailPageShow.to('#card-product-detail', 1, {
  rotationY: '180deg',
}, 'start')
  .to('#home-page', 0.2, {
    padding: 0,
  }, 'start')
  .to('#card-product-detail .x', 0.5, {
    opacity: 0,
  }, 'start+=0.1')
  .to('#card-product-detail', 0.5, {
    padding: '0.3'
  }, 'start+=0.1')
  .staggerFrom('#detail-page .card-main', 0.5, {
    x: '-200%',
  }, 0.5, 'start+=0.2')
/*
hideDetailPage.to('#card-product-detail', 1, {
  rotationY:'180deg'
}, 'start')
*/

function startCardBarDetailShow(element) {
  if (!played) {
    cardBarShowDetails.play();
    played = !played;
  } else {
    cardBarShowDetails.reverse();
    played = !played;
  }
}

function startDetailPageShow() {
  if (!playedDetailPage) {
    detailPageShow.play();
    playedDetailPage = !playedDetailPage;
  } else {
    detailPageShow.reverse();
    playedDetailPage = !playedDetailPage;
  }
}
