<template>
    <div class="collapsible-body" >
        <ul id="second-nav">
            <li v-for="link in secondlist"  v-link="link.param" @click="navClick(link.name)">
                <a > <i class="material-icons">{{link.icon}}</i><span>{{link.name}}</span></a>
            </li>
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
<style>
    #second-nav li {
        position: relative;
    }
    #second-nav i {
        margin-top : 10px;
    }
    #second-nav span {
        position: absolute;
        margin-left: 12px;
        margin-top: 1px;
    }
</style>