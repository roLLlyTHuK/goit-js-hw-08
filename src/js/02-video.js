import Vimeo from '@vimeo/player';
import { throttle } from 'lodash';

const player = new Vimeo('vimeo-player');
// ! Зберігання позиції
player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then(time => {
        localStorage.setItem('videoplayer-current-time', time);
    });
}, 1000));

//! викликаємо позицію
const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
    player.setCurrentTime(savedTime);
}

