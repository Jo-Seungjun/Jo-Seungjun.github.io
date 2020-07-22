---
slug: "/blog/gatsby-start"
date: "2020-05-24"
title: "gatsby-start"
---

# Gatsby 시작하기
아주 오래전 html 과 css 만을 가지고 웹사이트를 만들었던때와 비교해서 지금은 다양한 형태와 언어의 웹사이트들이 만들어졌 습니다. 
다양한 형태중 서버의 자원을 최소화하는 형태의 정적 웹사이트가 다시 주목을 받게 되었고 gatsby 가 탄생했죠.
> 웹사이트의 형태에 대해선 [이글](https://gollumnima.github.io/posts/webpage_type "웹형태의 간단한 설명")을 참조해주세요

또한 깃허브를 사용하는 유저가 많아지고 마치 자신의 포트폴리오 처럼 사용하는 유저가 생기면서 블로그 기능이 생기게 되었습니다.
이때 깃허브는 파일을 업로드해서 호스팅해주는곳으로써 서버사이드의 작업을 처리할 수 없는 형태였기때문에 깃허브를 호스트로하는 블로그의 형태로 가장 적합한 것은 바로 정적 웹사이트 였습니다. 따라서 다음과 같은 정적 웹사이트 빌더들이 만들어졌죠 (jekyll, hugo, gatsby)
그중 gatsby 는 다른 프레임워크와 다르게 JavaScript 를 기반으로하고 React 를 사용하며 MIT 라이센스를 가지고 있습니다. [참고 이미지](https://www.reddit.com/r/webdev/comments/b0j9rs/infographic_gatsby_vs_hugo_vs_jekyll/)

# Gatsby 알아보기
Gatsby 는 정적 웹사이트 빌드 도구 입니다.
Gatsby 의 메인 페이지에서 이를 잘 설명해주고 있으므로 이에 기반하여 설명해드리자면
초기에 Data sources 를 만듭니다. 이를 크게 CMS, Markdown, Data 로 설명할 수 있으며
이러한 데이터들은 gatsby 를 통해 정적 웹사이트로 "빌드" 됩니다. 마치 C 언어를 컴파일해서 바이너리로 만드는것과 같은 구조이죠. 이렇게 만들어진 정적 페이지들은 웹 호스팅을 해줄 수 있는 서버라면 어느곳이든 올라갈 수 있습니다.

# Gatby 사용해보기
gatsby 를 알아보기 위해 먼저 프로젝트를 빌드하고 그속을 들여다보도록 하겠 습니다.

우리가 만들것은 gatsby 를 이용한 github 블로그 입니다.
## gatsby 설치
gatsby 는 전용 개발 도구인 gatsby-cli 를 사용할 수 있습니다. gatsby-cli 는 새 프로젝트를 생성하거나 개발, 빌드하는 등의 작업을 수행할 수 있습니다. 설치는 yarn 또는 npm 를 통해 쉽게 설치할 수 있습니다.
```bash
yarn global install gatsby-cli
```
## 새 프로젝트 시작
프로젝트를 시작할 때는 gatsby-cli 를 통해 쉽게 프레임 워크를 만들 수 있습니다.
또한 다른 사람이 만들어 놓은 템플릿 들을 프로젝트 시작 단계에서 가져올 수도 있죠
```bash
gatsby new [프로젝트이름]
gatsby new [프로젝트이름] [다른사람의 템플릿 git 주소]
```
## 실행
축하합니다! 이제 실행 가능한 당신의 새 gatsby 프로젝트가 완성되었습니다. 이 단계부터는 자신이 마음에 드는 방식으로 웹사이트를 만들어 갈 수 있습니다.
이 단계에 들어가기 전에 gatsby 는 개발에 매우 편리한 툴을 제공하고 있습니다.
```bash
gatsby develop
```
위 명령어를 입력하면 gatsby 는 스스로 코드의 변화를 감지하고 실시간으로 빌드하여 웹브라우져에서 볼 수 있도록 호스팅을 해 줍니다.
## 배포
원하는 목표를 달성한 후 깃허브에 올릴때는 gh-pages 라는 도구를 사용하면 매우 편리합니다.
이 커멘드는 혼자서 실행될 수 있지만 공식사이트에서는 gatsby 커맨드에 직접 추가해서 사용하는것을 추천하고 있습니다.
프로젝트의 가장 상위폴더에 있는 package.json 파일에 다음 내용을 추가해 주세요
```json
{
    "scripts":{
        "depoly": "gatsby build && gh-pages -d public -b master"
    }
}
```
이렇게 추가된 라인은 다음과 같은 형태로 사용할 수 있습니다.
```bash
npm run depoly
```