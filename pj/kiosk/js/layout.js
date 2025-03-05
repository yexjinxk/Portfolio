const 카테고리_타입들 = ['coffee', 'drink', 'food'];

$(function () {
  function 페이지네이션(타입) {
    const 메뉴_배열 = document.getElementsByClassName(타입);
    const 보여지는_페이지_번호 = document.getElementsByClassName('page-numbers')[0];
    const 이전_버튼 = document.getElementsByClassName('prev-button')[0];
    const 다음_버튼 = document.getElementsByClassName('next-button')[0];

    const 한_페이지_보여질_개수 = 12;
    const 총_페이지_개수 = Math.ceil(메뉴_배열.length / 한_페이지_보여질_개수);
    let 현재_페이지_번호 = 1;

    function 페이지에_해당하는_메뉴_보여주기(현재_페이지) {
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

    function 페이지_텍스트_가이드(현재_페이지_번호, 총_페이지_개수) {
      const circles = document.getElementsByClassName('page-circle');
      
      for (let i = 0; i < circles.length; i++) {
        if (i === (현재_페이지_번호 - 1)) {
          circles[i].classList.add('btn-active');
        } else {
          circles[i].classList.remove('btn-active');
        }
      }
    }

    

    이전_버튼.addEventListener('click', function() {
        if (현재_페이지_번호 > 1) {
            현재_페이지_번호 = 현재_페이지_번호 - 1;
            페이지에_해당하는_메뉴_보여주기(현재_페이지_번호);
            페이지_텍스트_가이드(현재_페이지_번호, 총_페이지_개수)
        }
    });

    다음_버튼.addEventListener('click', function() {

        if (현재_페이지_번호 < 총_페이지_개수) {
            현재_페이지_번호 += 1;
            페이지에_해당하는_메뉴_보여주기(현재_페이지_번호);
            페이지_텍스트_가이드(현재_페이지_번호, 총_페이지_개수)
        }
    })

    페이지에_해당하는_메뉴_보여주기(현재_페이지_번호)
    페이지_텍스트_가이드(현재_페이지_번호, 총_페이지_개수)

    
  }
  
  

  const itemsPerPage = 12; // 한 페이지에 보여줄 메뉴 수
  let currentPage = 0; // 현재 페이지 번호
  let currentTab = 0; // 현재 활성화된 탭 번호
  let totalPages = 0; // 전체 페이지 수 계산

// 탭메뉴 생성
for (let i = 0; i < 3; i++) {
  $('.tab-nav').append(`<li class="cont"><a href="#" class="tab-link" data-index="${i}">${menu[i].tabName}</a></li>`);

 // 컨텐츠(상품 리스트)
  $('.cont-wrap').append('<ul></ul>');


  let contListNum = menu[i].menuLists.length;
  for (let x = 0; x < contListNum; x++) {
    let currentMenu = menu[i].menuLists[x];

    let megaImg = '';
    if (menu[i].tabName === "Coffee") {
      megaImg = `./imgs/coffee/${currentMenu.menuImg}`;
    } else if (menu[i].tabName === "Drink") {
      megaImg = `./imgs/drink/${currentMenu.menuImg}`;
    } else if (menu[i].tabName === "Food") {
      megaImg = `./imgs/food/${currentMenu.menuImg}`;
    }

   //eq(): index번호를 부여 또는 확인
    $('.cont-wrap ul').eq(i).append(
    `
    <li class="${menu[i].tabName.toLowerCase()}">
      <img src="${megaImg}" alt="${currentMenu.menuTitle}"   style="width:160px; height:auto;">
      <dl>
        <dt class="menutitle">${currentMenu.menuTitle}</dt>
        <dd class="price"><span>${currentMenu.price}</span>원</dd>
      </dl>
    </li>
    `
    );
  
  }
}

// 탭 클릭 이벤트
$('.tab-link').on('click', function (e) {
  e.preventDefault(); // 기본 링크 동작 방지
  const index = $(this).data('index');

 // 모든 콘텐츠 숨기기
  $('.cont-wrap ul').hide();
 // 선택된 탭의 콘텐츠만 보이기
  $('.cont-wrap ul').eq(index).show();

 // 탭 활성화 스타일 추가 (선택적으로)
  $('.tab-nav li').removeClass('active');
  $(this).parent().addClass('active');

  페이지네이션(카테고리_타입들[index])
});

// 초기 상태: 첫 번째 탭의 콘텐츠만 보이기
$('.cont-wrap ul').hide();
$('.cont-wrap ul').eq(0).show();
$('.tab-nav li').eq(0).addClass('active');

페이지네이션(카테고리_타입들[0])
});
