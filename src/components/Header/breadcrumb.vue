<template>
    <div class="nav-wrapper">
        <div class="col s12">
            <a href="javascript:;" class="breadcrumb" v-text="navName"></a>
            <a href="javascript:;" class="breadcrumb" v-text="secondName"></a>
        </div>
    </div>
</template>
<script>
    export default {
        vuex : {
            getters : {
                navName :({breadcurmb}) =>breadcurmb.navName,
                secondName : ({breadcurmb}) =>breadcurmb.secondName,
            }
        }
    }
</script>