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
  .to('.card-bar', 0.1, {
    width: '100%',
  }, 'start')
  .from('.card-bar-graph', 0.25, {
    height: 0,
  }, 'start+=0')
  .from('.card-bar-details', 0.1, {
    height: 0,
    opacity: 0,
    paddinstag: 0,
  }, 'start+=0')
  .staggerFrom('.card-bar-small', 0.25, {
    opacity: 0,
    y: '-100%',
    ease: Back.easeOut.config(2),
  }, 0.25, 'start+=0.25')
/*
  .staggerFrom('.card-details', 0.5, {
    opacity: 1,
    y: '100%',
    ease: Elastic.easeOut.config(2),
  }, 0.25, 'start+=1')
*/

detailPageShow.to('#card-product-detail', 0.5, {
  rotationY: '180deg',
}, 'start')
  .to('#home-page', 0.25, {
    padding: 0,
  }, 0.25, 'start')
  .to('#card-product-detail .x', 0.25, {
    opacity: 0,
  }, 'start+=0.1')
  /*.to('#card-product-detail', 0.25, {

  }, 'start+=1')*/
  .staggerFrom('#detail-page .card-main', 0.25, {
    x: '-200%',
  }, 0.25, 'start+=0.1')
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
