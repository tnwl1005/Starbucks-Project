// *Seacrh 버튼 클릭 시, 실행되는 이벤트*
 
 const searchEl = document.querySelector('.search');
 const searchInputEl = searchEl.querySelector('input');

 searchEl.addEventListener('click',function() {
    searchInputEl.focus();
 });

//  focus가 됬을 때 통합검색이 표시 -포커스가 됬을때 클래스가 추가
 searchInputEl.addEventListener('focus',function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
 });
// focus가 해제되었을 때 클래스가 없어짐 
 searchInputEl.addEventListener('blur',function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
 });

