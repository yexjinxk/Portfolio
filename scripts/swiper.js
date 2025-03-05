$(document).ready(function() {
    
    let indices = [0, 0, 0, 0];
    let isFirstSlide = true;

    function startSliding() {
        slideInterval = setInterval(function() {
            slide();
            if (isFirstSlide) {
                clearInterval(slideInterval);
                slideInterval = setInterval(slide, 3000); 
                isFirstSlide = false;
            }
        }, 1000); 
    }

    function stopSliding() {
        clearInterval(slideInterval); 
        isSlidingActive = false; 
    }

    function slide() {
        $('#cardnews .design-box').each(function(index) {
            let $currentUl = $(this);
            let currentInx = indices[index];

            let $currentLi = $currentUl.find('li').eq(currentInx);
            $currentLi.animate({ left: '-100%' }, 600);

            currentInx++;
            if (currentInx >= $currentUl.find('li').length) currentInx = 0;

            $currentUl.find('li').eq(currentInx).css('left', '100%').animate({ left: '0' }, 600);

            // 인덱스 업데이트
            indices[index] = currentInx;

            updatePaginationBullets(index, currentInx);
        });
    }

    function updatePaginationBullets(boxIndex, activeIndex) {
        $('#cardnews .design-container').eq(boxIndex).find('.pagination-bullet').css('background-color', 'rgba(66, 92, 224, .4)');
        $('#cardnews .design-container').eq(boxIndex).find('.pagination-bullet').eq(activeIndex).css('background-color', '#425ce0');
    }
});
