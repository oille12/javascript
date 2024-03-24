var 배열 = [6, 3, 40, 7, 2]

//// sort함수 : 정렬
배열.sort() // 정렬완료 (문자열 기준, 즉 앞자리 기준으로 정렬됨)
console.log(배열)   // 2, 3, 40, 6, 7

// 숫자 정렬
// a,b 비교해서 - 해서 음수면 a,b로 정렬, 양수면 b,a로 정렬
// 리턴값이 - 면 a를 앞에 두고, +면 b를 앞에 둔다.
배열.sort((a,b)=> a-b)
console.log(배열)   // 2, 3, 6, 7, 40

// 문자열 정렬 (알파벳순)
배열 = ['qwer12', 'qwer34', 'zxcv', 'pl']
배열.sort()
console.log(배열)

배열 = ['한글34', '한글12', '가나다라마', '안녕하세요']
배열.sort()
console.log(배열)

객체배열 = [
    {'id':0, 'name':'홍길동'},
    {'id':2, 'name':'유관순'},
    {'id':1, 'name':'김유신'}
]

// 객체 정렬
객체배열.sort((a,b)=> {
    // 해당 지역의 언어순으로 정렬 localeCompare
    return a['name'].localeCompare(b['name'])
})
console.log(객체배열)


//// filter : 내가 원하는 값만 남김 (return값에 해당하는 요소만 남김)
// 아이디가 2 이상인 객체만 남기겠다면
var 새정렬 = 객체배열.filter((e)=> {
    return e['id'] >= 2
})

console.log(새정렬)


//// map : 일괄 변경 (배열 안의 모든 요소를 return값으로 변경)
var 달러 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var 원화 = 달러.map(e=> {
    return e * 1344.60
})
console.log(달러)
console.log(원화)

// 소수점 자리 정리
var 원화 = 달러.map(e=> {
    return parseFloat((e * 1344.60).toFixed(2))
})
console.log(달러)
console.log(원화)


//// forEach : 배열의 각 요소를 분리해주는 배열전용 반복문
//  길이 계산을 자동으로 for(let i=0; i<달러.length; i++){}
달러.forEach((e)=>{
    console.log(e)  // 안에 있는 요소를 하나씩 돌아가면서 반복문 사용
})
