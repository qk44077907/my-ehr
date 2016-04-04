<template>
  <div id="app">
    <Headerbar> </Headerbar>
    <main>
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import "./assets/js/materialize.min"
  import "./assets/css/materialize.min.css"
  import Headerbar from "./components/Header/index"
  import store from './vuex/store'
  export default {
    components:{
      Headerbar
    },
    store,
    ready(){
      $('.collapsible').collapsible();
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
    height: 100%;
    background-color: #fff;
  }
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url("./assets/font/iconfont/MaterialIcons-Regular.eot");
    src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url("./assets/font/iconfont/MaterialIcons-Regular.woff2") format('woff2'),
    url("./assets/font/iconfont/MaterialIcons-Regular.woff") format('woff'),
    url("./assets/font/iconfont/MaterialIcons-Regular.ttf") format('truetype');
  }
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px; /* Preferred icon size */
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1;
    text-transform: none;
    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
    /* Support for IE. */
    font-feature-settings: 'liga';
  }
  p.box {
    padding: 20px
  }
  p {
    color: rgba(0,0,0,0.71);
    padding: 0;
    -webkit-font-smoothing: antialiased
  }
  h1,h2,h3,h4,h5,h6 {
    -webkit-font-smoothing: antialiased
  }
  nav a {
    -webkit-font-smoothing: antialiased
  }
  nav ul li a:hover,nav ul li.active {
    background-color: #ea454b
  }

  header,main,footer {
    padding-left: 240px
  }

  /*.parallax-demo header,.parallax-demo main,.parallax-demo footer {*/
  /*padding-left: 0*/
  /*}*/

  footer.example {
    padding-left: 0
  }

  @media only screen and (max-width: 992px) {
    header,main,footer {
      padding-left:0
    }
  }

  ul.side-nav.fixed li.logo {
    text-align: center;
    margin-top: 32px;
    margin-bottom: 80px
  }

  ul.side-nav.fixed li.logo:hover {
    background-color: transparent
  }

  ul.side-nav.fixed {
    overflow: hidden
  }

  ul.side-nav.fixed li {
    line-height: 44px
  }

  ul.side-nav.fixed li:hover,ul.side-nav.fixed li.active {
    background-color: rgba(0,0,0,0.05)
  }

  ul.side-nav.fixed li a {
    font-size: 13px;
    line-height: 44px;
    height: 44px;
    cursor: pointer;
  }
  ul.side-nav.fixed ul.collapsible-accordion {
    background-color: #FFF
  }

  ul.side-nav.fixed:hover {
    overflow-y: auto
  }

  /*.bold>a {*/
  /*font-weight: bold*/
  /*}*/

  /*#logo-container {*/
  /*height: 57px;*/
  /*margin-bottom: 32px*/
  /*}*/

  nav.top-nav {
    height: 62px;
    box-shadow: none
  }

  nav.top-nav a.page-title {
    line-height: 122px;
    font-size: 48px
  }

  a.button-collapse.top-nav {
    position: absolute;
    text-align: center;
    height: 48px;
    width: 48px;
    left: 7.5%;
    top: 0;
    float: none;
    margin-left: 1.5rem;
    color: #fff;
    font-size: 32px;
    z-index: 2
  }

  a.button-collapse.top-nav.full {
    line-height: 122px
  }

  @media only screen and (max-width: 600px) {
    a.button-collapse.top-nav {
      left:5%
    }
  }

  @media only screen and (max-width: 992px) {
    nav .nav-wrapper {
      text-align:center
    }

    nav .nav-wrapper a.page-title {
      font-size: 36px
    }
  }

  @media only screen and (min-width: 993px) {
    .container {
      width:85%
    }
  }

  #front-page-logo {
    display: inline-block;
    height: 100%;
    pointer-events: none
  }

  @media only screen and (max-width: 992px) {
    #front-page-nav ul.side-nav li {
      float:none;
      padding: 0 15px
    }

    #front-page-nav ul.side-nav li:hover {
      background-color: #ddd
    }

    #front-page-nav ul.side-nav li .active {
      background-color: transparent
    }

    #front-page-nav ul.side-nav a {
      color: #444
    }
  }


</style>
