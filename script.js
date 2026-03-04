document.addEventListener('DOMContentLoaded', function() {
  const droneDiv = document.querySelector('.drone-preview');
  const btnUp = document.getElementById('btnUp');
  const btnDown = document.getElementById('btnDown');
  const btnLeft = document.getElementById('btnLeft');
  const btnRight = document.getElementById('btnRight');

  let translateY = 0;
  let translateX = 0;

  function updateDronePosition() {
    if (droneDiv) {
      droneDiv.style.transform = `translate(${translateX}px, ${translateY}px)`;
      droneDiv.style.transition = 'transform 0.2s ease';
    }
  }

  if (btnUp) {
    btnUp.addEventListener('click', () => {
      translateY -= 5;
      updateDronePosition();
      console.log('无人机上升 ↑');
    });
  }
  if (btnDown) {
    btnDown.addEventListener('click', () => {
      translateY += 5;
      updateDronePosition();
      console.log('无人机下降 ↓');
    });
  }
  if (btnLeft) {
    btnLeft.addEventListener('click', () => {
      translateX -= 5;
      updateDronePosition();
      console.log('无人机向左 ←');
    });
  }
  if (btnRight) {
    btnRight.addEventListener('click', () => {
      translateX += 5;
      updateDronePosition();
      console.log('无人机向右 →');
    });
  }

  if (droneDiv) {
    droneDiv.addEventListener('dblclick', function() {
      translateX = 0;
      translateY = 0;
      updateDronePosition();
    });
  }

  const plotGrid = document.getElementById('plotGrid');
  
  const plotsData = [
    { name: 'A1 上海青', price: 299, occupied: false },
    { name: 'B2 黄瓜', price: 299, occupied: true },
    { name: 'C3 小白菜', price: 149, occupied: false },
    { name: 'D4 苋菜', price: 199, occupied: false },
    { name: 'E5 生菜', price: 99, occupied: true },
    { name: 'F6 空心菜', price: 179, occupied: false },
    { name: 'G7 油麦菜', price: 159, occupied: false },
    { name: 'H8 羽衣甘蓝', price: 329, occupied: true }
  ];

  if (plotGrid) {
    plotGrid.innerHTML = '';

    plotsData.forEach(plot => {
      const plotDiv = document.createElement('div');
      plotDiv.className = `plot ${plot.occupied ? 'occupied' : ''}`;
      
      const statusSpan = document.createElement('span');
      statusSpan.className = 'status';
      statusSpan.textContent = plot.occupied ? '已认养' : '空闲';
      
      plotDiv.appendChild(statusSpan);
      plotDiv.appendChild(document.createTextNode(` ${plot.name} ¥${plot.price}`));
      
      if (!plot.occupied) {
        plotDiv.addEventListener('click', () => {
          alert(`您点击了空闲地块 ${plot.name}，价格 ¥${plot.price}。\n(演示：跳转认养流程页)`);
        });
      } else {
        plotDiv.addEventListener('click', (e) => {
          e.stopPropagation();
          alert('该地块已被认养，请选择其他空闲地块。');
        });
      }
      
      plotGrid.appendChild(plotDiv);
    });
  }

  const adoptNowBtn = document.getElementById('adoptNowBtn');
  if (adoptNowBtn) {
    adoptNowBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('跳转至地块选择页面 (模拟)');
    });
  }

  const viewAllPlots = document.getElementById('viewAllPlots');
  if (viewAllPlots) {
    viewAllPlots.addEventListener('click', (e) => {
      e.preventDefault();
      alert('查看全部地块列表 (模拟)');
    });
  }

  document.querySelectorAll('.nav-links .btn, .nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.textContent.includes('登录') || link.textContent.includes('注册')) {
        e.preventDefault();
        alert(`演示：${link.textContent.trim()} 功能`);
      }
    });
  });
});