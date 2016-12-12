describe('Game module', function() {
  describe('GameManager', function() {
    // Инъекция модуля Game в тест
    beforeEach(module('Game'));


    var _gridService, gameManager; // instance of the GameManager

    beforeEach(module(function($provide) {
      _gridService = {
        anyCellsAvailable: angular.noop,
        tileMatchesAvailable: angular.noop
      }

      // Подменим настоящий GridService
      // ненастоящей версией
      $provide.value('GridService', _gridService);
    }));
    // ...

    beforeEach(inject(function(GameManager) {
      gameManager = GameManager;
    });

    // ...
    // Ниже пойдут наши тесты
  });

  describe('.movesAvailable', function() {
    it('Должна отдавать правду если есть свободные ячейки', function() {
      spyOn(_gridService, 'anyCellsAvailable').andReturn(true);
      expect(gameManager.movesAvailable()).toBeTruthy();
    });
    it('',function () {
      spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
      spyOn(_gridService, 'tileMatchesAvailable').andReturn(true);
      expect(gameManager, movesAvailable()).toBeTruthy();
    });
    it('',function () {
      spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
      spyOn(_gridService, 'tileMatchesAvailable').andReturn(false);
      expect(gameManager, movesAvailable()).toBeFalsy();
    });
  });
});
