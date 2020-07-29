'use strict';

import axios from 'axios';

/**
 * @description
 * Obtiene los elementos del DOM
*/
const div = document.getElementById('root') as HTMLDivElement;
const reset = document.getElementById('reset') as HTMLButtonElement;
const generate = document.getElementById('generate') as HTMLButtonElement;

generate.addEventListener('click', function(event) {
    generate.disabled = true;
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
    generate.disabled = false;
});