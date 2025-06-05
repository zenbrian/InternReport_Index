// 團隊成員資料（直接在這裡修改）
const teamConfig = {
    teamInfo: {
        name: "資策會實習團隊",
        description: "六位充滿熱忱的實習生，共同學習與成長"
    },
    members: [
        {
            id: 1,
            name: "任柏恩",
            description: "任柏恩是個任",
            image: "images/member1.jpg",
            website: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            id: 2,
            name: "邱子芸", 
            description: "自我介紹",
            image: "images/member2.jpg",
            website: "https://example2.com"
        },
        {
            id: 3,
            name: "胡庭蓁",
            description: "Tung Tung Tung Sahur",
            image: "images/member3.jpg", 
            website: "https://www.youtube.com/watch?v=ejhcSi4W568&list=LL&index=87"
        },
        {
            id: 4,
            name: "林容楷",
            description: "資安所 產發中心 O7",
            image: "images/member4.jpg",
            website: "https://example4.com"
        },
        {
            id: 5,
            name: "林志宇",
            description: "自我介紹",
            image: "images/member5.jpg",
            website: "https://eric9305150515.wixsite.com/1111676"
        },
        {
            id: 6,
            name: "成員姓名 6",
            description: "自我介紹",
            image: "images/member6.jpg",
            website: "https://example6.com"
        }
    ]
};

// 等待頁面載入完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 頁面開始載入...');
    console.log('📋 團隊配置:', teamConfig);
    
    try {
        // 初始化背景漸變動畫
        console.log('🎨 初始化背景動畫...');
        initializeBackgroundGradient();
        
        // 載入團隊成員資料
        console.log('👥 載入團隊成員資料...');
        loadTeamMembers();
        
        // 初始化導航功能
        console.log('🧭 初始化導航功能...');
        initializeNavigation();
        
        console.log('✨ III 實習團隊網站已載入完成！');
        
    } catch (error) {
        console.error('❌ 載入過程發生錯誤:', error);
    }
});

// 初始化導航功能
function initializeNavigation() {
    // 導航欄漢堡選單功能
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // 點擊選單項目時關閉選單
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
    
    // 平滑滾動到指定區塊
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 滾動時導航欄效果
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(37, 99, 235, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(37, 99, 235, 0.1)';
        }
    });
    
    // 導航欄活躍狀態
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                current = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// 初始化背景漸變動畫
function initializeBackgroundGradient() {
    const interactiveGradient = document.getElementById('interactiveGradient');
    const hero = document.querySelector('.hero');
    
    if (!interactiveGradient) {
        console.error('❌ 找不到 interactiveGradient 元素');
        return;
    }
    
    if (!hero) {
        console.error('❌ 找不到 hero 元素');
        return;
    }
    
    console.log('✅ 背景漸變元素找到了');
    
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    
    // 滑鼠移動事件
    const handleMouseMove = (event) => {
        const rect = hero.getBoundingClientRect();
        tgX = event.clientX - rect.left;
        tgY = event.clientY - rect.top;
    };
    
    // 平滑動畫循環
    const animateGradient = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        
        interactiveGradient.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        
        requestAnimationFrame(animateGradient);
    };
    
    // 綁定事件
    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseenter', () => {
        interactiveGradient.style.opacity = '0.7';
    });
    hero.addEventListener('mouseleave', () => {
        interactiveGradient.style.opacity = '0.4';
    });
    
    // 開始動畫
    animateGradient();
    
    // 觸控設備支援
    hero.addEventListener('touchmove', (event) => {
        if (event.touches.length > 0) {
            const rect = hero.getBoundingClientRect();
            tgX = event.touches[0].clientX - rect.left;
            tgY = event.touches[0].clientY - rect.top;
        }
    });
    
    console.log('✅ 背景漸變動畫初始化完成');
}

// 載入團隊成員資料
function loadTeamMembers() {
    try {
        console.log('📊 更新團隊資訊...');
        renderTeamInfo(teamConfig.teamInfo);
        
        console.log('🎴 生成團隊卡片...');
        generateTeamCards(teamConfig.members);
        
        console.log('🎪 初始化3D效果...');
        initialize3DCards();
        
        console.log('✅ 團隊成員載入完成');
    } catch (error) {
        console.error('❌ 載入團隊成員時發生錯誤:', error);
    }
}

// 渲染團隊資訊（修正函數名稱避免衝突）
function renderTeamInfo(teamInfo) {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    console.log('🔍 查找標題元素:', { heroTitle, heroSubtitle });
    
    if (heroTitle && teamInfo.name) {
        heroTitle.textContent = teamInfo.name;
        console.log('✅ 更新標題:', teamInfo.name);
    }
    
    if (heroSubtitle && teamInfo.description) {
        heroSubtitle.textContent = teamInfo.description;
        console.log('✅ 更新副標題:', teamInfo.description);
    }
}

// 生成團隊成員卡片
function generateTeamCards(members) {
    const teamGrid = document.getElementById('teamGrid');
    
    if (!teamGrid) {
        console.error('❌ 找不到 teamGrid 元素');
        return;
    }
    
    console.log('✅ 找到 teamGrid 元素');
    console.log('📋 成員資料:', members);
    
    teamGrid.innerHTML = '';
    
    members.forEach((member, index) => {
        console.log(`🎴 建立第 ${index + 1} 位成員卡片:`, member.name);
        
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        
        const teamMember = document.createElement('div');
        teamMember.className = 'team-member';
        teamMember.setAttribute('data-member', member.id);
        
        teamMember.innerHTML = `
            <div class="card-body">
                <div class="member-card">
                    <div class="member-image">
                        <img src="${member.image}" alt="${member.name}" onerror="this.src='images/default-avatar.png'">
                    </div>
                    <h3 class="member-name">${member.name}</h3>
                    <p class="member-description">${member.description}</p>
                    <a href="${member.website}" class="member-website" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-globe"></i>
                        個人網站
                    </a>
                </div>
            </div>
        `;
        
        cardContainer.appendChild(teamMember);
        teamGrid.appendChild(cardContainer);
    });
    
    console.log(`✅ 成功建立 ${members.length} 位成員的卡片`);
}

// 初始化3D卡片效果
function initialize3DCards() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    console.log(`🎪 找到 ${teamMembers.length} 個成員卡片，開始初始化3D效果`);
    
    teamMembers.forEach((member, index) => {
        let isMouseEntered = false;
        
        // 滑鼠移動事件
        const handleMouseMove = (e) => {
            if (!isMouseEntered) return;
            
            const rect = member.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / 25;
            const y = (e.clientY - rect.top - rect.height / 2) / 25;
            
            member.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        };
        
        // 滑鼠進入事件
        const handleMouseEnter = (e) => {
            isMouseEntered = true;
            member.style.transition = 'none';
        };
        
        // 滑鼠離開事件
        const handleMouseLeave = (e) => {
            isMouseEntered = false;
            member.style.transition = 'all 200ms ease-linear';
            member.style.transform = 'rotateY(0deg) rotateX(0deg)';
        };
        
        // 綁定事件
        member.addEventListener('mouseenter', handleMouseEnter);
        member.addEventListener('mousemove', handleMouseMove);
        member.addEventListener('mouseleave', handleMouseLeave);
        
        // 觸控裝置支援
        member.addEventListener('touchstart', handleMouseEnter);
        member.addEventListener('touchend', handleMouseLeave);
        
        console.log(`✅ 成員 ${index + 1} 的3D效果已初始化`);
    });
    
    // 添加滾動動畫
    observeElements();
}

// 滾動動畫觀察器
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const animateElements = document.querySelectorAll('.card-container');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    console.log(`🎬 滾動動畫已套用到 ${animateElements.length} 個元素`);
}

// 創建預設頭像
function createDefaultAvatar() {
    try {
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 300;
        const ctx = canvas.getContext('2d');
        
        // 創建藍色系漸變背景
        const gradient = ctx.createLinearGradient(0, 0, 300, 300);
        gradient.addColorStop(0, '#2563eb');
        gradient.addColorStop(1, '#1d4ed8');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 300, 300);
        
        // 繪製人像圖標
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        
        // 頭部
        ctx.beginPath();
        ctx.arc(150, 100, 40, 0, Math.PI * 2);
        ctx.fill();
        
        // 身體
        ctx.beginPath();
        ctx.arc(150, 200, 60, 0, Math.PI, true);
        ctx.fill();
        
        // 轉換為圖片
        canvas.toBlob(function(blob) {
            const url = URL.createObjectURL(blob);
            
            // 為所有失效的圖片設置預設頭像
            const images = document.querySelectorAll('.member-image img');
            images.forEach(img => {
                img.addEventListener('error', function() {
                    if (this.src !== url) {
                        this.src = url;
                    }
                });
            });
            
            console.log('✅ 預設頭像已建立');
        });
    } catch (error) {
        console.error('❌ 建立預設頭像時發生錯誤:', error);
    }
}

// 全局函數：快速更新成員資訊
window.updateMember = function(memberId, newInfo) {
    const memberIndex = teamConfig.members.findIndex(m => m.id === memberId);
    if (memberIndex !== -1) {
        teamConfig.members[memberIndex] = { ...teamConfig.members[memberIndex], ...newInfo };
        loadTeamMembers(); // 重新載入
        console.log(`✅ 成員 ${memberId} 已更新`);
    } else {
        console.error(`❌ 找不到ID為 ${memberId} 的成員`);
    }
};

// 全局函數：批量更新所有成員
window.updateAllMembers = function(newMembers) {
    if (Array.isArray(newMembers) && newMembers.length === 6) {
        teamConfig.members = newMembers;
        loadTeamMembers();
        console.log('✅ 所有成員已更新');
    } else {
        console.error('❌ 請提供包含6位成員的陣列');
    }
};

// 全局函數：更新團隊基本資訊（重新命名避免衝突）
window.updateTeamBasicInfo = function(newTeamInfo) {
    teamConfig.teamInfo = { ...teamConfig.teamInfo, ...newTeamInfo };
    renderTeamInfo(teamConfig.teamInfo);
    console.log('✅ 團隊資訊已更新');
};

// 調試用：在控制台輸出當前配置
window.showCurrentConfig = function() {
    console.log('當前團隊配置:', teamConfig);
    return teamConfig;
};

// 調試用：重新載入成員
window.reloadMembers = function() {
    console.log('🔄 重新載入成員...');
    loadTeamMembers();
};

// 初始化預設頭像
createDefaultAvatar();