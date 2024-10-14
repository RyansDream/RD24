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
        
    
    
    //타이머
    
    let timer; // 타이머 변수 선언

    function startTimer() {
      const eventTime = new Date('2024-12-31T00:00:00+09:00'); // 타이머 종료 시간 설정
      timer = setInterval(function() { // 일정 시간마다 함수 실행
        let now = new Date(); // 현재 시간
        let timeLeft = eventTime - now; // 남은 시간 계산

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // 남은 일수
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 남은 시간
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); // 남은 분
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); // 남은 초

        // 각 타이머 부분에 남은 시간 표시
        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

        if (timeLeft < 0) { // 시간이 다 되면 타이머 종료
          clearInterval(timer);
          document.getElementById('days').textContent = '00';
          document.getElementById('hours').textContent = '00';
          document.getElementById('minutes').textContent = '00';
          document.getElementById('seconds').textContent = '00';
        }
      }, 1000);
    }

    window.onload = startTimer; // 페이지가 로드될 때 타이머 시작

    
    setInterval(() => {
    const daysElement = document.getElementById('days');
    daysElement.style.visibility = (daysElement.style.visibility === 'hidden') ? 'visible' : 'hidden';
}, 1000);
    
    
    // 지킬 수 있다 없다 기능
    
    let likeCount = 0;
    let dislikeCount = 0;

    function updateCount(type) {
        if (type === 'like') {
            likeCount++;
            document.getElementById('likeCount').textContent = likeCount;
        } else if (type === 'dislike') {
            dislikeCount++;
            document.getElementById('dislikeCount').textContent = dislikeCount;
        }
    }

    
    
    
    // 댓글기능
    
    const commentInput = document.querySelector(".comment-input");
    const submitButton = document.querySelector(".submit-button");
    const commentList = document.querySelector(".comment-list");

    // 6자리 랜덤 숫자 생성 함수
    function generateRandomId() {
        return Math.floor(100000 + Math.random() * 900000); // 100000~999999 사이의 숫자 생성
    }

    // 현재 시간을 "YYYY-MM-DD HH:MM:SS" 형식으로 반환하는 함수
    function getCurrentTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    // 댓글 제출 버튼 기능
    submitButton.addEventListener("click", function() {
        const commentText = commentInput.value.trim();
        
        if (commentText) {
            // 새로운 아이디 생성 ("개돼지" + 6자리 랜덤 숫자)
            const randomId = `개돼지${generateRandomId()}`;
            const currentTime = getCurrentTime(); // 현재 시간 가져오기

            // 새로운 댓글 요소 생성
            const commentItem = document.createElement("div");
            commentItem.classList.add("comment-item");
            commentItem.innerHTML = `
                <div><span class="comment-username">${randomId}</span> <span class="comment-time">${currentTime}</span></div>
                <div class="comment-text">${commentText}</div>
            `;
            
            // 새로운 댓글을 리스트의 가장 위에 추가
            commentList.insertBefore(commentItem, commentList.firstChild);
            
            // 댓글 입력창 초기화
            commentInput.value = ""; 
        } else {
            alert("댓글을 입력해주세요.");
        }
    });




});
    