<template>
    <div class="{{wrapperClass}}">
        <a @click="loadPage('prev')"
           class="{{linkClass}} {{isOnFirstPage ? disabledClass : ''}}">
            <i :class="icons.prev"></i>
        </a>
        <select id="vuetable-pagination-dropdown" class="ui search dropdown" @change="selectPage($event)">
            <template v-for="n in totalPage">
                <option class="{{pageClass}}" value="{{n+1}}">
                    Page {{n+1}}
                </option>
            </template>
        </select>
        <a @click="loadPage('next')"
           class="{{linkClass}} {{isOnLastPage ? disabledClass : ''}}">
            <i :class="icons.next"></i>
        </a>
    </div>
</template>
<script>

    import paginationMixin from "./paginationMixin";

    export default  {
        mixins :[paginationMixin],
        methods: {
            loadPage(page) {
                if (page == 'prev' && !this.isOnFirstPage) {
                    this.setDropdownToPage(this.tablePagination.current_page-1)
                } else if (page == 'next' && !this.isOnLastPage) {
                    this.setDropdownToPage(this.tablePagination.current_page+1)
                }

                this.$dispatch('vuetable-pagination:change-page', page)
            },
            setDropdownToPage(page) {
                document.getElementById('vuetable-pagination-dropdown').value = page
            },
            selectPage(event) {
                this.$dispatch('vuetable-pagination:change-page', event.target.selectedIndex+1)
            }
        },
        events: {
            'vuetable:load-success': function(tablePagination) {
                this.tablePagination = tablePagination
                this.setDropdownToPage(tablePagination.current_page)
            }
        },
    }
</script>