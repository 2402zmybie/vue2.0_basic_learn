import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GlobalComponent from '@/components/GlobalComponent'
import Life from '@/components/Life'
import ComputedAndWatchVue from "@/components/ComputedAndWatchVue"
import SetGetVue from "@/components/SetGetVue"
import StyleBindVue from "@/components/StyleBindVue"
import SetMethod from "@/components/SetMethod"
import RefAttribute from "@/components/RefAttribute"
import RefExample from "@/components/RefExample"
import ComponentNativeEventParent from "@/components/ComponentNativeEventParent"
import NoneFatherSonComponent from "@/components/NoneFatherSonComponent"
import SlotParent from "@/components/SlotParent"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SlotParent',
      component: SlotParent
    }
  ]
})
