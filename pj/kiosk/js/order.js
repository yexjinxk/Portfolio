$(function () {
  // 주문서 생성

  // 선택한 음료 객체
  let orderArr = [];

  $(".cont-wrap ul li").click(function () {
    // 선택한 메뉴의 이름과 가격을 얻어오기
    let menuTitle = $(this).find("dt").text();
    let price = $(this).find("dd span").text();
    let orderQuantity = 1;

    let isTrue = orderArr.some((item) => item.name == menuTitle); 
    // some() : 배열을 탐색하면서 조건이 맞는지 검사
    console.log(isTrue);
    if (isTrue) {
      $(".mega_modal").fadeIn();
      $(".mega_modal").css("display", "flex");
      $("body,html").css('overflow-y', 'hidden');
      $(".confirm").fadeout();
    } else {
      let obj = {
        name: menuTitle,
        price: price,
        quantity: orderQuantity, 
        totalPrice: price * orderQuantity,
      };
      orderArr.push(obj);
      console.log(orderArr);

      orderUI();
    }
  });

  //주문내역 전체삭제
  $(document).on("click", ".btn-clear", function () {
    
    orderArr = [];
    
    orderUI();
});

  $('.confirm').click(function () {
    $(".mega_modal").css("display", "none");
    $("body,html").css('overflow-y', 'auto');
  })

  // 주문내역(orderArr)을 화면에 출력할 함수 작성
  function orderUI() {
    let orderList = ""; // 데이터 누적 저장할 변수
    let totalAmount = 0;  // 총 금액 초기화
    let totalQuantity = 0; // 총 갯수 초기화


    orderArr.forEach((item, index) => {
      orderList += `
                <dl class="list" data-index=${index}>
                    <dt>${item.name}</dt>
                    <dd>
                    <button class="btn-sub"><img src="./imgs/icon/remove.png" alt="-" class="icon-remove"></button>
                    <span class="num">${item.quantity}</span>
                    <button class="btn-add"><img src="./imgs/icon/add.png" alt="+" class="icon-add"></button>
                    </dd>
                    <dd>${item.totalPrice.toLocaleString()}원</dd>
                    <button class="btn-delete"><img src="./imgs/icon/delete.png" alt="x" class="icon-delete"></button>               
                </dl>
            `;
            totalAmount += item.totalPrice
            totalQuantity += item.quantity;

    });

    // 생성된 주문리스트를 주문영역에 추가
    $(".main-menu").html(orderList);

    // 총 금액 확면에 표시
    $(".total-amount").text(`${totalAmount.toLocaleString()}`);

    // 총 선택한 상품 갯수 화면에 표시
    $(".quantity").text(`${totalQuantity}`);
  }

  // 추가버튼
  $(document).on("click", ".btn-add", function () {
    let btnIndex = $(this).parents("dl").data("index");
    console.log(btnIndex);
    orderArr[btnIndex].quantity += 1;
    orderArr[btnIndex].totalPrice =
    orderArr[btnIndex].quantity * orderArr[btnIndex].price;
    orderUI();
  });


  // 빼기버튼
  $(document).on("click", ".btn-sub", function () {
    let btnIndex = $(this).parents("dl").data("index");

    if (orderArr[btnIndex].quantity > 1) {
      orderArr[btnIndex].quantity -= 1;
      orderArr[btnIndex].totalPrice =
        orderArr[btnIndex].quantity * orderArr[btnIndex].price;

      orderUI()
    } else {
      orderArr.splice(btnIndex,1); // splice(index,개수)배열의 특정방을 제거
    }
    orderUI();
});
    
    // 삭제버튼
    $(document).on("click", ".btn-delete", function () {
      let btnIndex = $(this).closest("dl").data("index"); // 정확한 dl 요소를 찾음
      orderArr.splice(btnIndex, 1); 
      orderUI();
  });



  // 카운트다운 함수
  let remainingTime = 180; 

  // 카운트다운 함수
  $(document).ready(function () {
    $(".timeout_modal").hide();
    startCountdown();
  }); 

  function startCountdown() {
      const timerInterval = setInterval(function () {
          // 남은 시간이 0이 되면 타이머 종료
          if (remainingTime <= 0) {
              clearInterval(timerInterval);
              $(".timer").text("");

              orderArr = [];
              orderUI();

              $(".timeout_modal").fadeIn();
              $("body,html").css('overflow-y', 'hidden');
              $(".confirm").fadeout();
              return;
          }
          
        $('.confirm').click(function (e) {
        e.preventDefault();
        $(".timeout_modal").css("display", "none");
        $("body,html").css('overflow-y', 'auto');
    })

          // 남은 시간을 초 단위로 표시
          $(".timer").text(`${remainingTime}`);

          remainingTime--; // 1초 감소
      }, 1000); 
  }
});

