const menu = [ 
     {
          tabName : 'Coffee',
          menuLists : [
            {
              menuImg: 'Hcoffee01.jpg',
              menuTitle: '꿀아메리카노Hot',
              menuCont:
                '아메리카노의 묵직한 바디감에 달콤한 사양벌꿀이 소프트하게 어우러진 커피.',
              price: '2500',
            },
            {
              menuImg: 'Hcoffee02.jpg',
              menuTitle: '바닐라라떼Hot',
              menuCont:
                '바닐라의 짙은 향과 풍부한 폼 밀크의 조화가 인상적인 달콤한 라떼.',
              price: '3200',
            },
            {
              menuImg: 'Hcoffee03.jpg',
              menuTitle: '바닐라아메리카노Hot',
              menuCont:
                '아메리카노에 바닐라의 부드러운 향과 달콤함을 조화롭게 담아낸 커피.',
              price: '2500',
            },
            {
              menuImg: 'Hcoffee13.jpg',
              menuTitle: '아메리카노Hot',
              menuCont:
                '메가MGC커피 블렌드 원두로 추출한 에스프레소에 물을 더해, 풍부한 바디감을 느낄 수 있는 스탠다드 커피.',
              price: '2000',
            },
            {
              menuImg: 'Hcoffee05.jpg',
              menuTitle: '에스프레소Hot',
              menuCont:
                '메가MGC커피 원두의 향미를 온전히 즐길 수 있는 에스프레소',
              price: '1500',
            },
            {
              menuImg: 'Hcoffee06.jpg',
              menuTitle: '에스프레소도피오Hot',
              menuCont: '더블샷으로 더욱 진하게 즐길 수 있는 에스프레소',
              price: '2000',
            },
            {
              menuImg: 'Hcoffee07.jpg',
              menuTitle: '연유라떼Hot',
              menuCont:
                '향기로운 에스프레소 샷, 부드러운 우유 그리고 달콤한 연유가 조화롭게 어우러진 라떼',
              price: '3700',
            },
            {
              menuImg: 'Hcoffee08.jpg',
              menuTitle: '카라멜마끼아또Hot',
              menuCont:
                '폼 밀크 속에 진한 에스프레소와 달콤한 카라멜을 가미해 부드럽게 즐기는 커피.',
              price: '3500',
            },
            {
              menuImg: 'Hcoffee09.jpg',
              menuTitle: '카페라떼Hot',
              menuCont:
                '진한 에스프레소와 부드러운 우유가 어우러져 고소한 풍미를 완성한 라떼.',
              price: '2900',
            },
            {
              menuImg: 'Hcoffee11.jpg',
              menuTitle: '카페모카Hot',
              menuCont:
                '초코를 만나 풍부해진 에스프레소와 고소한 우유, 부드러운 휘핑크림까지 더해 달콤하게 즐기는 커피.',
              price: '3700',
            },
            {
              menuImg: 'Hcoffee10.jpg',
              menuTitle: '카푸치노Hot',
              menuCont:
                '에스프레소 위에 올려진 우유 거품, 그리고 시나몬 파우더로 완성한 조화로운 맛의 커피.',
              price: '2700',
            },
            {
              menuImg: 'Hcoffee12.jpg',
              menuTitle: '콜드브루라떼Hot',
              menuCont:
                '콜드브루에 고소한 우유를 섞어, 깔끔함과 부드러움을 잡은 라떼.',
              price: '3800',
            },
            {
              menuImg: 'Hcoffee16.jpg',
              menuTitle: '콜드브루오리지널Hot',
              menuCont:
                '차가운 물에 장시간 우려내 깔끔한 목넘김을 느낄 수 있는 콜드브루.',
              price: '3300',
            },
            {
              menuImg: 'Hcoffee14.jpg',
              menuTitle: '티라미수라떼Hot',
              menuCont:
                '에스프레소와 티라미수 소스 & 우유 그리고 풍미를 더해주는 달달한 크림까지 곁들여 완성한 티라미수 라떼.',
              price: '3900',
            },
            {
              menuImg: 'Hcoffee15.jpg',
              menuTitle: '헤이즐넛라떼Hot',
              menuCont:
                '부드러운 카페라떼에 헤이즐넛의 풍부한 향과 달콤함을 담아 향긋하게 즐길 수 있는 라떼.',
              price: '3200',
            },
            {
              menuImg: 'Hcoffee16.jpg',
              menuTitle: '헤이즐넛아메리카노Hot',
              menuCont:
                '아메리카노에 헤이즐넛의 풍성한 향과 달콤함을 담아 향긋하고 부드럽게 즐기는 커피.',
              price: '2500',
            },

            /* //////////////Ice////////////// */
            {
              menuImg: 'Icoffee01.jpg',
              menuTitle: '꿀아메리카노Ice',
              menuCont:
                '아메리카노의 묵직한 바디감에 달콤한 사양벌꿀이 소프트하게 어우러진 커피.',
              price: '2500',
            },
            {
              menuImg: 'Icoffee02.jpg',
              menuTitle: '메가리카노Ice',
              menuCont:
                '깊고 진한 메가MGC커피 아메리카노를 더 큼직하게 즐길 수 있는 대용량 커피.',
              price: '3000',
            },
            {
              menuImg: 'Icoffee03.jpg',
              menuTitle: '바닐라라떼Ice',
              menuCont: '메뉴 설명',
              price: '3200',
            },
            {
              menuImg: 'Icoffee04.jpg',
              menuTitle: '바닐라아메리카노Ice',
              menuCont:
                '바닐라의 짙은 향과 풍부한 폼 밀크의 조화가 인상적인 달콤한 라떼.',
              price: '2500',
            },
            {
              menuImg: 'Icoffee05.jpg',
              menuTitle: '아메리카노Ice',
              menuCont:
                '메가MGC커피 블렌드 원두로 추출한 에스프레소에 물을 더해, 풍부한 바디감을 느낄 수 있는 스탠다드 커피.',
              price: '2000',
            },
            {
              menuImg: 'Icoffee06.jpg',
              menuTitle: '왕할메가커피Ice',
              menuCont:
                '우리 할머니께서 즐겨드시던 달달한 믹스 커피 스타일로 만든 메가MGC커피만의 메가사이즈 커피 음료',
              price: '2900',
            },
            {
              menuImg: 'Icoffee07.jpg',
              menuTitle: '카라멜마끼야또Ice',
              menuCont: '폼 밀크 속에 진한 에스프레소와 달콤한 카라멜을 가미해 부드럽게 즐기는 커피.',
              price: '3500',
            },
            {
              menuImg: 'Icoffee08.jpg',
              menuTitle: '카페라떼Ice',
              menuCont: '진한 에스프레소와 부드러운 우유가 어우러져 고소한 풍미를 완성한 라떼.',
              price: '2900',
            },
            {
              menuImg: 'Icoffee09.jpg',
              menuTitle: '카페모카Ice',
              menuCont: '초코를 만나 풍부해진 에스프레소와 고소한 우유, 부드러운 휘핑크림까지 더해 달콤하게 즐기는 커피.',
              price: '3700',
            },
            {
              menuImg: 'Icoffee10.jpg',
              menuTitle: '카푸치노Ice',
              menuCont: '에스프레소 위에 올려진 우유 거품, 그리고 시나몬 파우더로 완성한 조화로운 맛의 커피.',
              price: '2700',
            },
            {
              menuImg: 'Icoffee11.jpg',
              menuTitle: '콜드브루라떼Ice',
              menuCont: '콜드브루에 고소한 우유를 섞어, 깔끔함과 부드러움을 잡은 라떼.',
              price: '3800',
            },
            {
              menuImg: 'Icoffee12.jpg',
              menuTitle: '콜드브루오리지널Ice',
              menuCont: '차가운 물에 장시간 우려내 깔끔한 목넘김을 느낄 수 있는 콜드브루.',
              price: '3300',
            },
            {
              menuImg: 'Icoffee13.jpg',
              menuTitle: '큐브라떼Ice',
              menuCont: '연유를 섞은 라떼에 에스프레소를 얼린 커피큐브를 올려, 녹을수록 더 진한 커피가 느껴지는 라떼.',
              price: '3900',
            },
            {
              menuImg: 'Icoffee14.jpg',
              menuTitle: '할메가커피Ice',
              menuCont: '우리 할머니께서 즐겨드시던 달달한 믹스 커피 스타일로 만든 메가MGC커피만의 시원한 커피 음료',
              price: '1900',
            },
            {
              menuImg: 'Icoffee15.jpg',
              menuTitle: '헤이즐넛라떼Ice',
              menuCont: '부드러운 카페라떼에 헤이즐넛의 풍부한 향과 달콤함을 담아 향긋하게 즐길 수 있는 라떼.',
              price: '3200',
            },
            {
              menuImg: 'Icoffee16.jpg',
              menuTitle: '헤이즐넛아메리카노Ice',
              menuCont: '아메리카노에 헤이즐넛의 풍성한 향과 달콤함을 담아 향긋하고 부드럽게 즐기는 커피.',
              price: '2500',
            }
          ]
        },
    { tabName : 'Drink',
      menuLists : [{
                menuImg: 'drink01.jpg',
                menuTitle: '왕메가초코',
                menuCont: '부드러운 우유에 진한 초코소스가 어우러져 달콤하게 입맛을 깨우는 왕 메가 사이즈 초코음료',
                price: '4400'
            },
            {
                menuImg: 'drink02.jpg',
                menuTitle: '골드망고스무디',
                menuCont: '황금빛 골드망고가 진하게 느껴지는 부드럽고 상큼 달콤한 스무디',
                price: '3900'
            },
            {
                menuImg: 'drink03.jpg',
                menuTitle: '딸기라떼',
                menuCont: '딸기과육이 풍부히 느껴지는 스테디 셀러 산뜻하고 달콤한 딸기가 가득해 부드러운 우유와 어우러져 더욱 기분 좋게 즐기는 아이스 라떼',
                price: '3700'
            },
            {
                menuImg: 'drink04.jpg',
                menuTitle: '코코넛 커피 스무디',
                menuCont: '바삭하고 고소한 코코넛 칩을 올리고 쌉싸름한 커피와 달콤한 코코넛이 조화로운 스무디',
                price: '4800'
            },
            {
                menuImg: 'drink05.jpg',
                menuTitle: '레드 오렌지 자몽주스',
                menuCont: '엄선된 시칠리아 레드오렌지와 자몽이 만난 상큼한 주스에 프로바이오틱스를 더해 건강한 블렌딩 주스',
                price: '4000'
            },
            {
                menuImg: 'drink06.jpg',
                menuTitle: '샤인머스캣 그린주스',
                menuCont: '달콤한 샤인머스캣과 케일이 만난 싱그러운 주스에 칼슘을 더해 건강한 블렌딩 주스',
                price: '4000'
            },
            {
                menuImg: 'drink07.jpg',
                menuTitle: '딸기주스',
                menuCont: '새콤달콤한 딸기주스에 피쉬 콜라겐을 더해 건강한 블렌딩 주스',
                price: '4000'
            },
            {
                menuImg: 'drink08.jpg',
                menuTitle: '딸기 바나나주스',
                menuCont: '상큼한 딸기와 부드러운 바나나가 만나, 새콤달콤한 매력이 살아 있는 과일 음료.',
                price: '4000'
            },
            {
                menuImg: 'drink09.jpg',
                menuTitle: '딸기 쿠키프라페',
                menuCont: '상큼한 딸기와 부드러운 바나나가 만나, 새콤달콤한 매력이 살아 있는 과일 음료.',
                price: '3900'
            },
            {
                menuImg: 'drink10.jpg',
                menuTitle: '쿠키프라페',
                menuCont: '바삭하고 달콤한 오레오와 고소한 우유, 부드러운 바닐라향의 조화를 느낄 수 있는 프라페.',
                price: '3900'
            },
            {
                menuImg: 'drink11.jpg',
                menuTitle: '고구마라떼Hot',
                menuCont: '달콤하고 고소한 고구마와 부드러운 우유가 만나 누구나 즐기기 좋은 든든한 라떼.',
                price: '3500'
            },
            {
                menuImg: 'drink12.jpg',
                menuTitle: '곡물라떼Hot',
                menuCont: '우유에 곡물을 더해 고소하고 든든하게 즐기는 라떼.',
                price: '3300'
            },
            {
                menuImg: 'drink13.jpg',
                menuTitle: '토피넛라떼',
                menuCont: '은은하게 퍼지는 카라멜의 달달한 향기와 견과의 고소함을 한입에 즐길 수 있는 라떼.',
                price: '3800'
            },
            {
                menuImg: 'drink14.jpg',
                menuTitle: '고구마라떼Ice',
                menuCont: '달콤하고 고소한 고구마와 부드러운 우유가 만나 누구나 즐기기 좋은 든든한 라떼.',
                price: '3500'
            },
            {
                menuImg: 'drink15.jpg',
                menuTitle: '곡물라떼Ice',
                menuCont: '우유에 곡물을 더해 고소하고 든든하게 즐기는 라떼.',
                price: '3300'
            },
            {
                menuImg: 'drink16.jpg',
                menuTitle: '오레오 초코라떼',
                menuCont: '진한 초코와 리얼 오레오를 블렌딩해 씹는 맛을 더한 달콤한 아이스 라떼.',
                price: '3900'
            },
            {
                menuImg: 'drink17.jpg',
                menuTitle: '토피넛라떼',
                menuCont: '은은하게 퍼지는 카라멜의 달달한 향기와 견과의 고소함을 한입에 즐길 수 있는 라떼.',
                price: '3800'
            },
            {
                menuImg: 'drink18.jpg',
                menuTitle: '흑당버블 밀크티라떼',
                menuCont: '타바론 얼그레이 홍차의 깊은 맛을 살린 일크티 라떼에 진한 흑당과 흑당 버블의 달콤함을 채운 음료.',
                price: '3800'
            },
            {
                menuImg: 'drink19.jpg',
                menuTitle: '핫초코',
                menuCont: '부드러운 우유에 진한 초코소스가 어우러져 달콤하게 입맛을 깨우는 초콜릿 음료.',
                price: '3500'
            },
            {
                menuImg: 'drink20.jpg',
                menuTitle: '녹차라떼',
                menuCont: '향긋한 녹차에 우유를 더해 입 안에 부드러운 푸릇함을 선물하는 라떼.',
                price: '3500'
            },
            {
                menuImg: 'drink21.jpg',
                menuTitle: '로얄밀크티라떼',
                menuCont: '우유와 은은한 홍차가 어우러져 부드럽고 향긋한 한 모금을 완성한 라떼.',
                price: '3700'
            },
            {
                menuImg: 'drink22.jpg',
                menuTitle: '흑당라떼',
                menuCont: '모리셔스의 진한 흑당과 부드러운 우유가 달콤하게 조화를 이루는 라떼.',
                price: '3300'
            },
            {
                menuImg: 'drink23.jpg',
                menuTitle: '흑당 밀크티라떼',
                menuCont: '타바론 얼그레이 홍차의 깊은 맛을 살린 일크티 라떼에 진한 흑당의 달콤함을 채운 음료.',
                price: '3500'
            },
            {
                menuImg: 'drink24.jpg',
                menuTitle: '흑당 버블라떼',
                menuCont: '모리셔스의 진한 흑당과 부드러운 우유가 달콤한 조화에 흑당 버블을 함께 즐기는 라떼.',
                price: '3700'
            },
            {
                menuImg: 'drink25.jpg',
                menuTitle: '아이스초코',
                menuCont: '부드러운 우유에 진한 초코소스가 어우러져 달콤하게 입맛을 깨우는 초콜릿 음료.',
                price: '3500'
            },
            {
                menuImg: 'drink26.jpg',
                menuTitle: '녹차라떼',
                menuCont: '향긋한 녹차에 우유를 더해 입 안에 부드러운 푸릇함을 선물하는 라떼.',
                price: '3500'
            },
            {
                menuImg: 'drink27.jpg',
                menuTitle: '로얄 밀크티라떼',
                menuCont: '우유와 은은한 홍차가 어우러져 부드럽고 향긋한 한 모금을 완성한 라떼.',
                price: '3700'
            },
            {
                menuImg: 'drink28.jpg',
                menuTitle: '녹차프라페',
                menuCont: '향긋한 녹차 위에 우유와 휘핑크림을 더해 더 부드럽게 즐길 수 있는 프라페.',
                price: '3900'
            },
            {
                menuImg: 'drink29.jpg',
                menuTitle: '딸기요거트 스무디',
                menuCont: '요거트의 상큼함과 딸기의 상큼함을 상냥하게 어우른 상큼 스무디.',
                price: '3900'
            },
            {
                menuImg: 'drink30.jpg',
                menuTitle: '딸기퐁크러쉬',
                menuCont: '바삭하고 달달한 퐁에 상큼한 딸기와 부드러운 우유, 얼음을 함께 블렌딩해 시원하게 즐기는 프라페.',
                price: '3900'
            },
            {
                menuImg: 'drink31.jpg',
                menuTitle: '리얼초코프라페',
                menuCont: '진한 초코소스와 부드러운 바닐라향의 만남으로 질리지 않는 달콤함을 완성한 프라페.',
                price: '3900'
            },
            {
                menuImg: 'drink32.jpg',
                menuTitle: '망고요거트 스무디',
                menuCont: '열대과일 망고의 진한 단 맛과 산뜻한 요거트의 하모니가 인상적인 스무디.',
                price: '3900'
            },
            {
                menuImg: 'drink33.jpg',
                menuTitle: '민트프라페',
                menuCont: '상쾌한 민트에 달콤하게 씹는 재미를 더한 초콜릿칩의 즐거운 하모니가 매력적인 프라페.',
                price: '3900'
            },
            {
                menuImg: 'drink34.jpg',
                menuTitle: '바나나퐁크러쉬',
                menuCont: '바삭하고 달달한 퐁에 부드러운 바나나와 우유, 얼음을 함께 블렌딩해 부드럽고 시원하게 즐기는 프라페.',
                price: '3900'
            },
            {
                menuImg: 'drink35.jpg',
                menuTitle: '스트로베리치즈홀릭',
                menuCont: '상큼한 딸기 요거트 스무디 위에 고급스런 맛의 치즈케이크가 듬뿍 올라가 먹는 재미를 배가한 스무디.',
                price: '4500'
            },
            {
                menuImg: 'drink36.jpg',
                menuTitle: '초코허니퐁크러쉬',
                menuCont: '리얼 벌꿀이 들어가 더 달콤한 퍼프허니 시리얼과 부드럽게 달달한 초코가 함께 만드는 즐거운 맛의 프라페.',
                price: '3900'
            }
          ]},
    { 
      tabName : 'Food',
      menuLists : [{
            menuImg : 'food01.jpg',
            menuTitle : '지구별 초코 크레페',
            menuCont : '달콤쫀득한 초코젤라또와 바삭한 쿠키크럼블, 초코칩을 쫄깃한 크레이프에 감싸 만든 달달 시원한 여름시즌 한정 디저트',
            price : '3900'
        },

        {
            menuImg : 'food02.jpg',
            menuTitle : '아이스 허니 와앙 슈',
            menuCont : '꿀을 섞은 크림을 바삭한 쿠키슈 안에 넣어, 건강하고 맛있게 완성한 디저트.',
            price : '2400'
        },
        {
            menuImg : 'food03.jpg',
            menuTitle : '고양이 소다 컵빙수',
            menuCont : '도도한 고양이와 함 날아? 하늘을 나는 고양이를 만나보고 싶다면 시원 달달한 크림소다맛 원신 한정판 컵빙수',
            price : '3500'
        },
        {
            menuImg : 'food04.jpg',
            menuTitle : '노티드 커피크림 도넛',
            menuCont : 'MGC 시그니처 메뉴인 할메가커피를 달콤 쌉싸름한 커피크림 도넛으로 만들어 낸 콜라보레이션 디저트',
            price : '3900'
        },
        {
            menuImg : 'food05.jpg',
            menuTitle : '노티드 우유생크림 도넛',
            menuCont : '부드러운 우유생크림이 가득! 노티드의 시그니처 도넛이 메가MGC커피와 만나 탄생한 콜라보레이션 디저트',
            price : '3900'
        },
        {
            menuImg : 'food06.jpg',
            menuTitle : '버터 마늘 크로크무슈',
            menuCont : '프랑스산 프레지덩 버터로 만든 갈릭베샤멜소스와 햄, 치즈를 샌드하고 바삭한 마늘 크런치를 토핑한 한 끼 든든 샌드위치',
            price : '3900'
        },
        {
            menuImg : 'food07.jpg',
            menuTitle : '핫 치킨&딥치즈 치아바타',
            menuCont : '쫄깃 바삭한 치아바타에 통살 치킨텐더와 감칠맛 가득 매콤한 MGC 비법소스가 어우러진 따끈한 샌드위치',
            price : '4400'
        },
        {
            menuImg : 'food08.jpg',
            menuTitle : '와앙 바닐라 슈크림빵',
            menuCont : '바닐라빈을 넣은 진한 슈크림이 한입가득 와앙- 베어물면 촉촉 달콤한 슈크림빵',
            price : '2700'
        },
        {
            menuImg : 'food09.jpg',
            menuTitle : '버터 소보로 스콘',
            menuCont : '고소한 프랑스산 프레지덩 버터를 듬뿍 넣은 스콘 위에 오돌토돌 달콤한 쿠키 크럼블이 가득 올려진 MGC만의 디저트',
            price : '2400'
        },
        {
            menuImg : 'food10.jpg',
            menuTitle : '버터 에그베이컨 샌드위치',
            menuCont : '부드러운 브리오슈 번에 고소한 풍미가 가득한 프랑스산 프레지덩 버터로 만든 소스와 에그베이컨을 넣은 든든한 모닝 샌드위치',
            price : '3800'
        },
        {
            menuImg : 'food11.jpg',
            menuTitle : '버터 뜯어먹는 식빵',
            menuCont : '고소한 프랑스산 프레지덩 버터를 듬뿍 넣어 만든 뜯어먹는 데니쉬 미니 식빵',
            price : '2900'
        },
        {
            menuImg : 'food12.png',
            menuTitle : '버터소금빵',
            menuCont : '고소한 프랑스산 프레지덩 버터를 듬뿍넣어 더 부드럽고 짭쪼롬하게 즐길 수 있는 베이커리 메뉴',
            price : '3200'
        },
        {
            menuImg : 'food13.jpg',
            menuTitle : '크루아상 & 주에그잼',
            menuCont : '바삭하고 부드러운 식감에 고소한 버터향을 가득 담은 베이커리 메뉴.',
            price : '4900'
        },
        {
            menuImg : 'food14.jpg',
            menuTitle : '초코젤라또크로플',
            menuCont : '따뜻하고 바삭한 크로플 위에 진하고 꾸덕한 초코 젤라또를 올려 만든 매력적인 베이커리 메뉴',
            price : '3500'
        },
        {
            menuImg : 'food15.jpg',
            menuTitle : '아이스 딸기라떼 와앙 슈',
            menuCont : '바삭한 딸기 쿠키슈 안에 부드럽고 향긋한 딸기우유맛 크림이 가득 들어간 아이스 와앙 슈',
            price : '2400'
        },
        {
            menuImg : 'food16.jpg',
            menuTitle : '와앙 피자 보름달빵',
            menuCont : '한끼로도 든든한 중독적인 추억의 와앙 큰 소시지 피자빵',
            price : '3300'
        },
        {
            menuImg : 'food17.jpg',
            menuTitle : '초코스모어쿠키',
            menuCont : '초코칩이 콕콕 박힌 촉촉한 초코 쿠키에 달콤하게 구운 마시멜로우가 만나 더 진한 초코 맛 쿠키.',
            price : '2900'
        },
        {
            menuImg : 'food18.jpg',
            menuTitle : '말차스모어쿠키',
            menuCont : '화이트 초코칩이 가득 박힌 말차 쿠키에 달콤하게 구운 마시멜로우를 얹어 달콤쌉싸름한 매력을 간직한 쿠키.',
            price : '2900'
        },
        {
            menuImg : 'food19.jpg',
            menuTitle : '마카다미아 쿠키',
            menuCont : '고소한 마카다미아를 넣어 만든 메가MGC커피 시그니처 쿠키.',
            price : '2000'
        },
        {
            menuImg : 'food20.jpg',
            menuTitle : '초콜릿칩 쿠키',
            menuCont : '진한 초콜릿칩을 넣어 만든 메가MGC커피 시그니처 쿠키.',
            price : '2000'
        },
        {
            menuImg : 'food21.jpg',
            menuTitle : '플레인크로플',
            menuCont : '버터풍미가 가득한 크루와상의 바삭함과 와플의 부드러움을 합친 겉바속촉 베이커리 메뉴.',
            price : '2500'
        },
        {
            menuImg : 'food22.png',
            menuTitle : '크로크무슈',
            menuCont : '고소한 식빵 사이에 햄과 치즈를 샌드하고, 빵 윗면에 멜팅치즈를 토핑해 든든한 한끼를 선물하는 샌드위치.',
            price : '3800'
        },
        {
            menuImg : 'food23.jpg',
            menuTitle : '몽쉘케이크',
            menuCont : '진하고 폭신한 초콜릿 스펀지 사이에 부드러운 생크림이 듬뿍 들어간 몽쉘 케이크.',
            price : '5300'
        },
        {
            menuImg : 'food24.jpg',
            menuTitle : '햄앤치즈샌드',
            menuCont : '햄과 치즈의 조화로운 한끼를 만끽할 수 있는 샌드위치.',
            price : '3500'
        },
        {
            menuImg : 'food25.jpg',
            menuTitle : '치즈 케익',
            menuCont : '진한 치즈의 맛을 달콤하고 부드럽게 느낄 수 있는 케이크.',
            price : '3500'
        },
        {
            menuImg : 'food26.jpg',
            menuTitle : '초코무스 케익',
            menuCont : '달콤한 초콜릿 본연의 맛을 더 진하게 느낄 수 있는 케이크.',
            price : '3500'
        },
        {
            menuImg : 'food27.jpg',
            menuTitle : '티라미수 케익',
            menuCont : '부드러운 치즈 맛과 코코아의 조화로운 향으로 호불호 없이 즐기는 케이크.',
            price : '3500'
        },
        {
            menuImg : 'food28.jpg',
            menuTitle : '허니브레드',
            menuCont : '바삭하고 쫄깃하게 구워낸 빵에 달콤한 크림을 올려 즐기는 조화로운 베이커리 메뉴.',
            price : '4500'
        },
        {
            menuImg : 'food29.jpg',
            menuTitle : '핫도그',
            menuCont : '부드러운 빵 속에 쫄깃한 소시지를 넣어 알찬 한입을 완성한 베이커리 메뉴.',
            price : '2700'
        },
        {
            menuImg : 'food30.jpg',
            menuTitle : '감자빵',
            menuCont : '쫄깃한 빵 속 포슬포슬한 감자를 가득 담아낸 베이커리 메뉴.',
            price : '3900'
        },
        {
            menuImg : 'food31.jpg',
            menuTitle : '딸기요거트 마카롱',
            menuCont : '딸기요거트 스무디를 연상하게 하는 상큼한 마카롱.',
            price : '2100'
        },
        {
            menuImg : 'food32.jpg',
            menuTitle : '메가초코 마카롱',
            menuCont : '메가MGC커피 시그니처 음료 메가초코를 모티브로 만든 초코맛 마카롱.',
            price : '2100'
        },
        {
            menuImg : 'food33.jpg',
            menuTitle : '유니콘프라페 마카롱',
            menuCont : '메가MGC커피 인기 음료인 유니콘 프라페를 모티브로 만든 매지컬 비주얼 마카롱.',
            price : '2100'
        },
        {
            menuImg : 'food34.jpg',
            menuTitle : '쿠키프라페 마카롱',
            menuCont : '메가MGC커피 인기메뉴인 쿠키프라페를 모티브로 만든 달콤한 마카롱.',
            price : '2100'
        },
        {
          menuImg : 'food35.png',
          menuTitle : '메가프라페 마카롱',
          menuCont : '메가MGC커피 인기메뉴인 메가프라페를 모티브로 만든 달콤한 마카롱.',
          price : '2100'
      }]
      }
    ];


// 전역으로 변경
window.menu = menu;