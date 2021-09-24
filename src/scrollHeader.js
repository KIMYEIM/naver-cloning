export default function Header() {
  const $header = document.querySelector('.header');

  // 스크롤 감지 헤더
  const toggleHeader = (curScroll) => {
    curScroll = window.scrollY;
    if (curScroll > 200) {
      $header.style.top = '0';
    } else {
      $header.style.top = '-120px';
    }
  };

  window.addEventListener('scroll', toggleHeader);
}
