var Splash = function () {};

Splash.prototype = {
    
    loadScripts: function () {
        game.load.script('mixins', 'lib/mixins.js');  
        game.load.script('Swipegame1', 'states/Swipegame-1.3.js');
        game.load.script('Swipegame2', 'states/Swipegame-2.3.js');
        game.load.script('Swipegame3', 'states/Swipegame-3.3.js');
        game.load.script('Swipegame4', 'states/Swipegame-4.3.js');
        game.load.script('Swipegame5', 'states/Swipegame-5.3.js');
        game.load.script('Swipegame6', 'states/Swipegame-6.3.js');
        game.load.script('GameMenu','states/GameMenu-1.0.js');
        game.load.script('Game', 'states/Game-1.0.3.js');
        game.load.script('Game2', 'states/Game-2.0.3.js');
        game.load.script('Game3', 'states/Game-3.0.3.js');
        game.load.script('gameover','states/GameOver.js');
        game.load.script('options', 'states/Options.js');
        game.load.script('LevelUp', 'states/LevelUp-1.4.js');
        game.load.script('LevelUp2', 'states/LevelUp-2.4.js');
        game.load.script('LevelUp3', 'states/LevelUp-3.4.js');
        //game.load.script('sensor', 'lib/sensor.js');
    },
    
    loadBgm: function () {
        game.load.audio('bgm', 'assets/audio/bgm.mp3');
        game.load.audio('pop', 'assets/audio/pop.mp3');
        game.load.audio('ribbit', 'assets/audio/ribbit.wav');
    },
    
    loadImages: function () {
        game.load.image('menu-background', 'assets/images/TitleBG.png');
        game.load.image('bubble','assets/images/Bubble.png');
        game.load.image('frogmouth','assets/images/frogmouth.png');
        game.load.image('LU-background','assets/images/BubbleLevelUp.png');
        game.load.image('frog','assets/images/Frog.png');
        game.load.image('smallbubble','assets/images/smallbubble.png');
        game.load.image('popclick','assets/images/popclick.png');
        game.load.image('pop','assets/images/pop.png');
        game.load.image('swipebutton','assets/images/swipebutton.png');
        game.load.image('swipebackground','assets/images/swipebackground.png');
        game.load.image('buttend','assets/images/buttonend.png');
        game.load.atlasXML('tongueb1', 'assets/images/spritesheet/tongueanimationlb.png', 'assets/images/spritesheet/tongueanimationlb.xml');
        game.load.atlasXML('tongueb2', 'assets/images/spritesheet/frogtongueb2.png', 'assets/images/spritesheet/frogtongueb2.xml');
        game.load.atlasXML('tongueb3', 'assets/images/spritesheet/FTongueDiagR.png', 'assets/images/spritesheet/FTongueDiagR.xml');
        game.load.atlasXML('tongueb4', 'assets/images/spritesheet/ftdl.png', 'assets/images/spritesheet/ftdl.xml');
    },
    
   init: function () {
        this.loadingBar = game.make.sprite(game.world.centerX, (game.world.centerY+100), "loading");
        this.loadingBar.anchor.setTo(0.5);
        this.status = game.make.text(game.world.centerX,(game.world.centerY+325), 'Loading...', {fill: 'white'});
        this.status.anchor.setTo(0.5);
   },
    
    preload: function () {
        game.add.sprite(0, 0, 'background');
        game.add.existing(this.loadingBar);
        game.add.existing(this.status);
        this.load.setPreloadSprite(this.loadingBar);
        
        this.loadScripts();
        this.loadImages();
        this.loadBgm();
    },
    
    addGameStates: function () {
        game.state.add("GameMenu", GameMenu);
        game.state.add("LevelUp", LevelUp);
        game.state.add("Game", Game);
        game.state.add("LevelUp2", LevelUp2);
        game.state.add("LevelUp3", LevelUp3);
        game.state.add("Game2", Game2);
        game.state.add("Game3", Game3);
        game.state.add("Swipegame1", Swipegame1);
        game.state.add("Swipegame2", Swipegame2);
        game.state.add("Swipegame3", Swipegame3);
        game.state.add("Swipegame4", Swipegame4);
        game.state.add("Swipegame5", Swipegame5);
        game.state.add("Swipegame6", Swipegame6);
        //game.state.add("GameOver", GameOver);
        //game.state.add("Options", Options);
    },
    
   // goLarge: function () {game.scale.startFullScreen();},
    
    create: function() {
    this.status.setText('Ready!');
    this.addGameStates();
   // game.input.onDown.add(this.goLarge, this);
        
        setTimeout(function () {
            game.state.start("GameMenu");
        }, 1000);
    }
};