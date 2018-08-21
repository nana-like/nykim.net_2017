# README

**nykim@nykim.net**

*UI designed & developed by nykim*

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
