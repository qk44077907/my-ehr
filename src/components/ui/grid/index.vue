<template>
    <div>
        <table class="vuetable {{tableClass}}">
            <thead>
                <tr>
                    <template v-for="field in fields">
                         <th v-if="isSpecialField(field.name)" class="{{field.titleClass || ''}}">
                            {{field.title || ''}}
                          </th>
                         <th v-else  @click="orderBy(field)"  class="{{field.titleClass || ''}} {{isSortable(field) ? 'sortable' :''}}">
                            {{getTitle(field) | capitalize}} <i v-if="isCurrentSortField(field)" class="{{ sortIcon }}"></i>
                         </th>
                     </template>
                </tr>
           </thead>
           <tbody v-cloak>
              <tr v-for="item in tableData">
                <template v-for="field in fields">
                   <template v-if="isSpecialField(field.name)">
                       <td v-if="field.name == '__actions'" class="vuetable-actions {{field.dataClass}}">
                            <template v-for="action in itemActions">
                                <button class="{{ action.class }}" @click="callAction(action.name, item)">
                                   <i class="{{ action.icon }}"></i> {{ action.label }}
                                </button>
                            </template>
                        </td>
                    </template>
                    <template v-else>
                        <td v-if="hasCallback(field)" class="{{field.dataClass}}">
                            {{{ callCallback(field, item) }}}
                        </td>
                        <td v-else class="{{field.dataClass}}">
                            {{ getObjectValue(item, field.name) }}
                        </td>
                    </template>
                </template>
             </tr>
           </tbody>
       </table>
        <div v-if="showPagination" class="vuetable-pagination {{paginationClass}}">
            <div class="vuetable-pagination-info {{paginationInfoClass}}">
                 {{ paginationInfo }}
            </div>
            <div class="vuetable-pagination-component {{paginationComponentClass}}">
                 <component :is="paginationComponent"></component>
            </div>
        </div>
    </div>
</template>
<script>
    import paginationMixin from "./paginationMixin"
    import page from "./page"
    export default  {
        data() {
            return {
                eventPrefix: 'vuetable:',
                tableData: null,
                tablePagination: null,
                currentPage: 1
            }
        },
        props: {
            'tableWrapper': {
                type: String,
                default() {
                    return null
                }
            },
            'tableClass': {
                type: String,
                default() {
                    return 'ui blue striped selectable celled stackable attached table'
                }
            },
            'loadingClass': {
                type: String,
                default() {
                    return 'loading'
                }
            },
            'dataPath': {
                type: String,
                default() {
                    return 'data'
                }
            },
            'paginationPath': {
                type: String,
                default() {
                    return 'links.pagination'
                }
            },
            'fields': {
                type: Array,
                required: true
            },
            'apiUrl': {
                type: String,
                required: true
            },
            'sortOrder': {
                type: Object,
                default() {
                    return {
                        field: '',
                        direction: 'asc'
                    }
                }
            },
            'perPage': {
                type: Number,
                default() {
                    return 10
                }
            },
            'ascendingIcon': {
                type: String,
                default() {
                    return 'blue chevron up icon'
                }
            },
            'descendingIcon': {
                type: String,
                default() {
                    return 'blue chevron down icon'
                }
            },
            'appendParams': {
                type: Array,
                default() {
                    return []
                }
            },
            'showPagination': {
                type: Boolean,
                default() {
                    return true
                }
            },
            'paginationComponent': {
                type: String,
                default() {
                    return 'page'
                }
            },
            'paginationInfoTemplate': {
                type: String,
                default() {
                    return "Displaying {from} to {to} of {total} items"
                }
            },
            'paginationClass': {
                type: String,
                default() {
                    return 'ui bottom attached segment grid'
                }
            },
            'paginationInfoClass': {
                type: String,
                default() {
                    return 'left floated left aligned six wide column'
                }
            },
            'paginationComponentClass': {
                type: String,
                default() {
                    return 'right floated right aligned six wide column'
                }
            },
            itemActions: {
                type: Array,
                default() {
                    return []
                }
            },
            queryParams: {
                type: Object,
                default() {
                    return {
                        sort: 'sort',
                        page: 'page',
                        perPage: 'per_page'
                    }
                }
            }
        },
        computed: {
            sortIcon() {
                return this.sortOrder.direction == 'asc' ? this.ascendingIcon : this.descendingIcon
            },
            paginationInfo() {
                if (this.tablePagination == null) return ''
                return this.paginationInfoTemplate
                        .replace('{from}', this.tablePagination.from)
                        .replace('{to}', this.tablePagination.to)
                        .replace('{total}', this.tablePagination.total)
            }
        },
        methods: {
            normalizeFields() {
                var normalized = []
                this.fields.forEach(function(field, i) {
                    if (typeof (field) === 'string') {
                        normalized[i] = { name: field }
                    } else {
                        normalized[i] = field
                    }
                })
                this.fields = normalized
            },
            loadData() {
                var wrapper = document.querySelector(this.tableWrapper)
                this.showLoadingAnimation(wrapper)

                var params = [
                    this.queryParams.sort+'='+ this.getSortParam(),
                    this.queryParams.page+'='+this.currentPage,
                    this.queryParams.perPage+'='+this.perPage
                ]
                var url = this.apiUrl + '?' + params.join('&')
                if (this.appendParams.length > 0) {
                    url += '&'+this.appendParams.join('&')
                }
                this.$http.get(url)
                        .then( (response) => {
                            this.tableData = this.getObjectValue(response.data, this.dataPath, null)
                            this.tablePagination = this.getObjectValue(response.data, this.paginationPath)
                            this.dispatchEvent('load-success', response)
                            this.broadcastEvent('load-success', this.tablePagination)

                            this.hideLoadingAnimation(wrapper)
                        }, (response) => {
                            this.dispatchEvent('load-error', response)
                            this.broadcastEvent('load-error', response)
                            this.hideLoadingAnimation(wrapper)
                        })
            },
            showLoadingAnimation(wrapper) {
                if (wrapper !== null) {
                    this.addClass(wrapper, this.loadingClass)
                }
                this.dispatchEvent('loading')
            },
            hideLoadingAnimation(wrapper) {
                if (wrapper !== null) {
                    this.removeClass(wrapper, this.loadingClass)
                }
                this.dispatchEvent('loaded')
            },
            getTitle(field) {
                if (typeof field.title === 'undefined') {
                    return field.name.replace('.', ' ')
                }
                return field.title
            },
            getSortParam() {
                if (!this.sortOrder || this.sortOrder.field == '') {
                    return ''
                }

                var fieldName = (typeof this.sortOrder.sortField === 'undefined')
                        ? this.sortOrder.field
                        : this.sortOrder.sortField

                return fieldName +'|' + this.sortOrder.direction
            },
            addClass(el, className) {
                if (el.classList)
                    el.classList.add(className)
                else
                    el.className += ' ' + className
            },
            removeClass(el, className) {
                if (el.classList)
                    el.classList.remove(className)
                else
                    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
            },
            dispatchEvent(eventName, args) {
                this.$dispatch(this.eventPrefix + eventName, args)
            },
            broadcastEvent(eventName, args) {
                this.$broadcast(this.eventPrefix + eventName, args)
            },
            orderBy(field) {
                if ( ! this.isSortable(field)) {
                    return
                }

                if (this.sortOrder.field == field.name) {
                    // change sort direction
                    this.sortOrder.direction = this.sortOrder.direction == 'asc' ? 'desc' : 'asc'
                } else {
                    // reset sort direction
                    this.sortOrder.direction = 'asc'
                }
                this.sortOrder.field = field.name
                this.sortOrder.sortField = field.sortField
                this.currentPage = 1    // reset page index
                this.loadData();
            },
            isSortable(field) {
                return !(typeof field.sortField == 'undefined')
            },
            isCurrentSortField(field) {
                if (!this.isSortable(field)) {
                    return false
                }

                return this.sortOrder.field == field.name
            },
            gotoPreviousPage() {
                if (this.currentPage > 1) {
                    this.currentPage--
                    this.loadData()
                }
            },
            gotoNextPage() {
                if (this.currentPage < this.tablePagination.last_page) {
                    this.currentPage++
                    this.loadData()
                }
            },
            gotoPage(page) {
                if (page != this.currentPage && (page > 0 && page <= this.tablePagination.last_page)) {
                    this.currentPage = page
                    this.loadData()
                }
            },
            isSpecialField(fieldName) {
                return fieldName.startsWith('__')
            },
            hasCallback(item) {
                return item.callback ? true : false
            },
            callCallback(field, item) {
                if ( ! this.hasCallback(field))
                    return

                var args = field.callback.split('|')
                var func = args.shift()

                if (typeof this.$parent[func] == 'function') {
                    return (args.length > 0)
                            ? this.$parent[func].apply(this.$parent, [this.getObjectValue(item, field.name)].concat(args))
                            : this.$parent[func].call(this.$parent, this.getObjectValue(item, field.name))
                }
                return null
            },
            getObjectValue(object, path, defaultValue) {
                defaultValue = (typeof defaultValue == 'undefined') ? null : defaultValue
                var obj = object
                if (path.trim() != '') {
                    var keys = path.split('.')
                    keys.forEach(function(key) {
                        if (typeof obj[key] != 'undefined') {
                            obj = obj[key]
                        } else {
                            return defaultValue
                        }
                    })
                }
                return obj
            },
            callAction(action, data) {
                this.$dispatch(this.eventPrefix+'action', action, data)
            },
            addParam(param) {
                this.appendParams.push(param)
            },
        },
        events: {
            'vuetable-pagination:change-page': function(page) {
                if (page == 'prev') {
                    this.gotoPreviousPage()
                } else if (page == 'next') {
                    this.gotoNextPage()
                } else {
                    this.gotoPage(page)
                }
            },
            'vuetable:reload': function() {
                this.loadData()
            },
            'vuetable:refresh': function() {
                this.$emit('vuetable-pagination:change-page', 1)
            },
            'vuetable:goto-page': function(page) {
                this.$emit('vuetable-pagination:change-page', page)
            },
        },
        created() {
            this.normalizeFields()
            this.loadData()
        }
    }
</script>
<style>
    .vuetable th.sortable:hover {
        color: #2185d0;
        cursor: pointer;
    }
    .vuetable-actions {
        width: 11%;
        padding: 12px 0px;
        text-align: center;
    }
    .vuetable-actions > button {
        padding: 3px 6px;
        margin-right: 4px;
    }
    .vuetable-pagination {
    }
    .vuetable-pagination-info {
        float: left;
        margin-top: auto;
        margin-bottom: auto;
    }
    ul.pagination {
        margin: 0px;
    }
    .vuetable-pagination-component {
        float: right;
    }
</style>