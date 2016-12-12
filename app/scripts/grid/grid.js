angular.module('Grid', [])
  .service('GridService', function() {
    this.grid = [];
    this.tiles = [];

    // размер
    this.size = 4;
  });
