$(function () {
    var old = {row:0,col:0};
    var now = {row:1,col:1};

    var direction = {up:1,right:2,bottom:3,left:4}

    var flag = false;

    $('#container').swipeUp(function () {
       if(flag){return};

       old.row = now.row ;
       old.col = now.col ;

       if(now.row < 5) {
           now.row = now.row + 1 ;
           now.col = 1 ;
           moveAin(direction.up)
       }
    });

    $('#container').swipeDown(function () {
       if(flag){return};
       old.row = now.row;
       old.col = now.col;
       if(now.row > 1){
           now.row = now.row - 1 ;
           now.col = 1 ;
           moveAin(direction.bottom)
       }
    });

    $('#container').swipeLeft(function () {
       if(flag){return};
       old.row = now.row ;
       old.col = now.col ;
       if(now.row > 1 && now.row < 5 && now.col == 1){
           now.row = now.row;
           now.col = now.col + 1 ;
           moveAin(direction.left);
       }
    });

    $('#container').swipeRight(function () {
        if(flag){return}
        old.row = now.row ;
        old.col = now.col ;
        if(now.row >1 && now.row < 5 && now.col ==2 ){
            now.row = now.row ;
            now.col = now.col - 1 ;
            moveAin(direction.right);
        }
    });

    function moveAin(dir) {
        var oldPoint = '.page-'+old.row+'-'+old.col;
        var newPoint = '.page-'+now.row+'-'+now.col;

        var oldPage = '';
        var newPage = '';

        switch (dir){
            case 1 :
                oldPage = 'app-page-moveToTop';
                newPage = 'app-page-moveFromBottom';
                break;
            case 2 :
                oldPage = 'app-page-moveToRight';
                newPage = 'app-page-moveFromleft';
                break;
            case 3 :
                oldPage = 'app-page-moveToBottom';
                newPage = 'app-page-moveFromTop';
                break;
            case 4 :
                oldPage = 'app-page-moveToLeft';
                newPage = 'app-page-moveFromRight';
                break;
        } ;
        $(oldPoint).addClass(oldPage);

        $(newPoint).addClass(newPage);
        $(newPoint).removeClass('hide');
        $(newPoint).addClass('page-current');
        flag = true ;

        setTimeout(function () {
            $(oldPoint).removeClass(oldPage);
            $(oldPoint).removeClass('page-current');
            $(oldPoint).addClass('hide');
            $(oldPoint).find('img').addClass('hide');

            $(newPoint).removeClass(newPage);
            $(newPoint).find('img').removeClass('hide');
            flag = false;
        },600);
    };

});