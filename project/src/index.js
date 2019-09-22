// Tree Shaking只支持ES Module
// ES Module为静态引入
// common Module 为动态引入
// Tree Shaking只能静态引入

import { add } from './math'
add(1, 2)