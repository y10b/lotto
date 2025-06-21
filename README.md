# Next.js 로또 번호 추천기 \n\n본 프로젝트는 **Next.js 15 App Router** 기반으로 제작된 로또 번호 추천 웹 애플리케이션입니다. 서버 사이드 렌더링(SSR)을 활용하여 초기 로딩 속도를 개선하고, 자체 API 라우트를 통해 실시간으로 로또 당첨 정보를 크롤링·가공합니다.\n\n---\n\n## 주요 특징\n\n1. **Server-Side Rendering (SSR)** \

Next.js 의 App Router(`src/app`) 구조를 사용하여 페이지를 서버에서 미리 렌더링합니다. 이를 통해 검색 엔진 친화적이며 빠른 FCP(First Contentful Paint)를 달성합니다.\n2. **커스텀 API 라우트** \

- `GET /api/latest` : 동행복권 사이트를 크롤링하여 최신 회차를 추출합니다. \
- `GET /api/lotto/:drawNo` : 지정 회차의 당첨 번호를 JSON 형태로 반환합니다.\n3. **번호 추천 알고리즘** \
- 직전 회차 번호 1개 \
- 최근 24주(약 6개월) 동안 3회 이상 출현한 번호 중 5개 \
- 위 두 집합을 결합·정렬하여 5세트를 제안합니다.\n4. **React 19 & Tailwind CSS 4** \
   최신 React 기능과 간결한 유틸리티-퍼스트 CSS 로 빠르게 UI 를 구축했습니다.\n5. **ESLint & TypeScript** \
   일관된 코드 품질을 유지하기 위해 ESLint(Core-Web-Vitals preset)와 최신 TypeScript(\^5)를 사용합니다.\n\n---\n\n## 프로젝트 구조\n\n```text
  lotto/
  ├─ src/
  │ ├─ app/ # App Router·페이지 & API 라우트
  │ │ ├─ api/
  │ │ │ ├─ latest/ # 최신 회차 조회
  │ │ │ └─ lotto/[drawNo]/ # 회차별 당첨번호 조회
  │ │ ├─ page.tsx # 클라이언트 엔트리(React 19)
  │ │ └─ layout.tsx # 전역 레이아웃
  │ ├─ components/ # UI 컴포넌트(Tailwind)
  │ └─ lib/ # 데이터 fetch·비즈니스 로직
  └─ ...

````\n\n---\n\n## 빠른 시작\n\n> Node.js **18 이상**이 설치되어 있다고 가정합니다. (권장 20+)

```bash
# 1) 의존성 설치
npm install

# 2) 개발 서버 실행
npm run dev
# 브라우저에서 http://localhost:3000 확인

# 3) 프로덕션 빌드
npm run build
npm start  # http://localhost:3000
````

별도 환경 변수는 필요하지 않습니다.

---

## 동작 원리

1. 사용자가 "로또 번호 추천받기" 버튼 클릭 → `RecommendButton` 컴포넌트에서 내부 `handleClick` 실행.
2. 클라이언트 측에서 `/api/latest` 요청 후 최신 회차 번호를 가져옵니다.
3. 동일한 클라이언트 세션 내에서 직전 회차(`latest-1`) 및 최근 24주 회차에 대해 `/api/lotto/:drawNo`를 연속 호출합니다.
4. `lib/lottoUtils.ts` 의 `generateRecommendedNumbers` 함수가 추천 세트를 조합해 반환합니다.
5. 결과를 상태로 저장하고, `LottoCard` 컴포넌트가 추천 로또 번호를 시각적으로 표시합니다.

앱 스켈레톤 및 초기 스타일은 SSR 로 렌더링되며, 이후 CSR 로 상호작용합니다.

---

## 스크립트

| 명령어          | 설명                           |
| --------------- | ------------------------------ |
| `npm run dev`   | TurboPack 기반 개발 서버       |
| `npm run build` | 프로덕션 빌드 생성             |
| `npm start`     | 빌드된 앱 실행(기본 3000 포트) |
| `npm run lint`  | ESLint 검사                    |

---

## 참고 / 외부 의존성

- 동행복권 로또 API \
  - 최신 회차: `https://www.dhlottery.co.kr/gameResult.do?method=byWin` (HTML 파싱) \
  - 회차별 번호: `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=`
- React 19, Next.js 15, Tailwind CSS 4

---

## 라이선스

y10b © 2025
