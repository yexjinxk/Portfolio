
$(function(){
    const 메뉴_배열 = document.getElementsByClassName(타입);
    const 보여지는_페이지_번호 = document.getElementsByClassName('page-numbers')[0];
    const 이전_버튼 = document.getElementsByClassName('prev-button')[0];
    const 다음_버튼 = document.getElementsByClassName('next-button')[0];

    const 한_페이지_보여질_개수 = 12;
    const 총_페이지_개수 = Math.ceil(메뉴_배열.length / 한_페이지_보여질_개수);
    
    let 현재_페이지_번호 = 1;

    function 페이지_보여주기(현재_페이지) {
        const 시작_인덱스 = (현재_페이지 - 1) * 한_페이지_보여질_개수;
        const 끝_인덱스 = 시작_인덱스 + 한_페이지_보여질_개수;

        for (let i = 0; i < 메뉴_배열.length; i ++) {
            if (i >= 시작_인덱스 && i < 끝_인덱스) {
                메뉴_배열[i].style.display = 'block';
            } else {
                메뉴_배열[i].style.display = 'none';
            }
        }
    }

    이전_버튼.addEventListener('click', function() {
        if (현재_페이지_번호 > 1) {
            현재_페이지_번호 = 현재_페이지_번호 - 1;
            페이지_보여주기(현재_페이지_번호);

            보여지는_페이지_번호.textContent = `${현재_페이지_번호} of ${총_페이지_개수}`;
        }
    });

    다음_버튼.addEventListener('click', function() {

        if (현재_페이지_번호 < 총_페이지_개수) {
            현재_페이지_번호 += 1;
            페이지_보여주기(현재_페이지_번호);

            보여지는_페이지_번호.textContent = `${현재_페이지_번호} of ${총_페이지_개수}`;
        }
    })

    페이지_보여주기(현재_페이지_번호)
    보여지는_페이지_번호.textContent = `${현재_페이지_번호} of ${총_페이지_개수}`;
})