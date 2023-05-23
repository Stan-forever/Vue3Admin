import { defineStore } from 'pinia'
import pinia from '../'
import { TabsState, TabsMenuProps } from '../interface'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from '@/router/index'
export const TabsStore = defineStore({
    id: 'TabsStore',
    state: (): TabsState => ({
        tabsMenuList: []
    }),
    getters: {},
    actions: {
        addTabs(tabsParams: TabsMenuProps) {
            if (this.tabsMenuList.every((item) => item.path !== tabsParams.path)) {
                this.tabsMenuList.push(tabsParams)
            }
        },
        removeTabs(path: string, isCurrent: boolean) {
            const tabsMenuList = this.tabsMenuList

            if (isCurrent) {
                tabsMenuList.forEach((item, index) => {
                    const nextTab = tabsMenuList[index + 1] || tabsMenuList[index - 1]
                    if (!nextTab) return
                    router.push(nextTab.path)
                })
            }

            this.tabsMenuList = tabsMenuList.filter((item) => item.path != path)
        },
        removeMultipleTabs(tabValue?: string) {
            this.tabsMenuList = this.tabsMenuList.filter((item) => {
                return item.path === tabValue || !item.close
            })
        }
    },
    persist: true
})
pinia.use(piniaPluginPersistedstate)
