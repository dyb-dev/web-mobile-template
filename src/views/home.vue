<!--
 * @Author: dyb-dev
 * @Date: 2023-11-08 15:55:25
 * @LastEditors: dyb-dev
 * @LastEditTime: 2024-10-17 19:54:54
 * @FilePath: /web-mobile-template/src/views/home.vue
 * @Description: 首页
-->

<script setup lang="ts">
import { useTitle } from "@vueuse/core"
import { Button, Icon } from "vant"
import { useRoute } from "vue-router"

import Cube from "@/components/Cube.vue"
import { router } from "@/router"

/** HOOKS: 设置页面 Title */
useTitle("首页")

const { query } = useRoute()
console.log("首页入参", query)

function onClickJumpButton() {

    router.push({ path: "/test", query: { test: "test" } })

}
</script>

<template>
    <section class="home">
        <div class="home__logo-box">
            <a href="https://cn.vuejs.org/" target="_blank">
                <img class="home__logo-box__item home__logo-box__item-vue" src="../assets/image/logo/vue.svg" />
            </a>

            <Icon class="home__logo-box__item-like" name="like" />

            <a href="https://cn.vitejs.dev/" target="_blank">
                <img class="home__logo-box__item home__logo-box__item-vite" src="../assets/image/logo/vite.svg" />
            </a>
        </div>

        <Button
            class="home__button"
            type="primary"
            size="small"
            round
            block
            icon="fire-o"
            text="Hello World!"
            @click="onClickJumpButton"
        />

        <Cube />
    </section>
</template>

<style lang="scss" scoped>
.home {
    display: flow-root;
    width: 100%;
    height: 100%;
    overflow: auto;

    &__logo-box {
        display: flex;
        gap: 0 60px;
        align-items: center;
        justify-content: center;
        margin: 100px 0 100px;

        &__item {
            height: 150px;
            transition: filter 300ms;
            transition: all 0.5s;
            will-change: filter;

            &-vue:hover {
                transform: scale(1.1);
                filter: drop-shadow(0 0 2em #42b883aa);
            }

            &-vite:hover {
                transform: scale(1.1);
                filter: drop-shadow(0 0 2em #646cffaa);
            }

            &-like {
                font-size: 35px;
                @include text-gradient-effect-mixin();
            }
        }
    }

    &__button {
        width: fit-content;
        margin: 0 auto 350px;
        @include text-gradient-effect-mixin();

        /* stylelint-disable-next-line order/order */
        &:deep(.van-icon) {
            @include text-gradient-effect-mixin();
        }
    }
}
</style>
