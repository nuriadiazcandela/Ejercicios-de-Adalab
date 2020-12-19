'use strict';
const title = document.querySelector('.title');
const password = document.querySelector('.password');
password.innerHTML = '*';
title.innerHTML = title.innerHTML + password.innerHTML;
