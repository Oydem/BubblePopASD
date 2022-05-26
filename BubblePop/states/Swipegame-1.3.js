var Swipegame1 = function(game) {};
var StrStpD = [Date.now()+" "];
var ScrnXYD = [Date.now()+" "];
var DrgD = [Date.now()+" "];
//var ScrnXYbg = Date.now();
var bounds;
var swipeend;
Swipegame1.prototype = {
    
    
    preload: function () {
    this.swipebg = game.add.sprite(0, 0, 'swipebackground');
    //game.physics.arcade.enable(this.swipebg);
        this.swipebutt = game.add.sprite((418-64), 719, 'swipebutton');
        this.swipebutt.anchor.setTo(0.5);
        game.physics.arcade.enable(this.swipebutt);
        
        },
        
        bgtouch: function () {
            ScrnXYD.push('sbg'+' '+Date.now()+' '+game.input.x+' '+game.input.y+'\n');
        },
        buttontouch: function () {
            ScrnXYD.push('sbt'+' '+Date.now()+' '+game.input.x+' '+game.input.y+'\n');
        },
    
    create: function () {
        this.bounds = new Phaser.Rectangle((384-96), (694-49), 639, 747);
        this.swipeend = game.add.sprite(638, 694, null);
        game.physics.arcade.enable(this.swipeend);
        this.swipeend.body.setSize (638, 694, 639, 747);
        this.swipebg.inputEnabled = true;
        this.swipebg.events.onInputDown.add(this.bgtouch, this);
        this.swipebutt.inputEnabled = true;
        this.swipebutt.anchor.set(0.5);
        this.swipebutt.scale.set(2,2);
        this.swipebutt.input.enableDrag();
        this.swipebutt.input.allowVerticalDrag = false;
        this.swipebutt.input.boundsRect = this.bounds;
        this.swipebutt.events.onInputDown.add(this.buttontouch, this);
        this.swipebutt.events.onDragStart.add(this.buttonswipestart, this);
        this.swipebutt.events.onDragStop.add(this.buttonswipestop, this);
        this.swipebutt.revive();
        this.swipeend.revive();
    },
    
    buttonswipestart: function () {
        
        StrStpD.push('Str'+' '+Date.now()+' '+game.input.x+' '+game.input.y+'\n');
        console.log('swipestart');
        },
    
    buttonswipestop: function () {
        
        StrStpD.push('Stp'+' '+Date.now()+' '+game.input.x+' '+game.input.y+'\n');
        console.log('swipestop');
        },
    
     submitscore: function () {
        var Drg = JSON.stringify(DrgD);
        var fd4 = new FormData();
        fd4.append("Drg", Drg);
        var xhr4 = new XMLHttpRequest();

        xhr4.open('POST', 'postDrg.php', true);
        xhr4.send(fd4);
        console.log('posted DrgD');
        DrgD = ['\n'];
         
          var ScrD = JSON.stringify(ScrnXYD);
        var fd5 = new FormData();
        fd5.append("ScrD", ScrD);
        var xhr5 = new XMLHttpRequest();

        xhr5.open('POST', 'postDLsd.php', true);
        xhr5.send(fd5);
        console.log('posted ScrnXYD');
        ScrnXYD = ['\n'];
         
         var StrStp = JSON.stringify(StrStpD);
        var fd6 = new FormData();
        fd6.append("StrStp", StrStp);
        var xhr6 = new XMLHttpRequest();

        xhr6.open('POST', 'postStrStp.php', true);
        xhr6.send(fd6);
        console.log('posted SrtStp');
        StrStpD = ['\n'];

        },
//    submitscorebg: function () {
 //       var Scr2 = JSON.stringify(ScrnXYbg);
 //       var fd5 = new FormData();
  //      fd5.append("Scr2", Scr2);
  //      var xhr5 = new XMLHttpRequest();
  //      xhr5.open('POST', 'postsbg.php', true);
  //      xhr5.send(fd5);
 //       console.log('posted ScrXYbg');
 //       ScrnXYbg = [Date.now()+' '+game.input.x+' '+game.input.y];
//},
    
    NextLevel: function () {
        this.submitscore();
      this.frogLU = game.add.sprite(game.world.centerX, (game.world.centerY), 'LU-background');
      this.frogLU.anchor.setTo(0.5);
      this.frogLU.scale.setTo(1, 1);
      //this.LUText = game.add.text(game.world.centerX, game.world.centerY, 'Level Up!', { fontSize: '64px', fill: 'white' });
      //this.LUText.anchor.setTo(0.5);
      this.frogLU.inputEnabled = true;
      this.frogLU.events.onInputDown.addOnce(this.LU, this);
    },
    
    LU: function () {
      this.frogLU.kill();
       //game.time.events.remove(myLoop);
      //this.LUText.destroy();
      game.state.start("LevelUp");
    },
    
    endswipelevel: function () {
       // this.submitscorebg();
        this.swipebg.destroy();
        this.NextLevel();
    },
    
    checkOverlap: function(sprite1b, sprite2b) {
        var bounds1b = sprite1b.getBounds();
        var bounds2b = sprite2b.getBounds();
        
        return Phaser.Rectangle.intersects(bounds1b, bounds2b);
        
    },
    
        update: function () {
            //game.physics.arcade.overlap(this.swipebutt, this.swipeend, this.NextLevel, null, this);
            //DrgD.push(Date.now()+' '+game.input.x+' '+game.input.y);
            if (this.checkOverlap(this.swipebutt, this.swipeend))
                {
                    this.swipeend = game.add.sprite(0, 0, null);
                    this.swipebutt.kill();
                    this.swipeend.kill();
                    this.endswipelevel();
                }
            else
            {
                DrgD.push(Date.now()+' '+game.input.activePointer.x+' '+game.input.activePointer.y+'\n');
            }
            
        },
    
};