import http from 'k6/http';
import { check } from 'k6';

// Função de login
export function login(username, password) {
    const url = 'https://magento2-demo.magebit.com/customer/account/loginPost/';
    const payload = { login: { username: username, password: password } };
    const res = http.post(url, payload);

    check(res, { 'login status 200': (r) => r.status === 200 });
    return res;
}

// Função para check simples de status 200
export function checkStatus200(res, label = 'status was 200') {
    check(res, { [label]: (r) => r.status === 200 });
}
