type LevelMap = number[][];

class LevelFactory {
  createLevel(level: number): Level {
    switch (level) {
      case 1:
        return this.levelOne();
      case 2:
        return this.levelTwo();
      case 3:
        return this.levelThree();
      case 4:
        return this.levelFour();
      default:
        return this.levelOne();
    }
  }

  createLevelObject(levelMap: LevelMap): GameObject[] {
    const levelObjects: GameObject[] = [];
    const xStepSize: number = width / levelMap[0].length;

    for (let y = 0; y < levelMap.length; y++) {
      for (let x = 0; x < levelMap[0].length; x++) {
        const cell = levelMap[levelMap.length - 1 - y][x];
        const xPos = x * xStepSize;
        const yPos = y * -100 + height;
        let object: GameObject | undefined;
        switch (cell) {
          case 1:
            object = new FragileBlock(xPos, yPos, xStepSize, 20);
            break;
          case 2:
            object = new Block(xPos, yPos, xStepSize, 20);
            break;
          case 3:
            // bonus item
            const itemWatermelon = new Item(
              x * xStepSize,
              y * -100 + height,
              xStepSize,
              xStepSize,
              imgItemWatermelon,
              15
            );
            levelObjects.push(itemWatermelon);
            break;
          case 4:
            //SpeedBoost item
            const speedBoost = new SpeedBoost(
              x * xStepSize,
              y * -100 + height,
              xStepSize,
              xStepSize,
              50
            );
            levelObjects.push(speedBoost);
            break;
          case 5:
            // bonus item
            object = new Item(
              xPos,
              yPos,
              xStepSize,
              xStepSize,
              imgItemPresent,
              20
            );
            break;
          case 6:
            // bonus item
            object = new Item(
              xPos,
              yPos,
              xStepSize,
              xStepSize,
              imgItemCandy,
              10
            );
            break;
          case 7:
            // bonus item
            object = new Item(
              xPos,
              yPos,
              xStepSize,
              xStepSize,
              imgItemCar,
              100
            );
            break;
          case 8:
            // bonus item
            object = new Item(
              xPos,
              yPos,
              xStepSize,
              xStepSize,
              imgItemDanger,
              -100
            );
            break;
          case 9:
            // bonus item
            object = new Item(
              xPos,
              yPos,
              xStepSize,
              xStepSize,
              imgItemStonefall,
              -20
            );
            break;

          case 11:
            // animated item
            object = new Item(
              xPos,
              yPos,
              xStepSize,
              xStepSize,
              imgAnimated,
              25
            );
            break;
        }
        if (object) levelObjects.push(object);
      }
    }
    return levelObjects;
  }

  levelOne(): Level {
    const levelMap: LevelMap = [
      [2, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 0, 0, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 2],
      [0, 8, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],    
      [0, 0, 0, 0, 0, 2, 2, 2],  
      [0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 5, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 2],
      [0, 4, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 2, 0, 0],
      [0, 9, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 2, 0, 0, 0],
      [3, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 2, 0, 0],
      [11, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 2, 2, 2]
    ];
    const gameObjects: GameObject[] = this.createLevelObject(levelMap);
    const startColor = color(120, 170, 235);
    const endColor = color(50, 120, 220);
    return new Level(gameObjects, startColor, endColor);
  }

  levelTwo(): Level {
    const levelMap: LevelMap = [
      [2, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 1, 0],
      [0, 9, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 0],
      [0, 9, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 0],
      [0, 9, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 0],
      [0, 9, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 2, 2, 0],
      [6, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 5, 0],
      [0, 0, 0, 0, 0, 2, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 4, 0, 0],
      [0, 0, 0, 0, 2, 2, 2, 0],
      [0, 6, 0, 0, 0, 0, 0, 0],
      [2, 1, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 2],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 2, 2, 2]
    ];
    const gameObjects: GameObject[] = this.createLevelObject(levelMap);
    const startColor = color(50, 120, 220);
    const endColor = color(225, 60, 230);
    return new Level(gameObjects, startColor, endColor);
  }

  levelThree(): Level {
    const levelMap: LevelMap = [
      [2, 2, 2, 2, 2, 2, 2, 2],//69
      [0, 0, 0, 0, 6, 0, 0, 0],
      [0, 0, 0, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 0],
      [7, 0, 0, 0, 5, 0, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],//60
      [0, 0, 0, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 0],
      [0, 9, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 7, 0],
      [0, 0, 0, 0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],//50
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 2, 0, 0],
      [0, 6, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 0, 0, 3],
      [0, 0, 0, 0, 0, 0, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 0, 0, 0, 0],//40
      [7, 8, 7, 8, 7, 8, 7, 8],
      [0, 0, 0, 0, 0, 2, 2, 0],
      [0, 9, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 6, 0, 0, 0, 0, 0],
      [0, 0, 1, 2, 0, 0, 0, 0],//30
      [0, 0, 0, 0, 0, 0, 0, 5],
      [0, 0, 0, 0, 0, 0, 2, 2],
      [4, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 5],
      [0, 0, 1, 0, 0, 2, 2, 2],//20
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 9, 0, 0, 0, 0, 7, 0],
      [0, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 0, 0],
      [0, 1, 1, 0, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 8, 0],//10
      [0, 0, 0, 7, 0, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0],
      [2, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 2, 2, 2]
    ];
    const gameObjects: GameObject[] = this.createLevelObject(levelMap);
    const startColor = color(225, 60, 230);
    const endColor = color(250, 240, 65);
    return new Level(gameObjects, startColor, endColor);
  }

  levelFour(): Level {
    const levelMap: LevelMap = [
      [2, 2, 2, 2, 2, 2, 2, 2],//50
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 8, 0, 0],
      [0, 6, 0, 0, 6, 6, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 3],
      [0, 0, 0, 0, 0, 0, 2, 2],
      [0, 0, 5, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 0, 0, 0, 0],//40
      [0, 0, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 0, 2, 2, 0],
      [0, 9, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 7, 0],
      [0, 0, 6, 0, 0, 0, 1, 0],
      [0, 0, 2, 2, 0, 0, 0, 0],//30
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1],
      [4, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 5],
      [0, 0, 0, 0, 0, 2, 1, 2],//20
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 9, 0, 0, 0, 2, 2, 0],
      [0, 2, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 0, 0],
      [0, 0, 0, 0, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 8, 0],//10
      [0, 0, 0, 0, 0, 2, 1, 2],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0],
      [2, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],      
      [0, 0, 0, 0, 0, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 2, 2, 2]
    ];
    const gameObjects: GameObject[] = this.createLevelObject(levelMap);
    const startColor = color(250, 240, 65);
    const endColor = color(120, 170, 235);
    return new Level(gameObjects, startColor, endColor);
  }
}
