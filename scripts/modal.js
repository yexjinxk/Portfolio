$(document).ready(function() {
    // UI 컴포넌트
    $('#project1 .ui-components').click(function(e){
        e.preventDefault();
        $('#project1 .modal-backdrop.components').show();
    });
    $('.design-container').click(function(e) {
        e.preventDefault();
        $(this).find('.modal-backdrop.components').fadeIn(250); // 클릭한 design-container의 모달 백드롭만
    });

    $('.tab-menu .design_portfolio').click(function(e){
        e.preventDefault();
        $('#web_design .modal-backdrop.components').show();
    });

    $('.modal-components .btn-close').off('click').on('click', function(e){
        e.stopPropagation();
        $(this).closest('.modal-backdrop.components').fadeOut(250);
    });

    // 프로젝트 목업 스크롤
    const frameLinks = document.querySelectorAll('.frame a'); 

    frameLinks.forEach(frameLink => {
        const frameImage = frameLink.querySelector('img');

        frameLink.addEventListener('mouseenter', () => {
            const imageHeight = frameImage.offsetHeight;
            frameImage.style.transition = 'transform 4s ease';
            const scrollAmount = Math.max(0, imageHeight - 353);
            frameImage.style.transform = `translateY(-${scrollAmount}px)`;
        });

        frameLink.addEventListener('mouseleave', () => {
            frameImage.style.transform = 'translateY(0)';
        });
    });

    /* 디자인 탭 */
    // 기본적으로 첫 번째 탭 활성화
    $('.tab-menu li:first-child a').addClass('active');
    $('#tab-content #cardnews, #tab-content #contents_design').hide(); 
    $('#cardnews').show().addClass('active'); 

    $('.tab-menu li:first-child a, .tab-menu li:nth-child(2) a').click(function(e) {
        e.preventDefault();

        // 현재 활성화된 탭 비활성화
        $('.tab-menu li:first-child a, .tab-menu li:nth-child(2) a').removeClass('active');
        // 클릭한 탭 활성화
        $(this).addClass('active');

        // 모든 콘텐츠 숨김
        $('#tab-content #cardnews, #tab-content #contents_design').removeClass('active').hide();

        // 클릭한 탭에 해당하는 콘텐츠 보여줌
        let target = $(this).attr('href');
        $(target).addClass('active').show();
    });

    // 이미지 슬라이더
    $('.design-container').each(function() {
        let currentIndex = 0;
        const images = getImages.call(this); 

        // 초기 상태에서 첫 번째 이미지만 보이게
        updateImageDisplay(images, currentIndex);

        // 이전
        $(this).find('.icon .back').click((e) => {
            e.preventDefault(); 
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // 처음이면 마지막으로
            updateImageDisplay(images, currentIndex);
        });

        // 다음 
        $(this).find('.icon .forward').click((e) => {
            e.preventDefault(); 
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // 마지막이면 처음으로
            updateImageDisplay(images, currentIndex);
        });
    });

    // 클릭한 design-container의 모달 백드롭 내의 이미지 선택
    function getImages() {
        return $(this).find('.modal-backdrop.components .img-mask img');
    }

    // 현재 인덱스 이미지만 표시
    function updateImageDisplay(images, currentIndex) {
        images.each((index, img) => {
            $(img).css('display', (index === currentIndex) ? 'block' : 'none'); 
        });
    }
});
