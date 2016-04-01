<template>
    <ul id="nav-mobile" class="side-nav fixed" style="width: 240px;">
        <li class="no-padding" >
            <ul class="collapsible collapsible-accordion">
                <li class="bold"  v-for="nav in navList" @click="navClick(nav.name)">
                    <a class="collapsible-header  waves-effect waves-teal">{{nav.name}}</a>
                    <navsecond :secondlist="nav.secondlist"></navsecond>
                </li>
            </ul>
        </li>
    </ul>
</template>
<script>
import navsecond from "./navsecond";
import {setNavName,setSecondName,getMenuList} from '../../vuex/actions'
export default {
    vuex :{
        getter : {
            navList : ({nav}) => nav.navList
        },
        actions : {
            setNavName,setSecondName,getMenuList
        }
    },
    created(){
        this.getMenuList()
    },
    methods:{
        navClick(name){
            this.setNavName(name);
        },
        clickSecondName(name){
            this.setSecondName(name);
        }
    },
    components:{
        navsecond
    }
}
</script>