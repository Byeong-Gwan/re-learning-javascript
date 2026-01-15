// 1. 데이터 가공 및 중복 방어 로직
async function fetchAndFilterData(nextPage, existingItems) {
    try {
        const response = await fetch(`/api/posts?page=${nextPage}`);
        const { data } = await response.json();

        const uniqueNewItems = data.filter(newItem => 
            !existingItems.some(existngItem => existngItem.id === newItem.id)
        );

        return [...existingItems, ...uniqueNewItems];
    } catch (error) {
        console.error("데이터 로드 실패: ", error);
        return existingItems;
    }
}

/**
 * 질문 
 * 1. data.filter 와 existingItems.some 이 결합된 부분은 무슨 목적으로 작성된 코드일까요?
 * 2. 마지막에 [..existingItems, ...uniqueNewItems] 를 반환하는 이유는 무엇인가요?
 * 3. 만약 서버에서 에러가 나면 (catch), 이 함수는 최종적으로 어떤 값을 내뱉게 되나요?
 * 
 * 내 답변:
 *  fetchAndFilterData 함수명을 봤을때 요청 응답 받은 데이터로 필터링하는 함수
 *  매개변수로 두 개를 받고 있으며, try - catch문으로 예외처리 
 *  response 변수에 /api/posts?page=${nextPage}를 통해 로드하는 동안 대기 상태
 *  가져온 data 객체를 json로 변환 후 저장
 *  uniqueNewItems 고유한 새항목 값 저장
 *  existingItems 기존 값에서 id 값이 같은 것들만 추출해 묶음 그 이 외의 값들은 uniqueNewItems로 전달
 *  uniqueNewItems와 existingItems를 합치면서 return
 * 
 * 수정:
 *  1. filter 와 some 부분 
 *  - 실제 동작: 기존에 이미 있는 데이터는 버리고, 새로 들어온 데이터 중에 중복되지 않은 것만 골라냄
 *  - existingItems.some(...): 기존 목록에 지금 들어온 newItem.id 랑 똑같은 게 하나라도 있는지 확인
 *  - !: 없다.
 *  - 결론: 무한 스크롤을 하다 보면 서버 응답이 꼬여서 이미 보여준 데이터가 또 올 수 있는데, 그걸 중복으로
 *    화면에 안 그리게 방어 하는 로직
 * 
 *  2. [...existingItems, ...uniqueNewItems]
 *  - 실제 동작: 원래 있던 데이터 뒤에, 중복 제거된 새 데이터를 딱 붙여서 하나의 큰 리스트로 만듦
 *  - 문한 스크롤은 스크롤을 내릴수록 리스트가 길어져야 함, 그래서 기존 거(...existingItems) + 
 *    새 값(...uniqueNewItems)를 합치면서 return
 * 
 *  3. catch (에러 발생 시) 부분
 *  - 실제 동작: 에러가 나도 화면이 멈추지 않게, 기존 데이터(existingItems)를 리턴
 *  - 이 부분이 핵심 에러가 났다고 빈 화면을 보여주는 게 아니라, 그전까지 불러온 데이터라도 유지하겠다 라는
 *    의도가 담긴 방어 코드
 * 
 * 중요한 부분
 *  - filter: 조건에 맞는 놈들만 걸러내기
 *  - some: 조건에 맞는 놈이 하나라도 있는지 확인 (T/F)
 *  - map: 데이터 모양을 하나씩 바꾸기
 */
/**
 * 1. filter: 조건에 안 맞는 놈들 다 나가! (결과: 배열)
 * 2. map: 너네 다 이 옷(모양)으로 갈아입어! (결과: 같은 길이의 배열)
 * 3. some: 야, 여기 범인(조건) 한 명이라도 있어?? (결과: true/ false)
 * 4. every: 여기 다 착한 애들(조건)이야? (결과: true/ false)
 * 5. reduce: 너네 다 합쳐서 하나로 뭉쳐! (결과: 값 하나)
 */