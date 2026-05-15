console.log("Website made by SkyFox");
alert("Welcome to our special website!");

// 找到按钮
const nextButton = document.getElementById("The Beginning");

// 点击跳转
nextButton.addEventListener('click', function() {
    window.location.href = 'page2.html';
});