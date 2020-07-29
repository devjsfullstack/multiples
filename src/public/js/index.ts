'use strict';

import axios from 'axios';

/**
 * @description
 * Obtiene los elementos del DOM
*/
const div = document.getElementById('root');
const reset = document.getElementById('reset');
const generate = document.getElementById('generate');

generate.addEventListener('click', function() {
    axios.post('/calculate', { range: 100 })
    .then((res: any) => {
        div.innerHTML = res.data;
    })
    .catch((err: any) => {
        throw new Error(err);
    });
});

reset.addEventListener('click', function() {
    div.innerHTML = '';
});