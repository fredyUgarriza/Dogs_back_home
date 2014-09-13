//@run-at   document-start

//window.onload = function() {
//***CONFIG*********************************************************************************//
var Q = Quintus()
		.include("Scenes, Input, Sprites, Touch, UI, 2D ,TMX, Anim")
    .setup({width:1200, height:650})
    .controls();
Q.touch(Q.SPRITE_ALL);
Q.include("Audio").enableSound();

var dogSprite = "";
var dogProperties;
var nivel=1;
/*=============================================================================================================
=============================================================================================================*/


//***LOAD*********************************************************************************//
Q.load(["mainTitle.png","coin.png","perro1.png","perro2.png","perro3.png","bone.png","policia.png","ladrido.png"
      ,"poder1.png","piruleta.png", "select1.png","select2.png","select3.png","cat1.png","pitcher.png" 
      ,"rock.png","hearts0.png","hearts1.png","hearts2.png","hearts3.png","hearts4.png","hearts5.png","hearts6.png"
      ,"dayBg.png","spikes.png","fallingRock.png","woodSign.png","coin.png","heart.png","candy.png","star.png","night.png"
      ,"home.png"  //IMÁGENES
       //AUDIO
      , "coin.json","perro1.json","perro2.json","perro3.json","bone.json", "policia.json","ladrido.json","poder1.json",
      ,"pitcher.json","piruleta.json","cat1.json","rock.json"] //DATA
      ,function() {

        Q.compileSheets("coin.png", "coin.json"); 
        Q.compileSheets("perro1.png", "perro1.json"); 
        Q.compileSheets("perro2.png", "perro2.json"); 
        Q.compileSheets("perro3.png", "perro3.json"); 
        Q.compileSheets("bone.png", "bone.json"); 
        Q.compileSheets("policia.png", "policia.json"); 
        Q.compileSheets("ladrido.png", "ladrido.json"); 
        Q.compileSheets("poder1.png", "poder1.json");
        Q.compileSheets("piruleta.png", "piruleta.json");
        Q.compileSheets("cat1.png", "cat1.json");
        Q.compileSheets("pitcher.png","pitcher.json");
        Q.compileSheets("rock.png","rock.json");

        Q.stageScene("mainTitle",0);
                
      
});
/*=============================================================================================================
=============================================================================================================*/

//***ANIMATIONS*********************************************************************************//
Q.animations('perro1', {
    run_right:  {frames: [2,3], rate:1/5},
    run_left:   {frames: [15,16], rate:1/5 },
    jump_right: {frames: [10], rate:1/10},
    jump_left:  {frames: [23], rate:1/10},
    stand_right:{frames: [1,1,1,0,0], rate:1/2},
    stand_left: {frames: [14,14,14,13], rate:1/3},
    eat_left:   {frames:[21,22,21,22] , rate:1/5, loop: false , trigger: "stopEating"},
    eat_right:  {frames:[3,4,3,4] ,rate:1/5,  loop: false , trigger: "stopEating"},
    bark_right: {frames:[11,12], rate:1/5,loop: false, trigger:"firePower"},
    bark_left: {frames:[24,25], rate:1/5,loop: false, trigger:"firePower"}
});

Q.animations('perro2', {
    run_right:  {frames: [2,3], rate:1/5},
    run_left:   {frames: [15,16], rate:1/5 },
    jump_right: {frames: [10], rate:1/10},
    jump_left:  {frames: [23], rate:1/10},
    stand_right:{frames: [1,1,1,0,0], rate:1/2},
    stand_left: {frames: [14,14,14,13], rate:1/3},
    eat_left:   {frames:[21,22,21,22] , rate:1/5, loop: false , trigger: "stopEating"},
    eat_right:  {frames:[3,4,3,4] ,rate:1/5,  loop: false , trigger: "stopEating"},
    bark_right: {frames:[11,12], rate:1/5,loop: false, trigger:"firePower"},
    bark_left: {frames:[24,25], rate:1/5,loop: false, trigger:"firePower"}
});

Q.animations('perro3', {
    run_right:  {frames: [2,3], rate:1/5},
    run_left:   {frames: [15,16], rate:1/5 },
    jump_right: {frames: [10], rate:1/10},
    jump_left:  {frames: [23], rate:1/10},
    stand_right:{frames: [1,1,1,0,0], rate:1/2},
    stand_left: {frames: [14,14,14,13], rate:1/3},
    eat_left:   {frames:[21,22,21,22] , rate:1/5, loop: false , trigger: "stopEating"},
    eat_right:  {frames:[3,4,3,4] ,rate:1/5,  loop: false , trigger: "stopEating"},
    bark_right: {frames:[11,12], rate:1/5,loop: false, trigger:"firePower"},
    bark_left: {frames:[24,25], rate:1/5,loop: false, trigger:"firePower"}
});

Q.animations('cat1', {
  run_right:  {frames: [0,1], rate:1/3},
  run_left:   {frames: [3,4], rate:1/3 },
});

Q.animations('pitcher', {
  throw_right:  {frames: [0,1,2,3], rate:1/3, loop:false},
  throw_left:   {frames: [5,6,7,8], rate:1/3 , loop:false},
  stand_right:  {frames: [4], rate:1/3, loop:false},
  stand_left:   {frames: [8], rate:1/3, loop:false},
});

Q.animations('ladrido', {
    ladrido_right: {frames: [0,1,2], rate: 1/9, loop:false,  trigger: "break"},
    ladrido_left: {frames: [3,4,5], rate: 1/5, loop:false, trigger: "break"}
});

Q.animations('poder1', {
    poder_right: {frames: [0,1,2,3], rate: 1/6, loop:false},
    poder_left: {frames: [4,5,6,7], rate: 1/6, loop:false}
});

Q.animations('policia', {
    run_right: {frames: [3,4], rate: 1/5, loop:false},
    run_left: {frames: [6,7], rate: 1/5, loop:false},
    lookArround: {frames: [5,0,1,0], rate:1},
    foundYou_right: {frames: [2], rate:1/2, loop:false, trigger:"found"},
    foundYou_left: {frames: [13], rate:1/2, loop:false, trigger:"found"}
});

Q.animations('rock',{
  roll: {frames: [0,1,2,3], rate: 1/2, loop: true}
});


Q.animations('coin', {
  shine: {frames: [0,1,2], rate: 1/2, loop: true}
});

Q.animations('bone', {
  floating: {frames: [0,1,2,3,2,1,0], rate: 1/2, loop: true}
});

Q.animations('piruleta', {
  piruleta: {frames: [0], rate:1}
})

Q.animations('coin', {
  shine: {frames: [0,1,2], rate: 1/2, loop: true}
});

/*=============================================================================================================
=============================================================================================================*/



//***COMPONENTS*********************************************************************************//
Q.component("enemy",{ 

  added: function(){
    this.entity.p.type= Q.SPRITE_ENEMY;
    this.entity.p.collisionMask = Q.SPRITE_FRIENDLY | Q.SPRITE_DEFAULT;
    this.entity.on("bump.left,bump.right,bump.bottom",function(collision) {
      if(collision.obj.isA("Dog") && collision.obj.p.type==Q.SPRITE_FRIENDLY) {
        collision.obj.gotHit();
      }
    });

    this.entity.on("death");

    this.entity.on("bump.top",function(collision) {
      if(collision.obj.isA("Dog")) { 
        this.destroy();  
        collision.obj.p.vy = -300;
      }
    });
  },
  extend: {

    death: function(){
      this.destroy();
    }
  }
});

Q.component("friendlyProjectile",{

  added: function(){
    this.entity.p.type= Q.SPRITE_FRIENDLY;
    this.entity.p.collisionMask= Q.SPRITE_ENEMY;
   
  }
});

Q.component("enemyProjectile",{

  added: function(){
    this.entity.p.type= Q.SPRITE_PARTICLE;

    this.entity.on("hit", function(collision){
       if(collision.obj.isA("Dog") && collision.obj.p.type==Q.SPRITE_FRIENDLY) {
        collision.obj.gotHit();
        this.destroy();
      }
    });
  }
});

Q.component("invincibleEnemy",{

  added: function(){
    this.entity.p.type= Q.SPRITE_ENEMY;

    this.entity.on("hit", function(collision){
       if(collision.obj.isA("Dog") && collision.obj.p.type==Q.SPRITE_FRIENDLY) {
        collision.obj.gotHit();
      }
    });
  }
});

Q.component("patrol",{
  added: function(){
    var botX;
    var topX;

    botX = this.entity.p.x -1;
    topX = this.entity.p.x + this.entity.p.patrolDistance;
    this.entity.p.topX = topX;
    this.entity.p.botX = botX;
  },

  extend: {
    exePatrol: function(){
      if (!(this.p.topX > this.p.x && this.p.botX < this.p.x)){
        this.p.vx = -this.p.vx;
      }
 
    }
  }
});

Q.component("ignoreCol",{
  added: function(){
    this.entity.p.type= Q.SPRITE_NONE;
  },
});

Q.component("scoreItem",{
  added: function(){
    this.entity.p.type= Q.SPRITE_PARTICLE
    this.entity.p.collisionMask= Q.SPRITE_FRIENDLY | Q.SPRITE_DEFAULT
    this.entity.on("hit.sprite",function(collision) {
      if(collision.obj.isA("Dog")) {
        Q.state.inc("score",this.p.scorePoints);
        this.destroy();
      }
      
    });
  }
})
/*=============================================================================================================
=============================================================================================================*/



//***SPRITES*********************************************************************************//
Q.Sprite.extend("Dog",{

  init: function(p) {
    this._super(p, {
      x: 25,
      y: 1516,
      type: Q.SPRITE_FRIENDLY
    });
    this.on("stopEating");
    Q.input.on("fire",this, "bark");
    this.add('2d, platformerControls, animation, tween');
    
  },

  step: function(dt){

    if(this.p.ignoreColTime){

      if(this.p.ignoreColTime > 0){
        this.p.ignoreColTime -= dt;
      }
      else if(this.p.ignoreColTime < 0){
        this.del("ignoreCol");
        this.p.type= Q.SPRITE_FRIENDLY;
        this.p.ignoreColTime = undefined;
      }
    }

    //muerte por caer
    if (this.p.y >2000){
      this.die();
    }
 
    if(this.p.vx > 0) 
      this.p.direction = "right";
    else if (this.p.vx < 0) 
      this.p.direction = "left";

    if(this.p.vy == 0){
      this.play("run_" + this.p.direction);
     
    }
    else{
      this.play("jump_" + this.p.direction);
    }

    if(this.p.vx == 0) {
      if(this.p.vy == 0)  
        this.play("stand_" + this.p.direction);
      else 
        this.play("jump_" + this.p.direction);
    }

    var centerX;
    var centerY;

    if(this.p.x> 900){
      centerX = this.p.x;
    }
    else
      centerX = 900;

    if(this.p.y < 1250){
      centerY = this.p.y;
    } 
    else
      centerY = 1250;

    this.stage.centerOn(centerX , centerY);
    Q.state.set("x",this.p.x);
    Q.state.set("y",this.p.y);
  },

  gotHit: function(){
    
    if(this.p.type == Q.SPRITE_FRIENDLY){
      Q.state.dec("health",1);
      this.add("ignoreCol");
      this.p.ignoreColTime = 1;

      if (Q.state.get("health") == 0){
        this.die();
      }
    }
  },
  die: function(){
      Q.stageScene("endGame",1, {label: "You Died" }); 
      this.destroy();
  },
  eat: function(){

    //this.p.vx=0;
    this.del("platformerControls");

    this.play('eat_' + this.p.direction,1);

  },

  stopEating: function(){

     this.add('platformerControls');
  },

  bark: function(){
    var projectileX;

    this.play("bark_" + this.p.direction,1);

    if(this.p.direction =="left"){
      projectileX= this.p.x;
    }
    else{
      projectileX= this.p.x + this.p.w;
    }

    if(this.p.lastPowerup){
      if(this.p.lastPowerup == "ladrido"){
        this.stage.insert(new Q.Ladrido({dog: this, x:projectileX , y: this.p.y, direction:this.p.direction}));
      }
      else if(this.p.lastPowerup == "wave"){
        this.stage.insert(new Q.Wave({dog: this, x:projectileX , y: this.p.y, direction:this.p.direction}));
      }
    }
  },

  firePower: function(){

  },

  win: function(){
    nivel +=1;
    Q.clearStages();
    Q.stageScene("nextLevel",1, {label: "You Won" }); 
  }
});

Q.Sprite.extend("WoodSign",{
  init: function(p) {
    this._super(p, {
      asset:'woodSign.png'
    });

    this.on("hit.sprite",function(collision) {
      var colObject = collision.obj;
      if(colObject.isA("Dog")) {
        this.add("ignoreCol")
        colObject.win();

        }
    });

  },

  step: function(dt){

  }
});

Q.Sprite.extend("Home",{
  init: function(p) {
    this._super(p, {
      asset:'home.png'
    });

    this.on("hit.sprite",function(collision) {
      Q.clearStages();
      Q.stageScene("WinGame",1); 
    });

  },

  step: function(dt){

  }
});

Q.Sprite.extend("Ladrido",{
  init: function(p){
    this._super(p, { 
      sheet: 'ladrido',
      sprite: 'ladrido',
      vx:0,
      vy:0,
      gravityY:0 });

    this.add('animation,2d,friendlyProjectile'); 
    if(this.p.direction =="left")
      this.p.x -= this.p.w +10;

    this.on("break");
    this.play("ladrido_"+this.p.direction);
    this.on("hit.sprite",function(collision) {
    var colObject = collision.obj;
    if(colObject.has("enemy")) {
      colObject.destroy();
      }
    });

  },

  break: function(){
    this.destroy();
  }
});

Q.Sprite.extend("Wave",{
  init: function(p){
    this._super(p, { 
      sheet: 'poder1',
      sprite: 'poder1',
      gravityY: 0,
      vx: 300});

    this.p.accTime = 0;

    if(this.p.direction =="left")
      this.p.vx *= -1;

    this.add('animation,2d,friendlyProjectile'); 
    
    this.on("break");
    this.play("poder_right");
    this.on("hit.sprite",function(collision) {
    var colObject = collision.obj;
    if(colObject.has("enemy") || colObject.has("enemyProjectile") ) {
      colObject.destroy();
      this.destroy();
    }
    });
  },

  step: function(dt){
    this.p.accTime += dt;

    if(this.p.accTime >= 2.5)
      this.destroy();
  },

  break: function(){
  }
});

Q.Sprite.extend("Rock",{
  init: function(p){
    this._super(p, { 
      sheet: 'rock',
      sprite: 'rock',
      gravityY: 0,
      vx: 300,
      collisionMask: Q.SPRITE_FRIENDLY});

    this.add('animation,2d,enemyProjectile'); 
    this.p.accTime = 0;
    this.play("roll");
    if (this.p.direction == "left")
      this.p.vx *= -1;
  },

  step: function(dt){
    
    this.p.accTime += dt;
    if(this.p.accTime > 2.5){
      this.destroy();
    }

  }
});

Q.Sprite.extend("FallingRock",{
  init: function(p){
    this._super(p, { 
      asset: 'fallingRock.png',
      gravityY: 200,
      vy: 300,
      collisionMask: Q.SPRITE_FRIENDLY});

    this.add('animation,2d,enemyProjectile'); 
    this.p.accTime = 0;
  },

  step: function(dt){
    
    this.p.accTime += dt;
    if(this.p.accTime > 2.5){
      this.destroy();
    }

  }
});

Q.Sprite.extend("FallingRockSpawner",{
  init: function(p){
    this._super(p, {});
    this.p.accTime = 0;
  },

  step: function(dt){
  
    this.p.accTime += dt;
    if(this.p.accTime > 2.5){
       this.stage.insert(new Q.FallingRock({ x:this.p.x , y: this.p.y}));
       this.p.accTime =0;
    }

  }
});

Q.Sprite.extend("Spikes",{
  init: function(p){
    this._super(p, { 
      asset: 'spikes.png',
      collisionMask: Q.SPRITE_FRIENDLY | Q.SPRITE_DEFAULT});

    this.add('2d,invincibleEnemy'); 
  },

  step: function(dt){

  }
});

Q.Sprite.extend("Policia",{
  init: function(p) {
    this._super(p, { 
              sheet: 'policia',
              sprite:'policia',
              y: 500,
              vx: 0,
              found:false,
              launched:false,
              type:Q.SPRITE_ENEMY,
              collisionMask: Q.SPRITE_FRIENDLY});

    this.add('2d, aiBounce, animation, enemy');
    this.on("found")
    this.play("lookArround");
  },

  step: function(dt){
    
    var dog = Q("Dog").first();
    if(dog){
      if(!this.p.found && !this.p.launched && Math.abs(this.p.x - dog.p.x) < 200 && this.p.y >= dog.p.y){
        this.play("foundYou_left");
      }
      else
        this.play("lookArround");

      if(this.p.launched){
        if(dog.p.x - this.p.x > 0){
          this.p.vx=250;
          this.play("run_right",1);
        }
        else{
          this.p.vx=-250;
          this.play("run_left",1);
        }
      }
    }
  },

  found: function(){
    this.p.found = true;
    this.p.launched = true;
  }
});
   
Q.Sprite.extend("CatEasy",{
  init: function(p) {
    this._super(p, { 
              sheet: 'walkCat1',
              sprite:'cat1',
              collisionMask: Q.SPRITE_FRIENDLY | Q.SPRITE_DEFAULT
            });

    this.add('2d, aiBounce, animation, patrol, enemy');

  },

  step: function(dt){

    if(this.p.vx > 0) {
        this.play("run_right");
    } 
    else if(this.p.vx < 0) {
        this.play("run_left");
    }
    this.exePatrol();
  }
});

Q.Sprite.extend("Pitcher",{
  init: function(p) {
    this._super(p, { 
              sheet: 'pitcher',
              sprite:'pitcher'});
    this.p.accTime = 0;
    this.add('2d, aiBounce, animation, enemy');

  },

  step: function(dt){
    this.p.accTime += dt;

    var projectileX;
    var projectileDirection;

    if(this.p.accTime >= this.p.throwTime){
      this.play("throw_" + this.p.direction,1);
      this.p.accTime = 0;

      if(this.p.direction == "left"){
        projectileX = this.p.x-1;
      }
      else{
        projectileX = this.p.x + this.p.w;
      }


      this.stage.insert(new Q.Rock({x:projectileX , y: this.p.y, direction: this.p.direction}));
    }
    else
      this.play("stand_" + this.p.direction);
    
  }
});

Q.Sprite.extend("titleBackground",{
  init: function(p) {
    this._super(p, { asset: 'mainTitle.png' });

    //al dar click
    this.on("touch",this, function() {
      this.showSelectMenu();
    });

  },


  step: function(){
    //al pulsar ENTER
    if(Q.inputs["confirm"]){
      this.showSelectMenu();
    }
  },

  showSelectMenu: function(){
   
    Q.clearStages();
    Q.stageScene("selectMenu"); 
      
  }
});

Q.Sprite.extend("Bone",{
  init: function(p){
     this._super(p, {   
        sheet: 'bone0',
        sprite: 'bone' });

  this.add('2d, animation');  

  this.play('floating');

  this.on("hit.sprite",function(collision) {
    var colObject = collision.obj;
    if(colObject.isA("Dog")) {
      colObject.eat();
      colObject.p.lastPowerup = "ladrido"
      this.destroy();
    }
    });
  }
});

Q.Sprite.extend("Piruleta",{
  init: function(p){
     this._super(p, {   
        sheet: 'piruleta',
        sprite: 'piruleta' });

  this.add('2d, animation');  

  this.play('piruleta');

  this.on("hit.sprite",function(collision) {
    var colObject = collision.obj;
    if(colObject.isA("Dog")) {
      colObject.eat();
      colObject.p.lastPowerup = "wave";
      this.destroy();
    }
    });
  }
});

Q.Sprite.extend("Candy",{
  init: function(p){
     this._super(p, {   
        asset: 'candy.png' });

  this.add('2d');  

  this.on("hit.sprite",function(collision) {
    var colObject = collision.obj;
    if(colObject.isA("Dog")) {
      this.p.dog.eat();
      this.p.dog.p.jumpSpeed = -520;
       this.destroy();
    }
   
    });
  }
})

Q.Sprite.extend("Coin",{
  init: function(p){
    this._super(p, {   
      sheet: 'coin',
      sprite: 'coin',
      scorePoints: 10});

    this.add('2d, animation,scoreItem');  

    this.play('shine');

    this.on("hit.sprite",function(collision) {

      
    });
  }
});

Q.Sprite.extend("Star",{
  init: function(p){
    this._super(p, {   
      asset:'star.png',
      scorePoints: 100});

    this.add('2d, animation,scoreItem'); 
  }
});

Q.Sprite.extend("Heart",{
  init: function(p){
    this._super(p, {   
      asset: 'heart.png',
      scorePoints: 10});

    this.add('2d, animation');  


    this.on("hit.sprite",function(collision) {
      var health = Q.state.get("health");
      if (health <6)
        Q.state.inc("health",1);
      else
        Q.state.inc("score",10);

      this.destroy();
    });
  }
});


Q.UI.Text.extend("Score",{
  init: function(p) {
    this._super({
      label: "Score: 0",
      x: Q.width - 150 ,
      y: 30,
      size: 16
    });
     Q.state.on("change.score",this,"changeScore");
  },

  changeScore: function(valScore) {
    this.p.label = "Score: " + valScore;
  }
});

Q.UI.Button.extend("Lives",{
  init: function(){
    this._super(
      {asset:"hearts6.png"
      ,x:Q.width - 50
      ,y:30});
    Q.state.on("change.health",this,"changeLives");
  },

  changeLives: function(health){
    this.p.asset  = "hearts" + health + ".png"
  }
});

Q.UI.Text.extend("coordenadas",{
  init: function(p) {
    this._super({
      label: "Score: 0",
      x: Q.width - 300 ,
      y: 30,
      size: 16
    });
     Q.state.on("change.x",this,"changecoorx");
      Q.state.on("change.y",this,"changecoory");
  },

  changecoorx: function(xval) {
    this.p.label = "x: " + xval + "y: " + Q.state.get("y");
  },
  changecoory: function(yval) {
    this.p.label = "x: " + Q.state.get("x") + "y: " + yval ;
  }
})
/*=============================================================================================================
=============================================================================================================*/



//***SCENES*********************************************************************************//

/*=============================================================================================================
      LEVELS
=============================================================================================================*/

Q.scene("level1", function (stage) {
	stage.insert(new Q.Repeater({ asset: "dayBg.png", speedX: 0.5, speedY: 0, type: 0 }),0);
  Q.stageTMX("nivel1.tmx",stage);
  Q.state.set("health",6);

  // stage.insert(new Q.Bone({x: 50, y : Dog.p.y})) 
  
  Q.stageScene("HUD",2, {}); 
  var Dog = stage.insert(new Q.Dog(dogProperties)); 
  stage.insert(new Q.Candy({x: 850,y:1420, dog:Dog}));
  stage.insert(new Q.Piruleta({x: 2238,y: 1452}));
  stage.insert(new Q.Bone({x: 892,y: 1195}));
  stage.insert(new Q.CatEasy({x: 524,y: 1195,patrolDistance:300,vx:120}));
  stage.insert(new Q.CatEasy({x:280,y:1420, patrolDistance:300,vx:100}));
  stage.insert(new Q.CatEasy({x:5399,y:1228, patrolDistance:300,vx:100}));
  stage.insert(new Q.CatEasy({x:5500,y:1228, patrolDistance:300,vx:100}));
  stage.insert(new Q.Coin({x:249, y:1292}));
  stage.insert(new Q.Coin({x:309, y:1260}));
  stage.insert(new Q.Star({x:1276, y:1132}));
  stage.insert(new Q.Pitcher({x:1500,vx:0,direction  :"left", throwTime:3}));
  stage.insert(new Q.Pitcher({x:1800,y:600,vx:0,direction  :"left", throwTime:3}));
  stage.insert(new Q.Spikes({x:2528, y :1454}));
  stage.insert(new Q.Spikes({x:2592, y :800}));
  stage.insert(new Q.Spikes({x:2786, y :800}));
  stage.insert(new Q.Spikes({x:2850, y :800}));
  stage.insert(new Q.Policia({x:3200,y:800}));
  stage.insert(new Q.FallingRockSpawner({x:2700, y:1100}));
  stage.insert(new Q.WoodSign({x:6382,y:1200}));
  stage.insert(new Q.FallingRockSpawner({x:4050, y:1100}));
  stage.insert(new Q.FallingRockSpawner({x:4250, y:1100}));
  stage.insert(new Q.FallingRockSpawner({x:4450, y:1100}));
  stage.insert(new Q.FallingRockSpawner({x:4650, y:1100}));


	stage.add("viewport").follow(Dog,{x:true, y :true});
	stage.viewport.offsetY = 255;
});

Q.scene("level2", function (stage) {
  stage.insert(new Q.Repeater({ asset: "dayBg.png", speedX: 0.5, speedY: 0, type: 0 }),0);
  Q.stageTMX("nivel2.tmx",stage);
  Q.state.set("health",6);

  // stage.insert(new Q.Bone({x: 50, y : Dog.p.y})) 
  
  Q.stageScene("HUD",2, {}); 
  var Dog = stage.insert(new Q.Dog(dogProperties)); 
  stage.insert(new Q.CatEasy({x:259,y:1516, patrolDistance:500,vx:150}));
  stage.insert(new Q.Coin({x:1044, y:1452}));
  stage.insert(new Q.Coin({x:1129, y:1388}));
  stage.insert(new Q.Star({x:1229, y:1325}));
  stage.insert(new Q.CatEasy({x:1352,y:1292, patrolDistance:100,vx:150}));
  stage.insert(new Q.Policia({x:1017,y:1165}));
  stage.insert(new Q.Spikes({x:923, y :1004}));
  stage.insert(new Q.Spikes({x:1095, y :1004}));
  stage.insert(new Q.Spikes({x:1255, y :1004}));
  stage.insert(new Q.Spikes({x:1463, y :1004}));
  stage.insert(new Q.FallingRockSpawner({x:1565, y:950}));
  stage.insert(new Q.Heart({x:1698, y:1068}));
  stage.insert(new Q.FallingRockSpawner({x:1925, y:950}));
  stage.insert(new Q.FallingRockSpawner({x:2085, y:950}));
  stage.insert(new Q.FallingRockSpawner({x:2245, y:950}));
  stage.insert(new Q.FallingRockSpawner({x:2405, y:950}));
  stage.insert(new Q.FallingRockSpawner({x:2565, y:950}));
  stage.insert(new Q.Piruleta({x: 2810,y: 1164}));
  stage.insert(new Q.Star({x:2949, y:1228}));
  stage.insert(new Q.FallingRockSpawner({x:3784, y:950}));
  stage.insert(new Q.Policia({x:4863,y:1388}));
  stage.insert(new Q.FallingRockSpawner({x:5300, y:950}));
  stage.insert(new Q.WoodSign({x:6223,y:1400}));

  stage.add("viewport").follow(Dog,{x:true, y :true});
  stage.viewport.offsetY = 255;
});

Q.scene("level3", function (stage) {
  stage.insert(new Q.Repeater({ asset: "dayBg.png", speedX: 0.5, speedY: 0, type: 0 }),0);
  Q.stageTMX("nivel3.tmx",stage);
  Q.state.set("health",6);

  // stage.insert(new Q.Bone({x: 50, y : Dog.p.y})) 
  
  Q.stageScene("HUD",2, {}); 
  var Dog = stage.insert(new Q.Dog(dogProperties)); 
  stage.insert(new Q.FallingRockSpawner({x:232, y:1000}));
  stage.insert(new Q.FallingRockSpawner({x:684, y:950}));
  stage.insert(new Q.CatEasy({x:792,y:1452, patrolDistance:150,vx:150}));
  stage.insert(new Q.Spikes({x:1113, y :1388}));
  stage.insert(new Q.Spikes({x:1212, y :1388}));
  stage.insert(new Q.Spikes({x:1408, y :1452}));
  stage.insert(new Q.Spikes({x:1854, y :1452}));
  stage.insert(new Q.Policia({x:1608,y:1452}));
  stage.insert(new Q.CatEasy({x:2068,y:1484, patrolDistance:150,vx:200}));
  stage.insert(new Q.Bone({x:2558,y:1484}));
  stage.insert(new Q.Coin({x:2862, y:1484})); 
  stage.insert(new Q.CatEasy({x:3061,y:1164, patrolDistance:200,vx:150}));
  stage.insert(new Q.CatEasy({x:3312,y:1164, patrolDistance:300,vx:200}));
  stage.insert(new Q.Star({x:3968,y:1261}));
  stage.insert(new Q.Spikes({x:4266, y :1292}));
  stage.insert(new Q.Spikes({x:4396, y :1292}));
  stage.insert(new Q.FallingRockSpawner({x:5276, y:1000}));
  stage.insert(new Q.FallingRockSpawner({x:5650, y:1000}));
  stage.insert(new Q.WoodSign({x:6367,y:1340  }));

  stage.add("viewport").follow(Dog,{x:true, y :true});
  stage.viewport.offsetY = 255;
});

Q.scene("level4", function (stage) {
  stage.insert(new Q.Repeater({ asset: "night.png", speedX: 0.5, speedY: 0, type: 0 }),0);
  Q.stageTMX("nivel4.tmx",stage);
  Q.state.set("health",6);

  // stage.insert(new Q.Bone({x: 50, y : Dog.p.y})) 
  
  Q.stageScene("HUD",2, {}); 
  var Dog = stage.insert(new Q.Dog(dogProperties)); 
  Dog.p.x =6300;
  Dog.p.y =1516
  stage.insert(new Q.Coin({x:373, y:1388})); 
  stage.insert(new Q.Coin({x:373, y:1292})); 
  stage.insert(new Q.Coin({x:373, y:1196})); 
  stage.insert(new Q.Star({x:373,y:1100}));
  stage.insert(new Q.FallingRockSpawner({x:632, y:950}));
  stage.insert(new Q.FallingRockSpawner({x:1032 , y:950}));
  stage.insert(new Q.Heart({x: 1140,y: 1485}));
  stage.insert(new Q.Spikes({x:1932, y :1324}));
  stage.insert(new Q.FallingRockSpawner({x:2422, y:950}));
  stage.insert(new Q.FallingRockSpawner({x:2512  , y:950})); 
  stage.insert(new Q.CatEasy({x:2678,y:1452, patrolDistance:250,vx:200}));
  stage.insert(new Q.Pitcher({x:2184,y:2190,vx:0,direction  :"left", throwTime:2.5}));
  stage.insert(new Q.Pitcher({x:3814,y:1452,vx:0,direction  :"left", throwTime:2.5}));
  stage.insert(new Q.Pitcher({x:5078,y:1452,vx:0,direction  :"left", throwTime:2.5}));
  stage.insert(new Q.Heart({x: 5208,y: 1260}));
  stage.insert(new Q.Heart({x: 5769,y: 1516}));
  stage.insert(new Q.Piruleta({x:365,y:1484 }));
  stage.insert(new Q.WoodSign({x:6382,y:1472}));

  stage.add("viewport").follow(Dog,{x:true, y :true});
  stage.viewport.offsetY = 255;
});

Q.scene("level5", function (stage) {
  stage.insert(new Q.Repeater({ asset: "night.png", speedX: 0.5, speedY: 0, type: 0 }),0);
  Q.stageTMX("nivel5.tmx",stage);
  Q.state.set("health",6);
  
  Q.stageScene("HUD",2, {}); 
  var Dog = stage.insert(new Q.Dog(dogProperties)); 

  stage.insert(new Q.Candy({x:398,y:1548,dog:Dog}));
  stage.insert(new Q.Pitcher({x:975,y:1228,vx:0,direction  :"left", throwTime:2.5}));
  stage.insert(new Q.Coin({x:1017, y:1068 })); 
  stage.insert(new Q.Star({x:1177, y:1068 })); 
  stage.insert(new Q.CatEasy({x:1372,y:1196, patrolDistance:120,vx:150}));
  stage.insert(new Q.Pitcher({x:2375,y:1388,vx:0,direction  :"left", throwTime:2.5}));
  stage.insert(new Q.Pitcher({x:2450,y:1325,vx:0,direction  :"left", throwTime:2.5}));
  stage.insert(new Q.Pitcher({x:2508,y:1260,vx:0,direction  :"left", throwTime:2.5}));
  stage.insert(new Q.Pitcher({x:2572,y:1196,vx:0,direction  :"left", throwTime:2.5})); 
  stage.insert(new Q.Policia({x:2493,y:1132}));
  stage.insert(new Q.Spikes({x:2912, y :1164}));
  stage.insert(new Q.CatEasy({x:3018,y:1164, patrolDistance:500,vx:300}));
  stage.insert(new Q.CatEasy({x:1372,y:1196, patrolDistance:120,vx:150}));
  stage.insert(new Q.Pitcher({x:4028,y:1164,vx:0,direction  :"left", throwTime:2.5})); 
  stage.insert(new Q.Pitcher({x:3848,y:1164,vx:0,direction  :"left", throwTime:1.8}));
  stage.insert(new Q.FallingRockSpawner({x:4814, y:950}));
  stage.insert(new Q.FallingRockSpawner({x:4980 , y:950}));
  stage.insert(new Q.FallingRockSpawner({x:5130 , y:950}));  
  stage.insert(new Q.Pitcher({x:5814,y:1324,vx:0,direction  :"left", throwTime:1})); 
  stage.insert(new Q.FallingRockSpawner({x:5592, y:950}));
  stage.insert(new Q.FallingRockSpawner({x:6069 , y:950}));
  stage.insert(new Q.WoodSign({x:6384,y:1485}));
  stage.insert(new Q.Piruleta({x:215,y:1228}));
  stage.insert(new Q.Heart({x:2968, y:1164}));
  stage.insert(new Q.Heart({x:2858, y:1164}));

  stage.add("viewport").follow(Dog,{x:true, y :true});
  stage.viewport.offsetY = 255;
});

Q.scene("level6", function (stage) {
  stage.insert(new Q.Repeater({ asset: "night.png", speedX: 0.5, speedY: 0, type: 0 }),0);
  Q.stageTMX("nivel6.tmx",stage);
  Q.state.set("health",6);
  
  Q.stageScene("HUD",2, {}); 
  var Dog = stage.insert(new Q.Dog(dogProperties)); 

  stage.insert(new Q.Pitcher({x:305,y:1545,vx:0,direction  :"right", throwTime:2.5}));
  stage.insert(new Q.Spikes({x:368, y :1452}));
  stage.insert(new Q.CatEasy({x:558,y:1518, patrolDistance:250,vx:300}));
  stage.insert(new Q.FallingRockSpawner({x:915, y:1000}));
  stage.insert(new Q.Pitcher({x:1364,y:1548,vx:0,direction  :"left", throwTime:2.5}));
  stage.insert(new Q.Coin({x:1228, y:1518 })); 
  stage.insert(new Q.Coin({x:1260, y:1486 })); 
  stage.insert(new Q.Coin({x:1292, y:1454 })); 
  stage.insert(new Q.Coin({x:1324, y:1422 }));  
  stage.insert(new Q.Heart({x:1356, y:1390 }));
  stage.insert(new Q.Spikes({x:1388 , y:1422 })); 
  stage.insert(new Q.Spikes({x:1420 , y:1454 })); 
  stage.insert(new Q.Spikes({x:1452 , y:1486 })); 
  stage.insert(new Q.Spikes({x:1484 , y:1518 }));  
  stage.insert(new Q.FallingRockSpawner({x:1902, y:1000}));
  stage.insert(new Q.FallingRockSpawner({x:2000, y:1000}));
  stage.insert(new Q.FallingRockSpawner({x:2100, y:1000}));
  stage.insert(new Q.FallingRockSpawner({x:2192, y:1000}));
  stage.insert(new Q.FallingRockSpawner({x:2292, y:1000}));
  stage.insert(new Q.Piruleta({x:2577,y:1325}));
  stage.insert(new Q.Candy({x:3470,y:1388,dog:Dog}));
  stage.insert(new Q.CatEasy({x:3447,y:1112, patrolDistance:280,vx:300}));
  stage.insert(new Q.Pitcher({x:4212,y:1132,vx:0,direction:"left", throwTime:1.5}));
  stage.insert(new Q.Policia({x:3962,y:1132}));
  stage.insert(new Q.Pitcher({x:4971,y:1260,vx:0,direction:"left", throwTime:1.5}));
  stage.insert(new Q.Pitcher({x:5036,y:1196,vx:0,direction:"left", throwTime:1.2}));
  stage.insert(new Q.Spikes({x:4842 , y:1388 }));  
  stage.insert(new Q.CatEasy({x:4989,y:1452, patrolDistance:500,vx:220}));
  stage.insert(new Q.CatEasy({x:4989,y:1452, patrolDistance:600,vx:250}));
  stage.insert(new Q.CatEasy({x:4989,y:1452, patrolDistance:550,vx:300}));
  stage.insert(new Q.Policia({x:5769,y:1452}));
  stage.insert(new Q.Heart({x:3308, y:1132}));
  stage.insert(new Q.Home({x:6280, y:1402}));

  stage.add("viewport").follow(Dog,{x:true, y :true});
  stage.viewport.offsetY = 255;
});
/*=============================================================================================================
=============================================================================================================*/
Q.scene('endGame',function(stage) {
  var container = stage.insert(new Q.UI.Container({
    x: Q.width/2, y: Q.height/2, fill: "rgba(0,0,0,0.5)"
  }));

  var button = container.insert(new Q.UI.Button({ x: 0, y: 0, fill: "#CCCCCC",
                                                  label: "Play Again" }))         
  var label = container.insert(new Q.UI.Text({x:10, y: -10 - button.p.h, 
                                                   label: stage.options.label }));
  button.on("click",function() {
    Q.clearStages();
    loadLevel();
  });

  container.fit(20);
});

Q.scene('nextLevel',function(stage) {
  var container = stage.insert(new Q.UI.Container({
    x: Q.width/2, y: Q.height/2, fill: "rgba(0,0,0,0.5)"
  }));

  var button = container.insert(new Q.UI.Button({ x: 0, y: 0, fill: "#CCCCCC",
                                                  label: "Next Level" }))         
  var label = container.insert(new Q.UI.Text({x:10, y: -10 - button.p.h, 
                                                   label: stage.options.label }));
  button.on("click",function() {
    Q.clearStages();
    loadLevel();
  });

  container.fit(20);
});

Q.scene('WinGame',function(stage) {
  var container = stage.insert(new Q.UI.Container({
    x: Q.width/2, y: Q.height/2, fill: "rgba(0,0,0,0.5)"
  }));

  var button = container.insert(new Q.UI.Button({ x: 0, y: 0, fill: "#CCCCCC",
                                                  label: "Credits" }))         
  var label = container.insert(new Q.UI.Text({x:10, y: -10 - button.p.h, 
                                                   label: "You are back home!!"}));
  button.on("click",function() {
   
  });

  container.fit(20);
});


Q.scene('mainTitle',function(stage) {

  var container = stage.insert(new Q.UI.Container({
    x: Q.width/2, y: Q.height/2
  }));

  var bg = container.insert(new Q.titleBackground());
});

Q.scene('selectMenu',function(stage){


  stage.insert(new Q.UI.Text ({
    x:Q.width/2, y:50, label:"Elige a tu personaje", family:"Chango"
  }))

  var containerDobs = stage.insert(new Q.UI.Container({
    x: Q.width/6, y: Q.height/2, fill:"red"
  }))
  var btnDobs = containerDobs.insert(new Q.UI.Button({
    asset:'select1.png'
  }));
  var lblDobs = containerDobs.insert(new Q.UI.Text({
    label:'Dobs', y: btnDobs.p.y +btnDobs.p.h
  }));
  containerDobs.fit(1,1);
  
  btnDobs.on("click", function(){
    dogProperties = {sprite: "perro1",sheet: "ladrarRperro1",jumpSpeed: -400, speed: 300};
    loadLevel();
  });

  var containerRuffus = stage.insert(new Q.UI.Container({
    x: Q.width/2  , y: Q.height/2, fill:"red"
  }))
  var btnRuffus = containerRuffus.insert(new Q.UI.Button({
    asset:'select3.png'
  }));
  var lblRuffus = containerRuffus.insert(new Q.UI.Text({
    label:'Ruffus', y: btnRuffus.p.y +btnRuffus.p.h
  }));
  containerRuffus.fit(1,1);
  

  btnRuffus.on("click", function(){
    dogProperties = { sprite: "perro2",  sheet: "ladrarRperro2",jumpSpeed: -530  , speed: 300};
    loadLevel();
  });

  var containerSid = stage.insert(new Q.UI.Container({
    x: Q.width - Q.width/6, y: Q.height/2, fill:"red"
  }));
  var btnSid = containerSid.insert(new Q.UI.Button({
    asset:'select2.png'
  }));
  var lblSid = containerSid.insert(new Q.UI.Text({
    label:'Sid', y: btnSid.p.y +btnSid.p.h
  }));
  containerSid.fit(1,1);
  

  btnSid.on("click", function(){
    dogProperties = { sprite : "perro3",  sheet: "ladrarRperro3",jumpSpeed: -400, speed: 300};
    loadLevel();
  });
});

Q.scene('HUD', function(stage){
  stage.insert(new Q.Lives());

  stage.insert(new Q.Score());

  stage.insert(new Q.coordenadas());
});

loadLevel= function(){
  Q.loadTMX("nivel" + nivel + ".tmx", function() {
    Q.stageScene("level" +nivel ); 
  });
}

/*=============================================================================================================
=============================================================================================================*/

//};

