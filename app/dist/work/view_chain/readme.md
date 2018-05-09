==========================
# chain SIGN
# nykim@nomadconnection.com
==========================

## 디렉토리 구조
```
  css/
    style.css
    scss/
      _reset.scss
      _layout.scss
      style.scss
  images/
  js/
    chain.html
    readme.md
  
```

## 사용 툴
```
  css compile: compass
  image minify: https://tinypng.com
  js minify: -
  
```

## 마크업 (#depth1, 2)
```
  (div.wrap)
    header.header
    section.visual & section
    section.introduction & section
      article.versus & article
      article.process & article
      article.feature & article
      article.client & article
    section.effect & section
    section.question & section
    section.booking & section
    footer.footer
  
```



## 마크업 (#depth3~)

```

===========

 - .header
 --    h1.logo
 --    ul.gnb
 ---     li *4 > a
      
===========
      
 - .visual > grid
 --    visual-contents
 ----      h2.visual-title
 ----      p.visual-desc
 ----      button.visual-button & button-booking
    
    
===========

 - .introduction > grid  
 --    p.section-title-small > small
 --    h2.section-title
 --    p.introduction-desc
    

   - article.versus
   --    .container-left
   ---      p.article-title-small > small
   ---      h3.article-title
   --    .container-right
   ---      table.versus-table
   ---      p.versus-comment


   - article.process
   --    p.article-title-small > small
   --    h3.article-title
   --    ol.process-list
   ---      li.order-0{#}
   ----        strong + p


   - article.feature
   --    p.article-title-small > small
   --    h3.article-title
   --    ul.feature-list
   ---      li*6 > strong + p


   - article.client
   --    .client-container
   --    p.article-title-small > small
   --    h3.article-title
   --    ul.client-list
   ---      li*18
 
      
===========

 - .effect > grid
 --    .container-left
 ---      p.section-title-small > small
 ---      h2.section-title
 ---      p.effect-desc
 --    .container-right
 ---      dl
 ----       dt.effect-name *2
 ----       dd.effect-desc *2 > strong + p
      
      
===========

 - .question  
 --    p.section-title-small > small
 --    h2.section-title
 --    ul.question-list
 ---      li *6
 ----       .question-title > a > i + span
 ----       .question-contents > p
 
 
===========

 - .booking  
 --    p.section-title-small > small
 --    h2.section-title
 --    ul.question-list
 --    div.booking-form > form
 ---      div *4
 ----       label.form-label
 ----       input.form-input
 ---      div
 ----       button.form-button & button-booking
 
 
===========

 - .footer  
 --    .footer-copy
 
 
 
 
 
    
```



