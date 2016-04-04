<template>
    <header>
        <nav class="top-nav">
            <div class="container">
                <Breadcrumb ></Breadcrumb>
            </div>
        </nav>
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