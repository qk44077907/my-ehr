/**
 * Created by rxf on 16/4/18.
 */
export const paginationMixin = {
    props: {
        'wrapperClass': {
            type: String,
            default() {
                return 'ui right floated pagination menu'
            }
        },
        'disabledClass': {
            type: String,
            default() {
                return 'disabled'
            }
        },
        'pageClass': {
            type: String,
            default() {
                return 'item'
            }
        },
        'linkClass': {
            type: String,
            default() {
                return 'icon item'
            }
        },
        'icons': {
            type: Object,
            default() {
                return {
                    prev: 'left chevron icon',
                    next: 'right chevron icon'
                }
            }
        }
    },
    data() {
        return {
            tablePagination: null
        }
    },
    computed: {
        totalPage() {
            return this.tablePagination == null
                ? 0
                : this.tablePagination.last_page
        },
        isOnFirstPage() {
            return this.tablePagination == null
                ? false
                : this.tablePagination.current_page == 1
        },
        isOnLastPage() {
            return this.tablePagination == null
                ? false
                : this.tablePagination.current_page == this.tablePagination.last_page
        }
    },
    methods: {
        loadPage(page) {
            this.$dispatch('vuetable-pagination:change-page', page)
        },
        isCurrentPage(page) {
            return page == this.tablePagination.current_page
        }
    },
    events: {
        'vuetable:load-success': function(tablePagination) {
            this.tablePagination = tablePagination
        }
    }
}