/*
 * @Author: dyb-dev
 * @Date: 2024-03-16 14:53:14
 * @LastEditors: dyb-dev
 * @LastEditTime: 2024-10-17 12:26:08
 * @FilePath: /web-mobile-template/src/apis/index.ts
 * @Description: 接口模块
 */

/** 导出本次活动相关接口 */
export * from "./activity"
/** 导出用户信息相关接口 */
export * from "./userInfo"

import axios from "axios"

import { isDevEnv, isEnableDebug } from "@/utils"

import { setupApiInterceptor } from "./interceptors"

/** STATIC: 是否启用 `api` 测试数据 如果在开发工具或手机开启调试下仍不需要使用测试数据，只需将 `true` 改为 `false` 即可 */
const ENABLE_API_TEST_DATA = isDevEnv() && isEnableDebug() && true

/**
 * FUN: 设置接口配置
 *
 * @author dyb-dev
 * @date 08/10/2024/  20:47:43
 */
const setupApi = () => {

    const { VITE_API_BASE_PATH } = __PROJECT_INFO__.env

    // 设置请求基础路径
    axios.defaults.baseURL = VITE_API_BASE_PATH

    // 设置接口拦截器
    setupApiInterceptor()

}

export { ENABLE_API_TEST_DATA, setupApi }
