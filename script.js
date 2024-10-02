<div class="rain"></div>

<script>
    const rain = document.querySelector('.rain');
    const dropsCount = 100;

    for (let i = 0; i < dropsCount; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop');
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.animationDuration = Math.random() * 1 + 0.5 + 's';
        drop.style.opacity = Math.random();
        rain.appendChild(drop);
    }
</script>
