
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: 236203659,
    width: 640
});

const onPlay = function(currentTime) {
    localStorage.setItem('videoplayer-current-time', currentTime.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem('videoplayer-current-time')) {
   player.setCurrentTime(localStorage.getItem('videoplayer-current-time')); 
}