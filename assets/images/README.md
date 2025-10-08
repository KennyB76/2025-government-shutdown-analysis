# Image Assets

이 폴더는 웹사이트에 사용할 고품질 이미지를 저장합니다.

## 추천 이미지 소스 (무료, 상업적 사용 가능)

### 1. Unsplash
무료 고해상도 이미지 제공 (라이선스: 무료 사용)

**추천 검색어 및 이미지:**

#### Hero Background (히어로 배경)
- 검색: "us capitol building"
  - https://unsplash.com/photos/the-united-states-capitol-building-in-washington-dc-wMzx2nBdeng
  - https://unsplash.com/photos/a-view-of-the-capitol-building-in-washington-dc-J4kK8b9Fgj8

- 검색: "real estate architecture"
  - https://unsplash.com/photos/high-rise-buildings-during-daytime-tf0jFfbKOh4
  - https://unsplash.com/photos/white-concrete-building-during-daytime-hADmvqU1TDk

#### Section Backgrounds
- 검색: "government building"
- 검색: "business handshake"
- 검색: "modern architecture"

### 2. Pexels
무료 스톡 사진 (라이선스: 무료 사용)
- https://www.pexels.com/search/capitol/
- https://www.pexels.com/search/real%20estate/

### 3. Pixabay
무료 이미지 (라이선스: 무료 사용)
- https://pixabay.com/images/search/capitol/

## 현재 사용 중인 이미지

### Hero Section
- **배경 이미지**: Unsplash API 링크
  - URL: `https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600`
  - 설명: 미국 국회의사당 건물
  - 사용 위치: Hero section background

## 이미지 다운로드 방법

1. **Unsplash에서 다운로드:**
   ```
   1. 위 링크 클릭
   2. "Download free" 버튼 클릭
   3. 이미지를 이 폴더에 저장
   4. HTML에서 경로 업데이트: assets/images/파일명.jpg
   ```

2. **Unsplash API 사용 (현재 방식):**
   - 장점: 별도 다운로드 불필요, 항상 최신 고품질 이미지
   - 단점: 인터넷 연결 필요
   - HTML에서 직접 URL 사용 중

## 이미지 최적화 팁

### 다운로드 후 최적화
1. **온라인 도구:**
   - TinyPNG: https://tinypng.com/ (PNG 압축)
   - Squoosh: https://squoosh.app/ (구글 제공)

2. **권장 사이즈:**
   - Hero 배경: 1920x1080px (Full HD)
   - Section 이미지: 1200x800px
   - 아이콘/로고: 512x512px

3. **포맷:**
   - 사진: JPG (품질 80-85%)
   - 그래픽: PNG
   - 최신 브라우저: WebP

## 라이선스 정보

### Unsplash License
- ✅ 상업적 사용 가능
- ✅ 크레딧 표기 권장 (필수 아님)
- ✅ 수정 가능
- ❌ 이미지 자체 재판매 불가

### 현재 크레딧
Footer에 NAR 출처와 함께 이미지 크레딧도 포함되어 있습니다.

## 대체 이미지 URL (백업용)

```html
<!-- Hero Backgrounds -->
https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600 (Capitol)
https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600 (Buildings)
https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600 (Architecture)

<!-- Real Estate -->
https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200 (Modern house)
https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200 (Houses)

<!-- Business/Professional -->
https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200 (Business)
https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200 (Professional)
```

## 로컬 이미지 사용시

HTML 업데이트 예시:
```html
<!-- 현재 (Unsplash API) -->
<div class="hero" style="background-image: url('https://images.unsplash.com/...')">

<!-- 로컬 파일로 변경 -->
<div class="hero" style="background-image: url('assets/images/hero-capitol.jpg')">
```

CSS 업데이트:
```css
/* styles.css 38번째 줄 수정 */
.hero {
    background-image:
        linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 64, 175, 0.85)),
        url('../assets/images/hero-capitol.jpg');
}
```
