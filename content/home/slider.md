---
widget: blank          
headless: true
active: true
weight: 5
title: ""
---

<section class="slider" aria-label="이미지 슬라이더">
  <div class="slider-track">
    <div class="slide is-active">
      <img src="/media/slide-1.jpg" alt="AI Game Development" />
      <div class="caption">
        <h3>AI Game Development</h3>
        <a href="/project/game/" class="btn">보러가기</a>
      </div>
    </div>

    <div class="slide">
      <img src="/media/slide-2.jpg" alt="AI Image Generation" />
      <div class="caption">
        <h3>AI Image Generation</h3>
        <a href="/project/generation/" class="btn">보러가기</a>
      </div>
    </div>

    <div class="slide">
      <img src="/media/slide-3.jpg" alt="Fake Review Detection" />
      <div class="caption">
        <h3>Fake Review Detection</h3>
        <a href="/project/review/" class="btn">보러가기</a>
      </div>
    </div>
  </div>

  <button class="nav prev" aria-label="이전">❮</button>
  <button class="nav next" aria-label="다음">❯</button>

  <div class="dots">
    <button class="dot is-active" aria-label="1번 슬라이드"></button>
    <button class="dot" aria-label="2번 슬라이드"></button>
    <button class="dot" aria-label="3번 슬라이드"></button>
  </div>
</section>

<style>
  .slider{position:relative;max-width:1000px;margin:2rem auto;overflow:hidden;border-radius:16px}
  .slider-track{display:flex;transition:transform .5s ease}
  .slide{min-width:100%;position:relative}
  .slide img{width:100%;height:420px;object-fit:cover}
  .caption{position:absolute;left:20px;bottom:20px;background:rgba(0,0,0,.5);padding:10px 20px;border-radius:8px;color:white}
  .btn{display:inline-block;margin-top:6px;background:#4ea1f3;color:white;padding:6px 12px;border-radius:4px;text-decoration:none;font-size:.9rem}
  .btn:hover{background:#1f78d1}
  .nav{position:absolute;top:50%;transform:translateY(-50%);background:rgba(0,0,0,.4);color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer}
  .nav:hover{background:rgba(0,0,0,.6)}
  .nav.prev{left:10px}.nav.next{right:10px}
  .dots{position:absolute;left:50%;bottom:12px;transform:translateX(-50%);display:flex;gap:.4rem}
  .dot{width:10px;height:10px;border-radius:50%;background:#ccc;border:none;cursor:pointer}
  .dot.is-active{background:#fff}
  @media (max-width:640px){.slide img{height:260px}}
</style>

<script>
(function(){
  const slider = document.querySelector('.slider');
  const track = slider.querySelector('.slider-track');
  const slides = slider.querySelectorAll('.slide');
  const dots = slider.querySelectorAll('.dot');
  let index = 0;
  const total = slides.length;
  const interval = 3000;
  let timer;

  function showSlide(i){
    index = (i + total) % total;
    track.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach((d,j)=>d.classList.toggle('is-active', j===index));
  }
  function next(){ showSlide(index + 1); }
  function prev(){ showSlide(index - 1); }

  slider.querySelector('.next').addEventListener('click', next);
  slider.querySelector('.prev').addEventListener('click', prev);
  dots.forEach((d,i)=>d.addEventListener('click', ()=>showSlide(i)));

  function start(){ timer=setInterval(next, interval); }
  function stop(){ clearInterval(timer); }
  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);

  showSlide(0); start();
})();
</script>
