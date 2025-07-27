// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});

// 截图滑动
const screenshotContainer = document.querySelector('.screenshot-container');
if (screenshotContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    screenshotContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - screenshotContainer.offsetLeft;
        scrollLeft = screenshotContainer.scrollLeft;
    });

    screenshotContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });

    screenshotContainer.addEventListener('mouseup', () => {
        isDown = false;
    });

    screenshotContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - screenshotContainer.offsetLeft;
        const walk = (x - startX) * 2;
        screenshotContainer.scrollLeft = scrollLeft - walk;
    });
}

// 动画效果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 应用动画到功能卡片
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// 应用动画到截图
document.querySelectorAll('.screenshot').forEach((screenshot, index) => {
    screenshot.style.opacity = '0';
    screenshot.style.transform = 'translateY(20px)';
    screenshot.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(screenshot);
});