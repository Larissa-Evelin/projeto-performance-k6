#!/bin/bash

BASE_DIR="./k6-tests/performance"

echo "==== Iniciando testes de performance ===="

echo "Rodando: Homepage Load Test"
k6 run $BASE_DIR/homepage_perf.js
echo "----------------------------------------"

echo "Rodando: Category Page Load Test"
k6 run $BASE_DIR/category_perf.js
echo "----------------------------------------"

echo "Rodando: Product Page Load Test"
k6 run $BASE_DIR/product_perf.js
echo "----------------------------------------"

echo "Rodando: Cart Page Load Test"
k6 run $BASE_DIR/cart_perf.js
echo "----------------------------------------"

echo "Rodando: Checkout Flow Performance Test"
k6 run $BASE_DIR/checkout_perf.js
echo "----------------------------------------"

echo "Rodando: Login Performance Test"
k6 run $BASE_DIR/login_perf.js

echo "==== Todos os testes concluídos ===="
