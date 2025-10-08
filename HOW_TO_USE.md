# 🎨 2025 Government Shutdown 인포그래픽 웹사이트 사용 가이드

## 📋 완성된 파일 구조

```
2025 Government Shutdown/
├── index.html                              # 메인 웹페이지
├── css/
│   └── styles.css                          # 스타일시트
├── js/
│   └── script.js                           # JavaScript (애니메이션, 차트)
├── assets/
│   └── images/
│       └── README.md                       # 이미지 가이드
├── CLAUDE.md                               # Claude Code 가이드
├── HOW_TO_USE.md                          # 이 파일
└── 분석 문서들...
```

## 🚀 웹사이트 실행 방법

### 방법 1: 브라우저에서 직접 열기 (가장 간단)
1. `index.html` 파일을 더블클릭
2. 기본 브라우저에서 자동으로 열림
3. ✅ 완료!

### 방법 2: 로컬 서버 실행 (권장)
일부 브라우저는 로컬 파일의 외부 리소스 로딩을 제한할 수 있어 로컬 서버 사용을 권장합니다.

#### Python이 설치되어 있는 경우:
```bash
# 현재 폴더에서 실행
python -m http.server 8000

# 또는 Python 2
python -m SimpleHTTPServer 8000
```
그런 다음 브라우저에서: `http://localhost:8000`

#### Node.js가 설치되어 있는 경우:
```bash
# npx serve 사용 (설치 불필요)
npx serve

# 또는 http-server 설치 후 사용
npm install -g http-server
http-server
```

#### VS Code 사용:
1. VS Code에서 폴더 열기
2. "Live Server" 확장 프로그램 설치
3. `index.html` 우클릭 → "Open with Live Server"

## ✨ 주요 기능

### 인터랙티브 요소
- ✅ **스크롤 진행바**: 페이지 상단에 스크롤 위치 표시
- ✅ **숫자 카운터 애니메이션**: 통계 숫자가 0에서 목표값까지 애니메이션
- ✅ **원형 차트**: Survey Results 섹션의 인터랙티브 차트
- ✅ **스크롤 애니메이션**: 섹션이 화면에 나타날 때 페이드인 효과
- ✅ **Hover 효과**: 카드에 마우스 올리면 확대 및 그림자 효과
- ✅ **부드러운 스크롤**: 내비게이션 클릭시 부드럽게 이동

### 반응형 디자인
- 📱 **모바일**: 최적화된 단일 커럼 레이아웃
- 📱 **태블릿**: 2커럼 레이아웃
- 💻 **데스크톱**: 3커럼 그리드 레이아웃

## 🎨 커스텀마이징

### 색상 변경
`css/styles.css` 파일의 상단 CSS 변수 수정:

```css
:root {
    --primary-navy: #1e3a8a;      /* 메인 네이비 색상 */
    --accent-gold: #fbbf24;       /* 강조 골드 색상 */
    --alert-red: #dc2626;         /* 경고 빨간색 */
    --success-green: #10b981;     /* 성공 초록색 */
}
```

### 이미지 변경
1. `assets/images/README.md` 참고
2. Unsplash에서 원하는 이미지 다운로드
3. `assets/images/` 폴더에 저장
4. `css/styles.css` 38번째 줄 수정:

```css
.hero {
    background-image:
        linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 64, 175, 0.85)),
        url('../assets/images/your-image.jpg');  /* 이미지 경로 변경 */
}
```

### 내용 수정
`index.html` 파일을 텍스트 에디터로 열어 원하는 내용을 수정하세요.

## 🌐 배포 옵션

### 1. GitHub Pages (무료)
```bash
# GitHub 리포지토리 생성 후
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo.git
git push -u origin main

# Settings → Pages → Source: main branch → Save
```
URL: `https://username.github.io/repo/`

### 2. Netlify (무료, 드래그 앤 드롭)
1. https://www.netlify.com 방문
2. "Sites" → "Add new site" → "Deploy manually"
3. 폴더를 드래그 앤 드롭
4. ✅ 자동 배포 및 무료 URL 제공

### 3. Vercel (무료)
1. https://vercel.com 방문
2. "New Project"
3. GitHub 리포지토리 연결 또는 파일 업로드
4. ✅ 자동 배포

### 4. 단순 파일 공유
- 전체 폴더를 ZIP으로 압축
- 다른 사람에게 전달
- 압축 해제 후 `index.html` 더블클릭으로 실행

## 📱 모바일 테스트

### 브라우저 개발자 도구 사용:
1. 웹사이트 열기
2. F12 또는 Ctrl+Shift+I (Mac: Cmd+Option+I)
3. 모바일 아이콘 클릭 (Toggle device toolbar)
4. 다양한 기기 크기로 테스트

### 실제 기기에서 테스트:
```bash
# 로컬 서버 실행 (예: Python)
python -m http.server 8000

# 같은 WiFi 네트워크에서
# 컴퓨터 IP 확인 (ipconfig 또는 ifconfig)
# 모바일에서: http://192.168.x.x:8000
```

## 🖱️ 인쇄 최적화

웹사이트는 인쇄에 최적화되어 있습니다:
- 브라우저에서 Ctrl+P (Mac: Cmd+P)
- "Save as PDF" 선택
- 모든 섹션이 깨끗하게 출력됩니다

## 🔧 트러블슈팅

### 문제: 차트가 표시되지 않음
- ✅ 인터넷 연결 확인 (Chart.js CDN 필요)
- ✅ 브라우저 콘솔(F12) 확인
- ✅ 로컬 서버 실행 권장

### 문제: 이미지가 표시되지 않음
- ✅ 인터넷 연결 확인 (Unsplash API 사용 중)
- ✅ 또는 로컬 이미지로 교체 (`assets/images/README.md` 참고)

### 문제: 애니메이션이 작동하지 않음
- ✅ JavaScript 활성화 확인
- ✅ 브라우저 콘솔에서 에러 확인
- ✅ 최신 브라우저 사용 권장 (Chrome, Firefox, Safari, Edge)

### 문제: 모바일에서 레이아웃 깨짐
- ✅ 최신 모바일 브라우저 사용
- ✅ 브라우저 캐시 삭제 후 새로고침

## 📊 사용된 기술

### HTML5
- 시맨틱 태그 사용
- 접근성 고려

### CSS3
- CSS Grid & Flexbox
- CSS Variables (커스텀마이징 용이)
- 반응형 미디어 쿼리
- 애니메이션 & 전환 효과

### JavaScript
- Vanilla JS (프레임워크 불필요)
- Chart.js (차트 라이브러리)
- AOS (Animate On Scroll)
- Intersection Observer API

### 외부 라이브러리 (CDN)
- Google Fonts (Montserrat, Inter)
- Chart.js v4
- AOS v2.3.1

## 💡 추가 개선 아이디어

### 즉시 추가 가능:
1. **다크 모드**: CSS 변수 활용
2. **다국어 지원**: 한글/영어 토글
3. **소셜 공유 버튼**: Facebook, Twitter, LinkedIn
4. **PDF 다운로드**: jsPDF 라이브러리 사용

### 고급 기능:
1. **검색 기능**: 페이지 내 키워드 검색
2. **데이터 필터**: 동적 차트 필터링
3. **비교 뷰**: 여러 시나리오 비교
4. **이메일 구독**: Newsletter 폼

## 📞 지원

문제가 발생하면:
1. 브라우저 콘솔(F12) 확인
2. `assets/images/README.md` 이미지 가이드 참고
3. 이 파일의 트러블슈팅 섹션 확인

## 🎉 완료!

축하합니다! 프로페셔널한 인포그래픽 웹사이트가 완성되었습니다.

- ✅ 완전 반응형 디자인
- ✅ 인터랙티브 차트 & 애니메이션
- ✅ 프로페셔널한 디자인
- ✅ 배포 준비 완료
- ✅ 무료 호스팅 옵션 다수

**이제 `index.html`을 열어 결과를 확인하세요!** 🚀
