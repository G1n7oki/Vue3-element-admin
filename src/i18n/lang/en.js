export default {
  login: {
    title: 'User Login',
    loginBtn: 'Login',
    usernameRule: 'Username is required',
    passwordRule: 'The password cannot be less than 6 characters',
    desc: `
      Test permission account: <br />
      Provides three types of accounts with permissions: <br />
      1. Super administrator account: super-admin <br />
      2. Administrator account: admin <br />
      3. Test configurable accounts: test <br />
      Password unified as: 123456 <br />
      <br />
      Import user account <br />
      You can log in using the imported user name <br />
      Password unified as: 123456 <br />
      <b>Note: Import users distinguish between Chinese and English libraries</b>
    `
  },
  route: {
    profile: 'Profile',
    user: 'User',
    excelImport: 'Excel Import',
    userManage: 'User Manage',
    userInfo: 'User Info',
    roleList: 'Role List',
    permissionList: 'Permission List',
    article: 'Article',
    articleRanking: 'Article Ranking',
    articleCreate: 'Article Create',
    articleDetail: 'Article Detail',
    articleEditor: 'Article Editor'
  },
  toast: {
    switchLangSuccess: 'Switch language successfully'
  },
  tagsView: {
    refresh: 'Refresh',
    closeRight: 'Close Right',
    closeOther: 'Close Other'
  },
  theme: {
    themeColorChange: 'Theme color change',
    themeChange: 'Theme change'
  },
  universal: {
    title: 'remind',
    confirm: 'confirm',
    cancel: 'cancel'
  },
  navbar: {
    themeChange: 'Theme Modification',
    headerSearch: 'Page Search',
    screenFull: 'ScreenFull',
    lang: 'Globalization',
    guide: 'Guide',
    home: 'Home Page',
    course: '课程主页',
    logout: 'Logout'
  },
  guide: {
    close: '关闭',
    next: '下一个',
    perv: '上一个',
    guideTitle: '引导',
    guideDesc: '打开引导功能',
    hamburgerTitle: '汉堡按钮',
    hamburgerDesc: '打开和关闭左侧菜单',
    breadcrumbTitle: '面包屑',
    breadcrumbDesc: '指示当前页面位置',
    searchTitle: '搜索',
    searchDesc: '页面链接搜索',
    fullTitle: '全屏',
    fullDesc: '页面显示切换',
    themeTitle: '主题',
    themeDesc: '更换项目主题',
    langTitle: '国际化',
    langDesc: '语言切换',
    tagTitle: '标签',
    tagDesc: '已打开页面标签',
    sidebarTitle: '菜单',
    sidebarDesc: '项目功能菜单'
  },
  profile: {
    muted: 'Vue3',
    introduce: '介绍',
    projectIntroduce: '项目介绍',
    projectFunction: '项目功能',
    feature: '功能',
    chapter: '章节',
    author: '作者',
    name: 'Damn',
    job: '一个前端程序员',
    introduction: '这是一句吹牛逼的话'
  },
  userInfo: {
    print: '打印',
    title: '员工信息',
    name: '姓名',
    sex: '性别',
    nation: '名族',
    mobile: '手机号',
    province: '居住地',
    date: '入职时间',
    remark: '备注',
    address: '联系地址',
    experience: '经历',
    major: '专业',
    glory: '荣耀',
    foot: '签字:_______日期:_______'
  },
  permission: {
    name: '权限名称',
    mark: '权限标识',
    desc: '权限描述'
  },
  article: {
    ranking: '排名',
    title: '标题',
    author: '作者',
    publicDate: '发布时间',
    desc: '内容简介',
    action: '操作',
    dynamicTitle: '动态展示',
    show: '查看',
    remove: '删除',
    edit: '编辑',
    dialogTitle1: '确定要删除文章',
    dialogTitle2: '吗?',
    removeSuccess: '文章删除成功',
    roleDialogTitle: '配置角色'
  },
  role: {
    buttonText: '新增角色',
    index: '序号',
    name: '名称',
    desc: '描述',
    action: '操作',
    assignPermissions: '分配权限'
  },
  uploadExcel: {
    upload: '点击上传',
    drop: '将文件拖到此处'
  },
  excel: {
    importExcel: 'excel 导入',
    exportExcel: 'excel 导出',
    exportZip: 'zip 导出',
    name: '姓名',
    mobile: '联系方式',
    avatar: '头像',
    role: '角色',
    openTime: '开通时间',
    action: '操作',
    show: '查看',
    showRole: '员工',
    remove: '删除',
    removeSuccess: '删除成功',
    title: '导出为 excel',
    placeholder: 'excel 文件名称',
    defaultName: '员工管理表',
    close: '取 消',
    confirm: '导 出'
  }
}
