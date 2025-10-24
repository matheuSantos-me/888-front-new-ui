import Vue from 'vue'
import Router from 'vue-router'
// import { numberFilter } from '~/pages/client/betting/bitkong/filters'
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
/**
 * START: import bitkong
 * DATE: 2.11
 */

// Import Helpers for filters
// Vue.filter('numberFilter', numberFilter)

// Import Install and register helper items

Vue.use(Router)
    /**
     * END: import bitkong
     * DATE: 2.11
     */

/* layout */
/** note: submenu only apppear when children.length>=1
 *   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if fasle ,the page will no be cached(default is false)
  }
**/

// 관리자페이지 메뉴리스트
export const constantAdminRouterMap = [
    {
        path: '/admin',
        name: 'admin',
        meta: { title: 'admin', icon: 'home', chongpanView: '1' }
    },
    {
        path: '/admin/UserManagement',
        name: 'UserManagement',
        meta: { title: 'userMangement', icon: 'group', chongpanView: '1' },
        children: [
            {
                path: 'UList',
                name: 'admin-UserManagement-UList',
                meta: { title: 'admin-UserManagement-UList', icon: '', chongpanView: '1' }
            },
            {
                path: 'ULog',
                name: 'admin-UserManagement-ULog',
                meta: { title: 'admin-UserManagement-ULog', icon: '', chongpanView: '1' }
            }
        ]
    },
    {
        path: '/admin/MoneyLogManagement',
        name: 'admin-MoneyLogManagement',
        meta: { title: 'admin-MoneyLogManagement', icon: 'monetization_on', chongpanView: '1' }
    },
    {
        path: '/admin/BoardManagement/list',
        name: 'admin-BoardManagement-list-type',
        meta: { title: 'admin-BoardManagement-list-type', icon: 'developer_board', chongpanView: '0' }
    },
    {
        path: '/admin/PayInOutManagement/list',
        name: 'admin-PayInOutManagement',
        meta: { title: 'admin-PayInOutManagement', 'icon': 'payment', chongpanView: '0' }
    },
    {
        path: '/admin/StatisticManagement',
        name: 'StatisticManagement',
        meta: { title: 'admin-StatisticManagement', icon: 'insert_chart', chongpanView: '1' },
        children: [
            {
                path: 'SByDate',
                name: 'admin-StatisticManagement-SByDate',
                meta: { title: 'admin-StatisticManagement-SByDate', icon: '', chongpanView: '1' }
            },
            {
                path: 'SByProposer',
                name: 'admin-StatisticManagement-SByProposer',
                meta: { title: 'admin-StatisticManagement-SByProposer', icon: '', chongpanView: '0' }
            },
            {
                path: 'SBySiteAmount',
                name: 'admin-StatisticManagement-SBySiteAmount',
                meta: { title: 'admin-StatisticManagement-SBySiteAmount', icon: '', chongpanView: '0' }
            }
        ]
    },
    {
        path: '/admin/BettingManagement',
        name: 'BettingManagement',
        meta: { title: 'bettingManagement', icon: 'gradient', chongpanView: '1' },
        children: [
            {
                path: 'BSports',
                name: 'admin-BettingManagement-BSports',
                meta: { title: 'admin-BettingManagement-BSports', icon: '', chongpanView: '1' }
            },
            {
                path: 'BBitkong',
                name: 'admin-BettingManagement-BBitkong',
                meta: { title: 'admin-BettingManagement-BBitkong', icon: '', chongpanView: '1' }
            },
            {
                path: 'BPowerGames',
                name: 'admin-BettingManagement-BPowerGames',
                meta: { title: 'admin-BettingManagement-BPowerGames', icon: '', chongpanView: '1' }
            },
            {
                path: 'BBaduki',
                name: 'admin-BettingManagement-BBaduki',
                meta: { title: 'admin-BettingManagement-BBaduki', icon: '', chongpanView: '1' }
            },
            {
                path: 'BHoldem',
                name: 'admin-BettingManagement-BHoldem',
                meta: { title: 'admin-BettingManagement-BHoldem', icon: '', chongpanView: '1' }
            }
        ]
    },
    {
        path: '/admin/GameManagement',
        name: 'GameManagement',
        meta: { title: 'gameManagement', icon: 'games', chongpanView: '0' },
        children: [
            {
                path: 'GSports/sportsBetting',
                name: 'admin-GameManagement-GSports-sportsBetting',
                meta: { title: 'admin-GameManagement-GSports-sportsBetting', chongpanView: '0' }
            },
            {
                path: 'GSports/matchManagement',
                name: 'admin-GameManagement-GSports-matchManagement',
                meta: { title: 'admin-GameManagement-GSports-matchManagement', chongpanView: '0' }
            },
            {
                path: 'GSports/sportManagement',
                name: 'admin-GameManagement-GSports-sportManagement',
                meta: { title: 'admin-GameManagement-GSports-sportManagement', chongpanView: '0' }
            },
            {
                path: 'GSports/inplayManagement',
                name: 'admin-GameManagement-GSports-inplayManagement',
                meta: { title: 'admin-GameManagement-GSports-inplayManagement', chongpanView: '0' }
            },
            {
                path: 'GPowerGames',
                name: 'admin-GameManagement-GPowerGames',
                meta: { title: 'admin-GameManagement-GPowerGames', chongpanView: '0' }
            },
            {
                path: 'GBitKong',
                name: 'admin-GameManagement-GBitKong',
                meta: { title: 'admin-GameManagement-GBitKong', chongpanView: '0' }
            },
            {
                path: 'GBaduki',
                name: 'admin-GameManagement-GBaduki',
                meta: { title: 'admin-GameManagement-GBaduki', chongpanView: '0' }
            },
            {
                path: 'GHoldem',
                name: 'admin-GameManagement-GHoldem',
                meta: { title: 'admin-GameManagement-GHoldem', chongpanView: '0' }
            }
        ]
    },
    {
        path: '/admin/SettingsManagement',
        name: 'SettingsManagement',
        meta: { title: 'setting', icon: 'settings', chongpanView: '0' },
        children: [
            {
                path: 'Site',
                name: 'admin-SettingsManagement-Site',
                meta: { title: 'admin-SettingsManagement-Site', chongpanView: '0' }
            },
            {
                path: 'SiteUISetting',
                name: 'admin-SettingsManagement-SiteUISetting',
                meta: { title: 'admin-SettingsManagement-SiteUISetting', chongpanView: '0' }
            },
            {
                path: 'Admin',
                name: 'admin-SettingsManagement-Admin',
                meta: { title: 'admin-SettingsManagement-Admin', chongpanView: '0' }
            },
            // {
            //   path: 'Client',
            //   name: 'admin-SettingsManagement-Client',
            //   meta: { title: 'admin-SettingsManagement-Client', chongpanView: '0' }
            // },
            {
                path: 'General',
                name: 'admin-SettingsManagement-General',
                meta: { title: 'admin-SettingsManagement-General', chongpanView: '0' }
            }
        ]
    },
    {
        path: '/admin/OtherManagement',
        name: 'OtherManagement',
        meta: { title: 'other', icon: 'sms', chongpanView: '0' },
        children: [
            {
                path: 'MultiNoteAndEmail',
                name: 'admin-OtherManagement-MultiNoteAndEmail',
                meta: { title: 'admin-OtherManagement-MultiNoteAndEmail', chongpanView: '0' }
            },
            {
                path: 'EmailAndSMSLog',
                name: 'admin-OtherManagement-EmailAndSMSLog',
                meta: { title: 'admin-OtherManagement-EmailAndSMSLog', chongpanView: '0' }
            }
        ]
    }
]

// 클라페이지 피씨버젼 메뉴리스트
export const constantClientRouterMap = [
    {
        id: '0010',
        path: '/client',
        name: 'client',
        label: '홈',
        type: '',
        meta: { title: 'client', icon: "ki_home ki_ic" }
    },
    {
        id: '0200',
        path: '/client/betting/sport',
        name: 'client-betting-sport',
        label: '스포츠',
        type: 'page',
        meta: { title: 'client-betting-sport', icon: 'ki_sport ki_ic' }
    },
    {
        id: '0300',
        path: '/client/betting/live',
        name: 'client-betting-live',
        label: '라이브',
        type: 'page',
        meta: { title: 'client-betting-live', icon: 'ki_live ki_ic' }
    },
    {
        id: '0100',
        path: '/client/betting/cross',
        name: 'client-betting-cross',
        label: '크로스',
        type: 'page',
        meta: { title: 'client-betting-cross', icon: 'ki_sport ki_ic' }
    },
    {
        id: '0500',
        path: '/client/betting/powerball',
        name: 'client-betting-pball',
        label: '파워볼',
        type: 'page',
        meta: { title: 'client-betting-pball', icon: 'left-livekeno ki_ic' }
    },
    {
        id: '0400',
        path: '/client/betting/pladder',
        name: 'client-betting-pladder',
        label: '파워사다리',
        type: 'page',
        meta: { title: 'client-betting-pladder', icon: 'left-crash ki_ic' }
    },
    {
        id: '0900',
        path: '/client/betting/nladder',
        name: 'client-betting-nladder',
        label: '네임드다리다리',
        type: 'page',
        meta: { title: 'client-betting-nladder', icon: 'left-crash ki_ic' }
    },
    {
        id: '0600',
        path: '/client/betting/bitkong',
        name: 'client-betting-bitkong',
        label: '비트콩',
        type: 'page',
        meta: { title: 'client-betting-bitkong', icon: 'left-live ki_ic' }
    },
    {
        id: '0700',
        path: '/client/betting/Holdem',
        name: 'client-betting-Holdem',
        label: '폴덤포커',
        type: 'page',
        meta: { title: 'client-betting-Holdem', icon: 'ki_tv ki_ic' }
    },
    {
      id: '0800',
      path: '/client/betting/baduki',
      name: 'client-betting-baduki',
      label: '바둑이',
      type: 'page',
      meta: { title: 'client-betting-baduki', icon: 'ki_live ki_ic' }
    },
    {
      id: '1000',
      path: '/client/betting/matgo',
      name: 'client-betting-matgo',
      label: '맞고',
      type: 'page',
      meta: { title: 'client-betting-matgo', icon: 'ki_live ki_ic' }
    },
    // {
    //     id: '1000',
    //     path: '/client/Boards',
    //     name: 'client-boards',
    //     label: '게시판',
    //     type: 'page',
    //     meta: { title: 'client-Boards', icon: 'ki_live ki_ic' }
    // },
    // {
    //     id: '1100',
    //     path: '/client/Event',
    //     name: 'client-betting-event',
    //     label: '공지/이벤트',
    //     type: 'page',
    //     meta: { title: 'client-Event', }
    // },
]

// 클라페이지 모바일버젼 메뉴리스트
export const constantClientMobileRouterMap = [

    {
        id: '0010',
        path: '/client',
        name: 'client',
        label: '홈',
        type: '',
        meta: { title: 'client', icon: 'ki_home ki_ic' }
    },
    {
        id: '0200',
        path: '/client/betting/sport/index_mob',
        name: 'client-betting-sport',
        label: '스포츠',
        type: 'page',
        meta: { title: 'client-betting-sport', icon: 'ki_sport ki_ic' }
    },
    {
        id: '0300',
        path: '/client/betting/live/index_mob',
        name: 'client-betting-live',
        label: '라이브',
        type: 'page',
        meta: { title: 'client-betting-live', icon: 'ki_live ki_ic' }
    },
    {
        id: '0100',
        path: '/client/betting/cross/index_mob',
        name: 'client-betting-cross',
        label: '크로스',
        type: 'page',
        meta: { title: 'client-betting-cross', icon: 'ki_sport ki_ic' }
    },
    {
        id: '0500',
        path: '/client/betting/powerball',
        name: 'client-betting-pball',
        label: '파워볼',
        type: 'page',
        meta: { title: 'client-betting-pball', icon: 'left-livekeno ki_ic' }
    },

    {
        id: '0400',
        path: '/client/betting/pladder',
        name: 'client-betting-pladder',
        label: '파워사다리',
        type: 'page',
        meta: { title: 'client-betting-pladder', icon: 'left-crash ki_ic' }
    },
    {
        id: '0900',
        path: '/client/betting/nladder',
        name: 'client-betting-nladder',
        label: '네임드다리다리',
        type: 'page',
        meta: { title: 'client-betting-nladder', icon: 'left-crash ki_ic' }
    },
    {
        id: '0600',
        path: '/client/betting/bitkong',
        name: 'client-betting-bitkong',
        label: '비트콩',
        type: 'page',
        meta: { title: 'client-betting-bitkong', icon: 'left-live ki_ic' }
    },
    {
        id: '0700',
        path: '/client/betting/Holdem',
        name: 'client-betting-Holdem',
        label: '폴덤포커',
        type: 'page',
        meta: { title: 'client-betting-Holdem', icon: 'ki_tv ki_ic' }
    },
    {
        id: '0800',
        path: '/client/betting/baduki',
        name: 'client-betting-baduki',
        label: '바둑이',
        type: 'page',
        meta: { title: 'client-betting-baduki', icon: 'ki_live ki_ic' }
    },
    {
        id: '1100',
        path: '/client/Event',
        name: 'client-betting-event',
        label: '공지/이벤트',
        type: 'page',
        meta: { title: 'client-Event', icon: 'ki_tv ki_ic' }
    },

    // {
    //     id: '0300',
    //     path: '/client/Boards',
    //     name: 'Boards',
    //     label: '게시판',
    //     type: 'page',
    //     meta: { title: 'client-Boards', icon: 'ki_live ki_ic' }
    // },
]

export default new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantAdminRouterMap
})