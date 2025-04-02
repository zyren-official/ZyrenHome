// DOM elementlarini olish
const navMenu = document.getElementById('nav-menu');
const links = document.querySelectorAll('nav a, .btn');
const pages = document.querySelectorAll('.page');

// 1. Mobil menyuni ochish/yopish
function toggleMenu() {
    navMenu.classList.toggle('open');
}

// 2. Sahifani ko‘rsatish
function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === pageId) {
            page.classList.add('active');
        }
    });
    navMenu.classList.remove('open');
}

// 3. Qora mavzuga o‘tish
function toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
}

// 4. Tugma bosilishini kuzatish
function trackButtonClick(buttonName) {
    console.log(`${buttonName} button clicked!`);
}

// 5. Ijtimoiy tarmoq bosilishini kuzatish
function trackSocialClick(platform) {
    console.log(`Clicked on ${platform} link!`);
}

// 6. Kartani ajratib ko‘rsatish
function highlightCard(card) {
    card.classList.add('highlighted');
}

// 7. Kartani asl holatiga qaytarish
function resetCard(card) {
    card.classList.remove('highlighted');
}

// 8. Xizmatni kengaytirish
function expandService(item) {
    item.classList.toggle('expanded');
}

// 9. Forma yuborish
function submitForm(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    event.target.reset();
}

// 10. Inputni tekshirish
function validateInput(input) {
    if (input.value.length > 0) {
        input.style.borderColor = '#34495e';
    } else {
        input.style.borderColor = '#ddd';
    }
}

// 11. Matn uzunligini hisoblash
function countCharacters(textarea) {
    const count = textarea.value.length;
    document.getElementById('char-count').textContent = `${count}/500`;
}

// 12. Sahifani yangilash
function refreshPage() {
    location.reload();
}

// 13. Sahifa yuqoriga siljishini tekshirish
function checkScroll() {
    if (window.scrollY > 100) {
        document.querySelector('header').style.background = '#2c3e50';
    } else {
        document.querySelector('header').style.background = 'linear-gradient(135deg, #34495e, #2c3e50)';
    }
}

// 14. Tasodifiy xabar ko‘rsatish
function showRandomMessage() {
    const messages = ['Welcome!', 'Stay tuned!', 'Innovate today!'];
    alert(messages[Math.floor(Math.random() * messages.length)]);
}

// 15. Tugma rangini o‘zgartirish
function changeButtonColor() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
    });
}

// 16. Sahifani yashirish/ko‘rsatish
function togglePageVisibility(pageId) {
    const page = document.getElementById(pageId);
    page.style.display = page.style.display === 'none' ? 'block' : 'none';
}

// 17. Font o‘lchamini oshirish
function increaseFontSize() {
    document.body.style.fontSize = `${parseInt(getComputedStyle(document.body).fontSize) + 2}px`;
}

// 18. Xizmatlarni filtr qilish
function toggleServiceFilter() {
    const services = document.querySelectorAll('.service-item');
    services.forEach(service => {
        service.style.display = service.style.display === 'none' ? 'block' : 'none';
    });
}

// 19. Sozlamani faollashtirish
function toggleSetting(item) {
    item.classList.toggle('active');
}

// 20. Footer yashirish/ko‘rsatish
function toggleFooterVisibility() {
    const footer = document.querySelector('footer');
    footer.style.display = footer.style.display === 'none' ? 'block' : 'none';
}

// 21. Sahifa sarlavhasini o‘zgartirish
function changePageTitle() {
    document.title = `Zyren - ${new Date().toLocaleTimeString()}`;
}

// 22. Elementlarni silkitish
function shakeElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 500);
}

// 23. Sahifani sekin yuklash effekti
function slowLoadPage(pageId) {
    const page = document.getElementById(pageId);
    page.style.opacity = '0';
    setTimeout(() => page.style.opacity = '1', 1000);
}

// 24. Tugmalarni yashirish
function hideButtons() {
    document.querySelectorAll('.btn').forEach(btn => btn.style.display = 'none');
}

// 25. Tugmalarni ko‘rsatish
function showButtons() {
    document.querySelectorAll('.btn').forEach(btn => btn.style.display = 'inline-block');
}

// 26. Sahifa fonini gradient qilish
function setGradientBackground() {
    document.body.style.background = 'linear-gradient(135deg, #34495e, #3498db)';
}

// 27. Elementni ko‘chirish
function moveElement(elementId, x, y) {
    const element = document.getElementById(elementId);
    element.style.transform = `translate(${x}px, ${y}px)`;
}

// 28. Sahifa matnini o‘zgartirish
function changePageText(pageId, newText) {
    const page = document.getElementById(pageId);
    page.querySelector('p').textContent = newText;
}

// 29. Sahifa rangini o‘zgartirish
function changePageColor(pageId, color) {
    const page = document.getElementById(pageId);
    page.style.backgroundColor = color;
}

// 30. Elementni aylantirish
function rotateElement(elementId, degrees) {
    const element = document.getElementById(elementId);
    element.style.transform = `rotate(${degrees}deg)`;
}

// 31. Sozlamalarni saqlash
function saveSettings() {
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDark);
    alert('Settings saved!');
}

// 32. Animatsiyalarni o‘chirish/yoqish
function toggleAnimations() {
    document.body.classList.toggle('no-animations');
}

// 33. Formani tozalash
function clearForm() {
    document.querySelector('.contact-form').reset();
    document.getElementById('char-count').textContent = '0/500';
}

// 34. Sozlamalarni tiklash
function resetSettings() {
    document.body.classList.remove('dark-theme');
    document.body.style.fontSize = '16px';
    localStorage.clear();
    alert('Settings reset!');
}

// 35. Sahifani kengaytirish
function expandPage(pageId) {
    const page = document.getElementById(pageId);
    page.style.padding = '150px 20px';
}

// 36. Elementni ko‘zga ko‘rinmas qilish
function fadeElement(elementId) {
    const element = document.getElementById(elementId);
    element.style.opacity = '0.5';
}

// 37. Elementni qayta ko‘rsatish
function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.style.opacity = '1';
}

// 38. Navigatsiya rangini o‘zgartirish
function changeNavColor(color) {
    document.querySelectorAll('nav').forEach(nav => {
        nav.style.background = color;
    });
}

// 39. Sahifa chegarasini qo‘shish
function addPageBorder(pageId) {
    const page = document.getElementById(pageId);
    page.style.border = '2px solid #34495e';
}

// 40. Tugma matnini o‘zgartirish
function changeButtonText(buttonClass, newText) {
    document.querySelectorAll(`.${buttonClass}`).forEach(btn => {
        btn.textContent = newText;
    });
}

// Har bir link uchun click hodisasi
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        if (pageId) {
            showPage(pageId);
        }
    });
});

// Qo‘shimcha hodisalar
window.addEventListener('scroll', checkScroll);
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
    if (localStorage.getItem('darkTheme') === 'true') toggleDarkTheme();
});