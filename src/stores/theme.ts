/*
 * @Author: dyb-dev
 * @Date: 2024-10-13 21:32:31
 * @LastEditors: dyb-dev
 * @LastEditTime: 2024-10-15 10:25:37
 * @FilePath: /web-mobile-template/src/stores/theme.ts
 * @Description: 主题状态管理
 */

import { defineStore } from "pinia"
import { reactive } from "vue"

import { store } from "."

/** 主题枚举 */
enum ETheme {
    Light = "light",
    Dark = "dark"
}

/** Store 状态类型 */
interface IThemeStoreState {
    theme: ETheme
}

/** 是否初始化主题 */
let _isInitTheme = false

/** Store 实例 */
const useThemeStore = defineStore("ThemeStore", () => {

    /** Store 状态 */
    const themeStoreState = reactive<IThemeStoreState>({
        theme: ETheme.Light
    })

    /**
     * FUN: 切换主题模式
     *
     * @author dyb-dev
     * @date 13/10/2024/  21:47:42
     * @param {boolean} isMatchesDark - 是否匹配暗黑主题
     */
    const _updateTheme = (isMatchesDark: boolean) => {

        themeStoreState.theme = isMatchesDark ? ETheme.Dark : ETheme.Light

        // 文档根元素的类列表
        const _documentElementClassList = document.documentElement.classList
        // 文档根元素的类名
        const _documentElementClassName = "theme-dark"

        isMatchesDark
            ? _documentElementClassList.add(_documentElementClassName)
            : _documentElementClassList.remove(_documentElementClassName)

    }

    /**
     * FUN: 初始化主题模式
     *
     * @author dyb-dev
     * @date 13/10/2024/  21:57:10
     */
    const _initTheme = () => {

        if (_isInitTheme) {

            return

        }

        _isInitTheme = true

        /** 是否使用暗黑主题 */
        if (__PROJECT_INFO__.env.VITE_DARK !== "true") {

            themeStoreState.theme = ETheme.Light
            return

        }

        /** 系统暗黑主题查询 */
        const _darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

        _updateTheme(_darkModeMediaQuery.matches)

        // 监听系统主题变化
        _darkModeMediaQuery.addEventListener("change", event => {

            _updateTheme(event.matches)

        })

    }

    _initTheme()

    return { themeStoreState }

})

/**
 * FUN: 使用状态管理
 *  - 在没有Vue组件上下文的情况下使用
 *
 * @author dyb-dev
 * @date 15/09/2024/  23:53:35
 * @returns store实例
 */
const useThemeStoreWithOut = () => {

    return useThemeStore(store)

}

export { ETheme, useThemeStore, useThemeStoreWithOut }