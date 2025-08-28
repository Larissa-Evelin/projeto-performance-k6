import http from 'k6/http';
import { sleep } from 'k6';
import { checkStatus200 } from '../helpers/utils.js';

export let options = {
    vus: 5,
    duration: '30s',
};

export default function () {
    let res = http.get('https://magento2-demo.magebit.com/rival-field-messenger.html');
    checkStatus200(res, 'product page status 200');
    sleep(1);
}
