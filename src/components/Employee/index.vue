<template>
    <div class="row" id="wraprow" >
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
             <vuetable
                :api-url="url"
                :fields="columns"
                :sort-order="sortOrder"
                table-class="table table-bordered table-striped table-hover"
                ascending-icon="glyphicon glyphicon-chevron-up"
                descending-icon="glyphicon glyphicon-chevron-down"
                pagination-class=""
                pagination-info-class=""
                pagination-component-class=""
                pagination-component="page"
                :item-actions="itemActions"
                ></vuetable>
        </div>
    </div>
</template>
<script>
    import vuetable from "./../ui/grid/index"
    import {API_ROOT} from "./../../config"
    import moment from "moment"

    let url  = API_ROOT +  "/users";
    let pageTemplate =  'displaying {from} to {to} of {total} items';

    export default {
        data(){
            return {
                url : url,
                paginationInfoTemplate:pageTemplate,
                itemActions: [
                    { name: 'view-item', label: '', icon: 'glyphicon glyphicon-zoom-in', class: 'btn btn-info' },
                    { name: 'edit-item', label: '', icon: 'glyphicon glyphicon-pencil', class: 'btn btn-warning'},
                    { name: 'delete-item', label: '', icon: 'glyphicon glyphicon-remove', class: 'btn btn-danger' }
                ],
                columns: [
                        'name',
                        'empno',
                        {
                            name: 'dept',
                            callback: 'allCap'
                        },
                        {
                            name: 'telphone',
                            //callback: 'formatDate|YYYY-MM-DD'
                        },
                        {
                            name: 'sex',
                            sortField: 'sex',
                            titleClass: 'center aligned',
                            dataClass: 'center aligned',
                            callback: 'gender'
                        },
                        {
                            name: '__actions',
                            dataClass: 'center aligned',
                        }
                  ]
            }
        },
        events: {
            'vuetable:action': function(action, data) {
                console.log('vuetable:action', action, data)
                if (action == 'viewItem') {
                    this.viewProfile(data.hash)
                }
            },
            'vuetable:load-error': function(response) {
                if (response.status == 400) {
                    //sweetAlert('Something\'s Wrong!', response.data.message, 'error')
                } else {
                    //sweetAlert('Oops', E_SERVER_ERROR, 'error')
                }
            }
        },
        methods: {
            /**
             * Callback functions
             */
            allCap(value) {
                return value.toUpperCase()
            },
            gender(value) {
                return value == 'M'
                        ? '<span class="label label-info"><i class="glyphicon glyphicon-star"></i> Male</span>'
                        : '<span class="label label-success"><i class="glyphicon glyphicon-heart"></i> Female</span>'
            },
//            formatDate(value, fmt) {
//                if (value == null) return ''
//                fmt = (typeof fmt == 'undefined') ? 'D MMM YYYY' : fmt
//                return moment(value, 'YYYY-MM-DD').format(fmt)
//            },
            /**
             * Other functions
             */
            viewProfile(hash) {
                //window.location.href = '/staffs/profile/'+hash
            }
        },
        components:{
            vuetable
        },
        filters:{
            handlersex(sex){
                return sex == "1" ?"男":"女";
            }
        }
    }
</script>
<style>
    #wraprow {
        margin-top: 10px;
    }

</style>