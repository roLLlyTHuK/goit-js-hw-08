import Vimeo from '@vimeo/player';
import { throttle } from 'lodash';

const player = new Vimeo('vimeo-player');
//! Зберігання позиції
player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then(time => {
        // localStorage.setItem('videoplayer-current-time', time);
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const normalTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        localStorage.setItem('videoplayer-current-time', normalTime);
    });
}, 1000));

//! викликаємо позицію
const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
    player.setCurrentTime(savedTime);
}

