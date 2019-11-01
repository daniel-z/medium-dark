// Copyright 2019 Daniel Zamorano / danielzamorano.pro / <daniel.zamorano.m@gmail.com>
// All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function applyToElems(arrayOfElems, rule) {
  for (var idx = 0; idx < arrayOfElems.length; idx++) {
    arrayOfElems[idx].style = rule;
  }
}

function applyDarkStyles () {
  // theme colors
  var darkColor = '#1c1c1c';
  var lightColor = '#d1d2d3';
  var grayColor = '#090909';

  //  BG Color Elements
  var bgColorClasses = ['c', 'dc', 'metabar', 'extremeHero-container', 'homeContainer'];
  var bgstyle = `background-color: ${darkColor};`;

  bgColorClasses.forEach(function changingColorElements(className) {
    applyToElems(document.getElementsByClassName(className), bgstyle);
  });

  //  Light Color Elements
  var textColorElementTagNames = [
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'a',
    'button',
    'span',
    'figcaption',
    'li'
  ];

  var colorStyle = `color: ${lightColor} !important; fill:${lightColor} !important;`;

  textColorElementTagNames.forEach(function changingColorElements(tagName) {
    applyToElems(document.getElementsByTagName(tagName), colorStyle);
  });

  var colorStyleToClasses = [
    'ax',
    'ui-h1',
    'ui-h2',
    'ui-h3',
    'ui-h4',
    'ui-summary',
    'ui-capsSubtle'
  ];

  colorStyleToClasses.forEach(function changingColorElements(className) {
    applyToElems(document.getElementsByClassName(className), colorStyle);
  });

  // marks
  applyToElems(document.getElementsByTagName('mark'), `background-color: ${grayColor};`);  
};

if (document.querySelector('head meta[property="al:ios:app_name"][content="medium" i]')) {
  if(window.location.pathname !== '/') {
    applyDarkStyles();
  }
}