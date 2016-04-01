<template>
    <header>
        <nav class="top-nav">
            <div class="container">
                <Breadcrumb ></Breadcrumb>
            </div>
        </nav>
        <div class="container">
            <a href="#" data-activates="nav-mobile" class="button-collapse top-nav full hide-on-large-only">
                <i class="mdi-navigation-menu"></i>
            </a>
        </div>
        <navfirst></navfirst>
    </header>
</template>
<script>
    import navfirst from "./navfirst"
    import Breadcrumb from "./breadcrumb"
    export default {
        components : {
            navfirst,
            Breadcrumb
        }
    }
</script>