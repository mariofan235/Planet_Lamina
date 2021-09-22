export class LevelEditor extends Phaser.Scene {

  constructor() {

    super('stageEditor');

  }

  init(){

    this.gameEngine = this.scene.get('mainGame');

    this.spawnItem = 0;

    this.altTile = 0;

    this.pointerMode = 'place';

    this.editorMenu = 'main';

    this.pointer = this.input.activePointer;

    // this.tileArrangement = [
    //   ['0110 0100', '0111 0101 0010', '0011 0001', '1110', '1111 1010', '1011', '1100', '1101 1000', '1001',
    //   '11101111', '11111011', '10111111', '11111110', '0000']
    // ];

    this.tileArrangement = [
      ['0110 0100', '0111 0101 0010', '0011 0001', '1110', '1111 1010', '1011', '1100', '1101 1000', '1001',
      '10111111', '11111110', '11101111', '11111011', '0000']
    ];

    this.npcList = ['', 'coin', 'heart', 'chest', 'checkPoint', 'spikeTrap', 'spikeSingle', 'arrowX', 'arrowY', 'slime', 'rocket'];

  }

  create(){

    this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

    this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);

    this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    this.gameEngine.events.on('activateGame', function () {

      this.gameEngine.editorGraphics.setVisible(false);

    }, this);

    this.gameEngine.events.on('activateEditor', function () {
      this.pointerMode = 'place';

      this.gameEngine.editorGraphics.setVisible(true);

    }, this);

  }

  update(){

    this.gameEngine.editor_moveCam();

    if(Phaser.Input.Keyboard.JustDown(this.keyE)){

      this.pointerMode = this.pointerMode == 'place' ? 'erase' : 'place';

    }

    if(Phaser.Input.Keyboard.JustDown(this.keyT)){

      this.spawnItem++;

      if(this.spawnItem > 10){
        this.spawnItem = 0;
      }

    }

    if(this.pointer.isDown){

      if(this.pointerMode == 'place'){

        this.placeTile();

      }

      if(this.pointerMode == 'erase'){

        this.eraseTile();

      }

    }

  }

  pointInBounds(x, y){

    return (x >= 0 && x < this.gameEngine.map.width) && (y >= 0 && y < this.gameEngine.map.height);

  }

  getPointerTileXY(){

    var pos = {x: 0, y: 0};

    const worldPoint = this.pointer.positionToCamera(this.gameEngine.mainCam);

    pos.x = Math.floor( ( worldPoint.x)/32 );
    pos.y = Math.floor( ( worldPoint.y)/32 );

    return pos;

  }

  placeTile(){

    const pointerXY = this.getPointerTileXY();

    // const worldPoint = this.pointer.positionToCamera(this.gameEngine.mainCam);
    //
    // var x = Math.floor( ( worldPoint.x - 0)/32 );
    // var y = Math.floor( ( worldPoint.y - 0)/32 );

    //const withinBounds = (x >= 0 && x < this.gameEngine.map.width) && (y >= 0 && y < this.gameEngine.map.height);

    if(this.pointInBounds(pointerXY.x, pointerXY.y)){

      if(this.spawnItem == 0){

        this.createTerrain(pointerXY.x, pointerXY.y);

      }else{

        this.createEnity(pointerXY.x, pointerXY.y);

      }

    }

  }

  createEnity(x, y){

    //Checks if tile has already been placed
    if(this.gameEngine.map.hasTileAt(x, y, 1)){
      return;
    }

    const tile = this.gameEngine.npcLayer.putTileAt(this.spawnItem, x, y);

    tile.alt = this.altTile;

    const g = this.gameEngine.editorGraphics.create(x*32, y*32, this.npcList[this.spawnItem]);

    if(this.npcList[this.spawnItem] == 'coin'){

      g.setFrame(2);

    }else{

      g.setFrame(this.altTile);

    }

    g.setOrigin(0, 0);

    if(this.npcList[this.spawnItem] == 'slime'){

      g.setOrigin(0, 0.25);

    }

  }

  eraseTile(){

    const pointerXY = this.getPointerTileXY();

    if(this.pointInBounds(pointerXY.x, pointerXY.y)){

      const map = this.gameEngine.map;

      //Terrain Layer

      map.removeTileAt(pointerXY.x, pointerXY.y, false, true, 0);

      this.autoTileConfig(map);

      //NPC layer

      map.removeTileAt(pointerXY.x, pointerXY.y, false, true, 1);

      this.gameEngine.editorGraphics.getChildren().forEach((g) => {

        if(g.x == pointerXY.x*32 && g.y == pointerXY.y*32){

          this.gameEngine.editorGraphics.remove(g, true, true);

          return;

        }

      });


    }

  }

  createTerrain(x, y){

    //Checks if tile has already been placed
    if(this.gameEngine.map.hasTileAt(x, y, 0)){
      return;
    }

    var tile = null;

    tile = this.gameEngine.layer.putTileAt(this.spawnItem, x, y);

    this.autoTileConfig(this.gameEngine.map);

    tile.setCollision(true, true, true, true);

  }

  autoTileConfig(map){

    var tile;

    for(var a = 0; a < map.width; a++){

      for(var b = 0; b < map.height; b++){

        tile = this.gameEngine.layer.getTileAt(a, b);

        if(tile != null && tile.index < 30){

          this.autoTile_setBuild(a, b, tile);

        }

      }

    }

  }

  autoTile_setBuild(x, y, t){

    this.buildString = '';

    var newTile = 0;

    this.autoTile_findTile(x, y - 1);
    this.autoTile_findTile(x + 1, y);
    this.autoTile_findTile(x, y + 1);
    this.autoTile_findTile(x - 1, y);

    for(var i = 0; i < this.tileArrangement[0].length; i++){

      if(this.tileArrangement[0][i].includes(this.buildString)){

        newTile = i;
        i = this.tileArrangement[0].length;

      }

    }

    t.index = newTile;

    if(t.index == 4 && this.buildString == '1111'){

      this.autoTile_Corner(x, y, t);

    }


  }

  autoTile_Corner(x, y, t){

    this.buildString = '';

    this.autoTile_findTile(x, y - 1);
    this.autoTile_findTile(x + 1, y - 1);
    this.autoTile_findTile(x + 1, y);
    this.autoTile_findTile(x + 1, y + 1);
    this.autoTile_findTile(x, y + 1);
    this.autoTile_findTile(x - 1, y + 1);
    this.autoTile_findTile(x - 1, y);
    this.autoTile_findTile(x - 1, y - 1);

    if(this.tileArrangement[0].indexOf(this.buildString) != -1){

      t.index = this.tileArrangement[0].indexOf(this.buildString);

    }

  }

  autoTile_findTile(x, y){

    //If null is return, it means it has reached the edge of the tilemap/world

    const findTile = this.gameEngine.map.getTileAt(x, y, true, 0);

    if(findTile == null || findTile.index != -1){
      this.buildString += '1';
    }else{

      this.buildString += '0';

    }


  }

}
