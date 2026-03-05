
// window.alert('plaese open this page on larg screen');

let project=
document.getElementById('project')
project.addEventListener("click", function(){
    project.classList.toggle("fullscreen");
});

// اختيار كل العناصر
const checkboxes = document.querySelectorAll('.course-check');
const progressBar = document.getElementById('progressBar');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // 1. حساب عدد الكورسات المختارة
        const checkedCount = document.querySelectorAll('.course-check:checked').length;
        
        // 2. حساب النسبة المئوية
        const total = checkboxes.length;
        const percentage = (checkedCount / total) * 100;
        
        // 3. تحديث عرض الشريط
        progressBar.style.width = percentage + '%';
    });
});

let num1 = 5;
let num2 = 4;
console.log(num1 + num2)









 