function KarelEvalEngine(karel) {

   var that = {};

   var virtualKarelModel = null;

   that.compile = function(code) {
      virtualKarelModel = karel.getModelDeepCopy();
   }

   that.executeStep = function() {
      console.log('executeStep not defined');
   }

   function turnRight() {
		turnLeft();
		turnLeft();
		turnLeft();
	}

	function turnAround() {
		turnLeft();
		turnLeft();
	}

	function randomChance() {
		return randomChance(0.5);
	}

	function randomChance(chance) {
		return Math.random() < chance;
	}

	function paintCorner(color) {
		karel.paintCorner(color);
	}

	function move() {
		karel.move();
	}

	function turnLeft() {
		karel.turnLeft();
	}

	function frontIsClear() {
		return karel.frontIsClear();
	}

	function frontIsBlocked() {
		return !karel.frontIsClear();
	}

	function putBeeper() {
		karel.putBeeper();
	}

	function pickBeeper() {
		karel.pickBeeper();
	}

	function beepersPresent() {
		return karel.beeperPresent();
	}

	function noBeepersPresent() {
		return !karel.beeperPresent();
	}

	function leftIsClear() {
		return karel.leftIsClear();	
	}

	function leftIsBlocked() {
		return !karel.leftIsClear();	
	}

	function rightIsClear() {
		return karel.rightIsClear();	
	}

	function rightIsBlocked() {
		return !karel.rightIsClear();	
	}

	function facingEast() {
		return karel.facingEast();
	}

	function notFacingEast() {
		return !karel.facingEast();
	}

	function facingWest() {
		return karel.facingWest();
	}

	function notFacingWest() {
		return !karel.facingWest();
	}

	function facingNorth() {
		return karel.facingNorth();
	}

	function notFacingNorth() {
		return !karel.facingNorth();
	}

	function facingSouth() {
		return karel.facingSouth();
	}

	function notFacingSouth() {
		return !karel.facingSouth();
	}

   return that;

}
