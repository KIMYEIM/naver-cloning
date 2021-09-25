export default function Grid() {
  const $grid = document.querySelector('.grid');
  const $grid1 = $grid.querySelector('.subgrid__one');
  const $grid2 = $grid.querySelector('.subgrid__two');
  const $grid3 = $grid.querySelector('.subgrid__three');

  const $weather = $grid.querySelector('.weather');
  const $now = $grid.querySelector('.now');
  const $money = $grid.querySelector('.money');
  const $app = $grid.querySelector('.app');
  const $stock = $grid.querySelector('.stock');
  const $webtoon = $grid.querySelector('.webtoon');
  const $card1 = $grid.querySelector('.card--one');
  const $card2 = $grid.querySelector('.card--two');
  const $today = $grid.querySelector('.today');
  const $hr = $grid.querySelector('hr');

  const $flexStyle = {
    display: 'flex',
    gap: '17px'
  };


  const controllGrid = (e) => {
    let width = window.innerWidth;
    console.log(width);

    if (width < 627) {
      // $grid1.style.display = 'flex';
      $grid1.style.display = 'flex';
      $grid2.style.display = 'none';
      $grid3.style.display = 'none';

      $grid1.append($weather, $now, $money, $stock, $app, $webtoon, $hr, $today);

    } else if (width < 1095) {
      $grid1.style.display = 'flex';
      $grid2.style.display = 'flex';
      $grid3.style.display = 'none';

      $grid1.innerHTML = '';
      $grid2.innerHTML = '';
      $grid1.append($weather, $money, $stock, $card1, $card2);
      $grid2.append($now, $app, $webtoon);

    } else {
      $grid1.style.display = 'flex';
      $grid2.style.display = 'flex';
      $grid3.style.display = 'flex';

      $grid1.innerHTML = '';
      $grid2.innerHTML = '';
      $grid3.innerHTML = '';
      $grid1.append($weather, $app, $webtoon);
      $grid2.append($now, $card2);
      $grid3.append($money, $stock, $card1);
    }


  }

  window.addEventListener('load', controllGrid);
  window.addEventListener('resize', controllGrid);
}