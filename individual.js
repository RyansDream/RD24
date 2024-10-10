document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuClose = document.querySelector('.menu-close');
    const submenuToggles = document.querySelectorAll('.nav-menu .has-submenu > a');

    // 사이드 네비게이션 메뉴           
        // Toggle main menu
        menuToggle.addEventListener('click', () => {
            navMenu.classList.add('active');
        });

        // Close the menu
        menuClose.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });

        // Toggle submenu
        submenuToggles.forEach(toggle => {
            toggle.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                const parentLi = toggle.parentElement;
                parentLi.classList.toggle('active');
            });
        });
    

    // 댓글기능
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentsDiv = document.querySelector('.comments');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText === "") return;

        const date = new Date().toLocaleString();

        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `
            <p>${commentText}</p>
            <span class="date">${date}</span>
        `;

        commentsDiv.insertBefore(commentDiv, commentsDiv.firstChild);
        commentInput.value = ""; // 입력 창 비우기
    });
});