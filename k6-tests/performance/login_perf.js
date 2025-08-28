import { sleep } from 'k6';
import { login } from '../helpers/utils.js';

export let options = {
    vus: 5,
    duration: '30s',
};

export default function () {
    login('demo@example.com', 'demo123');
    sleep(1);
}
