$(function () {
    //定义页面的坐标
    var old = {row:0,col:0};
    var now = {row:1,col:1};

    //定义手指滑动的方向
    var direction = {up:1,right:2,bottom:3,left:4};

    //页面是否可以进行滑动
    var flag = false;

    //手指滑动
    $('#container').swipeUp(function () {
        if(flag){
            return;
        }

        //确定新老页面坐标
        old.row = now.row;
        old.col = now.col;

        //范围限定
        if(now.row < 5){
            console.log('up');
            now.row = now.row + 1;
            now.col = 1;

            moveAin(direction.up)
        }

    });
    $('#container').swipeDown(function () {
        if(flag){
            return;
        }

        //确定新老页面坐标
        old.row = now.row;
        old.col = now.col;

        //范围限定
        if(now.row > 1){
            console.log('down');
            now.row = now.row - 1;
            now.col = 1;

            moveAin(direction.bottom)
        }

    });
    $('#container').swipeLeft(function () {
        if(flag){
            return;
        }
        //确定新老页面坐标
        old.row = now.row;
        old.col = now.col;

        //范围限定
        if(now.row>1 && now.row<5&& now.col==1){
            console.log('left');
            now.row = now.row;
            now.col = now.col + 1;
            moveAin(direction.left)
        };

    });
    $('#container').swipeRight(function () {
        if(flag){
            return;
        }
        //确定新老页面坐标
        old.row = now.row;
        old.col = now.col;

        //范围限定
        if(now.row>1 && now.row<5&& now.col==2){
            console.log('right');
            now.row = now.row;
            now.col = now.col - 1;
            moveAin(direction.right)
        }

    });


    //切换动画
    function moveAin(dir) {
        //准备新老页面的坐标
        var oldPoint = '.page-'+ old.row +'-'+ old.col;
        var newPoint = '.page-'+ now.row +'-'+ now.col ;

        //定义保存新页面与老页面的class值
        var oldPage = '';
        var newPage = ''; //新页面

        // console.log(dir);// direction.up = 1
        switch (dir){
            case direction.up:
                //console.log(11111);
                oldPage = 'app-page-moveToTop';
                newPage = 'app-page-moveFromBottom';
                break;
            case direction.right:
                oldPage = 'app-page-moveToRight';
                newPage = 'app-page-moveFromLeft';
                break;
            case direction.bottom:
                oldPage = 'app-page-moveToBottom';
                newPage = 'app-page-moveFromTop';
                break;
            case direction.left:
                oldPage = 'app-page-moveToLeft';
                newPage = 'app-page-moveFromRight';
                break;
        };

        //需要新页面与老页面添加动画的类class
        $(oldPoint).addClass(oldPage);
        $(newPoint).addClass(newPage);
        $(newPoint).removeClass('hide');
        $(newPoint).addClass('page-current');

        flag = true;

        //动画结束逻辑
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