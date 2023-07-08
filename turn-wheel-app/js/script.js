const $c = document.querySelector("canvas");
const ctx = $c.getContext(`2d`);
const product = ["빨래하기", '설거지', "바닥쓸기", "화장실청소", "바닥닦기", "물끓이기", '빨래개기', "밥하기"];
const colors = ["#DFD3C3", "#F8EDE3", "#DFD3C3", "#F8EDE3 ", "#DFD3C3", "#F8EDE3", "#DFD3C3", "#F8EDE3", "#DFD3C3"];

const newMake = () => {
    const [cw, ch] = [$c.width / 2, $c.height / 2];
    const arc = 2.74 / (product.length / 2.3);
  
    for (let i = 0; i < product.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = colors[i % (colors.length -1)];
      ctx.moveTo(cw, ch);
      ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
      ctx.fill();
      ctx.closePath();
    }

    ctx.fillStyle = "black";
    ctx.font = "30px Pretendard";
    ctx.font = "bold"
    ctx.textAlign = "center";

    for (let i = 0; i < product.length; i++) {
      const angle = (arc * i) + (arc / 2);

      ctx.save()  ;

      ctx.translate(
        cw + Math.cos(angle) * (cw - 65),
        ch + Math.sin(angle) * (ch - 65),
      );

      ctx.rotate(angle + Math.PI / 2);

      product[i].split(" ").forEach((text, j) => {
        ctx.fillText(text, 0, 30 * j);
      });

      ctx.restore();
    }
}

const rotate = () => {
  $c.style.transform = `initial`;
  $c.style.transition = `initial`;
  
  setTimeout(() => {
    const ran = Math.floor(Math.random() * product.length);
    const arc = 360 / product.length;
    const rotate = (ran * arc) + 3600 + (arc * 3) - (arc/4);
    
    $c.style.transform = `rotate(-${rotate}deg)`;
    $c.style.transition = `2s`;
  }, 1);
};

newMake();