/// <reference path="../../../reference.ts" />
'use strict';

class <%= classedName %> {
  theQuestion: string = 'The Ultimate Question of Life, the Universe, and Everything';
  theAnswer: number = 42;
}

angular
  .module('<%= scriptAppName %>Internal')
  .constant('<%= classedName %>', new <%= classedName %>());
