import http from 'k6/http';
import { sleep } from 'k6';
import { checkStatus200, login } from '../helpers/utils.js';

export let options = {
    vus: 5,
    duration: '30s',
};

export default function () {
    // Login necessário para acessar checkout
    login('demo@example.com', 'demo123');

    let res = http.get('https://magento2-demo.magebit.com/checkout/');
    checkStatus200(res, 'checkout page status 200');
    sleep(1);
}
