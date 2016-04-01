<template>
    <div class="collapsible-body" >
        <ul>
            <li v-for="link in secondlist"  v-link="link.param" @click="navClick(link.name)"><a >{{link.name}}</a></li>
        </ul>
    </div>
</template>
<script>
    export default {
        create : function(){
            this.secondlist.forEach((it) =>{
                it.param.activeClass = "active"
            });
        },
        methods :{
            navClick(name){
                this.$parent.clickSecondName(name);
            }
        },
        props:['secondlist']
    }
</script>