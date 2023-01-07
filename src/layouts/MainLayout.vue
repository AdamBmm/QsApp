<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-ma-md">
        <div class="text-h3">TodoApp</div>
        <div class="text-subtitle">{{ todaysDate }}</div>
      </div>
      <q-img
       src="https://lh3.googleusercontent.com/xzUZfLOIAjv3HLUgv3u0swwG1HkaCT_xp3w0xhBJgYXNmAj1BrmmutyCTALpLpOoVhHE6ZZU87MvodVpBEw3XI8uN6Vy3_iWIxCg3FnY91bCKcqw2zXVQebXrYo3gIUab6dLTHAbUuoUwfhMwfXijTgAjV27VxDxQExAdWqXtQjNQs0nfFMxX7YnH8sK8dhybiQXQa2ieMWQ3YEnkI0IAAC5nUCJyHAAQwz6HPH9GZaXDpgsXes6UNQJIZk-CSHQxpxpktf0v-xOGOVjOwesfIiS7Yj67ZQ_Xl0Ip727gbpss0TGxZfi4VvWqG4jfr_zIHL0_B1xp9YcP_JnfeyLlv6zRBUy2vP4gPRILTEPEXat8kSvaKZAdQSxmgjybQ9cOX45OAf5wokEoMUtfL057_lWscZm8wirIjmuUjVQP30xx3JeKi1JxwmBWwzQHw9Q-Hd5r1hz-6tadO1ZiUtDrT9CEEI__Ws4C1XS7_NawaUh2mznQKqeslUjDFIS4rjqyI6rMy4a2pSqeMMmaOiq4gLWtMa1sw1k_ljJynwLWRCc-EBmDv5TIc6gV6wCcm38h_xlkdSo7Vy2eXlQ2HgTaPzHMyPdiBoBDN1xKio6owJCKpgaXYfVtnQ6dQTCv4cqdjdPHID-IK8GqlZvwnA5TEToXwR2iw5gDQlGl9KFkPNjeZjjBWagz35qfIimM8M9ANMLyr9ipDXfg3m3Zcgez5faLru90HqKILcapPByEh2pMMGiPA-DHg-4mg89BQF9OmZsM0nJEYD-GuwUDtObl40roT8voz9o15eNtg0-KHMMb6JYomYh7OobmVZTJ2Oveyc9lCi2u19422zU-0HC9Lg4ljVReHGCNMSwuvbwR3zUNiGLAy51mZGXe0Zmfu-KWqQBPajzTLi7E7cFay1txb0U0JXFy9hVbd5ZxyJxsO4NDoDg6wCWzzkhctoX7NRckfmKTtval2a9lT8YoA=w958-h250-no?authuser=0"
       class="header-image absolute-top" />
    </q-header>

    <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    :width="250"
    :breakpoint="600"
    >
    <q-scroll-area style="height: calc(100% - 201px); margin-top: 201px; border-right: 1px solid #ddd">
      <q-list padding>
        <q-item
        to="/"
        exact
        clickable
        v-ripple>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>

          <q-item-section>
            Todo
          </q-item-section>
        </q-item>

        <q-item
        to="/help"
        exact
        clickable
        v-ripple>
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>

          <q-item-section>
            Help
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-img class="absolute-top" src="https://lh3.googleusercontent.com/xzUZfLOIAjv3HLUgv3u0swwG1HkaCT_xp3w0xhBJgYXNmAj1BrmmutyCTALpLpOoVhHE6ZZU87MvodVpBEw3XI8uN6Vy3_iWIxCg3FnY91bCKcqw2zXVQebXrYo3gIUab6dLTHAbUuoUwfhMwfXijTgAjV27VxDxQExAdWqXtQjNQs0nfFMxX7YnH8sK8dhybiQXQa2ieMWQ3YEnkI0IAAC5nUCJyHAAQwz6HPH9GZaXDpgsXes6UNQJIZk-CSHQxpxpktf0v-xOGOVjOwesfIiS7Yj67ZQ_Xl0Ip727gbpss0TGxZfi4VvWqG4jfr_zIHL0_B1xp9YcP_JnfeyLlv6zRBUy2vP4gPRILTEPEXat8kSvaKZAdQSxmgjybQ9cOX45OAf5wokEoMUtfL057_lWscZm8wirIjmuUjVQP30xx3JeKi1JxwmBWwzQHw9Q-Hd5r1hz-6tadO1ZiUtDrT9CEEI__Ws4C1XS7_NawaUh2mznQKqeslUjDFIS4rjqyI6rMy4a2pSqeMMmaOiq4gLWtMa1sw1k_ljJynwLWRCc-EBmDv5TIc6gV6wCcm38h_xlkdSo7Vy2eXlQ2HgTaPzHMyPdiBoBDN1xKio6owJCKpgaXYfVtnQ6dQTCv4cqdjdPHID-IK8GqlZvwnA5TEToXwR2iw5gDQlGl9KFkPNjeZjjBWagz35qfIimM8M9ANMLyr9ipDXfg3m3Zcgez5faLru90HqKILcapPByEh2pMMGiPA-DHg-4mg89BQF9OmZsM0nJEYD-GuwUDtObl40roT8voz9o15eNtg0-KHMMb6JYomYh7OobmVZTJ2Oveyc9lCi2u19422zU-0HC9Lg4ljVReHGCNMSwuvbwR3zUNiGLAy51mZGXe0Zmfu-KWqQBPajzTLi7E7cFay1txb0U0JXFy9hVbd5ZxyJxsO4NDoDg6wCWzzkhctoX7NRckfmKTtval2a9lT8YoA=w958-h250-no?authuser=0" style="height: 201px">
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="https://lh3.googleusercontent.com/OaN8Yp-MLasfrMcL5tpl4OhMfSQnFXN9qgMNj5qu492uGluTp0A1zWu03eYqsDE7tefnhTqfmTDlG8KaQy8yy_p6H55T2Hw-j1WUN_meFL_SU4WZ9vp2yTYA6h9rDamXmw_88mtOpO9ue5kdrzB0ITZ1NFdCHaiAuotXGh51-pNYB_lGKCdFHh2WXj_gqooO2ZTArcGbPGTLzfL1wM1OmbmcvaGTFOTzY2zYIKomvk75BJ3vi9oZo_-T-3RO8JevJD2vbdHCnEvyOZAn4dAFwNxIRe_9NfCH0c0CN2b2RSs4AxoKxL8kDMDXtPHrYes57x-L5LCfOdiR7SEwqVNUO5lVk5oA0f1ZsoYwM6xRaQtKkeJDVdINVIU77TQSjzpyY3RuMoqLTB8bGe0nCpv3vf_owtsGNaiV0dgWE_sDZaamHFY43_2R_ceEoc0cscGH-nabuq4xdCtKaMsyguVcJa1ktFTsoV50iGo2038uvtafsDi6dezPGH14Rak3z64p8QLZ94DyUjGxPmdM3t6AycXsN9YvXnEEBuGGjVBONb4I8yla-kDOG7Zee19VGwaa0jM1PCnjXn4daXrsgMvSaarSgRdlk4HhoNtzk8ZZuil6YJX1fMJmL8ThFEhRE8SrXrAHQrCrPmnHjQpffvoGP_vDDXiU4jwc1THcWkDbvTpoDhLHYJqBe8QW1w2gW054rYFyoy7E3UonIG_lhXU1k_XOFiZUckbOMlS0SmAxuSDaRu_Ivzij-QXtc1C62gYBSEbyLV7IAsJ-nNaL0NI_lGFIAhiMB9OKKXY9PAU8aQOfYW8lzgVQJCp5llhnCF3W4DtykddbGNtuitniTdQqnluzs0pST2jDEIGi7V7inQoXbqH2OT-Ruo8NAYoVknNeqt-xeryMi9rwge3ktKHp1m6J7Z-uOplk-ecFkwvvX1K5oJ1sey7YnkbhJJ7SsoXtZuRTbHjlukpL-PUUgA=s133-no?authuser=0">
        </q-avatar>
        <div class="text-weight-bold">User Name</div>
        <div>@User</div>
      </div>
    </q-img>
  </q-drawer>

  <q-page-container>
    <router-view />
  </q-page-container>
</q-layout>
</template>

<script>
import { date } from 'quasar'

import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  computed: {
    todaysDate () {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd DD.MM.YYYY')
    }
  }
})
</script>

<style lang="scss">
 .header-image {
  height: 100%;
  z-index: -1;
  filter: brightness(70%);
 }
</style>
