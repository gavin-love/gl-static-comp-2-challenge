audioClips();

function audioClips() { 

  var $buttonOne = $('.play-btn-one');
  var $buttonTwo = $('.play-btn-two');
  var $buttonThree = $('.play-btn-three');
  var $buttonFour = $('.play-btn-four');
  var $buttonFive = $('.play-btn-five');
  var $buttonSix = $('.play-btn-six');
  var $buttonSeven = $('.play-btn-seven');
  var $buttonEight = $('.play-btn-eight');

  var $drake = $('.gods-plan')[0];
  var $bebe = $('.meant-to-be')[0];
  var $bruno = $('.finesse')[0];
  var $post = $('.psycho')[0];
  var $ed = $('.perfect')[0];
  var $bloc = $('.look-alive')[0];
  var $zedd = $('.the-middle')[0];
  var $dicky = $('.freaky-friday')[0];



  $buttonOne.on('mouseenter', function(){
    $drake.play();
  });

  $buttonOne.on('mouseleave', function() {
    $drake.pause();
  });

  $buttonTwo.on('mouseenter', function(){
    $bebe.play();
  });

  $buttonTwo.on('mouseleave', function() {
    $bebe.pause();
  });

  $buttonThree.on('mouseenter', function(){
    $bruno.play();
  });

  $buttonThree.on('mouseleave', function() {
    $bruno.pause();
  });

  $buttonFour.on('mouseenter', function(){
    $post.play();
  });

  $buttonFour.on('mouseleave', function() {
    $post.pause();
  });

  $buttonFive.on('mouseenter', function(){
    $ed.play();
  });

  $buttonFive.on('mouseleave', function() {
    $ed.pause();
  })

  $buttonSix.on('mouseenter', function(){
    $bloc.play();
  });

  $buttonSix.on('mouseleave', function() {
    $bloc.pause();
  });

  $buttonSeven.on('mouseenter', function(){
    $zedd.play();
  });

  $buttonSeven.on('mouseleave', function() {
    $zedd.pause();
  })

  $buttonEight.on('mouseenter', function(){
    $dicky.play();
  });

  $buttonEight.on('mouseleave', function() {
    $dicky.pause();
  });
};
