# README

**nykim@nykim.net**

*UI designed & developed by nykim*

## About This Project
- 이 웹사이트는 개인 포트폴리오를 모아둔 곳입니다.
- 제 취향과 사랑을 듬뿍 담아 만들었습니다.

## 스크린샷
- Version 2 (현재)
![nykim.net (ver.2)](http://nykim.net/repo/img/nykimnet_v2.png)

- Version 1 (과거)
![nykim.net (ver.1)](http://nykim.net/repo/img/nykimnet_v1.png)

_(지금은 ver.3 을 준비중이에요!)_

## Tree Structure

- css/
  - scss/
    - base/
      - common.scss
      - reset.scss
      - font.scss
    - helpers/
      - animations.scss
      - mediaQueries.scss
      - mixins.scss
      - variables.scss
    - layout/
      - article_about.scss
      - article_detail.scss
      - article_hello.scss
      - article_work.scss
      - contents.scss
      - footer.scss
      - hero.scss
      - visual.scss
    - main.scss
  - main.css
- images/
- js/
- index.html


## Maintenance

- 모든 작업은 src/ 폴더 내에서 이뤄지며, gulp 를 통해 dist/로 보냅니다.
- 배포 시에는 dist/ 폴더 내 파일만 배포합니다.
- gulp task 는 gulpfile.js 에서 정의하고 있습니다.
