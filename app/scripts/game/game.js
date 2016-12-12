angular
  .module('Game', [])
  .service('GameManager' ,GameManager);

function GameManager() {
  // Создание игры
  this.newGame = function() {

  };
  // Ход
  this.move = function() {

  };
  // Обновление счета
  this.updateScore = function() {

  };
  // Отслеживание не закончилаьс ли игра
  this.movesAvailable = function() {
    return GridService.anyCellsAvailable() || GridService.tileMatchesAvailable();
  };
}
