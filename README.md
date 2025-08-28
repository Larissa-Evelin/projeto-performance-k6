# Documentação de Testes de Performance - Projeto Magento Demo

## Objetivo
Realizar testes de performance na aplicação [Magento 2 Demo](https://magento2-demo.magebit.com/) utilizando o k6, simulando múltiplos usuários e medindo tempo de resposta, sucesso de requisições e comportamento do sistema sob carga.

---

Cada script define:

- **Virtual Users (VUs):** Número de usuários virtuais simultâneos.
- **Duração:** Tempo total do teste.
- **Checks:** Validações de status HTTP (ex.: `status === 200`).
- **Sleep:** Intervalo entre interações do VU para simular comportamento real.

Rodar um teste específico: k6 run ./k6-tests/performance/product_perf.js

Rodar todos os testes sequenciais: ./run_all.sh

## Saída do k6

Após a execução, o k6 exibe:

Checks: Sucesso ou falha das validações

HTTP Metrics: Tempo de resposta médio, mínimo, máximo e percentis

Iterations: Quantas vezes o script foi executado

VUs: Número de usuários virtuais ativos durante o teste

Network: Quantidade de dados enviados e recebidos

