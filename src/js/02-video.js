import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

   player.on('timeupdate', throttle(onTimeUpdate, 1000));
function onTimeUpdate(e) {
    if (localStorage === "") {
        return;
    } else {
     localStorage.setItem('videoCurrentTime', e.seconds);   
    }
    
}
if (localStorage.getItem('videoCurrentTime') !== null) {
    player.setCurrentTime(localStorage.getItem('videoCurrentTime'));
};
    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });

//     // function setVideoTime(player, seconds) {
// 	// player.setCurrentTime(seconds).then(function() {
// 	// 	return player.play();
// 	// });
// }
