<template>
    <div class="row" >
        <form class="col s12">
            <div class="row">
                <div class="input-field col s5">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="search_username" type="text" class="validate" >
                    <label for="search_username">员工名</label>
                </div>
                <div class="input-field col s5">
                    <i class="material-icons prefix">phone</i>
                    <input id="search_tel" type="tel" class="validate">
                    <label for="search_tel">手机</label>
                </div>
                <div class="input-field col s2">
                    <button class="right btn waves-effect waves-light">查询
                        <i class="material-icons left">search</i>
                    </button>
                </div>
            </div>
        </form>
        <div class="row">
             <v-client-table :data="tableData" :options="options"></v-client-table>
            <!--<table class="highlight responsive-table">-->
                <!--<thead>-->
                    <!--<tr>-->
                        <!--<th data-field="empno">员工编号</th>-->
                        <!--<th data-field="name">姓名</th>-->
                        <!--<th data-field="sex">性别</th>-->
                        <!--<th data-field="dept">部门</th>-->
                        <!--<th data-field="telphone">手机</th>-->
                    <!--</tr>-->
                <!--</thead>-->
                <!--<tbody>-->
                    <!--<tr v-for="item in tableData">-->
                        <!--<td>{{item.empno}}</td>-->
                        <!--<td>{{item.name}}</td>-->
                        <!--<td>{{item.sex|handlersex}}</td>-->
                        <!--<td>{{item.dept}}</td>-->
                        <!--<td>{{item.telphone}}</td>-->
                    <!--</tr>-->
                <!--</tbody>-->
            <!--</table>-->
            <ul class="right pagination">
                <li class="disabled"><a href="javascirpt:;"><i class="material-icons">chevron_left</i></a></li>
                <li class="active"><a href="javascirpt:;">1</a></li>
                <li class="waves-effect"><a href="javascirpt:;">2</a></li>
                <li class="waves-effect"><a href="javascirpt:;">3</a></li>
                <li class="waves-effect"><a href="javascirpt:;">4</a></li>
                <li class="waves-effect"><a href="javascirpt:;">5</a></li>
                <li class="waves-effect"><a href="javascirpt:;"><i class="material-icons">chevron_right</i></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                tableData : [
                    {"id":1,empno:"0001",name:"王小二",sex :"1",telphone:"13812345678",dept:"技术部"},
                    {"id":2,empno:"0002",name:"张小四",sex :"1",telphone:"13812345678",dept:"技术部"},
                    {"id":3,empno:"0003",name:"赵小雨",sex :"2",telphone:"13812345678",dept:"技术部"},
                    {"id":4,empno:"0004",name:"尼古拉斯赵四",sex :"1",telphone:"13812345678",dept:"技术部"},
                    {"id":5,empno:"0005",name:"莱昂纳多刘能",sex :"1",telphone:"13812345678",dept:"技术部"},
                ],
                options :{
                    columns:['id','empno','name','sex','telphone','dept']
                }
            }
        },
        filters:{
            handlersex(sex){
                return sex == "1" ?"男":"女";
            }
        }
    }
</script>
<style>
    .row {
        margin-top: 10px;
    }

</style>