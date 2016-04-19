<tempalte>
    <div>
        <table class="highlight responsive-table">
            <thead>
                <tr>
                    <th data-field="empno">员工编号</th>
                    <th data-field="name">姓名</th>
                    <th data-field="sex">性别</th>
                    <th data-field="dept">部门</th>
                    <th data-field="telphone">手机</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data">
                    <td>{{item.empno}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.sex|handlersex}}</td>
                    <td>{{item.dept}}</td>
                    <td>{{item.telphone}}</td>
                </tr>
            </tbody>
        </table>
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
</tempalte>
<script>
    export default  {
        props :['columns','data']
    }
</script>