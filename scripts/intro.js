$(document).ready(function() {
    setInitialState();
    setInitialPagination();

    // 애니메이션 진행 상태 변수
    let isAnimating = false;
    let isSlidingActive = false;
    let slideInterval;
    let indices = [0, 0, 0, 0];
    let isFirstSlide = true;

    // 각 프로젝트 섹션의 애니메이션 상태 변수
    let project1Animated = false;
    let project2Animated = false;
    let project3Animated = false;

    // 스크롤 이벤트 리스너
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();
        var windowHeight = $(window).height(); 
        var documentHeight = $(document).height(); 
        var homeSection = $('#home').offset().top;
        var aboutSection = $('#about').offset().top;
        var project1Height = $('#project1').outerHeight();
        var project2Height = $('#project2').outerHeight();
        var project3Height = $('#project3').outerHeight(); 
        var project1Section = $('#project1').offset().top;
        var project2Section = $('#project2').offset().top;
        var project3Section = $('#project3').offset().top; 
        var designSection = $('#design').offset().top;
        var footerSection = $('#footer').offset().top;
        var skillsSection = $('#skills').offset().top;
        var skillsHeight = $('#skills').outerHeight();

        // 각 섹션에 위치할 때 animate
        if (scrollPos + windowHeight >= project1Section + (project1Height / 2) && !project1Animated) {
            $('.project1_ct').addClass('animate');
            project1Animated = true; 
        }

        if (scrollPos + windowHeight >= project2Section + (project2Height / 2) && !project2Animated) {
            $('.project2_ct').addClass('animate');
            project2Animated = true; 
        }

        if (scrollPos + windowHeight >= project3Section + (project3Height / 2) && !project3Animated) {
            $('.project3_ct').addClass('animate');
            project3Animated = true; 
        }

        // .gnb와 .sideNav의 기본 스타일 초기화
        $('.gnb li a').removeClass('active');
        $('.sideNav li a').css('background-color', '');

        // #design 섹션에 위치할 때 슬라이드 활성화
        if (scrollPos >= designSection && !isSlidingActive) {
            isSlidingActive = true; 
            startSliding(); 
        }

        // #design 섹션을 벗어날 때 슬라이드 중지
        if (scrollPos < designSection && isSlidingActive) {
            stopSliding(); 
        }

        // 스타일 변경
        if (scrollPos + windowHeight >= documentHeight) {
            $('.sideNav li:nth-child(7) a').css('background-color', '#425ce0');
        } else if (scrollPos >= homeSection && scrollPos < aboutSection) {
            $('.gnb li:nth-child(1) a').addClass('active');
            $('.sideNav li:nth-child(1) a').css('background-color', '#425ce0');
        } else if (scrollPos >= aboutSection && scrollPos < skillsSection) {
            $('.gnb li:nth-child(2) a').addClass('active');
            $('.sideNav li:nth-child(2) a').css('background-color', '#425ce0'); 
        } else if (scrollPos >= project1Section && scrollPos < project2Section) {
            $('.gnb li:nth-child(3) a').addClass('active'); 
            $('.sideNav li:nth-child(3) a').css('background-color', '#425ce0');
        } else if (scrollPos >= project2Section && scrollPos < project3Section) {
            $('.gnb li:nth-child(3) a').addClass('active');
            $('.sideNav li:nth-child(4) a').css('background-color', '#425ce0'); 
        } else if (scrollPos >= project3Section && scrollPos < designSection) {
            $('.gnb li:nth-child(3) a').addClass('active');
            $('.sideNav li:nth-child(5) a').css('background-color', '#425ce0'); 
        } else if (scrollPos >= designSection && scrollPos < (designSection + $('#design').outerHeight())) {
            $('.gnb li:nth-child(4) a').addClass('active');
            $('.sideNav li:nth-child(6) a').css('background-color', '#425ce0');
        } else if (scrollPos >= footerSection && scrollPos < (footerSection + $('#footer').outerHeight())) {
            $('.sideNav li:nth-child(7) a').css('background-color', '#425ce0');
        }

        // #skills 섹션 애니메이션 처리
        if (scrollPos + windowHeight > skillsSection && scrollPos < skillsSection + skillsHeight) {
            if (!isAnimating) {
                resetSkillBars(); 
                animateSkillBars(); 
                isAnimating = true; 
            }
        } else {
            resetSkillBars(); // 스킬 바를 0으로 리셋
            isAnimating = false; // skills 섹션 밖으로 나가면 애니메이션 상태 초기화!
        }
    });

    function setInitialState() {
        $('.gnb li:nth-child(1) a').addClass('active');
        $('.sideNav li:nth-child(1) a').css('background-color', '#425ce0');
    }

    function setInitialPagination() {
        $('#cardnews .design-container').each(function() {
            $(this).find('.pagination-bullet').eq(0).css('background-color', '#425ce0');
        });
    }

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
        clearInterval(slideInterval); // 슬라이드 중지
        isSlidingActive = false; 
    }

    function resetSkillBars() {
        $('.pbar').css('width', '0');
    }

    function animateSkillBars() {
        $('.pbar').each(function() {
            const percentage = $(this).css('--p');
            $(this).animate({ width: percentage }, 1000);
        });
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

            indices[index] = currentInx;

            // 페이지네이션 불렛 색상 업데이트
            updatePaginationBullets(index, currentInx);
        });
    }

    function updatePaginationBullets(boxIndex, activeIndex) {
        $('#cardnews .design-container').eq(boxIndex).find('.pagination-bullet').css('background-color', 'rgba(66, 92, 224, .4)');
        $('#cardnews .design-container').eq(boxIndex).find('.pagination-bullet').eq(activeIndex).css('background-color', '#425ce0');
    }
});
