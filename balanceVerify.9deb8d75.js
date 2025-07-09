var __webpack_modules__ = {
    77804: function(e, t, n) {
        var i = n(7914);
        Object.defineProperty(t, "X", {
            value: !0
        }),
        t.Z = void 0,
        n(48410),
        n(25901),
        n(92189),
        n(63238),
        n(91047),
        n(5769),
        n(17460),
        n(14078),
        n(72410),
        n(23938),
        n(92571),
        n(83352),
        n(61013),
        n(52077),
        n(911),
        n(95623),
        n(61514),
        n(52327),
        n(95374),
        n(55849),
        n(40895),
        n(72264),
        n(98010);
        var o = i(n(37196))
          , r = i(n(23112))
          , l = i(n(63762))
          , a = i(n(82979))
          , s = i(n(9705))
          , c = i(n(5933))
          , u = function() {
            return (u = Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , d = function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var i, o, r = n.call(e), a = [];
            try {
                for (; (void 0 === t || 0 < t--) && !(i = r.next()).done; )
                    a.push(i.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (n = r.return) && n.call(r)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
          , f = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var i, o = 0, r = t.length; o < r; o++)
                    !i && o in t || ((i = i || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
            return e.concat(i || Array.prototype.slice.call(t))
        }
          , i = window
          , p = i.report
          , h = i.showPlayerIdInfo
          , n = i.__CommonState
          , v = i.user
          , m = i.midasLogin
          , g = i.__PAY_INFO
          , i = (void 0 === n ? {} : n).queryBalanceConfig
          , n = void 0 === i ? {} : i
          , i = n.viewImages
          , y = void 0 === i ? [] : i
          , n = n.balanceVerifyType
          , w = void 0 === n ? [] : n
          , r = {
            components: {
                PlatSelect: c.default,
                PartitionSelect: s.default
            },
            mixins: [r.default],
            props: {
                page_id: {
                    type: String,
                    default: 'game_buy'
                },
                store: Object,
                user: {
                    type: Object,
                    validator: function(e) {
                        return null === e || e.charac_name && e.userid
                    }
                },
                dlist: {
                    validator: function(e) {
                        return null === e || Array.isArray(e)
                    }
                },
                platforms: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                enableAutoSetScrollTop: Boolean,
                lanres: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                showfindopenid: {
                    type: Boolean,
                    default: !0
                },
                showRoleSuggestion: {
                    type: Boolean,
                    default: !0
                },
                showEdit: {
                    type: Boolean,
                    default: !0
                },
                autoLoginSelected: {
                    type: Boolean,
                    default: !0
                },
                lightInput: {
                    type: Boolean,
                    default: !1
                },
                showSubmitBtn: {
                    type: Boolean,
                    default: !0
                },
                forceLogin: {
                    type: Boolean,
                    default: !1
                },
                isLogin: {
                    type: [Object, Boolean]
                },
                showSignGuide: {
                    type: Boolean,
                    default: !1
                },
                autoFillUser: {
                    type: Boolean,
                    default: !1
                },
                showBalance: {
                    type: Boolean,
                    default: !1
                },
                showErrorTxt: {
                    type: String,
                    default: ''
                },
                balanceVerifySuccessCb: {
                    type: Function,
                    default: function() {}
                },
                verifySendInfo: {
                    type: Object,
                    default: null
                },
                fromVerifySdk: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                var e, t, n, i = this.showBalance && (null == g ? void 0 : g.appid), o = this.autoFillUser || (null === (e = this.user) || void 0 === e ? void 0 : e.bindUserFromUrl) || (null === (e = this.user) || void 0 === e ? void 0 : e.autoFillInfo) || (null === (o = this.user) || void 0 === o ? void 0 : o.logged) || i && localStorage.getItem("read_bind_user_" + (null == g ? void 0 : g.appid));
                return i && localStorage.setItem("read_bind_user_" + (null === (t = window.__PAY_INFO) || void 0 === t ? void 0 : t.appid), ''),
                {
                    shortId: '',
                    errorTxt: '',
                    showDropDown: !1,
                    loading: !1,
                    dropDownLists: [],
                    selectType: 'default',
                    plats: Object.keys((null === (t = this.platforms) || void 0 === t ? void 0 : t.data) || {}),
                    userInfo: o ? this.user : null,
                    selectedInfo: {},
                    showDefaultRole: !o,
                    showModify: !!this.showEdit && !1 !== (null === (n = this.user) || void 0 === n ? void 0 : n.modify),
                    balanceStatus: 'loading',
                    queryCharacText: (null === (n = this.lanres) || void 0 === n ? void 0 : n.queryCharacText) || {},
                    balance: 'xx',
                    balanceVerifyUser: {},
                    balanceVerifyUsers: []
                }
            },
            computed: {
                roleSuggestionInfo: function() {
                    var e = this.showDefaultRole
                      , t = this.dlist
                      , n = this.showRoleSuggestion;
                    return e && t && 1 < t.length && n ? t[0] || [] : null
                },
                showPartitionSelect: function() {
                    var e;
                    return 'partition' === this.selectType && 0 < (null === (e = this.platforms.config) || void 0 === e ? void 0 : e.column)
                },
                showGenerallyTips: function() {
                    var e = this.isLogin
                      , t = this.userInfo
                      , n = this.showSignGuide
                      , i = this.user;
                    return !e && t && n && !(null != i && i.bindUserFromUrl) && h
                },
                limitSystem: function() {
                    var e = this.platforms;
                    return 1 === this.plats.length && e.config.limit
                },
                infoList: function() {
                    var e = this
                      , t = e.lanres
                      , n = e.selectedInfo
                      , i = e.userInfo
                      , o = e.selectType
                      , e = e.platforms;
                    if (!i)
                        return [];
                    var e = e.config
                      , e = (null == e ? void 0 : e.showList) || []
                      , r = 'partition' === o;
                    return f([{
                        class: 'id',
                        title: t.gameIdLoginId,
                        val: i.userid,
                        show: !0
                    }, {
                        class: 'type',
                        title: t.platForm,
                        val: n.name,
                        show: 'system' === o
                    }], d(e.map(function(e) {
                        return {
                            class: 'type',
                            title: t[e + "Title"],
                            val: n[e],
                            show: r
                        }
                    })), !1)
                },
                modify: function() {
                    return !!this.userInfo && !1 !== this.userInfo.modify
                },
                activeSelectStatus: function() {
                    return this.dropDownLists.length && this.showDropDown
                },
                isDisable: function() {
                    var e = this.selectType
                      , t = this.selectedInfo;
                    return 'partition' === e && !t.name
                },
                balanceStatusList: function() {
                    var e = this.lanres.queryCharacText
                      , t = void 0 === e ? {} : e
                      , n = t.balanceView
                      , i = t.notView
                      , o = t.loginView
                      , r = t.linkView
                      , a = t.loadingView
                      , s = y.balanceIcon
                      , l = y.questionIcon
                      , e = y.loginIcon
                      , t = y.linkIcon;
                    return [{
                        name: 'balance',
                        class: 'balance',
                        val: 'xx' === this.balance ? a : null == n ? void 0 : n.replace('{0}', this.balance),
                        image: s
                    }, {
                        name: 'notView',
                        class: 'not-view',
                        val: i,
                        image: l
                    }, {
                        name: 'login',
                        class: 'login-view',
                        val: o,
                        image: e
                    }, {
                        name: 'link',
                        class: 'link-view',
                        val: r,
                        image: t
                    }, {
                        name: 'loading',
                        class: 'loading-view',
                        val: a
                    }]
                },
                currentBindInfo: function() {
                    var e;
                    return {
                        userid: (null === (e = this.userInfo) || void 0 === e ? void 0 : e.userid) || '',
                        openid: (null === (e = this.userInfo) || void 0 === e ? void 0 : e.openid) || ''
                    }
                }
            },
            created: function() {
                this.showBalance && this.getBalanceVerifyUsers()
            },
            mounted: function() {
                var e = this.userInfo;
                this.isLogin && this.showDefaultRole && this.dlist && 1 === this.dlist.length && h && (this.userInfo = this.dlist[0]),
                e && this.$emit('login', {
                    openid: e.openid,
                    userid: e.shortId || e.userid,
                    charac_name: (0,
                    l.default)(e.charac_name),
                    verifytype: e.verifytype || ''
                })
            },
            watch: {
                platforms: {
                    handler: function() {
                        this.selectType = this.getSelectType(),
                        this.fillSelectedInfo()
                    },
                    deep: !0,
                    immediate: !0
                },
                currentBindInfo: {
                    handler: function(e) {
                        this.showBalance && (e.userid ? this.initBalanceStatus() : this.balanceStatus = 'loading',
                        this.queryVerifyUser())
                    },
                    deep: !0,
                    immediate: !0
                },
                showErrorTxt: function(e) {
                    this.errorTxt = e
                },
                balanceStatus: {
                    handler: function(e) {
                        this.userInfo && this.showBalance && 'balance' !== e && p.view((null == p ? void 0 : p.page) + "_balance", {
                            status: {
                                link: 'linktoview',
                                login: 'logintoview',
                                notView: 'notviewable',
                                loading: 'loading'
                            }[e]
                        }),
                        'balance' === e && this.queryBalance(),
                        this.$emit('balance-status', {
                            balanceStatus: this.balanceStatus
                        })
                    }
                },
                userInfo: {
                    handler: function(e) {
                        this.$emit('edit', e)
                    },
                    immediate: !0
                },
                shortId: function(e, t) {
                    e !== t && this.errorTxt.length && this.resetErrorStatus()
                },
                showDropDown: function(e) {
                    e && (this.showDefaultRole = !1)
                },
                dlist: {
                    handler: function(e) {
                        e && (this.dropDownLists = e)
                    },
                    deep: !0,
                    immediate: !0
                }
            },
            methods: {
                queryBalance: function() {
                    var t = this;
                    this.store.getBalanceByAppid().then(function(e) {
                        0 === e.ret ? (p.view((null == p ? void 0 : p.page) + "_balance", {
                            status: 'viewable'
                        }),
                        t.balance = e.balance,
                        t.userInfo = u(u(u({}, t.balanceVerifyUser), t.userInfo), {
                            balance: e.balance
                        }),
                        t.$emit('balance-status', {
                            balanceStatus: t.balanceStatus,
                            balance: e.balance
                        })) : (t.balanceStatus = 'loading',
                        (0,
                        a.default)({
                            msg: 'System busy, please try again later.'
                        }))
                    }).catch(function() {
                        t.balanceStatus = 'loading',
                        (0,
                        a.default)({
                            msg: 'System busy, please try again later.'
                        })
                    })
                },
                getBalanceVerifyUsers: function() {
                    var n = this
                      , e = (null == g ? void 0 : g.appid) || '';
                    this.store.getBindUsersByAppid(e, 'balance').then(function(e) {
                        var t = e.ret
                          , e = e.data;
                        n.balanceVerifyUsers = 0 === t && (null == e ? void 0 : e.bindUsers) || []
                    }).catch(function() {
                        n.balanceVerifyUsers = []
                    })
                },
                handleInputEnter: function(e) {
                    null !== (e = null == e ? void 0 : e.target) && void 0 !== e && e.blur()
                },
                isBalanceVerify: function(e) {
                    return this.showBalance && w.includes(e.verifytype)
                },
                queryVerifyUser: function() {
                    var e, t, n = this, i = this.userInfo;
                    i && v && (e = i.openid,
                    t = i.userid,
                    i = i.zoneid,
                    this.store.getVerifyUserByUserId({
                        openid: e,
                        userid: t,
                        zone_id: i
                    }).then(function(e) {
                        var t;
                        0 === e.ret && ((e.data || []).verifyUsers.length && (t = null === (t = e.data) || void 0 === t ? void 0 : t.verifyUsers.find(function(e) {
                            return w.includes(e.verifytype)
                        })) ? (n.balanceVerifyUser = t,
                        t = v && (null == t ? void 0 : t.uid) === v.uid,
                        n.balanceStatus = t ? 'balance' : 'notView') : (n.balanceVerifyUser = {},
                        n.balanceStatus = n.hasBalanceVerifyUsers() ? 'notView' : 'link'))
                    }))
                },
                initBalanceStatus: function() {
                    v || (this.balanceStatus = 'login')
                },
                hasBalanceVerifyUsers: function() {
                    return !(null == v || !v.uid || !this.balanceVerifyUsers.length)
                },
                isCurrentGameUserVerifiedByLoginUser: function() {
                    var t = this.userInfo;
                    if (!t)
                        return !1;
                    var e = this.balanceVerifyUsers.find(function(e) {
                        return (null == e ? void 0 : e.userid) === (null == t ? void 0 : t.userid)
                    });
                    return !(null == e || !e.uid)
                },
                handleBalanceStatus: function() {
                    var e = this
                      , t = this.balanceStatus;
                    ['link', 'notView', 'login'].includes(t) && {
                        link: function() {
                            p.click('balance_linkaccount'),
                            e.linkAccount({
                                userInfo: e.userInfo
                            })
                        },
                        notView: function() {
                            p.click('balance_notView'),
                            e.linkAccount({
                                userInfo: e.userInfo
                            })
                        },
                        login: function() {
                            null != m && m.login({
                                pageConfig: {
                                    from: (null == p ? void 0 : p.page) + "_balance"
                                }
                            })
                        }
                    }[t]()
                },
                mergePartition: function() {
                    var t = this.platforms || {}
                      , n = [];
                    return Object.keys(t).forEach(function(e) {
                        e = (null === (e = t[e]) || void 0 === e ? void 0 : e.partition) || [];
                        n = n.concat(e)
                    }),
                    n
                },
                findPartition: function(e, t) {
                    var n = t.toString();
                    return this.store._getMutipZoneidCharac() && (n = n.replace(/_(.*)/g, '')),
                    e.find(function(e) {
                        return e.zoneid === n
                    })
                },
                getPartitionByZoneid: function(o) {
                    var r = this;
                    if (!o)
                        return {};
                    var a, e = this.platforms, t = e.data, n = e.config, e = n.dataLayers, s = void 0 === e ? 2 : e, n = n.columnType, l = void 0 === n ? [] : n;
                    return Object.keys(t).some(function(n) {
                        var i = t[n] || {};
                        if (3 === s)
                            return Object.keys(i).some(function(e) {
                                var t = (null === (t = i[e]) || void 0 === t ? void 0 : t.partition) || [];
                                return !!(a = r.findPartition(t, o)) && (a[l[0]] = n,
                                a[l[1]] = e,
                                a[l[2]] = a.name,
                                !0)
                            });
                        var e = (null === i ? void 0 : i.partition) || [];
                        return !!(a = r.findPartition(e, o)) && (a[l[0]] = n,
                        a[l[1]] = a.name,
                        !0)
                    }),
                    a || {}
                },
                getSystemByZoneid: function(t) {
                    if (!t)
                        return {};
                    var n, i = this.platforms.data;
                    return Object.keys(i).some(function(e) {
                        e = i[e];
                        return e.zoneid === t.toString() && (n = e,
                        !0)
                    }),
                    n
                },
                fillSelectedInfo: function() {
                    var e = this.userInfo
                      , t = this.platforms.config;
                    t && (t = t.selectedZoneid,
                    e && (t = e.zoneid),
                    'partition' === this.selectType ? this.selectPartition(t) : 'system' === this.selectType && this.selectPlatform(t))
                },
                getSelectType: function() {
                    var e = this.platforms
                      , t = e.data
                      , e = e.config;
                    return t && 'object' == typeof t && (null == e ? void 0 : e.type) || 'default'
                },
                toggleDropDown: function() {
                    this.showDropDown = !this.showDropDown
                },
                showFoundOpenidPop: function() {
                    this.$emit('show_find_openid_pop')
                },
                resetErrorStatus: function() {
                    this.errorTxt = '',
                    this.$emit('update:showErrorTxt', '')
                },
                setShortId: function(e) {
                    this.shortId = e
                },
                setErrorStatus: function(e) {
                    'string' == typeof e && (this.errorTxt = e)
                },
                untypeItem: function(t) {
                    var e = this;
                    this.dropDownLists = this.dropDownLists.filter(function(e) {
                        return e.userid !== t.userid
                    }),
                    this.store.unbindUser(t),
                    this.shortId === t.userid && this.$nextTick(function() {
                        e.shortId = ''
                    })
                },
                selectPlatform: function(e) {
                    this.selectedInfo = Object.assign({}, this.getSystemByZoneid(e)),
                    this.setPlatformInfo()
                },
                selectPartition: function(e) {
                    this.selectedInfo = Object.assign({}, this.getPartitionByZoneid(e)),
                    this.setPlatformInfo()
                },
                setPlatformInfo: function() {
                    var e;
                    this.store.setPF(u(u({}, this.selectedInfo), {
                        zoneid: (null === (e = this.userInfo) || void 0 === e ? void 0 : e.zoneid) || this.selectedInfo.zoneid
                    })),
                    this.resetErrorStatus(),
                    this.shortId && this.getGameInfo()
                },
                clearInput: function() {
                    this.shortId = '',
                    this.resetErrorStatus(),
                    this.$refs.inputbox.focus()
                },
                getElementOffsetTop: function(e) {
                    return 0 === e.offsetTop && e.offsetParent ? this.getElementOffsetTop(e.offsetParent) : 0 < e.offsetTop ? e.offsetTop : 0
                },
                adaptAndroidInput: function() {
                    this.enableAutoSetScrollTop && /android/.test(navigator.userAgent.toLowerCase()) && this.$refs.bindInputBox.scrollIntoView()
                },
                clickInput: function() {
                    this.adaptAndroidInput()
                },
                focusInput: function() {
                    this.showDropDown = !0,
                    this.adaptAndroidInput(),
                    this.resetErrorStatus()
                },
                blurInput: function() {
                    this.showDropDown = !1,
                    this.getGameInfo()
                },
                onInput: function(e) {
                    this.$emit('input', e.target.value),
                    this.shortId !== e.target.value && this.store.cancelReq()
                },
                selectItem: function(e) {
                    var t = this;
                    this.shortId = e.userid,
                    this.showDropDown = !1,
                    this.showDefaultRole = !1,
                    this.autoLoginSelected && this.$nextTick(function() {
                        switch (t.shortId = e.userid,
                        t.selectType) {
                        case 'partition':
                            t.selectPartition(e.zoneid);
                            break;
                        case 'system':
                            t.selectPlatform(e.zoneid);
                            break;
                        default:
                            t.getGameInfo()
                        }
                    })
                },
                changeOpenid: function() {
                    p.click('playerid_change'),
                    window.fbReport.doReport('ChangePlayerID'),
                    this.userInfo = null,
                    this.resetErrorStatus(),
                    this.store.setOpenid({
                        openid: null
                    }),
                    this.store._getMutipZoneidCharac() && this.store.setPF(this.selectedInfo)
                },
                getGameInfo: function() {
                    if (p.click('playerid_confirm', {
                        playerid: this.shortId
                    }),
                    this.resetErrorStatus(),
                    window.fbReport.doReport('ConfirmPlayerID'),
                    !this.isDisable && !this.loading) {
                        var e = this.plats
                          , t = this.selectType
                          , n = this.selectedInfo
                          , i = this.lanres
                          , s = this;
                        if (e.length) {
                            if ('system' === t && !n.zoneid)
                                return void (this.errorTxt = i.pfRequired);
                            if ('partition' === t && !n.zoneid)
                                return void (this.errorTxt = i.partitionRequired)
                        }
                        this.shortId ? (this.showDropDown = !1,
                        this.loading = !0,
                        n = {
                            shortId: this.shortId,
                            area_id: null == n ? void 0 : n.area_id,
                            zone_id: null == n ? void 0 : n.zone_id,
                            plat_id: null == n ? void 0 : n.plat_id,
                            __product_id: (0,
                            o.default)().pid || ''
                        },
                        this.store.getCharac(n).then(function(e) {
                            s.$report && s.$report.clickItem('enter_playerid', 'enter_playerid', !0, {
                                scene_info: {
                                    page_id: s.page_id
                                },
                                result_info: 'success'
                            });
                            var t, n = e.zoneid, i = e.openid, o = e.charac_name, r = e.register_country, a = e.roleDetail;
                            s.loading = !1,
                            s.userInfo = {
                                zoneid: n,
                                openid: i,
                                userid: s.shortId,
                                charac_name: (0,
                                l.default)(o)
                            },
                            s.dropDownLists.filter(function(e) {
                                return e.userid === s.shortId
                            }).length || (t = '',
                            s.isCurrentGameUserVerifiedByLoginUser() && (t = 'facebook' === (null == v ? void 0 : v.providerType) ? 'facebook' : 'email-balance'),
                            s.dropDownLists.unshift({
                                zoneid: n,
                                openid: i,
                                userid: s.shortId,
                                charac_name: (0,
                                l.default)(o),
                                verifytype: t
                            })),
                            s.$emit('login', {
                                openid: i,
                                userid: s.shortId,
                                charac_name: (0,
                                l.default)(o),
                                region: e.region,
                                register_country: r,
                                roleDetail: a
                            })
                        }).catch(function(e) {
                            s.$report && s.$report.clickItem('enter_playerid', 'enter_playerid', !0, {
                                scene_info: {
                                    page_id: s.page_id
                                },
                                result_info: 'failed'
                            }),
                            s.loading = !1,
                            9 === e.ret ? (s.errorTxt = window.langResource.areaIdInvalid || 'invalid player id',
                            p.click('not-match-gameid')) : 10 !== e.ret && (s.errorTxt = (window.langResource.idInvalid || window.langResource.gameIdInvalid || 'invalid player id') + ("(" + (e.err_code || e.ret || '')) + ")"),
                            '1-001' === e.ret && (s.errorTxt = (null === (e = null === (e = window.langResource) || void 0 === e ? void 0 : e.userTabBox) || void 0 === e ? void 0 : e.bannedUserTips) || 'Abnormal Player ID')
                        })) : this.errorTxt = i.idRequired || 'Player ID is required'
                    }
                },
                showExclSvcPop: function() {
                    p.click('checkdetail'),
                    this.$emit('show-excl-svc-pop')
                },
                gotoLogin: function() {
                    p.click('signin-guidance'),
                    this.$emit('goto-login')
                }
            }
        };
        t.Z = r
    },
    62710: function(e, t, n) {
        var i = n(7914);
        Object.defineProperty(t, "X", {
            value: !0
        }),
        t.Z = void 0,
        n(48410),
        n(92571),
        n(83352),
        n(52327),
        n(95374),
        n(55849),
        n(5769),
        n(88810),
        n(61013);
        var o = n(54626)
          , n = i(n(4838))
          , r = function() {
            return (r = Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        (0,
        n.default)();
        n = {
            props: {
                hideClose: {
                    type: Boolean,
                    default: !1
                },
                platforms: {
                    type: Object,
                    default: function() {
                        return {
                            config: {},
                            data: {}
                        }
                    }
                },
                lanres: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                isSdk: {
                    type: Boolean,
                    default: !1
                },
                closeIframe: {
                    type: Function,
                    default: function() {}
                },
                selectPartition: {
                    type: Function,
                    default: function() {}
                },
                toastMsg: {
                    type: String,
                    default: ''
                }
            },
            data: function() {
                var e;
                return {
                    selectedPlat: '',
                    selectedGroup: '',
                    selected: '',
                    plats: [],
                    groupList: [],
                    partitionList: [],
                    showPartitionList: !1,
                    selectedInfo: {},
                    selectPartitionPopLan: (null === (e = this.lanres) || void 0 === e ? void 0 : e.selectPartitionPop) || {}
                }
            },
            watch: {
                platforms: {
                    handler: function() {
                        this.assignDataToThis()
                    },
                    deep: !0,
                    immediate: !0
                }
            },
            computed: {
                serialNumberSize: function() {
                    var e;
                    return (null === (e = this.platforms.config) || void 0 === e ? void 0 : e.serialNumberSize) || 10
                }
            },
            methods: {
                closePop: function() {
                    this.isSdk ? this.closeIframe('close') : this.$emit('update:show', !1)
                },
                processData: function(e) {
                    var t, n = this, i = (e = void 0 === e ? {} : e).platName, o = e.groupName, r = e.partitionName, a = this.getFormatPlatform(), s = Object.keys(a || {}), l = i || this.selectedPlat || s[0], e = Object.keys(a[l] || {}), i = o || this.selectedGroup || e[0], o = a[l][i];
                    o || (i = e[0],
                    o = a[l][i]);
                    r = r || this.selected || (null === (t = null == o ? void 0 : o[0]) || void 0 === t ? void 0 : t.name);
                    return {
                        selected: r = !o.find(function(e) {
                            return e.name === n.selected
                        }) ? null === (t = null == o ? void 0 : o[0]) || void 0 === t ? void 0 : t.name : r,
                        selectedPlat: l,
                        selectedGroup: i,
                        plats: s,
                        groupList: e,
                        partitionList: o
                    }
                },
                assignDataToThis: function(e) {
                    Object.assign(this, this.processData(e))
                },
                fillFormatPlatform: function(e) {
                    var t = this.platforms.config || {}
                      , n = t.dataLayers
                      , n = void 0 === n ? 2 : n
                      , t = t.disableSerialNumber;
                    void 0 !== t && t || (n += 1);
                    var i = {};
                    switch (n) {
                    case 1:
                        i.default = {
                            default: e
                        };
                        break;
                    case 3:
                        i = e;
                        break;
                    default:
                        i.default = e
                    }
                    return i
                },
                getFormatPlatform: function() {
                    var t = this
                      , e = this.platforms
                      , n = e.data
                      , i = void 0 === n ? {} : n
                      , e = e.config
                      , o = void 0 === e ? {} : e
                      , r = {}
                      , e = o.dataLayers
                      , a = void 0 === e ? 2 : e;
                    return Object.keys(i).forEach(function(n) {
                        var e;
                        a <= 2 ? (e = (null === (e = i[n]) || void 0 === e ? void 0 : e.partition) || [],
                        r[n] = o.disableSerialNumber ? e : t.generatePartitionGroup(e)) : (r[n] = {},
                        (Object.keys(i[n]) || []).forEach(function(e) {
                            var t = (null === (t = i[n][e]) || void 0 === t ? void 0 : t.partition) || [];
                            r[n][e] = t
                        }))
                    }),
                    this.fillFormatPlatform(r)
                },
                generatePartitionGroup: function(e) {
                    var n = this.serialNumberSize
                      , e = (0,
                    o.chunk)(e, n);
                    return Object.fromEntries(e.map(function(e, t) {
                        return [n * t + 1 + "-" + (n * t + e.length), e]
                    }))
                },
                selectPlatHandler: function(e) {
                    this.assignDataToThis({
                        platName: e
                    })
                },
                selectGroupHandler: function(e) {
                    this.assignDataToThis({
                        groupName: e
                    })
                },
                selectPartitionHandler: function(e) {
                    this.assignDataToThis({
                        partitionName: e
                    })
                },
                handleConfirm: function() {
                    var t = this
                      , e = this.partitionList.find(function(e) {
                        return e.name === t.selected
                    });
                    e && this.selectPartition(r(r({}, e), {
                        regionName: this.selectedGroup
                    }))
                }
            }
        };
        t.Z = n
    },
    37594: function(e, t, n) {
        Object.defineProperty(t, "X", {
            value: !0
        }),
        t.Z = void 0,
        n(83352),
        n(92571),
        n(48410),
        n(95374),
        n(55849),
        n(5769),
        n(88810),
        n(61013);
        var i = n(54626)
          , n = {
            props: {
                platforms: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                selectPartition: {
                    type: Function,
                    default: function() {}
                },
                selectedInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                lanres: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    selectedPlat: "",
                    selectedGroup: "",
                    plats: [],
                    groupList: [],
                    partitionList: [],
                    showPartitionList: !1
                }
            },
            computed: {
                selected: function() {
                    return this.selectedInfo.name
                },
                columnClass: function() {
                    return "row-" + ["one", "two", "three"][this.showColumnNum - 1]
                },
                showColumnNum: function() {
                    return this.platforms.config.column || 1
                },
                serialNumberSize: function() {
                    var e;
                    return (null === (e = this.platforms.config) || void 0 === e ? void 0 : e.serialNumberSize) || 10
                }
            },
            created: function() {
                this.assignDataToThis()
            },
            methods: {
                processData: function(e) {
                    var t = (e = void 0 === e ? {} : e).platName
                      , n = e.groupName
                      , i = this.getFormatPlatform()
                      , o = Object.keys(i || {})
                      , r = t || this.selectedPlat || o[0]
                      , e = Object.keys(i[r] || {})
                      , t = n || this.selectedGroup || e[0]
                      , n = i[r][t];
                    return n || (t = e[0],
                    n = i[r][t]),
                    {
                        selectedPlat: r,
                        selectedGroup: t,
                        plats: o,
                        groupList: e,
                        partitionList: n
                    }
                },
                assignDataToThis: function(e) {
                    Object.assign(this, this.processData(e))
                },
                fillFormatPlatform: function(e) {
                    var t = this.platforms.config || {}
                      , n = t.dataLayers
                      , n = void 0 === n ? 2 : n
                      , t = t.disableSerialNumber;
                    void 0 !== t && t || (n += 1);
                    var i = {};
                    switch (n) {
                    case 1:
                        i.default = {
                            default: e
                        };
                        break;
                    case 3:
                        i = e;
                        break;
                    default:
                        i.default = e
                    }
                    return i
                },
                getFormatPlatform: function() {
                    var t = this
                      , e = this.platforms
                      , i = e.data
                      , o = e.config
                      , r = {}
                      , e = o.dataLayers
                      , a = void 0 === e ? 2 : e;
                    return Object.keys(i).forEach(function(n) {
                        var e;
                        a <= 2 ? (e = (null === (e = i[n]) || void 0 === e ? void 0 : e.partition) || [],
                        r[n] = o.disableSerialNumber ? e : t.generatePartionGroup(e)) : (r[n] = {},
                        (Object.keys(i[n]) || []).forEach(function(e) {
                            var t = (null === (t = i[n][e]) || void 0 === t ? void 0 : t.partition) || [];
                            r[n][e] = t
                        }))
                    }),
                    this.fillFormatPlatform(r)
                },
                generatePartionGroup: function(e) {
                    var n = this.serialNumberSize
                      , e = (0,
                    i.chunk)(e, n);
                    return Object.fromEntries(e.map(function(e, t) {
                        return [n * t + 1 + "-" + (n * t + e.length), e]
                    }))
                },
                togglePartitionList: function() {
                    this.showPartitionList = !this.showPartitionList
                },
                selectPlatHandler: function(e) {
                    this.assignDataToThis({
                        platName: e
                    })
                },
                selectGroupHandler: function(e) {
                    this.assignDataToThis({
                        groupName: e
                    })
                },
                selectPartitionHandler: function(e) {
                    this.togglePartitionList(),
                    this.selectPartition(e.zoneid)
                }
            }
        };
        t.Z = n
    },
    13352: function(e, t, n) {
        Object.defineProperty(t, "X", {
            value: !0
        }),
        t.Z = void 0,
        n(83352),
        n(92571);
        n = {
            props: {
                platforms: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                pfDefaultSelect: {
                    type: String,
                    default: "Choose"
                },
                selectPlatform: {
                    type: Function,
                    default: function() {}
                },
                selectedInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                lightInput: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    selected: this.selectedInfo.name || "",
                    showPlatSelect: !1
                }
            },
            computed: {
                systemList: function() {
                    return Object.keys(this.platforms.data || {})
                }
            },
            methods: {
                toggleSelect: function() {
                    this.showPlatSelect = !this.showPlatSelect
                },
                selectSystem: function(e) {
                    var t = this.platforms.data;
                    this.selected = e,
                    this.toggleSelect(),
                    this.selectPlatform(t[e].zoneid)
                }
            }
        };
        t.Z = n
    },
    99173: function(e, t) {
        Object.defineProperty(t, "X", {
            value: !0
        }),
        t.Z = void 0;
        var n = {
            props: {
                text: {
                    type: String,
                    default: ''
                }
            }
        };
        t.Z = n
    },
    89402: function(e, t, n) {
        var i = n(7914);
        Object.defineProperty(t, "X", {
            value: !0
        }),
        t.Z = void 0,
        n(48410),
        n(63238),
        n(61418),
        n(25901),
        n(92189),
        n(91047),
        n(5769),
        n(17460),
        n(14078),
        n(72410),
        n(23938),
        n(52077),
        n(911),
        n(98010),
        n(95623),
        n(61514),
        n(83352),
        n(26252),
        n(52327),
        n(72264),
        n(82759),
        n(40895),
        n(61013);
        var s = i(n(41940))
          , o = i(n(82989))
          , c = i(n(93318))
          , r = i(n(30922))
          , a = i(n(37996))
          , l = i(n(54032))
          , u = i(n(50707))
          , d = function() {
            return (d = Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , f = function(e, a, s, l) {
            return new (s = s || Promise)(function(n, t) {
                function i(e) {
                    try {
                        r(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    try {
                        r(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                        e(t)
                    }
                    )).then(i, o)
                }
                r((l = l.apply(e, a || [])).next())
            }
            )
        }
          , p = function(n, i) {
            var o, r, a, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(t) {
                return function(e) {
                    return function(t) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (o = 1,
                                r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, t[1])).done)
                                    return a;
                                switch (r = 0,
                                (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    r = t[1],
                                    t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1],
                                        a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2],
                                        s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                t = i.call(n, s)
                            } catch (e) {
                                t = [6, e],
                                r = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & t[0])
                            throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        }
          , h = function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var i, o, r = n.call(e), a = [];
            try {
                for (; (void 0 === t || 0 < t--) && !(i = r.next()).done; )
                    a.push(i.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (n = r.return) && n.call(r)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
          , v = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var i, o = 0, r = t.length; o < r; o++)
                    !i && o in t || ((i = i || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
            return e.concat(i || Array.prototype.slice.call(t))
        }
          , m = window.report
          , i = window.loginConfig
          , n = void 0 === i ? {} : i
          , i = window.queryBalanceConfig
          , g = void 0 === i ? {} : i
          , i = g.viewImages
          , y = void 0 === i ? {} : i
          , i = n.thirdPartyList
          , w = void 0 === i ? [] : i
          , _ = n.emailLoginInfo
          , b = window.innerWidth < 1024
          , l = {
            mixins: [a.default],
            props: {
                hideSuccessPage: {
                    type: Boolean,
                    default: !1
                },
                hideClose: {
                    type: Boolean,
                    default: !1
                },
                dlist: {
                    validator: function(e) {
                        return null === e || Array.isArray(e)
                    }
                },
                userInfo: {
                    type: Object,
                    validator: function(e) {
                        return null === e || e.charac_name && e.userid
                    }
                },
                show: {
                    type: Boolean,
                    default: !1
                },
                lanres: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                showResultPop: {
                    type: Boolean,
                    default: !1
                },
                showTipsPop: {
                    type: Boolean,
                    default: !1
                },
                tipsType: {
                    type: String,
                    default: ''
                },
                titleName: {
                    type: String,
                    default: ''
                },
                type: {
                    type: String,
                    default: 'link'
                },
                gameInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                closeIframe: {
                    type: Function,
                    default: function() {}
                },
                showVip: {
                    type: Boolean,
                    default: !1
                },
                baseInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                platforms: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                updateUserInfo: {
                    type: Function,
                    default: function() {}
                },
                showModule: {
                    type: String,
                    default: 'login'
                },
                loginUser: {
                    type: Object,
                    default: null
                },
                showGameEmail: {
                    type: Boolean,
                    default: !1
                }
            },
            components: {
                BindInput: r.default,
                TencentSafety: l.default
            },
            data: function() {
                var e, t, n = this.lanres.nativeGameLogin, i = n.linkWithVerificationCode, o = n.otherTips, r = n.loginAccountText, n = {
                    titleName: (null === (e = this.gameInfo) || void 0 === e ? void 0 : e.titleName) || '',
                    showGameLogin: !1
                };
                return {
                    popLan: this.lanres.bindGameAccountPop || {},
                    showCheckCodeGuide: !0,
                    timeCounter: null,
                    showtime: 60,
                    loading: !1,
                    verifyCode: '',
                    showVerifyCodeError: !1,
                    isOnFocus: !1,
                    verifyCodeErrorMsg: '',
                    showErrorTxt: '',
                    balanceVerifyUsers: [],
                    swiperActiveIndex: 0,
                    swiperList: [],
                    swiperScroll: !1,
                    swiperInstance: null,
                    canBindPlayerId: !1,
                    checkBindLoading: !1,
                    showBigGuideImage: !1,
                    isLogin: !(null === (e = this.loginUser) || void 0 === e || !e.uid),
                    country: (null === (e = this.baseInfo) || void 0 === e ? void 0 : e.country) || (null === (t = null === window || void 0 === window ? void 0 : window.__PAY_INFO) || void 0 === t ? void 0 : t.country),
                    verifySendInfo: {
                        desc: null === (t = this.lanres.bindGameAccountPop) || void 0 === t ? void 0 : t.bindSendTips,
                        point: 0,
                        image: y.sendPointIcon || ''
                    },
                    marqueeWidth: 0,
                    leftPosition: 0,
                    marqueeIntervalId: null,
                    nativeGameLoginConfig: n,
                    verifyType: 'code',
                    nativeGameLoginLan: {
                        linkWithVerificationCode: i,
                        otherTips: o,
                        loginAccountText: r
                    }
                }
            },
            computed: {
                nativeGameLinkButtonText: function() {
                    var e;
                    return null === (e = null === (e = this.lanres.nativeGameLogin) || void 0 === e ? void 0 : e.linkButtonText) || void 0 === e ? void 0 : e.replace('{0}', (null === (e = this.nativeGameLoginConfig) || void 0 === e ? void 0 : e.titleName) || '')
                },
                currentInfo: function() {
                    var e, t;
                    return {
                        appid: (null === (e = this.gameInfo) || void 0 === e ? void 0 : e.appid) || (null === (t = null === window || void 0 === window ? void 0 : window.__PAY_INFO) || void 0 === t ? void 0 : t.appid),
                        country: (null === (t = this.baseInfo) || void 0 === t ? void 0 : t.country) || (null === (t = null === window || void 0 === window ? void 0 : window.__PAY_INFO) || void 0 === t ? void 0 : t.country)
                    }
                },
                typeLan: function() {
                    var e = this.popLan
                      , t = this.type;
                    return {
                        roleTitle: null == e ? void 0 : e[t + "RoleTitle"],
                        roleDesc: null == e ? void 0 : e[t + "RoleDesc"],
                        roleWarning: null == e ? void 0 : e[t + "RoleWarning"]
                    }
                },
                pageChangeProps: function() {
                    return {
                        show: this.show,
                        showModule: this.showModule
                    }
                },
                userChangeProps: function() {
                    var e = this.userInfo || {};
                    return {
                        userid: e.userid,
                        openid: e.openid,
                        zoneid: e.zoneid
                    }
                },
                filterThirdPartyList: function() {
                    var t = this
                      , n = this.currentInfo.appid
                      , e = g.supportGameEmailVerifyList
                      , i = void 0 === e ? [] : e
                      , e = (null == w ? void 0 : w.filter(function(e) {
                        return t.isShowThirdPartyLogin({
                            thirdPartyInfo: e,
                            gameAppId: n
                        })
                    })) || [];
                    return _ && (null != _ && _.supportVerifyWithoutGameEmail || i.includes(n)) && e.push(_),
                    e
                },
                hasGameLogin: function() {
                    var e = null === (t = this.currentInfo) || void 0 === t ? void 0 : t.appid;
                    if (!e)
                        return !1;
                    var t = this.getGameThirdPartyInfo();
                    return !!t && this.isShowThirdPartyLogin({
                        thirdPartyInfo: t,
                        gameAppId: e
                    })
                }
            },
            watch: {
                pageChangeProps: {
                    handler: function(e) {
                        var t = e.show
                          , e = e.showModule;
                        if (t) {
                            if (this.getBalanceVerifyUsers(),
                            this.handleNativeGameLoginConfig(),
                            m.page || (m.page = 'balance-verify-sdk'),
                            'login' === e)
                                return this.handleMarquee(),
                                null != m && m.view(m.page + "_linkaccount_login"),
                                void (null !== s.default && void 0 !== s.default && s.default.exposureModule('link_account_login'));
                            if ('bindRole' !== e)
                                'checkCode' === e && (this.marqueeWidth = 0,
                                this.leftPosition = 0,
                                this.pauseMarquee(),
                                null != m && m.view(m.page + "_balance_verifycode"),
                                null !== s.default && void 0 !== s.default && s.default.exposureModule('account_link_verification'));
                            else {
                                if (this.handleMarquee(),
                                'code' === this.verifyType)
                                    return null != m && m.view(m.page + "_balance_linkaccount"),
                                    void (null !== s.default && void 0 !== s.default && s.default.exposureModule('account_link'));
                                e = (this.nativeGameLoginConfig || {}).name;
                                null !== s.default && void 0 !== s.default && s.default.exposureModule('account_link_choose', e)
                            }
                        }
                    },
                    immediate: !0,
                    deep: !0
                },
                userChangeProps: {
                    handler: function(e) {
                        this.showErrorTxt = '';
                        var t = e.userid
                          , n = e.openid
                          , e = e.zoneid;
                        t && n && e && (this.checkPlayerIdCanBind(),
                        this.showVip && this.handleSendPoint())
                    },
                    immediate: !0,
                    deep: !0
                },
                showGameEmail: {
                    handler: function(e) {
                        e && (this.verifyType = 'code')
                    },
                    immediate: !0
                }
            },
            mounted: function() {
                this.initMarquee()
            },
            beforeDestroy: function() {
                this.marqueeIntervalId && this.pauseMarquee()
            },
            methods: {
                handleEasyLoginError: function(e) {
                    var t = e.gameSdkConfig
                      , e = e.action;
                    if ('msdkLinkFail' === e)
                        return this.$emit('update:showTipsPop', !0),
                        this.$emit('update:tipsType', 'msdkLinkFail'),
                        void setTimeout(function() {
                            var e;
                            null !== (e = null === window || void 0 === window ? void 0 : window.midasLogin) && void 0 !== e && e.hideLoginIframe()
                        }, 500);
                    'gameLinkFail' === e && 'msdk' === (null == t ? void 0 : t.authType) && (this.$emit('update:showTipsPop', !0),
                    this.$emit('update:tipsType', 'msdkLinkFail'))
                },
                getGameThirdPartyInfo: function() {
                    var t = this.currentInfo.appid;
                    return null == w ? void 0 : w.find(function(e) {
                        return e.appid === t && 'NativeGameLogin' === e.type
                    })
                },
                getDeviceInfo: function() {
                    var e;
                    try {
                        return ((null === (e = new o.default) || void 0 === e ? void 0 : e.getResult()) || {}).device
                    } catch (e) {}
                },
                isShowThirdPartyLogin: function(e) {
                    var t = e.thirdPartyInfo
                      , n = e.gameAppId
                      , i = g.supportGameEmailVerifyList
                      , o = void 0 === i ? [] : i
                      , r = t.showEntryInGames
                      , a = t.hideEntryInSdkWebView
                      , s = t.supportVerifyWithoutGameEmail
                      , l = void 0 !== s && s
                      , c = t.hideEntryHostRegExpList
                      , e = void 0 === c ? [] : c
                      , i = t.hideEntryInEasyLogin
                      , s = t.showInMobile
                      , c = void 0 !== s && s
                      , s = t.type
                      , s = void 0 === s ? '' : s
                      , t = t.appid
                      , t = void 0 === t ? '' : t;
                    return (void 0 === i || !i) && ((void 0 === a || !a || '1' !== (null === sessionStorage || void 0 === sessionStorage ? void 0 : sessionStorage.getItem('FROM_BUY_SDK'))) && ((!e.length || !e.some(function(e) {
                        return new RegExp(e).test(location.hostname)
                    })) && ('NativeGameLogin' === s ? !(c && 768 < window.innerWidth && 'tablet' !== (null === (c = this.getDeviceInfo()) || void 0 === c ? void 0 : c.type)) && n === t : !(!l && !o.includes(n)) && (!r || Array.isArray(r) && (null == r ? void 0 : r.includes(n))))))
                },
                handleNativeGameLoginConfig: function() {
                    if (this.hasGameLogin) {
                        var e = this.getGameThirdPartyInfo();
                        this.nativeGameLoginConfig = d(d(d(d({}, this.nativeGameLoginConfig), e), (null == e ? void 0 : e.sdkConfig) || {}), {
                            showGameLogin: !0
                        });
                        var e = this.nativeGameLoginConfig
                          , t = e.authType
                          , n = e.name
                          , e = null === (e = null === (e = this.loginUser) || void 0 === e ? void 0 : e.other) || void 0 === e ? void 0 : e.platform_user_info;
                        if (e)
                            if (e.find(function(e) {
                                return e.platform === n + "-" + t
                            }))
                                return;
                        this.verifyType = n
                    }
                },
                handleNativeGameLogin: function() {
                    var e = (this.nativeGameLoginConfig || {}).name
                      , t = this.currentInfo
                      , n = t.appid
                      , t = t.country;
                    null !== s.default && void 0 !== s.default && s.default.clickItem('account_link_choose', e),
                    this.easyLogin({
                        appid: n,
                        country: t,
                        platform: e,
                        isGameLogin: !0,
                        isAddThirdParty: !0,
                        nativeGameLoginConfig: d(d({}, this.nativeGameLoginConfig || {}), {
                            isLinkMidas: !0
                        })
                    })
                },
                goToVerifyCode: function() {
                    null !== s.default && void 0 !== s.default && s.default.clickItem('account_link_choose', 'email'),
                    this.verifyType = 'code'
                },
                moveMarquee: function() {
                    this.leftPosition > -this.marqueeWidth / 2 ? --this.leftPosition : this.leftPosition = 0
                },
                startMarquee: function() {
                    this.marqueeIntervalId && this.pauseMarquee(),
                    this.marqueeIntervalId = setInterval(this.moveMarquee, 16)
                },
                pauseMarquee: function() {
                    this.marqueeIntervalId && clearInterval(this.marqueeIntervalId),
                    this.marqueeIntervalId = null
                },
                handleScrollMouseOver: function() {
                    b || this.pauseMarquee()
                },
                handleScrollMouseLeave: function() {
                    b || this.startMarquee()
                },
                handleScrollClick: function() {
                    b && (this.marqueeIntervalId ? this.pauseMarquee() : this.startMarquee())
                },
                handleMarquee: function() {
                    var n = this;
                    this.marqueeWidth || this.$nextTick(function() {
                        var e, t = null === (t = (null === (e = n.$refs) || void 0 === e ? void 0 : e.loginMarquee) || (null === (t = n.$refs) || void 0 === t ? void 0 : t.bindMarquee)) || void 0 === t ? void 0 : t.clientWidth;
                        t && (n.marqueeWidth = t,
                        n.startMarquee())
                    })
                },
                handleSendPoint: function() {
                    var e, t, n = this, i = this.userInfo || {}, o = i.openid, r = i.userid, a = i.zoneid, i = (null === (e = this.currentInfo) || void 0 === e ? void 0 : e.appid) || (null === (t = null === window || void 0 === window ? void 0 : window.__PAY_INFO) || void 0 === t ? void 0 : t.appid);
                    o && i && (t = (null === (e = this.dlist) || void 0 === e ? void 0 : e.find(function(e) {
                        return e.openid === o && e.userid === r && "" + e.zoneid == "" + a
                    })) || this.userInfo || {},
                    (null === (e = this.loginUser) || void 0 === e ? void 0 : e.uid) === (null === t ? void 0 : t.uid) && t.verifytype || c.default.querySendVipScore({
                        openid: o,
                        appid: i
                    }).then(function(e) {
                        var t = e.ret
                          , e = e.data;
                        0 === t && (n.verifySendInfo = d(d({}, n.verifySendInfo), {
                            point: e.sendPoint
                        }),
                        n.$emit('update:point', e.sendPoint))
                    }).catch(function() {}))
                },
                handleGameLoginSuccess: function(t) {
                    return f(this, void 0, void 0, function() {
                        return p(this, function(e) {
                            try {
                                'msdk' === t && (0,
                                u.default)('force_login_playerId_key', !0, !1)
                            } catch (e) {}
                            return [2]
                        })
                    })
                },
                handleEasyLoginSuccess: function(n) {
                    return f(this, void 0, void 0, function() {
                        var t;
                        return p(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return t = ((null == n ? void 0 : n.gameSdkConfig) || {}).authType,
                                null != n && n.msdkConfig ? [4, this.handleGameLoginSuccess('msdk')] : [3, 2];
                            case 1:
                                return e.sent(),
                                this.updateUserInfo({
                                    isGameLogin: !0
                                }),
                                [2];
                            case 2:
                                return t ? [4, this.handleGameLoginSuccess(t)] : [3, 4];
                            case 3:
                                return e.sent(),
                                this.updateUserInfo({
                                    isGameLogin: !0
                                }),
                                [2];
                            case 4:
                                return this.updateUserInfo(),
                                [2]
                            }
                        })
                    })
                },
                handleLoginStorage: function() {
                    var e = {
                        status: 1,
                        baseInfo: this.baseInfo
                    }
                      , t = (null === (n = this.baseInfo) || void 0 === n ? void 0 : n.popConfig) || {}
                      , n = t.scene
                      , t = t.sceneValue;
                    n && localStorage.setItem(n, void 0 === t || t),
                    localStorage.setItem('loginfor_bind-pop-info', JSON.stringify(e))
                },
                handleEasyLogin: function(e) {
                    var t = e.name
                      , n = this.currentInfo
                      , i = n.appid
                      , n = n.country;
                    null != m && m.click("linkaccount_login_" + t),
                    null !== s.default && void 0 !== s.default && s.default.clickItem('link_account_login', t);
                    e = (e || {}).type,
                    t = {
                        appid: i,
                        country: n,
                        platform: t,
                        isGameLogin: 'NativeGameLogin' === e
                    };
                    'NativeGameLogin' === e && (t.nativeGameLoginConfig = d({}, this.nativeGameLoginConfig || {})),
                    this.easyLogin(d({}, t))
                },
                replaceThirdPartyName: function(e, t) {
                    var n, t = 'NativeGameLogin' === (null == t ? void 0 : t.type) ? null === (n = this.nativeGameLoginConfig) || void 0 === n ? void 0 : n.titleName : null == t ? void 0 : t.showName;
                    return null == e ? void 0 : e.replace(/\{0\}/g, t || '')
                },
                initMarquee: function() {
                    var n = this
                      , e = this.currentInfo
                      , i = e.appid
                      , t = e.country
                      , e = null === (r = null === (o = null == g ? void 0 : g.swiperList) || void 0 === o ? void 0 : o.map(function(e, t) {
                        return d(d({}, e), {
                            image: e[i] || e.image,
                            desc: n.replaceTitleName((null === (e = n.popLan.swiperDescList) || void 0 === e ? void 0 : e[t]) || '')
                        })
                    })) || void 0 === r ? void 0 : r.filter(function(e) {
                        return (!(null != e && e.greyVip) || n.showVip) && (null == e ? void 0 : e.image)
                    })
                      , o = this.gameInfo || {}
                      , r = o.newVipCountryList
                      , r = void 0 === r ? [] : r
                      , o = (o.images || {}).extraSendIcons
                      , o = void 0 === o ? [] : o;
                    ('*' === r || r.includes(t)) && o.length && (o = null == o ? void 0 : o.map(function(e, t) {
                        return {
                            image: e,
                            desc: null === (e = n.popLan.vipExtraSendDescList) || void 0 === e ? void 0 : e[t]
                        }
                    }),
                    null != e && e.unshift.apply(e, v([], h(o), !1))),
                    e.length && (this.swiperList = e)
                },
                getBalanceVerifyUsers: function() {
                    var n = this
                      , e = this.currentInfo.appid;
                    e && c.default.getBindUsersByAppid(e, 'balance').then(function(e) {
                        var t = e.ret
                          , e = e.data;
                        n.balanceVerifyUsers = 0 === t && (null == e ? void 0 : e.bindUsers) || []
                    }).catch(function() {
                        n.balanceVerifyUsers = []
                    })
                },
                focusVerifyCode: function() {
                    this.isOnFocus = !0,
                    this.showVerifyCodeError = !1
                },
                onBlurVerifyCode: function() {
                    this.isOnFocus = !1
                },
                getVerifyCodeDesc: function(e) {
                    return null === (e = this.replaceTitleName(e)) || void 0 === e ? void 0 : e.replace(/\[(.+)\]/, '<span>$1</span>')
                },
                replaceTitleName: function(e) {
                    var t;
                    return null === (t = null == e ? void 0 : e.replace(/\{0\}/g, (null === (t = this.gameInfo) || void 0 === t ? void 0 : t.titleName) || '')) || void 0 === t ? void 0 : t.replace(/\{1\}/g, (null === (t = this.gameInfo) || void 0 === t ? void 0 : t.currencyUnit) || '')
                },
                toggleCheckCodeGuide: function() {
                    this.showCheckCodeGuide = !this.showCheckCodeGuide
                },
                gotoSuccessPage: function() {
                    this.$emit('update:resultPopStatus', 'success'),
                    this.handleClose()
                },
                directEmitSuccess: function() {
                    this.closeIframe('direct-success')
                },
                handleClose: function() {
                    this.$emit('update:showModule', 'bindRole'),
                    this.$emit('update:show', !1)
                },
                clearTimeCounter: function() {
                    clearTimeout(this.timeCounter),
                    this.timeCounter = null,
                    this.showtime = 60
                },
                closePop: function() {
                    this.closeIframe('close')
                },
                getUserMaskInfo: function(i) {
                    return f(this, void 0, void 0, function() {
                        var t, n;
                        return p(this, function(e) {
                            switch (e.label) {
                            case 0:
                                if (!i)
                                    return [2, ''];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]),
                                [4, c.default.queryUserMaskInfo({
                                    muid: i
                                })];
                            case 2:
                                return t = e.sent(),
                                t = (n = t || {}).ret,
                                n = n.data,
                                0 === t ? [2, null == n ? void 0 : n.maskedUserName] : [2, ''];
                            case 3:
                                return e.sent(),
                                [2, ''];
                            case 4:
                                return [2]
                            }
                        })
                    })
                },
                checkPlayerIdCanBind: function() {
                    var l;
                    return f(this, void 0, void 0, function() {
                        var t, n, i, o, r, a, s;
                        return p(this, function(e) {
                            switch (e.label) {
                            case 0:
                                if (n = (i = this).userInfo,
                                t = i.checkBindLoading,
                                !n || t)
                                    return [2, !1];
                                if (t = (i = n || {}).openid,
                                n = i.userid,
                                i = i.zoneid,
                                !t || !n)
                                    return [2, !1];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 6, , 7]),
                                r = this.currentInfo.appid,
                                o = {
                                    appid: r,
                                    openid: t,
                                    userid: n,
                                    zone_id: i
                                },
                                this.checkBindLoading = !0,
                                [4, c.default.getVerifyUserByUserId(o)];
                            case 2:
                                return (r = e.sent(),
                                this.checkBindLoading = !1,
                                o = r.ret,
                                r = r.data,
                                0 !== o) ? [3, 5] : (s = (r || []).verifyUsers,
                                a = g.balanceVerifyType,
                                (s = s.find(function(e) {
                                    return null == a ? void 0 : a.includes(e.verifytype)
                                })) && s.uid !== (null === (l = this.loginUser) || void 0 === l ? void 0 : l.uid) ? [4, this.getUserMaskInfo(s.uid)] : [3, 4]);
                            case 3:
                                return s = e.sent(),
                                this.showErrorTxt = null === (l = null === (l = this.popLan) || void 0 === l ? void 0 : l.linkedError) || void 0 === l ? void 0 : l.replace(/\{0\}/g, s || ''),
                                [2, !1];
                            case 4:
                                return [2, !0];
                            case 5:
                                return this.showErrorTxt = this.getErrorMsg(),
                                [2, !1];
                            case 6:
                                return e.sent(),
                                this.checkBindLoading = !1,
                                [3, 7];
                            case 7:
                                return [2]
                            }
                        })
                    })
                },
                handleContinue: function() {
                    return f(this, void 0, void 0, function() {
                        return p(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return null != m && m.click('balance_linkaccount_continue'),
                                null !== s.default && void 0 !== s.default && s.default.clickItem('account_link', 'continue'),
                                this.showErrorTxt = '',
                                [4, this.checkPlayerIdCanBind()];
                            case 1:
                                return e.sent() ? (this.$emit('update:showModule', 'checkCode'),
                                [2]) : [2]
                            }
                        })
                    })
                },
                goBack: function() {
                    this.$emit('update:showModule', 'bindRole'),
                    this.clearTimeCounter()
                },
                getErrorMsg: function(e) {
                    var t = (null === (t = this.popLan) || void 0 === t ? void 0 : t.errMsgMap) || {};
                    return (null === t ? void 0 : t[null == e ? void 0 : e.ret]) || (null === t ? void 0 : t.default) || this.popLan.verifyCodeError || ''
                },
                sendVerifyCode: function() {
                    return f(this, void 0, void 0, function() {
                        var t, n, i;
                        return p(this, function(e) {
                            switch (e.label) {
                            case 0:
                                if (null != m && m.click('balance_linkaccount_resend'),
                                this.showVerifyCodeError = !1,
                                this.loading)
                                    return [2];
                                if (i = this.userInfo,
                                t = i.userid,
                                n = i.openid,
                                i = i.zoneid,
                                !t || !n)
                                    return [2];
                                n = {
                                    userid: t,
                                    openid: n,
                                    zone_id: i
                                },
                                this.loading = !0,
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]),
                                [4, c.default.sendVerifyCode(n)];
                            case 2:
                                return e.sent(),
                                this.countDown(60),
                                this.loading = !1,
                                this.$refs.codeInput.focus(),
                                [3, 4];
                            case 3:
                                return i = e.sent(),
                                this.loading = !1,
                                this.showVerifyCodeError = !0,
                                this.verifyCodeErrorMsg = this.getErrorMsg(i),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        })
                    })
                },
                submitVerifyCode: function() {
                    var r, a;
                    return f(this, void 0, void 0, function() {
                        var t, n, i, o;
                        return p(this, function(e) {
                            switch (e.label) {
                            case 0:
                                if (this.showVerifyCodeError = !1,
                                this.loading)
                                    return null !== s.default && void 0 !== s.default && s.default.clickItem('account_link_verification', 'continue', !0, {
                                        result_info: 'failed',
                                        status: 'loading'
                                    }),
                                    null != m && m.click('balance_linkaccount_confirmcode', {
                                        status: 'loading'
                                    }),
                                    [2];
                                if (!/^\d{4,6}$/.test(this.verifyCode))
                                    return this.showVerifyCodeError = !0,
                                    this.verifyCodeErrorMsg = (null === (r = this.popLan) || void 0 === r ? void 0 : r.verifyCodeError) || '',
                                    null != m && m.click('balance_linkaccount_confirmcode', {
                                        status: this.verifyCode ? 'wrongcode' : 'nocode',
                                        verifyCode: this.verifyCode
                                    }),
                                    null !== s.default && void 0 !== s.default && s.default.clickItem('account_link_verification', 'continue', !0, {
                                        result_info: 'failed',
                                        status: this.verifyCode ? 'wrongcode' : 'nocode',
                                        verifyCode: this.verifyCode
                                    }),
                                    [2];
                                this.loading = !0,
                                n = this.userInfo.zoneid,
                                t = {
                                    verifyType: 'email' === (null === (r = this.loginUser) || void 0 === r ? void 0 : r.providerType) ? 'email-balance' : null === (a = this.loginUser) || void 0 === a ? void 0 : a.providerType,
                                    verifyCode: this.verifyCode,
                                    openid: this.userInfo.openid,
                                    zone_id: n,
                                    linkType: 'change' === this.type ? 'change' : 'link'
                                },
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 5, , 6]),
                                [4, c.default.verifyEmailCode(t)];
                            case 2:
                                return (i = e.sent(),
                                null != m && m.click('balance_linkaccount_confirmcode', {
                                    status: 'rightcode'
                                }),
                                null !== s.default && void 0 !== s.default && s.default.clickItem('account_link_verification', 'continue', !0, {
                                    result_info: 'success',
                                    status: 'rightcode'
                                }),
                                0 !== (null == i ? void 0 : i.ret) || 'change' !== this.type) ? [3, 4] : (n = this.currentInfo.appid) ? (o = (null === (a = this.balanceVerifyUsers) || void 0 === a ? void 0 : a[0]) || {},
                                i = o.userid,
                                o = o.openid,
                                i && o ? [4, c.default.unbindGameUser({
                                    appid: n,
                                    userid: i,
                                    openid: o,
                                    type: 'unlink'
                                })] : [2]) : [2];
                            case 3:
                                e.sent(),
                                e.label = 4;
                            case 4:
                                return this.loading = !1,
                                this.hideSuccessPage ? this.directEmitSuccess() : this.gotoSuccessPage(),
                                [3, 6];
                            case 5:
                                return o = e.sent(),
                                null !== s.default && void 0 !== s.default && s.default.clickItem('account_link_verification', 'continue', !0, {
                                    result_info: 'failed',
                                    status: 'wrongcode',
                                    verifyCode: this.verifyCode
                                }),
                                null != m && m.click('balance_linkaccount_confirmcode', {
                                    status: 'wrongcode',
                                    verifyCode: this.verifyCode
                                }),
                                this.loading = !1,
                                this.showVerifyCodeError = !0,
                                this.verifyCodeErrorMsg = this.getErrorMsg(o),
                                [3, 6];
                            case 6:
                                return [2]
                            }
                        })
                    })
                },
                countDown: function(t) {
                    this.showtime = t;
                    var n = this
                      , i = 0;
                    n.timeCounter = setTimeout(function e() {
                        if (null === n.timeCounter)
                            return !1;
                        i++;
                        n.showtime = t - i;
                        t < i ? (clearTimeout(n.timeCounter),
                        n.timeCounter = null,
                        n.showtime = null) : n.timeCounter = setTimeout(e, 1e3)
                    }, 1e3)
                }
            }
        };
        t.Z = l
    },
    10702: function(e, t, n) {
        var i = n(7914);
        Object.defineProperty(t, "X", {
            value: !0
        }),
        t.Z = void 0,
        n(63238),
        n(61418),
        n(25901),
        n(92189),
        n(91047),
        n(5769),
        n(17460),
        n(14078),
        n(52327),
        n(83352),
        n(52077),
        n(911);
        var o = i(n(37996))
          , a = i(n(93318))
          , s = i(n(82979))
          , l = function(e, a, s, l) {
            return new (s = s || Promise)(function(n, t) {
                function i(e) {
                    try {
                        r(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    try {
                        r(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                        e(t)
                    }
                    )).then(i, o)
                }
                r((l = l.apply(e, a || [])).next())
            }
            )
        }
          , c = function(n, i) {
            var o, r, a, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(t) {
                return function(e) {
                    return function(t) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (o = 1,
                                r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, t[1])).done)
                                    return a;
                                switch (r = 0,
                                (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    r = t[1],
                                    t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1],
                                        a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2],
                                        s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                t = i.call(n, s)
                            } catch (e) {
                                t = [6, e],
                                r = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & t[0])
                            throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        }
          , u = window.report
          , d = window.reportV2
          , n = window.queryBalanceConfig
          , r = void 0 === n ? {} : n
          , n = window.loginConfig
          , f = void 0 === n ? {} : n
          , o = {
            mixins: [o.default],
            props: {
                lanres: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                handleChange: {
                    type: Function,
                    default: function() {}
                },
                show: {
                    type: Boolean,
                    default: !1
                },
                showTitle: {
                    type: Boolean,
                    default: !1
                },
                type: {
                    type: String,
                    default: 'hasLinked'
                },
                closeIframe: {
                    type: Function,
                    default: function() {}
                },
                baseInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                userInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                gameInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                updateUserInfo: {
                    type: Function,
                    default: function() {}
                },
                loginUser: {
                    type: Object,
                    default: null
                }
            },
            data: function() {
                var e;
                return {
                    country: (null === (e = this.baseInfo) || void 0 === e ? void 0 : e.country) || (null === (e = null === window || void 0 === window ? void 0 : window.__PAY_INFO) || void 0 === e ? void 0 : e.country) || 'sg',
                    hasLinkedMaskName: '',
                    tipsPopLan: {}
                }
            },
            watch: {
                show: {
                    handler: function(e) {
                        e && ('hasLinked' === this.type || 'fbLinked' === this.type ? null != u && u.view((null == u ? void 0 : u.page) + "_balance_alreadylinked") : 'switchLogin' === this.type && null != u && u.view((null == u ? void 0 : u.page) + "_linkaccount_lipass_rec"))
                    },
                    immediate: !0
                },
                type: function(e) {
                    e && this.handlePopLan()
                }
            },
            computed: {
                currentInfo: function() {
                    var e, t;
                    return {
                        appid: (null === (e = this.gameInfo) || void 0 === e ? void 0 : e.appid) || (null === (t = null === window || void 0 === window ? void 0 : window.__PAY_INFO) || void 0 === t ? void 0 : t.appid),
                        country: (null === (t = this.baseInfo) || void 0 === t ? void 0 : t.country) || (null === (t = null === window || void 0 === window ? void 0 : window.__PAY_INFO) || void 0 === t ? void 0 : t.country)
                    }
                },
                disableCancelBtn: function() {
                    return 'fbLinked' === this.type || 'emailLinked' === this.type
                },
                switchLoginConfig: function() {
                    var e = r.tipsPopSwitchLoginTo
                      , t = void 0 === e ? 'lipass' : e;
                    if (!t)
                        return {};
                    e = f.thirdPartyList;
                    return (void 0 === e ? [] : e).find(function(e) {
                        return e.name === t
                    }) || {}
                },
                switchLoginPopLan: function() {
                    var e = this.lanres.tipsPop || {}
                      , t = e.switchLoginTitle
                      , n = e.switchLoginDesc
                      , i = e.switchLoginConfirmBtn
                      , o = e.switchLoginCancelBtn
                      , e = this.switchLoginConfig.showName
                      , e = void 0 === e ? '' : e;
                    return {
                        title: t,
                        desc: null == n ? void 0 : n.replace(/\{0\}/g, e),
                        confirmBtn: null == i ? void 0 : i.replace(/\{0\}/g, e),
                        cancelBtn: o
                    }
                }
            },
            created: function() {
                this.handlePopLan(),
                'hasLinked' === this.type && this.getUserMaskInfo()
            },
            mounted: function() {
                null != d && d.exposureModule('unlink_playerid')
            },
            methods: {
                getVerifyUserByPlayerInfo: function() {
                    return l(this, void 0, void 0, function() {
                        var t, n, i, o;
                        return c(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return (e.trys.push([0, 2, , 3]),
                                n = this.userInfo || {},
                                t = n.openid,
                                o = n.userid,
                                i = n.zoneid,
                                t && o) ? (n = this.currentInfo.appid,
                                n = {
                                    appid: n,
                                    openid: t,
                                    userid: o,
                                    zone_id: i
                                },
                                [4, a.default.getVerifyUserByUserId(n)]) : (null != u && u.custom((null == u ? void 0 : u.page) + "_getVerifyUserByPlayerInfo_error", {
                                    openid: t,
                                    userid: o,
                                    zoneid: i
                                }),
                                [2, !1]);
                            case 1:
                                return o = e.sent(),
                                i = o.ret,
                                o = o.data,
                                o = (void 0 === o ? {} : o).verifyUsers,
                                o = void 0 === o ? [] : o,
                                0 === i && o.length ? [2, o[0]] : (null != u && u.custom((null == u ? void 0 : u.page) + "_get_mask_info_res_error", {
                                    ret: i
                                }),
                                [2]);
                            case 2:
                                return e.sent(),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        })
                    })
                },
                handleUnlink: function() {
                    var r;
                    return l(this, void 0, void 0, function() {
                        var t, n, i, o;
                        return c(this, function(e) {
                            switch (e.label) {
                            case 0:
                                if (null != u && u.ck("linkaccount_unlink_confirm"),
                                null != d && d.clickItem('unlink_playerid', 'unlink', !0),
                                o = (t = this).userInfo,
                                n = t.currentInfo,
                                i = t.loginUser,
                                !(t = n.appid) || !i || !o)
                                    return [2];
                                n = o.userid,
                                i = o.openid,
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]),
                                [4, a.default.unbindGameUser({
                                    appid: t,
                                    userid: n,
                                    openid: i,
                                    type: 'unlink'
                                })];
                            case 2:
                                return o = e.sent(),
                                o = o.ret,
                                (0,
                                s.default)({
                                    msg: 0 === o ? 'Unlink Successfully' : 'Unlink Fail'
                                }),
                                null !== (r = null === top || void 0 === top ? void 0 : top.location) && void 0 !== r && r.reload(),
                                [3, 4];
                            case 3:
                                return e.sent(),
                                (0,
                                s.default)({
                                    msg: 'Unlink Fail'
                                }),
                                null !== (r = null === top || void 0 === top ? void 0 : top.location) && void 0 !== r && r.reload(),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        })
                    })
                },
                handlePopLan: function() {
                    var e = this.lanres.tipsPop || {};
                    this.tipsPopLan = {
                        title: this.replaceStr(e[this.type + "Title"]),
                        desc: this.replaceStr(e[this.type + "Desc"]),
                        confirmBtn: e[this.type + "ConfirmBtn"],
                        cancelBtn: e.cancelBtn
                    }
                },
                getUserMaskInfo: function() {
                    return l(this, void 0, void 0, function() {
                        var t, n, i;
                        return c(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.getVerifyUserByPlayerInfo()];
                            case 1:
                                if (!(i = e.sent()))
                                    return [2];
                                t = i.uid,
                                e.label = 2;
                            case 2:
                                return e.trys.push([2, 4, , 5]),
                                [4, a.default.queryUserMaskInfo({
                                    muid: t
                                })];
                            case 3:
                                return n = e.sent(),
                                n = (i = n || {}).ret,
                                i = i.data,
                                0 === n ? (this.hasLinkedMaskName = (null == i ? void 0 : i.maskedUserName) || '',
                                this.handlePopLan()) : this.hasLinkedMaskName = '',
                                [3, 5];
                            case 4:
                                return e.sent(),
                                this.hasLinkedMaskName = '',
                                [3, 5];
                            case 5:
                                return [2]
                            }
                        })
                    })
                },
                handleEasyLoginSuccess: function() {
                    this.updateUserInfo()
                },
                handleEasyLogin: function() {
                    var e = this.currentInfo
                      , t = e.appid
                      , n = e.country
                      , e = null === (e = this.switchLoginConfig) || void 0 === e ? void 0 : e.name;
                    null != u && u.click("linkaccount_" + e + "_rec_ok"),
                    this.easyLogin({
                        appid: t,
                        country: n,
                        platform: e
                    })
                },
                replaceStr: function(e) {
                    var t = this.gameInfo
                      , n = t.titleName
                      , t = t.currencyUnit
                      , t = void 0 === t ? '' : t;
                    return null === (t = null === (n = null == e ? void 0 : e.replace(/\{0\}/, void 0 === n ? '' : n)) || void 0 === n ? void 0 : n.replace(/\{1\}/g, t)) || void 0 === t ? void 0 : t.replace(/\{2\}/g, "<span class=\"email\">" + this.hasLinkedMaskName + "</span>")
                },
                handleClose: function() {
                    'switchLogin' === this.type && null != u && u.click('linkaccount_lipass_rec_close'),
                    null != d && d.clickItem('unlink_playerid', 'cancel', !0),
                    this.closeIframe('close')
                },
                handleConfirm: function() {
                    var e, t = this.type;
                    'unlink' === t ? this.handleUnlink() : 'changeLink' === t ? this.handleChange() : 'hasLinked' === t || 'msdkLinkFail' === t ? (t = (e = this.currentInfo).appid,
                    e = e.country,
                    this.changeLoginInBindPop({
                        appid: t,
                        country: e
                    })) : this.handleClose()
                }
            }
        };
        t.Z = o
    },
    26992: function(e, t, n) {
        var i = n(7914);
        Object.defineProperty(t, "X", {
            value: !0
        }),
        t.Z = void 0,
        n(63238),
        n(61418),
        n(25901),
        n(92189),
        n(91047),
        n(5769),
        n(17460),
        n(14078),
        n(95163),
        n(52077),
        n(911),
        n(95623),
        n(61514),
        n(40895),
        n(72482),
        n(52327),
        n(61013),
        n(83352);
        var l = n(44427)
          , o = i(n(41940))
          , r = i(n(63762))
          , h = i(n(93318))
          , v = i(n(99729))
          , i = i(n(54032))
          , a = function(e, a, s, l) {
            return new (s = s || Promise)(function(n, t) {
                function i(e) {
                    try {
                        r(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    try {
                        r(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                        e(t)
                    }
                    )).then(i, o)
                }
                r((l = l.apply(e, a || [])).next())
            }
            )
        }
          , m = function(n, i) {
            var o, r, a, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(t) {
                return function(e) {
                    return function(t) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (o = 1,
                                r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, t[1])).done)
                                    return a;
                                switch (r = 0,
                                (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    r = t[1],
                                    t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1],
                                        a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2],
                                        s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                t = i.call(n, s)
                            } catch (e) {
                                t = [6, e],
                                r = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & t[0])
                            throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        }
          , s = window.report
          , n = window.queryBalanceConfig
          , c = void 0 === n ? {} : n
          , n = window.lan
          , u = void 0 === n ? 'en' : n
          , n = window.gameData
          , d = void 0 === n ? [] : n
          , n = c.viewImages
          , f = void 0 === n ? {} : n
          , n = c.verifyGiftSendAppidList
          , p = void 0 === n ? [] : n
          , i = {
            props: {
                resultPopStatus: {
                    type: String,
                    default: 'close'
                },
                lanres: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                titleName: {
                    type: String,
                    default: ''
                },
                isSdk: {
                    type: Boolean,
                    default: !1
                },
                closeIframe: {
                    type: Function,
                    default: function() {}
                },
                gameInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                point: {
                    type: Number,
                    default: 0
                },
                userInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                payInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                baseInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                handleVipLevelInfo: {
                    type: Function,
                    default: function() {}
                },
                showVipLevelPop: {
                    type: Boolean,
                    default: !1
                },
                vipLevel: {
                    type: Number,
                    default: 0
                },
                loginUser: {
                    type: Object,
                    default: null
                }
            },
            components: {
                TencentSafety: i.default
            },
            data: function() {
                var e;
                return {
                    resultPopLan: (null === (e = this.lanres) || void 0 === e ? void 0 : e.resultPop) || {},
                    pointIcon: f.sendPointIcon || '',
                    balance: null,
                    showLevelAnimation: !1,
                    verityGiftList: [],
                    executeTaskSuccess: !1,
                    verifyGiftLan: (null === (e = this.lanres) || void 0 === e ? void 0 : e.vipGiftPop) || {}
                }
            },
            watch: {
                resultPopStatus: {
                    handler: function(e) {
                        'success' === e ? (null != s && s.view((null == s ? void 0 : s.page) + "_balance_link-success"),
                        null !== o.default && void 0 !== o.default && o.default.exposureModule('account_link_result', '', !0, {
                            result_info: 'success'
                        })) : 'fail' === e && (null != s && s.view((null == s ? void 0 : s.page) + "_linkaccount_lipass_false"),
                        null !== o.default && void 0 !== o.default && o.default.exposureModule('account_link_result', '', !0, {
                            result_info: 'failed'
                        }))
                    },
                    immediate: !0
                },
                showVipLevelPop: function(e) {
                    e || (this.showLevelAnimation = !0)
                }
            },
            computed: {
                showVerifyGiftBox: function() {
                    var e;
                    return this.executeTaskSuccess && (null === (e = this.verityGiftList) || void 0 === e ? void 0 : e.length)
                },
                levelClass: function() {
                    return this.vipLevel ? "v" + this.vipLevel : ''
                },
                showBalance: function() {
                    return 'number' == typeof this.balance && !this.gameInfo.hideBalanceScore
                },
                formatCharacName: function() {
                    return this.userInfo ? (0,
                    r.default)(this.userInfo.charac_name) : ''
                },
                currencyIcon: function() {
                    var e;
                    return (null === (e = this.gameInfo.images) || void 0 === e ? void 0 : e.coinGiftIcon) || ''
                },
                lipLinkGuideImages: function() {
                    var e, t = (this.gameInfo || {}).lipLinkGuideImages;
                    return (e = void 0 === t ? [] : t).length ? e : (null == c ? void 0 : c.lipLinkGuideImages) || []
                },
                statusData: function() {
                    var e = this.resultPopStatus
                      , t = this.resultPopLan;
                    if ('close' === e)
                        return {};
                    var n = this.gameInfo.titleName
                      , i = void 0 === n ? '' : n;
                    return {
                        title: null === (n = t[e + "Title"]) || void 0 === n ? void 0 : n.replace('{0}', i),
                        desc: null === (n = t[e + "Desc"]) || void 0 === n ? void 0 : n.replace('{0}', i),
                        btn: t.confirmBtn,
                        image: 'fail' === e ? 'https://cdn.midasbuy.com/images/result-error-pay.669e462b.png' : 'https://cdn.midasbuy.com/images/account-result.c36f8188.png'
                    }
                }
            },
            created: function() {
                var e;
                this.handleVipLevelInfo(),
                ('*' === p || null != p && p.includes(null === (e = this.baseInfo) || void 0 === e ? void 0 : e.appid)) && this.handleVerifyMarketingSend()
            },
            mounted: function() {
                this.handleBalance()
            },
            methods: {
                handleBalance: function() {
                    return a(this, void 0, void 0, function() {
                        var t, n, i, o, r, a, s;
                        return m(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return window.midasbuyCommonSdk ? [3, 2] : [4, (0,
                                l.loadMidasbuyCommonSdkApi)()];
                            case 1:
                                e.sent(),
                                e.label = 2;
                            case 2:
                                t = window.midasbuyCommonSdk.balanceVerify,
                                n = (r = this).userInfo,
                                a = r.payInfo,
                                i = r.loginUser,
                                o = (a || {}).currency_type,
                                s = this.baseInfo,
                                r = s.country,
                                a = s.appid,
                                e.label = 3;
                            case 3:
                                return e.trys.push([3, 5, , 6]),
                                [4, null == t ? void 0 : t.getBalance({
                                    userInfo: n,
                                    loginUser: i,
                                    appid: a,
                                    currency_type: o,
                                    pf: '',
                                    country: r,
                                    zoneid: n.zoneid
                                })];
                            case 4:
                                return 0 === (null == (s = e.sent()) ? void 0 : s.ret) ? this.balance = null == s ? void 0 : s.balance : this.balance = null,
                                [3, 6];
                            case 5:
                                return e.sent(),
                                this.balance = null,
                                [3, 6];
                            case 6:
                                return [2]
                            }
                        })
                    })
                },
                handleVerifyMarketingSend: function() {
                    return a(this, void 0, void 0, function() {
                        var t, n, i;
                        return m(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return e.trys.push([0, 4, , 5]),
                                [4, this.fetchTaskDetails()];
                            case 1:
                                return n = e.sent(),
                                t = n.product_ids,
                                i = void 0 === t ? [] : t,
                                t = n.taskState,
                                n = n.newActivityParams,
                                i.length ? 100 === t || 50 === t ? [2] : [4, this.getFreeGiftsDetails(i)] : [2];
                            case 2:
                                return i = e.sent(),
                                this.verityGiftList = i || [],
                                null != i && i.length ? [4, this.executeTask(n)] : [2];
                            case 3:
                                return e.sent(),
                                [3, 5];
                            case 4:
                                return e.sent(),
                                [3, 5];
                            case 5:
                                return [2]
                            }
                        })
                    })
                },
                getServerInfo: function(e) {
                    var t = this
                      , n = null == e ? void 0 : e.toString()
                      , i = n.split('_')
                      , e = d.find(function(e) {
                        return e.appid === t.baseInfo.appid
                    });
                    return {
                        serverId: 1 === (i = (null == e ? void 0 : e.mutipZoneidCharac) && 1 === i.length ? (n = n + "_" + (this.userInfo || {}).userid).split('_') : i).length ? n : i[0],
                        roleId: 1 === i.length ? '' : i[1],
                        zoneidStr: n
                    }
                },
                executeTask: function(f) {
                    var p;
                    return a(this, void 0, void 0, function() {
                        var t, n, i, o, r, a, s, l, c, u, d;
                        return m(this, function(e) {
                            switch (e.label) {
                            case 0:
                                if (r = (c = this).userInfo,
                                i = c.baseInfo,
                                u = c.loginUser,
                                t = (o = i || {}).appid,
                                d = o.country,
                                n = (a = r || {}).openid,
                                s = a.zoneid,
                                l = void 0 === s ? '' : s,
                                !t || !n)
                                    return [2];
                                c = this.getServerInfo(l),
                                i = c.serverId,
                                o = c.roleId,
                                r = c.zoneidStr,
                                a = f.mp_activity_id,
                                s = f.mp_sub_activity_id,
                                l = f.mp_task_id,
                                c = f.mp_task_subtask_id,
                                u = {
                                    appid: t,
                                    mp_app_id: '',
                                    mp_activity_id: a,
                                    mp_sub_activity_id: s,
                                    mp_activity_trade_no: (0,
                                    v.default)(),
                                    user_id: n,
                                    user_id_type: 'hy_gameid',
                                    mp_task_id: l,
                                    mp_task_exec_subtask_list: [{
                                        mp_task_subtask_id: c,
                                        mp_task_completion_timestamp: Math.round((new Date).getTime() / 1e3).toString(),
                                        mp_task_subtask_meta_data: {
                                            muid: u.uid
                                        }
                                    }],
                                    mp_task_meta_data: {
                                        ori_zoneid: r,
                                        server_id: i,
                                        role_id: o,
                                        muid: u.uid,
                                        Country: null == d ? void 0 : d.toUpperCase(),
                                        client_ver: 'android',
                                        caller_tag: 'NewMidasbuyClient'
                                    }
                                },
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]),
                                [4, h.default.taskExec(u)];
                            case 2:
                                return (d = e.sent(),
                                100 === (d = null === (p = null === (p = null == d ? void 0 : d.data) || void 0 === p ? void 0 : p.mp_task_subtask_exec_info_list) || void 0 === p ? void 0 : p[0]).mp_task_subtask_state || 50 === d.mp_task_subtask_state) ? (this.executeTaskSuccess = !0,
                                [2]) : (this.executeTaskSuccess = !1,
                                [3, 4]);
                            case 3:
                                return e.sent(),
                                this.executeTaskSuccess = !1,
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        })
                    })
                },
                getFreeGiftsDetails: function(i) {
                    return a(this, void 0, void 0, function() {
                        var t, n;
                        return m(this, function(e) {
                            switch (e.label) {
                            case 0:
                                n = this.baseInfo,
                                n = (t = n || {}).appid,
                                t.country,
                                t = {
                                    app_id: n,
                                    language: u,
                                    product_ids: i
                                },
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]),
                                [4, h.default.getProducts(t)];
                            case 2:
                                return n = e.sent(),
                                [2, null == n ? void 0 : n.products.map(function(e) {
                                    return {
                                        name: e.name,
                                        icon: e.icon
                                    }
                                })];
                            case 3:
                                return e.sent(),
                                [2, []];
                            case 4:
                                return [2]
                            }
                        })
                    })
                },
                fetchTaskDetails: function() {
                    var l;
                    return a(this, void 0, void 0, function() {
                        var t, n, i, o, r, a, s;
                        return m(this, function(e) {
                            switch (e.label) {
                            case 0:
                                if (s = (a = this).userInfo,
                                n = a.baseInfo,
                                o = a.loginUser,
                                t = (r = n || {}).appid,
                                i = r.country,
                                n = (a = s || {}).openid,
                                r = a.zoneid,
                                !t || !n)
                                    return [2];
                                s = this.getServerInfo(r),
                                a = s.serverId,
                                r = s.roleId,
                                s = s.zoneidStr,
                                n = {
                                    __activity_id: 'vipBalanceGift',
                                    mp_app_id: t,
                                    user_id: n,
                                    user_id_type: 'hy_gameid',
                                    mp_task_meta_data: {
                                        ori_zoneid: s,
                                        server_id: a,
                                        role_id: r,
                                        muid: o.uid,
                                        Country: null == i ? void 0 : i.toUpperCase(),
                                        client_ver: 'android',
                                        caller_tag: 'NewMidasbuyClient'
                                    }
                                },
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]),
                                [4, h.default.queryUserModelInfo(n)];
                            case 2:
                                return (s = e.sent(),
                                (a = (null === (l = s.data) || void 0 === l ? void 0 : l.mp_task_user_task_info_list) || []).length) ? (r = (null === a ? void 0 : a[0]) || {},
                                o = (null === (l = null === r ? void 0 : r.mp_task_user_subtask_info_list) || void 0 === l ? void 0 : l[0]) || {},
                                i = o.mp_task_subtask_state,
                                a = o.mp_task_subtask_prize_list,
                                a = void 0 === a ? [] : a,
                                o = o.mp_task_subtask_id,
                                r = (null === r ? void 0 : r.mp_task_id) || '',
                                a = a.map(function(e) {
                                    return e.product_id
                                }),
                                s = {
                                    mp_activity_id: s.data.mp_activity_id,
                                    mp_sub_activity_id: s.data.mp_sub_activity_id,
                                    mp_task_id: r,
                                    mp_task_subtask_id: o
                                },
                                [2, {
                                    taskId: r,
                                    product_ids: a,
                                    subTaskId: o,
                                    taskState: i,
                                    newActivityParams: s
                                }]) : [2, {}];
                            case 3:
                                return e.sent(),
                                [2, {}];
                            case 4:
                                return [2]
                            }
                        })
                    })
                },
                replaceDesc: function(e) {
                    return null == e ? void 0 : e.replace(/\{0\}/g, (null === (e = this.gameInfo) || void 0 === e ? void 0 : e.titleName) || '')
                },
                closePop: function() {
                    null !== o.default && void 0 !== o.default && o.default.clickItem('account_link_result', 'ok', !0),
                    this.$emit('update:resultPopStatus', 'close'),
                    this.closeIframe('success' === this.resultPopStatus ? 'result-pop' : 'close')
                }
            }
        };
        t.Z = i
    },
    67684: function(e, t, n) {
        Object.defineProperty(t, "X", {
            value: !0
        }),
        t.Z = void 0,
        n(52077),
        n(911),
        n(26252);
        var i = window.report
          , n = {
            props: {
                lanres: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                gameInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                vipLevelInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                var e;
                return {
                    vipLevelPopLan: (null === (e = this.lanres.resultPop) || void 0 === e ? void 0 : e.vipLevelPop) || {}
                }
            },
            computed: {
                showLevelInfo: function() {
                    return !!(this.vipLevelInfo || {}).currentLevel
                },
                levelClass: function() {
                    var e = (this.vipLevelInfo || {}).currentLevel;
                    return e ? "v" + e : ''
                },
                upgradeTips: function() {
                    var e = this.vipLevelInfo
                      , t = this.vipLevelPopLan
                      , n = e || {}
                      , e = n.nextLevelNum
                      , n = n.nextLevel;
                    return e && n ? null === (e = null === (t = null == t ? void 0 : t.desc) || void 0 === t ? void 0 : t.replace('{0}', e)) || void 0 === e ? void 0 : e.replace('{1}', n) : ''
                }
            },
            mounted: function() {
                var e = this;
                null != i && i.view('balance_landing_pop'),
                setTimeout(function() {
                    e.handleClose()
                }, 2e3)
            },
            methods: {
                handleClose: function() {
                    this.$emit('update:showVipLevelPop', !1)
                }
            }
        };
        t.Z = n
    },
    52922: function(e, t, n) {
        var i = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(48410),
        n(63238),
        n(61418),
        n(25901),
        n(92189),
        n(91047),
        n(5769),
        n(17460),
        n(14078),
        n(72410),
        n(23938),
        n(95374),
        n(55849),
        n(32081),
        n(40895),
        n(52077),
        n(72482),
        n(52327),
        n(95623),
        n(61514),
        n(92571),
        n(98010),
        n(25613),
        n(61013),
        n(95289),
        n(27471),
        n(38217),
        n(83352),
        n(69217),
        n(911),
        n(82759),
        n(43512),
        n(76056);
        function h(e) {
            var t = e ? 1e3 * parseInt(e, 10) : null
              , n = new Date;
            function i(e) {
                return e.length < 2 ? "0" + e : e
            }
            t && n.setTime(t);
            var o = (n.getUTCMonth() + 1).toString()
              , r = n.getUTCDate().toString()
              , a = n.getUTCHours().toString()
              , e = n.getUTCMinutes().toString()
              , t = n.getUTCSeconds().toString()
              , n = n.getUTCFullYear() + "-";
            return n += (o = i(o)) + "-" + (r = i(r)) + "T" + (a = i(a)) + ":" + (e = i(e)) + ":" + (t = i(t)) + "Z"
        }
        function d() {
            return (new Date).getTime()
        }
        function v(e) {
            var t = Date.now()
              , n = (0,
            b.xMidasEncrypt)({
                t: t,
                h: location.hostname,
                o: e
            })
              , e = btoa(location.hostname + "_" + t + "_" + e);
            return {
                cencrypt_msg: n.encrypt_msg,
                ctoken_ver: n.ctoken_ver,
                ctoken: n.ctoken,
                pagetoken: e
            }
        }
        var f = i(n(82322))
          , m = i(n(55862))
          , p = i(n(11385))
          , g = i(n(37196))
          , y = i(n(32522))
          , w = i(n(50707))
          , o = i(n(29287))
          , r = i(n(35629))
          , _ = i(n(9869))
          , s = i(n(63762))
          , l = i(n(69437))
          , b = n(69903)
          , C = i(n(57319))
          , c = n(14197)
          , u = i(n(36576))
          , k = i(n(38012))
          , I = n(84810)
          , L = n(65996)
          , P = function() {
            return (P = Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , a = function(e, a, s, l) {
            return new (s = s || Promise)(function(n, t) {
                function i(e) {
                    try {
                        r(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    try {
                        r(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                        e(t)
                    }
                    )).then(i, o)
                }
                r((l = l.apply(e, a || [])).next())
            }
            )
        }
          , x = function(n, i) {
            var o, r, a, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(t) {
                return function(e) {
                    return function(t) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (o = 1,
                                r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, t[1])).done)
                                    return a;
                                switch (r = 0,
                                (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    r = t[1],
                                    t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1],
                                        a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2],
                                        s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                t = i.call(n, s)
                            } catch (e) {
                                t = [6, e],
                                r = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & t[0])
                            throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        }
          , S = function(e) {
            var t = "function" == typeof Symbol && Symbol.iterator
              , n = t && e[t]
              , i = 0;
            if (n)
                return n.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function() {
                        return {
                            value: (e = e && i >= e.length ? void 0 : e) && e[i++],
                            done: !e
                        }
                    }
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
          , T = function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var i, o, r = n.call(e), a = [];
            try {
                for (; (void 0 === t || 0 < t--) && !(i = r.next()).done; )
                    a.push(i.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (n = r.return) && n.call(r)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
          , A = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var i, o = 0, r = t.length; o < r; o++)
                    !i && o in t || ((i = i || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
            return e.concat(i || Array.prototype.slice.call(t))
        }
          , O = function(t, e) {
            L.context.with(L.trace.setSpan(L.context.active(), e), function() {
                var e = {};
                L.propagation.inject(L.context.active(), e),
                t.traceparent = e.traceparent
            })
        }
          , M = window.CHANNEL_INFO
          , E = window.__PAY_INFO
          , B = window.__Report_INFO || {}
          , D = '1' === (0,
        g.default)().midas_sdk
          , n = window.ignoreSendItem
          , U = void 0 === n ? [] : n
          , G = /MicroMessenger/i.test(navigator.userAgent.toLowerCase())
          , R = '/interface/getCharac'
          , N = '/interface/getTrans'
          , V = '/interface/getDrmInfo'
          , j = '/interface/unbindUser'
          , F = '/interface/getPayRes'
          , q = '/interface/getBuyStatus'
          , z = '/interface/queryDrmLimitNoLogin'
          , Y = '/interface/getProcess'
          , Z = '/interface/queryVipScore'
          , H = '/interface/sendInvoiceEmail'
          , W = '/interface/invoice/v1/email/insert'
          , J = '/interface/invoice/v1/query'
          , X = '/interface/getTask'
          , K = '/interface/queryQualification'
          , Q = '/interface/queryRoleDetail'
          , $ = '/interface/getBalanceByAppid'
          , ee = '/interface/getBindUsersByAppid'
          , te = '/interface/getPayInfoData'
          , ne = '/interface/getCharacByOpenid'
          , ie = '/interface/verifyBalance'
          , oe = '/interface/checkCookie'
          , re = window
          , ae = re.interfaceMethodMap || {}
          , n = (se.prototype.__init = function() {
            var e, t, n = this.getBindUser();
            null != n && n.pf ? (e = null == E ? void 0 : E.pf.split('midasweb'),
            t = n.pf,
            1 < e.length && (t += e[1]),
            this.pfinfo.pf = t) : this.pfinfo.pf = null == E ? void 0 : E.pf,
            null != n && n.zoneid ? this.pfinfo.zoneid = n.zoneid : this.pfinfo.zoneid = null == E ? void 0 : E.zoneid,
            this.initPassthroughToken();
            var i = window.tfp
              , o = this;
            o._reportNet('getFingerPrint.start', {});
            var r = +new Date;
            i && i('getToken', function(e) {
                i.app.getFingerPrint(e, function(e) {
                    o.fingerprint = e.fp;
                    e = +new Date;
                    o._reportNet('getFingerPrint.success', {
                        times: e - r
                    })
                })
            }),
            this._needCheckDrmHash = !(null === (n = re.GAME_CONFIG) || void 0 === n || !n.checkDrmHash),
            (0,
            b.xMidasInit)()
        }
        ,
        se.prototype.initPassthroughToken = function() {
            var e;
            this.payInfo && (e = this.getLoginRecord(E.appid),
            this.payInfo.passthroughToken = (null == e ? void 0 : e.passthroughToken) || '')
        }
        ,
        se.prototype.checkMidasApi = function() {
            return !!window.midas || (this._tokenExpireCallback(),
            this._reportErr('api.notload', {}),
            !1)
        }
        ,
        se.prototype.getMsgUrl = function() {
            return location.protocol + "//" + location.hostname + ":" + location.port + "/receivemsg?buy_type_key=" + this.getStorageKey()
        }
        ,
        se.prototype.getCountry = function() {
            return this.payInfo.country
        }
        ,
        se.prototype.getNeedSelectPF = function() {
            var e = this.payInfo.needSelectPF;
            if (e) {
                var i = e.data
                  , t = e.config;
                if ('partition' === (null == t ? void 0 : t.type) && t.groups) {
                    var n = null === (o = this.getCountry()) || void 0 === o ? void 0 : o.toLowerCase();
                    if (!n)
                        return e;
                    var o = t.groups.find(function(e) {
                        return '*' === e.country || e.country === n || e.country.includes(n)
                    });
                    if (!o)
                        return e;
                    var r = o.zoneid
                      , o = o.selectedZoneid;
                    'string' == typeof r && (r = [r]),
                    o && r.includes(o) && (t.selectedZoneid = o);
                    var a = {};
                    Object.keys(i).forEach(function(n) {
                        a[n] = {};
                        var e = i[n].partition;
                        e ? a[n].partition = e.filter(function(e) {
                            return r.includes(e.zoneid)
                        }) : Object.keys(i[n]).forEach(function(e) {
                            a[n][e] = {};
                            var t = i[n][e].partition;
                            a[n][e].partition = t.filter(function(e) {
                                return r.includes(e.zoneid)
                            })
                        })
                    }),
                    e.data = a
                }
                return e
            }
        }
        ,
        se.prototype.getActiveData = function() {
            return this.activeData || this.getLocalActiveData()
        }
        ,
        se.prototype.getLocalActiveData = function() {
            var e = (0,
            o.default)("ACTIVEDATA_" + E.openid);
            return e ? e.data : ''
        }
        ,
        se.prototype.saveLocalActiveData = function(e, t) {
            return (0,
            w.default)("ACTIVEDATA_" + e, {
                data: t
            })
        }
        ,
        se.prototype.fetchActiveData = function() {
            var t, e, n = this;
            window.needActiveData && (this.activeData = '',
            t = E.openid,
            e = E.appid,
            e = p.default.extend(this._getInterfaceParams(), {
                openid: t,
                offerid: e
            }),
            this._sendReq('/interface/getUserActive', e, 'get').then(function(e) {
                e && 0 === e.ret && (n.activeData = e.data || '',
                n.saveLocalActiveData(t, e.data))
            }).catch(function(e) {}))
        }
        ,
        se.prototype.setPF = function(e) {
            var t = e.pf
              , n = void 0 === t ? 'android' : t
              , t = e.zoneid
              , e = E.pf.split('-');
            e[2] && (e[2] = n),
            this.pfinfo.pf = e.join('-'),
            this._getMutipZoneidCharac() && this.browserParams.zoneid && (t = this.browserParams.zoneid),
            this.pfinfo.zoneid = t
        }
        ,
        se.prototype.getCurrentChannel = function() {
            return this.channelInfo.currentChannel
        }
        ,
        se.prototype.setCurrentChannel = function(e) {
            this.channelInfo.currentChannel = e
        }
        ,
        se.prototype.getPayInfo = function() {
            return this.payInfo
        }
        ,
        se.prototype.setPayInfo = function(e) {
            Object.assign(E, e)
        }
        ,
        se.prototype.getChannelInfo = function() {
            var e = this.channelInfo;
            return G ? e.wechat && (e.wechat.supportJsApi ? e.adyen_wechat && delete e.adyen_wechat : delete e.wechat) : e.adyen_wechat && delete e.adyen_wechat,
            e
        }
        ,
        se.prototype.getBrowserParams = function() {
            return this.browserParams
        }
        ,
        se.prototype.onDataChange = function(e) {
            this._dataChangeCallback = e
        }
        ,
        se.prototype.onTokenExpire = function(e) {
            this._tokenExpireCallback = e
        }
        ,
        se.prototype.handleRedeemChannel = function(e, t) {
            e.push({
                id: 'os_redeem_code',
                productid_info: []
            }),
            t.push('os_redeem_code')
        }
        ,
        se.prototype.getChannelData = function() {
            var n = this
              , e = window.GAME_INFO
              , t = window.isShelfRule
              , i = window.TABS_DATA;
            if (t)
                return i.map(function(e) {
                    e.productDatas.forEach(function(e) {
                        e.fprice = (0,
                        f.default)(e.price, e.currency_type),
                        e.fOriginPrice = (0,
                        f.default)(e.fOriginPrice, e.currency_type),
                        e.mktips = e.send_ext && window.langResource.xianyici
                    })
                }),
                this.processChannelState(i),
                this.processChannelGroup(i);
            var i = e.productid_list
              , o = []
              , r = e.channel
              , a = r.map(function(e) {
                return e.id
            })
              , s = this
              , l = this.getChannelInfo();
            window.showRedeemChannel && this.handleRedeemChannel(i, a);
            var c = this.getCountry();
            return (i = i.filter(function(e) {
                var t;
                return !e.productid_info || Array.isArray(e.productid_info) && 0 === e.productid_info.length ? (null !== (t = null === window || void 0 === window ? void 0 : window.report) && void 0 !== t && t.custom('empty_product_in_channel', {
                    id: e.id
                }),
                !1) : 'UNIMONTH' !== n.getBuyType() || !n.browserParams.pid || !!e.productid_info.find(function(e) {
                    return e.productid.endsWith(n.browserParams.pid)
                })
            })).forEach(function(e) {
                var t, n = a.indexOf(e.id);
                l[e.id] && -1 !== n ? ((t = l[e.id]).id = e.id,
                t.src = t.icon || t.icon_pc || t.icon_h5 || '',
                t.is_show_tax = null === (n = r[n]) || void 0 === n ? void 0 : n.is_show_tax,
                Array.isArray(t.imgs) && ((n = t.imgs.filter(function(e) {
                    return 'object' == typeof e && Array.isArray(e[c.toLocaleLowerCase()])
                })).length ? t.imgs = n[0][c.toLocaleLowerCase()] : t.imgs = t.imgs.filter(function(e) {
                    return 'string' == typeof e
                })),
                t.showtips = !1,
                t.productDatas = s._processDrm(e.productid_info, e.id),
                o.push(t)) : null === console || console
            }),
            this.needShowChannelLable(o),
            o = this.processChannelsInSdk(o),
            o = this.processChannelState(o),
            o = this.processChannelRecommend(o, r),
            o = this.processChannelGroup(o)
        }
        ,
        se.prototype.processChannelsInSdk = function(e) {
            var t = window.hideChannelsInSdk || [];
            return t.length && D ? e.filter(function(e) {
                e = e.id,
                e = -1 === t.indexOf(e);
                return e
            }) : e
        }
        ,
        se.prototype.processChannelRecommend = function(e, t) {
            var i = t || [];
            return e.forEach(function(e) {
                var t, n = (t = e.id,
                i.find(function(e) {
                    return e.id === t
                })), n = {
                    strategy: n ? n.strategy : '',
                    icon_desc: n ? n.icon_desc : '',
                    icon: n ? n.icon : ''
                };
                e.extraInfo = Object.assign(e.extraInfo || {}, {
                    strategy: n
                })
            }),
            e
        }
        ,
        se.prototype.processChannelState = function(e) {
            var o = new Date
              , r = []
              , a = [];
            return e.forEach(function(e) {
                e.group && 'string' == typeof e.group && M[e.group] && ((i = M[e.group]) && (i.src = i.icon || i.icon_pc || i.icon_h5 || '',
                -1 === r.indexOf(i) && (i.id = e.group,
                r.push(i))));
                var t = e.restoration
                  , n = e.addtionalExplanation;
                if ('object' == typeof t && null !== t) {
                    var i = t.startTime
                      , t = t.endTime;
                    if (i && t && new Date(i) < o && o < new Date(t))
                        return e.disable = !0,
                        a.push(e)
                }
                'object' == typeof n && null !== n && (e.hasAddtionalExplanation = !0),
                r.push(e)
            }),
            r.concat(a)
        }
        ,
        se.prototype.needShowChannelLable = function(e) {
            var t = window.MP_INFO
              , o = JSON.stringify(t);
            e.forEach(function(e) {
                if (e.showlabel = !0,
                e.label && e.label_rule_id && e.label_rule_id.length) {
                    for (var t = e.label_rule_id, n = !1, i = 0; i < t.length; i++)
                        if (t[i] && -1 !== o.indexOf(t[i])) {
                            n = !0;
                            break
                        }
                    e.showlabel = n
                }
            })
        }
        ,
        se.prototype.processChannelGroup = function(o) {
            var t, e, r, a = {};
            try {
                for (var n = S(o), i = n.next(); !i.done; i = n.next())
                    !function(t) {
                        var n = t.group;
                        if (n && 'string' == typeof n) {
                            var i = null;
                            if (a.hasOwnProperty(n))
                                i = a[n];
                            else {
                                if (!(i = o.find(function(e) {
                                    return e.id === n
                                })))
                                    return;
                                a[n] = i
                            }
                            if (t.disable)
                                return;
                            if (null !== (r = i.children) && void 0 !== r && r.length)
                                i.children.find(function(e) {
                                    return e.id === t.id
                                }) || i.children.push(t);
                            else {
                                if (i.children = [t],
                                i.default) {
                                    var e = o.find(function(e) {
                                        return e.id === i.default
                                    });
                                    if (e)
                                        return i.currentChild = e
                                }
                                i.currentChild = t
                            }
                        }
                    }(i.value)
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (e = n.return) && e.call(n)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            return o = o.filter(function(e) {
                return !(Object.prototype.hasOwnProperty.call(e, 'group') && 'string' == typeof e.group && a[e.group] && !e.disable)
            }),
            Object.keys(a).forEach(function(e) {
                var t;
                1 === (null === (t = null === (t = a[e]) || void 0 === t ? void 0 : t.children) || void 0 === t ? void 0 : t.length) && (o.push(a[e].children[0]),
                o.splice(o.indexOf(a[e]), 1))
            }),
            o
        }
        ,
        se.prototype._processDrm = function(e, l) {
            var t = window.MP_INFO
              , c = []
              , u = 0
              , n = this.getCountry().toLowerCase();
            return null != t && t.buycurrency && (C.default.setInfo(t),
            u = 1),
            (e = e.filter(function(e) {
                return (e.country || '').toLowerCase() === n
            })).forEach(function(e) {
                var t, n = JSON.parse(JSON.stringify(e));
                n.fprice = (0,
                f.default)(n.price, n.currency_type),
                n.fOriginPrice = n.original_price && (0,
                f.default)(n.original_price, n.currency_type),
                n.tax_info_list = (o = n.tax_info_list,
                t = n.currency_type,
                Array.isArray(o) && o.length ? o = o.map(function(e) {
                    return e.fTaxAmount = (0,
                    f.default)(e.tax_amount, t),
                    e
                }) : []),
                n.proxy_tax_info_list = n.proxy_tax_info_list || [],
                n.gift = [],
                n.id = n.productid;
                var i, o, r, a, s, e = E.currencyIcon;
                Array.isArray(E.currencyIconMap) && (i = n.num,
                e = (o = null == (o = E.currencyIconMap.find(function(e) {
                    return e.min && e.max ? +i >= +e.min && +i <= +e.max : e.min && !e.max ? +i >= +e.min : e.max && !e.min ? +i <= +e.max : void 0
                })) ? void 0 : o.icon) || e),
                n.icon = e,
                n.smallicon = E.currencySmallIcon,
                1 !== u || (e = C.default.getSendCount(parseInt(n.num, 10), l)) && (n.send = e.__sendNum,
                r = [],
                a = [],
                s = [],
                e.product_item.forEach(function(e) {
                    var t, n = /\*\d+/.test(e.name);
                    n && 1 < e.num && null !== (t = window.report) && void 0 !== t && t.custom('name_contains_num', {
                        name: e.name,
                        num: e.num
                    });
                    n = !n && 1 < e.num ? e.name + " * " + e.num : e.name;
                    U.includes(e.id) || (r.push(n),
                    a.push(e.id + "*" + e.num),
                    e.url && s.push(e.url))
                }),
                n.gift_icon = s,
                n.gift = r,
                n._sendproducts = e.product_item,
                n.monitor_gifts = a,
                n.mktips = window.langResource[e.send_ext] || e.send_ext),
                c.push(n)
            }),
            c.sort(function(e, t) {
                return e.price - t.price
            })
        }
        ,
        se.prototype.setOpenid = function(e) {
            E.openid = e.openid,
            E.userid = e.userid
        }
        ,
        se.prototype.getUserId = function() {
            return E.userid
        }
        ,
        se.prototype.getAppId = function() {
            return E.appid
        }
        ,
        se.prototype.getOpenId = function() {
            return E.openid
        }
        ,
        se.prototype.getCharacName = function() {
            var e;
            return (E.charac_name ? (0,
            s.default)(E.charac_name) : null != (e = this.getBindUser()) && e.charac_name ? e.charac_name : '').replace(/>/g, '&gt;')
        }
        ,
        se.prototype.setCharacName = function(e) {
            E.charac_name = e.charac_name
        }
        ,
        se.prototype.getProductItem = function() {
            return this.product_item
        }
        ,
        se.prototype.setProductItem = function(e) {
            var t;
            this.product_item = e;
            var n = this.browserParams
              , i = this._getInterfaceParams()
              , o = this.getUserId()
              , r = this.getCurrentChannel()
              , r = (null == r ? void 0 : r.mainChannel) || (null === (t = null === (t = null == r ? void 0 : r.pm) || void 0 === t ? void 0 : t.split(':')) || void 0 === t ? void 0 : t[0]) || (null == r ? void 0 : r.id) || (null == r ? void 0 : r.realChannel)
              , n = p.default.extend(P(P({
                appid: i.appid,
                country: i.country.toLowerCase()
            }, this.product_item), {
                buy_type_key: this.getStorageKey()
            }), n);
            this.browserParams.redirecturl && (e.redirecturl = this.browserParams.redirecturl),
            (0,
            w.default)(this.getStorageKey(), p.default.extend({
                buyType: this.getBuyType(),
                rediretParams: n,
                saveTime: (new Date).getTime(),
                userid: o,
                payChannel: r,
                provideUin: this.getOpenId()
            }, e))
        }
        ,
        se.prototype.updateStorageInfo = function(e) {
            var t = this.getStorageKey()
              , n = (0,
            o.default)(t);
            n && (e = p.default.extend(n, e, {
                saveTime: (new Date).getTime()
            }),
            (0,
            w.default)(t, e))
        }
        ,
        se.prototype.getStorageKey = function() {
            var e = this.getPayInfo().pageid;
            return _.default.CURRENT_BUY_ITEM + "_" + this.getBuyType() + "_" + e
        }
        ,
        se.prototype.getBuyType = function() {
            return ''
        }
        ,
        se.prototype.getOrderProduct = function() {
            return ''
        }
        ,
        se.prototype.getSessionId = function() {
            return 'hy_gameid'
        }
        ,
        se.prototype.getFingerprint = function() {
            return this.fingerprint
        }
        ,
        se.prototype.getDrmHash = function() {
            if (!this._needCheckDrmHash)
                return {};
            var e = this._getDrmInfoParams
              , t = this._getDrmInfoHash;
            return e && t ? {
                getDrmInfoParams: e,
                getDrmInfoHash: t
            } : {}
        }
        ,
        se.prototype.getPublicParams = function(t) {
            var e = E
              , n = this.getStorageKey()
              , i = (0,
            m.default)()
              , o = location.protocol + "//" + location.hostname + ":" + location.port + "/callback/"
              , r = window.isShelfRule ? 1 : 0
              , a = v(this.getOpenId());
            Object.assign(a, this.getDrmHash()),
            a.pageid = B.pageid || '',
            a.appid = e.appid,
            a.openid = this.getOpenId(),
            a.sandbox = e.sandbox,
            a.isShelfRule = r ? 1 : 0,
            a.pf = this._getPf(),
            a.platform = e.platform || 'android';
            var s = B.adspf;
            s && (a.adspf = s);
            var l = this.browserParams.aid;
            l && (a.aid = l);
            var r = e.drm_info
              , s = this.getProductItem()
              , c = !1;
            null != s && s.channel && 'BG' === this.getBuyType() && t && s.channel.forEach(function(e) {
                e.targetChannel === t.id && (c = !e.matchedRule || e.used_quota >= e.uin_quota)
            }),
            c && (r = Object.assign(r, {
                group_id: void 0
            })),
            a.drm_info = encodeURIComponent((0,
            y.default)(r, !0)),
            a.usePC = this.browserParams.usePC,
            a.pfkey = e.pfkey,
            a.currency_type = E.currency_type,
            a.country = E.country,
            a.session_id = this.getSessionId(),
            a.session_type = 'st_dummy',
            a.zoneid = this._getZoneid(),
            e.isv3 && (a.provide_type = 'uni_pdt',
            a.product_num = '1',
            a.buytype = 'xx',
            a.p_type = this.getBuyType().toLowerCase(),
            a.___forcetype = 1),
            a.productid = null == s ? void 0 : s.productid,
            a.ca = null == s ? void 0 : s.price,
            a.pendingUrl = o + "pending?buy_type_key=" + n,
            a.successUrl = o + "success?buy_type_key=" + n,
            a.failUrl = o + "fail?buy_type_key=" + n,
            a.msgUrl = this.getMsgUrl(),
            a.version = 'midasbuy_v2',
            a.localKey = n,
            i && (a.sessionToken = i),
            a.libtoken = e.adyen_url;
            r = null !== (l = e.midasUser) && void 0 !== l && l.avatarUrl ? encodeURIComponent(e.midasUser.avatarUrl) : '',
            this.getCharacName(),
            o = {
                device_id: B.midasbuyDeviceId || '',
                order_refer: (0,
                k.default)(),
                pagetoken: a.pagetoken,
                pageid: a.pageid
            };
            i && (o.tdrc_fp = i),
            null != t && t.gray && (o.gray = t.gray),
            null !== (n = e.drm_info) && void 0 !== n && n.task_token && (o.NickImg = encodeURIComponent("name=&avater=" + r)),
            o.muid = window.muid;
            l = window.user;
            null != l && l.vip_level && (o.vipLevel = "" + l.vip_level),
            null != l && l.providerType && (o.providerType = "" + l.providerType);
            i = this.getCurrentChannel();
            E.passthroughToken && null != i && i.enablePassThroughToken && (o.passthrough_token = E.passthroughToken),
            this.getFingerprint() && (o.risk_device_finger = this.getFingerprint());
            n = (0,
            g.default)().pid;
            n && null !== (d = null === (u = window) || void 0 === u ? void 0 : u.weekDealPid) && void 0 !== d && d.includes(n) && (o.ams_type = '3',
            o.ams_key = n,
            o.ams_roleid = (null === (f = null == E ? void 0 : E.currentBindUser) || void 0 === f ? void 0 : f.bindUserFromUrl) && (null === (p = null == E ? void 0 : E.currentBindUser) || void 0 === p ? void 0 : p.userid) || E.userid,
            o.platform = null == E ? void 0 : E.platform);
            var l = s || {}
              , i = l.num
              , u = l.send
              , d = l.monitor_gifts
              , n = l.price
              , f = l.currency_type
              , p = l.productid
              , s = l.shelf_product_id
              , l = l.promotions
              , d = {
                ca: void 0 === n ? 0 : n,
                currency_type: f,
                productid: p,
                num: (void 0 === i ? 0 : i) || 1,
                send: void 0 === u ? 0 : u,
                gift: null != d && d.length ? d.join(',') : ''
            }
              , l = {
                shelf_product_id: s,
                quantity: 1,
                shop_id: e.shop_id,
                promotions: JSON.stringify(l)
            };
            Object.assign(a, l),
            Object.assign(o, d),
            E.addWebIp && E.ipInfo && Object.assign(o, E.ipInfo);
            d = this.getActiveData();
            return d && d.length < 600 && Object.assign(o, {
                comm_data: d
            }),
            a.cgi_extend = (0,
            y.default)(o, !0),
            a.cgi_extend = a.cgi_extend.replace(/[!'()]/g, ''),
            300 < a.cgi_extend.length && r && (o.NickImg = encodeURIComponent("name=&avater="),
            a.cgi_extend = (0,
            y.default)(o, !0),
            a.cgi_extend = a.cgi_extend.replace(/[!'()]/g, '')),
            a.serverTime = h(e.adyen_svrtime),
            (0,
            w.default)(_.default.CURRENT_LOCATION, {
                url: location.href
            }),
            a
        }
        ,
        se.prototype.getBindUser = function() {
            var e = JSON.parse(JSON.stringify((null == E ? void 0 : E.currentBindUser) || null));
            if (this.isMidasLogin() || e)
                return null != e && e.charac_name && (e.charac_name = (0,
                s.default)(e.charac_name)),
                e;
            if (!E.notStorageUserInfo) {
                e = this.getLoginRecord(E.appid);
                return e && (E.openid = e.openid,
                E.userid = e.userid,
                E.charac_name = e.charac_name,
                E.zoneid = e.zoneid || E.zoneid),
                e
            }
        }
        ,
        se.prototype.getGameUsers = function() {
            var e, t, n, i, o, r = this, a = [];
            return this.isMidasLogin() ? (null != (n = JSON.parse(JSON.stringify(E.gameUsers || window.gameUsers || {}))) && n.length && n.forEach(function(e) {
                e.charac_name = (0,
                s.default)(e.charac_name)
            }),
            a = n,
            i = (null === (e = null === (e = window.__CommonState) || void 0 === e ? void 0 : e.queryBalanceConfig) || void 0 === e ? void 0 : e.balanceVerifyType) || [],
            1 < n.filter(function(e) {
                return i.includes(null == e ? void 0 : e.verifytype)
            }).length && null !== (t = null === window || void 0 === window ? void 0 : window.report) && void 0 !== t && t.custom('balance_verify-user-multiple', {
                muid: (null === (o = window.user) || void 0 === o ? void 0 : o.uid) || ''
            })) : E.notStorageUserInfo || (a = (o = this.getLoginRecord(E.appid)) ? [o] : []),
            function(e, t) {
                if (void 0 === t && (t = []),
                !e)
                    return t;
                var n = e.data
                  , e = e.config;
                if ('partition' !== (null == e ? void 0 : e.type) || !n)
                    return t;
                var i = [];
                return (0,
                u.default)(n, function(e, t) {
                    'partition' === e && Array.isArray(t) && i.push.apply(i, A([], T(t), !1))
                }),
                t.filter(function(e) {
                    var t = e.zoneid.toString();
                    return r.payInfo.mutipZoneidCharac && (t = t.replace(/_(.*)/g, '')),
                    i.find(function(e) {
                        return e.zoneid === t
                    })
                })
            }(this.getNeedSelectPF(), a)
        }
        ,
        se.prototype._getShopCode = function() {
            return window._SHOPCODE
        }
        ,
        se.prototype._getInterfaceParams = function() {
            (t = {
                device_id: B.midasbuyDeviceId || ''
            }).muid = window.muid,
            this.getFingerprint() && (t.risk_device_finger = this.getFingerprint());
            var e = (0,
            m.default)();
            e && (t.tdrc_fp = e);
            e = v(this.getOpenId());
            t.pagetoken = e.pagetoken;
            var e = P({}, t)
              , t = (0,
            y.default)(t, !0)
              , t = {
                appid: E.appid,
                currency_type: E.currency_type,
                country: (E.country || '').toUpperCase(),
                midasbuyArea: E.midasbuyArea || '',
                sc: this.browserParams.sc || '',
                from: this.browserParams.from || '',
                pid: this.browserParams.pid || '',
                task_token: this.browserParams.task_token || '',
                shop_id: this.browserParams.shop_id || '',
                pf: this._getPf(),
                zoneid: this._getZoneid(),
                _id: Math.random(),
                drm_info: (0,
                y.default)(this._getDrmInfo(), !0),
                shopcode: this._getShopCode(),
                cgi_extend: t,
                buyType: this.getBuyType().toLowerCase(),
                shortId: E.userid,
                cgi_extend_obj: e
            }
              , e = window._Exp_DATA || {};
            return t = Object.assign({}, t, e)
        }
        ,
        se.prototype._getPf = function() {
            return this.pfinfo.pf
        }
        ,
        se.prototype._getDrmInfo = function() {
            return this.payInfo.drm_info
        }
        ,
        se.prototype._getZoneid = function() {
            return this.pfinfo.zoneid
        }
        ,
        se.prototype._getMutipZoneidCharac = function() {
            return this.payInfo.mutipZoneidCharac
        }
        ,
        se.prototype.getCharac = function(e) {
            var t, s = this, l = e.shortId, n = e.area_id, i = e.zone_id, o = e.plat_id, e = e.__product_id;
            if (E.short_openid_rule && !new RegExp(E.short_openid_rule).test(l))
                return Promise.reject({
                    ret: 'wrong format'
                });
            var c = p.default.extend(this._getInterfaceParams(), {
                openid: l,
                area_id: n,
                zone_id: i,
                plat_id: o,
                __product_id: e
            })
              , u = this;
            return !window.filterInvalidZoneid || null !== (t = window.GAME_CONFIG) && void 0 !== t && t.notFilterZoneid || null !== (t = null === (e = null == c ? void 0 : c.zoneid) || void 0 === e ? void 0 : e.endsWith) && void 0 !== t && t.call(e, '_roleid') || -1 === ("" + ((null == c ? void 0 : c.zoneid) || '')).indexOf('_') ? new Promise(function(r, a) {
                var e = (ae.getCharac || 'get').toLowerCase();
                u._sendReq(R, c, e).then(function(e) {
                    if (e && 0 === e.ret) {
                        var t = e.info
                          , n = t.openid
                          , i = t.charac_name
                          , o = t.passthroughToken
                          , o = void 0 === o ? '' : o
                          , t = t.is_ban;
                        if (void 0 !== t && t)
                            throw {
                                ret: '1-001'
                            };
                        'normal' === E.short_openid_type && (e.info.openid = l);
                        t = e.info.zoneid || u._getZoneid();
                        u.saveLoginRecord(E.appid, {
                            zoneid: t,
                            userid: l,
                            openid: n,
                            charac_name: i,
                            pf: u._getPf().split('midasweb')[0] + "midasweb",
                            passthroughToken: o
                        }),
                        s.pfinfo.zoneid = t,
                        E.zoneid = t,
                        E.passthroughToken = o,
                        r(P(P({}, e.info), {
                            zoneid: t,
                            roleDetail: e.roleDetail
                        }))
                    } else
                        a(e)
                }).catch(function(e) {
                    a(e)
                })
            }
            ) : Promise.reject({
                ret: 10
            })
        }
        ,
        se.prototype.getUidByOpenid = function(e) {
            var i = this;
            return new Promise(function(t, n) {
                i._sendReq('/interface/getUidByOpenid', e, 'get').then(function(e) {
                    (0 === e.ret ? t : n)(e)
                }).catch(function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        se.prototype.getVerifyUserByUserId = function(e) {
            var t, i = this, n = e.appid, o = void 0 === n ? null === (t = this.payInfo) || void 0 === t ? void 0 : t.appid : n, r = e.openid, a = e.userid, s = e.zone_id;
            return new Promise(function(t, n) {
                i._sendReq('/interface/queryVerifyUser', {
                    appid: o,
                    openid: r,
                    userid: a,
                    zone_id: s
                }, 'get').then(function(e) {
                    (0 === e.ret ? t : n)(e)
                }).catch(function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        se.prototype.unbindGameUser = function(e) {
            var i = e.appid
              , o = e.userid
              , r = e.openid
              , a = e.type
              , s = e.verifytype
              , l = this;
            return new Promise(function(t, n) {
                l._sendReq('/interface/unbindUser', {
                    appid: i,
                    userid: o,
                    openid: r,
                    verifytype: s,
                    type: a
                }, 'get').then(function(e) {
                    (0 === e.ret ? t : n)(e)
                }).catch(function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        se.prototype.cancelReq = function() {
            this.characReq && this.characReq.abort()
        }
        ,
        se.prototype.getTrans = function() {
            var e = this._getInterfaceParams()
              , i = this;
            return new Promise(function(t, n) {
                i._sendReq(N, e, 'get').then(function(e) {
                    0 === e.ret ? t(e.data) : n(e)
                }).catch(function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        se.prototype.getRecommendChannel = function(e) {
            var n = e ? e.map(function(e) {
                return e.id
            }) : []
              , t = window.GAME_INFO || window.PRODUCT_INFO
              , i = window.recommendChannelConfigs
              , o = this.channelInfo
              , e = i && i.recommend_channel || [];
            return (e = null !== (i = null == t ? void 0 : t.recommend_channel) && void 0 !== i && i.length ? t.recommend_channel : e).map(function(e) {
                var t = o[e];
                return t && (t.id = e),
                t
            }).filter(function(e) {
                var t = void 0 !== e;
                return t = t && n.length ? -1 !== n.indexOf(e.id) : t
            })
        }
        ,
        se.prototype.getPopCount = function() {
            var e = window.GAME_INFO || window.PRODUCT_INFO
              , t = window.recommendChannelConfigs;
            if (null != t && t.start && t.end) {
                var n = (new Date).getTime();
                if (n < t.start || n > t.end)
                    return 0
            }
            return null != e && e.max_pop_count ? e.max_pop_count : t ? t.max_pop_count : 0
        }
        ,
        se.prototype.getCurrentPopCount = function() {
            var e = this.getOpenId()
              , t = this.getPayInfo().appid + "_" + e + "_popcount"
              , n = (0,
            o.default)(t)
              , i = window.recommendChannelConfigs;
            if (null != i && i.start && i.end) {
                e = (new Date).getTime();
                if (e < i.start || e > i.end)
                    return (0,
                    w.default)(t, null),
                    0
            }
            return (null == n ? void 0 : n.count) || 0
        }
        ,
        se.prototype.setCurrentPopCount = function(e) {
            var t = this.getOpenId()
              , n = this.getPayInfo().appid;
            (0,
            w.default)(n + "_" + t + "_popcount", {
                count: e
            })
        }
        ,
        se.prototype._changeGameData = function(e) {
            var t = p.default.extend(this._getInterfaceParams(), {
                openid: e.openid
            });
            this.setOpenid(e),
            this.setCharacName(e);
            var n = this
              , e = (ae.getDrmInfo || 'get').toLowerCase();
            this._sendReq(V, t, e).then(function(e) {
                0 === e.ret && (window.GAME_INFO = e.info,
                window.MP_INFO = e.mp_info,
                window.TABS_DATA = e.shelf_tabs_data,
                n._dataChangeCallback())
            })
        }
        ,
        se.prototype.getDrmInfoByUserInfo = function(e) {
            this._changeGameData(e)
        }
        ,
        se.prototype._reportNet = function(e, t) {
            var n = window.report;
            null != n && n.network && n.network(e, t)
        }
        ,
        se.prototype._reportErr = function(e, t) {
            var n = window.report;
            null != n && n.error && n.error(e, t)
        }
        ,
        se.prototype._setXmidasParams = function(e, t) {
            (t = void 0 === t ? !1 : t) && (this._getDrmInfoParams = JSON.stringify(e))
        }
        ,
        se.prototype._setDrmHash = function(e, t) {
            (t = void 0 === t ? !1 : t) && 0 === (null == e ? void 0 : e.ret) && e.mpinfoHash && (this._getDrmInfoHash = e.mpinfoHash)
        }
        ,
        se.prototype._sendReq = function(r, a, t) {
            var s = this
              , l = r.replace('/interface/', '')
              , c = this._needCheckDrmHash && r === V;
            B.devMode && !B.no_report && null !== (e = console.debug) && void 0 !== e && e.call(console, "real url before x-midas encryption: https://" + location.host + r + "?" + (0,
            y.default)(a));
            var e = '';
            try {
                e = sessionStorage.getItem(I.LI_PASS_TEMP_TOKEN)
            } catch (e) {}
            var u = e ? {
                'IN-FRAME': window.self === window.top ? '0' : '1',
                'LI-PASS-TOKEN': e
            } : {}
              , e = L.apiTracer.startSpan(r);
            return O(u, e),
            new Promise(function(i, n) {
                s._reportNet(l + ".start", {});
                var o = d()
                  , e = (0,
                b.xMidasEncrypt)(a);
                s._setXmidasParams(e, c),
                s.characReq = p.default.ajax({
                    method: 'post' === t ? 'POST' : 'GET',
                    data: e,
                    url: r,
                    headers: u
                }).done(function(e, t, n) {
                    n = null == n ? void 0 : n.getResponseHeader('seqid');
                    if (s._reportNet(l + ".success", {
                        times: d() - o,
                        ret: e.ret,
                        seqid: n
                    }),
                    s._setDrmHash(e, c),
                    void 0 === e.ret && (n = 'object' == typeof e ? JSON.stringify(e) : e,
                    s._reportNet('interface.logicerror', {
                        interface: l,
                        msg: n
                    })),
                    -1 !== [6, 7, 8].indexOf(e.ret))
                        return s._reportErr('tokenerror', {
                            interface: r,
                            ret: e.ret,
                            params: JSON.stringify(a)
                        }),
                        s._tokenExpireCallback();
                    s.characReq = void 0,
                    i(e)
                }).fail(function(e, t) {
                    s._reportNet(l + ".fail", {
                        times: d() - o,
                        ret: -9999,
                        status: e.status,
                        seqid: null == e ? void 0 : e.getResponseHeader('seqid')
                    }),
                    s.characReq = void 0,
                    n({
                        ret: -9999,
                        statusCode: e.status
                    })
                })
            }
            )
        }
        ,
        se.prototype.unbindUser = function(e) {
            var t, n = (E || {}).appid;
            n && ((t = this.getLoginRecord(n)) && t.userid === e.userid && (0,
            w.default)(this.loginRecordKey(n), null),
            this.isMidasLogin() && (e = {
                appid: n,
                userid: e.userid,
                openid: e.openid,
                r: Math.random()
            },
            this._sendReq(j, e, 'GET').then(function() {})))
        }
        ,
        se.prototype.sendInvoiceEmail = function(e) {
            return this._sendReq(H, e, 'post')
        }
        ,
        se.prototype.queryInvoiceInfo = function(e) {
            return this._sendReq(J, e, 'post')
        }
        ,
        se.prototype.saveEmailInfo = function(e) {
            return this._sendReq(W, e, 'post')
        }
        ,
        se.prototype.queryQualification = function(e) {
            return this._sendReq(K, e, 'post')
        }
        ,
        se.prototype.queryRoleDetail = function(e) {
            return this._sendReq(Q, e, 'get')
        }
        ,
        se.prototype.setBuyType = function(e) {}
        ,
        se.prototype.getPayRes = function(e) {
            var t = this.getPublicParams()
              , t = {
                appid: t.appid,
                pf: t.pf,
                openid: t.openid,
                r: Math.random(),
                portal_serial_no: e.portal_serial_no,
                order_no: null === (e = null == e ? void 0 : e.orderInfo) || void 0 === e ? void 0 : e.order_no,
                country: t.country
            };
            return this._sendReq(F, t, 'GET')
        }
        ,
        se.prototype.getBuyStatus = function(e) {
            e = {
                openid: e,
                appid: E.appid
            };
            return this._sendReq(q, e, 'GET')
        }
        ,
        se.prototype.queryDrmLimitNoLogin = function(e) {
            return this._sendReq(z, e, 'GET')
        }
        ,
        se.prototype.isMidasLogin = function() {
            return (null == E ? void 0 : E.midasUser) || null !== window.user
        }
        ,
        se.prototype.getMidasBuyUserInfo = function() {
            return (null == E ? void 0 : E.midasUser) || window.user
        }
        ,
        se.prototype.getComplianceKey = function() {
            return "compliance_v2_" + E.openid + "_" + E.country
        }
        ,
        se.prototype.getComplianceRecord = function() {
            return (0,
            o.default)(this.getComplianceKey())
        }
        ,
        se.prototype.saveComplianceRecord = function() {
            return (0,
            w.default)(this.getComplianceKey(), !0)
        }
        ,
        se.prototype.loginRecordKey = function(e) {
            return (E.storageUserInfoKey || '') + "loginrecord_" + e
        }
        ,
        se.prototype.saveLoginRecord = function(e, t) {
            return (0,
            w.default)(this.loginRecordKey(e), t)
        }
        ,
        se.prototype.getLoginRecord = function(e) {
            var t, n = (0,
            o.default)(this.loginRecordKey(e));
            for (t in n)
                n[t] = decodeURIComponent(n[t]);
            return n
        }
        ,
        se.prototype.getVipScore = function() {
            var s;
            return a(this, void 0, void 0, function() {
                var t, n, i, o, r, a;
                return x(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return 'VN' === this.getCountry() ? [2] : null !== (s = window.vipcenterConfig) && void 0 !== s && s.showCurrent || this.isMidasLogin() ? (t = this.getProductItem(),
                        o = this.getCurrentChannel(),
                        r = (null == o ? void 0 : o.mainChannel) || (null === (s = null === (s = null == o ? void 0 : o.pm) || void 0 === s ? void 0 : s.split(':')) || void 0 === s ? void 0 : s[0]) || (null == o ? void 0 : o.id) || (null == o ? void 0 : o.realChannel),
                        n = parseFloat((+(null == t ? void 0 : t.price) / 100).toFixed(2)),
                        i = "" + n + (null == t ? void 0 : t.currency_type) + r,
                        o = this.getProductScore(i),
                        r = JSON.stringify([{
                            score_source: 'amt:payChannel',
                            source_quantity: n,
                            source_value: (null == t ? void 0 : t.currency_type) + ":" + r
                        }]),
                        o ? [2, o] : [4, (0,
                        c.addRCParamsGo)({
                            source: r
                        })]) : [3, 3];
                    case 1:
                        return a = e.sent(),
                        [4, (0,
                        l.default)(this._sendReq(Z, a, 'post'))];
                    case 2:
                        if (a = T.apply(void 0, [e.sent(), 2]),
                        a[0],
                        (a = a[1]) && 0 === a.ret)
                            return this.setProductScore(i, a.data),
                            [2, a.data];
                        e.label = 3;
                    case 3:
                        return [2]
                    }
                })
            })
        }
        ,
        se.prototype.isItemTakeEffect = function(e) {
            var t = e.begin_time.replace(/-/g, '/')
              , e = e.end_time.replace(/-/g, '/')
              , t = new Date(t).getTime() || 0
              , e = new Date(e).getTime() || 0;
            return Date.now() > t && Date.now() < e
        }
        ,
        se.prototype.getTaskProcess = function(e, t, n) {
            e = P(P({}, this._getInterfaceParams()), {
                taskid: t,
                groupid: e,
                openid: window.muid
            });
            return n && (e.appid = n),
            this._sendReq(Y, e, 'get')
        }
        ,
        se.prototype.getTaskDetail = function(e, t) {
            e = P(P({}, this._getInterfaceParams()), {
                groupid: e,
                openid: window.muid || this.getOpenId()
            });
            return t && (e.appid = t),
            this._sendReq(X, e, 'get')
        }
        ,
        se.prototype.getPageType = function() {
            return location.pathname.split('/')[3]
        }
        ,
        se.prototype.getBindUserEmail = function() {
            var e, t = this.getLoginRecord(E.appid);
            return (null === (e = null == E ? void 0 : E.midasUser) || void 0 === e ? void 0 : e.email) || (null == t ? void 0 : t.email) || E.email
        }
        ,
        se.prototype.setUserEmail = function(e) {
            this.payInfo.email = e
        }
        ,
        se.prototype.getProductScore = function(e) {
            return this._scoreCache[e] || null
        }
        ,
        se.prototype.setProductScore = function(e, t) {
            this._scoreCache[e] = t
        }
        ,
        se.prototype.isVerifiedUser = function(e) {
            var t = this.isMidasLogin()
              , n = this.getBindUser()
              , t = t && n && '' !== n.verifytype
              , e = !e || n && n.verifytype === e;
            return t && e
        }
        ,
        se.prototype.getParamsFromPayInfo = function(e) {
            return void 0 !== this.payInfo[e] ? this.payInfo[e] : null
        }
        ,
        se.prototype.getBalanceByAppid = function() {
            var e = this.payInfo
              , t = e.openid
              , n = e.appid
              , i = e.country
              , o = e.currency_type
              , r = e.zoneid
              , r = {
                openid: t,
                appid: n,
                country: i,
                currency_type: o,
                pf: e.pf,
                zoneid: (null === (e = null === (e = "" + r) || void 0 === e ? void 0 : e.split('_')) || void 0 === e ? void 0 : e[0]) || r,
                _id: Math.random()
            };
            return this._sendReq($, r, 'get')
        }
        ,
        se.prototype.getBindUsersByAppid = function(e, t) {
            return this._sendReq(ee, {
                appid: e,
                type: t = void 0 === t ? '' : t
            }, 'get')
        }
        ,
        se.prototype.getPayInfoData = function(e, t) {
            return this._sendReq(te, {
                appid: e,
                country: t
            }, 'get')
        }
        ,
        se.prototype.getCharacByOpenid = function(e) {
            var t = e.appid
              , n = e.openid
              , e = e.zone_id;
            return this._sendReq(ne, {
                appid: t,
                openid: n,
                zone_id: e
            }, 'get')
        }
        ,
        se.prototype.verifyBalanceUser = function(e) {
            return this._sendReq(ie, e, 'post')
        }
        ,
        se.prototype.checkCookie = function(e) {
            return this._sendReq(oe, {
                id: Math.random().toString(),
                token: e
            }, 'get')
        }
        ,
        se);
        function se() {
            this.browserParams = {},
            this.channelInfo = M,
            this.pfinfo = {
                pf: '',
                zoneid: ''
            },
            this.payInfo = E,
            this.buytype = '',
            this.fingerprint = '',
            this.activeData = '',
            this._scoreCache = {},
            this._dataChangeCallback = function() {}
            ,
            this._tokenExpireCallback = function() {}
            ,
            this.product_item = null,
            this.browserParams = (0,
            g.default)(),
            (0,
            r.default)(_.default.CURRENT_BUY_ITEM, 36e5),
            this.__init()
        }
        t.default = n
    },
    35787: function(e, t, n) {
        var i = n(7914);
        n(48410),
        n(63238),
        n(61418),
        n(25901),
        n(92189),
        n(91047),
        n(5769),
        n(17460),
        n(14078),
        n(52327),
        n(95623),
        n(61514),
        n(26252),
        n(61013),
        n(96844),
        n(86521),
        n(29989),
        n(81253),
        n(8798),
        n(97873),
        n(75046),
        n(47445),
        n(14132);
        var l = n(44427)
          , o = i(n(17291))
          , r = i(n(745))
          , a = i(n(14074))
          , s = i(n(71461))
          , c = i(n(28835))
          , u = i(n(84263))
          , d = n(42338)
          , f = i(n(52922))
          , p = i(n(63762))
          , h = i(n(41940))
          , v = i(n(93318))
          , n = n(77576)
          , m = function() {
            return (m = Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , g = function(e, a, s, l) {
            return new (s = s || Promise)(function(n, t) {
                function i(e) {
                    try {
                        r(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    try {
                        r(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                        e(t)
                    }
                    )).then(i, o)
                }
                r((l = l.apply(e, a || [])).next())
            }
            )
        }
          , y = function(n, i) {
            var o, r, a, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(t) {
                return function(e) {
                    return function(t) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (o = 1,
                                r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, t[1])).done)
                                    return a;
                                switch (r = 0,
                                (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    r = t[1],
                                    t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1],
                                        a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2],
                                        s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                t = i.call(n, s)
                            } catch (e) {
                                t = [6, e],
                                r = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & t[0])
                            throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
        (0,
        n.setSdkTheme)();
        var w = new f.default
          , f = window.langResource
          , _ = void 0 === f ? {} : f
          , f = window.gameData
          , b = void 0 === f ? [] : f
          , C = window.report
          , k = window.user
          , f = window.queryBalanceConfig
          , I = void 0 === f ? {} : f
          , L = window.parent !== window
          , P = new d.Messenger;
        new o.default({
            el: '#balance-verify',
            components: {
                BindGameAccountPop: r.default,
                VerifyResultPop: a.default,
                TipsPop: s.default,
                PartitionPop: c.default,
                VipLevel: u.default
            },
            data: function() {
                return {
                    showModule: '',
                    lanRes: _,
                    userInfo: null,
                    isInIframe: L,
                    dlist: null,
                    showGameAccountBindPop: !1,
                    store: w,
                    baseInfo: {
                        appid: '',
                        country: '',
                        openid: '',
                        pf: '',
                        popConfig: {}
                    },
                    resultPopStatus: 'close',
                    showTipsPop: !1,
                    tipsType: '',
                    showPartitionPop: !1,
                    platforms: {},
                    toastMsg: '',
                    toastTimer: null,
                    hideCloseInPartition: !1,
                    hideClose: !1,
                    hideSuccessPage: !1,
                    showEdit: !1,
                    showVip: !1,
                    gameAccountPopType: 'link',
                    balanceStatus: 'link',
                    point: 0,
                    payInfo: {},
                    vipLevelInfo: {},
                    showVipLevelPop: !1,
                    loginSuccess: !1,
                    loginUser: k,
                    showGameEmail: !1
                }
            },
            created: function() {
                return g(this, void 0, void 0, function() {
                    return y(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return L ? [4, (0,
                            d.setupMessenger)()] : [3, 2];
                        case 1:
                            e.sent(),
                            this.handleMessengerEvent(),
                            e.label = 2;
                        case 2:
                            return h.default.init(),
                            [2]
                        }
                    })
                })
            },
            watch: {
                onBaseInfoProps: {
                    handler: function(e) {
                        var t = e.appid
                          , e = e.country;
                        t && e && this.handlePayInfoData()
                    },
                    deep: !0
                },
                showPage: {
                    handler: function(e) {
                        e && (C.page || this.initReportPage())
                    },
                    immediate: !0
                }
            },
            computed: {
                showPage: function() {
                    var e = this.showGameAccountBindPop
                      , t = this.resultPopStatus
                      , n = this.showTipsPop;
                    return e || 'close' !== t || n
                },
                onBaseInfoProps: function() {
                    var e = this.baseInfo;
                    return {
                        appid: e.appid,
                        country: e.country
                    }
                },
                activeGameInfo: function() {
                    var e, t = this, n = b.find(function(e) {
                        return e.appid === (null === (e = t.baseInfo) || void 0 === e ? void 0 : e.appid)
                    });
                    return m(m({}, n || {}), {
                        appid: (null == n ? void 0 : n.appid) || '',
                        titleName: (null == n ? void 0 : n.titleName) || '',
                        guideToEmailImage: (null === (e = null == n ? void 0 : n.images) || void 0 === e ? void 0 : e.guideToEmail) || '',
                        currencyUnit: (null == n ? void 0 : n.currencyUnit) || '',
                        lipLinkGuideImages: (null === (e = null == n ? void 0 : n.images) || void 0 === e ? void 0 : e.lipLinkGuideImages) || [],
                        hideBalanceScore: (null == n ? void 0 : n.hideBalanceScore) || !1
                    })
                }
            },
            methods: {
                updateBaseInfo: function(e) {
                    (this.baseInfo || {}).popConfig || (this.baseInfo.popConfig = {}),
                    this.baseInfo.popConfig.type = e
                },
                resetStatus: function() {
                    this.showTipsPop = !1,
                    this.showPartitionPop = !1,
                    this.showGameAccountBindPop = !1,
                    this.resultPopStatus = 'close',
                    this.showVipLevelPop = !1,
                    this.userInfo = null,
                    this.dlist = null,
                    this.gameAccountPopType = 'link'
                },
                updateUserInfo: function(a) {
                    var s;
                    return g(this, void 0, void 0, function() {
                        var t, n, i, o, r;
                        return y(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return e.trys.push([0, 6, , 7]),
                                r = (a || {}).isGameLogin,
                                t = void 0 !== r && r,
                                ['switchLogin', 'hasLinked'].includes(this.tipsType) ? (null !== (s = window.top) && void 0 !== s && s.location.reload(),
                                [2]) : window.midasbuyCommonSdk ? [3, 2] : [4, (0,
                                l.loadMidasbuyCommonSdkApi)()];
                            case 1:
                                e.sent(),
                                e.label = 2;
                            case 2:
                                return (n = window.midasbuyCommonSdk.balanceVerify) ? [4, n.getLoginInfo()] : [2];
                            case 3:
                                return (i = e.sent()) ? (this.loginSuccess = !0,
                                this.resetStatus(),
                                [4, this.handlePayInfoData()]) : [2];
                            case 4:
                                return e.sent(),
                                o = this.payInfo.currentBindUser || null,
                                this.loginUser = i,
                                o ? [4, n.getBalanceStatus({
                                    loginUser: i,
                                    userInfo: o,
                                    appid: this.baseInfo.appid
                                })] : (this.userInfo = null,
                                this.updateBaseInfo('link'),
                                this.handleShowPop(),
                                this.showGameEmail = !0,
                                [2]);
                            case 5:
                                return 'balance' !== (r = e.sent()) || t ? ((this.userInfo = o) && (this.userInfo.charac_name = (0,
                                p.default)(o.charac_name)),
                                'balance' === r && t ? (this.resultPopStatus = 'success',
                                [2]) : (this.updateBaseInfo(r),
                                this.showGameEmail = !0,
                                this.handleShowPop(),
                                [3, 7])) : (this.closeIframe('verifySuccessAfterLogin'),
                                [2]);
                            case 6:
                                return e.sent(),
                                null !== (s = window.top) && void 0 !== s && s.location.reload(),
                                [3, 7];
                            case 7:
                                return [2]
                            }
                        })
                    })
                },
                handleVipLevelInfo: function() {
                    var r;
                    return g(this, void 0, void 0, function() {
                        var t, n, i, o;
                        return y(this, function(e) {
                            switch (e.label) {
                            case 0:
                                if (!this.userInfo)
                                    return [2];
                                o = this.userInfo || {},
                                t = o.openid,
                                n = o.userid,
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]),
                                [4, v.default.queryShelfModelView({
                                    openid: t,
                                    userid: n,
                                    country: null === (r = this.baseInfo) || void 0 === r ? void 0 : r.country,
                                    model_id: ['ModelIDModelViewVipUpgradeInfo']
                                })];
                            case 2:
                                if (i = e.sent(),
                                i = (o = i || {}).ret,
                                o = o.model_view_vip_upgrade_info,
                                0 === i && o) {
                                    if (i = o.vip_level,
                                    o = o.next_vip_buy_coin,
                                    !i)
                                        return this.showVipLevelPop = !1,
                                        [2];
                                    this.vipLevelInfo = {
                                        nextLevelNum: o,
                                        nextLevel: i + 1,
                                        currentLevel: i
                                    },
                                    this.showVipLevelPop = !0
                                } else
                                    this.vipLevelInfo = {};
                                return [3, 4];
                            case 3:
                                return e.sent(),
                                this.vipLevelInfo = {},
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        })
                    })
                },
                initReportPage: function() {
                    var e = ((null === (e = this.baseInfo) || void 0 === e ? void 0 : e.popConfig) || {}).pageFrom;
                    null != C && C.setPage(void 0 === e ? 'balance-verify-sdk' : e)
                },
                showGameVerify: function(e) {
                    void 0 === e && (e = !1);
                    var t = this.baseInfo.popConfig || {}
                      , n = t.hideClose
                      , i = void 0 !== n && n
                      , o = t.hideSuccessPage
                      , n = t.showEdit
                      , n = void 0 !== n && n
                      , t = t.showVip
                      , t = void 0 !== t && t;
                    this.showGameAccountBindPop = !0,
                    this.hideClose = i,
                    this.hideSuccessPage = o,
                    this.showEdit = !this.userInfo || n,
                    this.showVip = t,
                    this.showModule = null !== (t = this.loginUser) && void 0 !== t && t.uid ? 'bindRole' : 'login',
                    this.gameAccountPopType = e ? 'change' : 'link'
                },
                handleChange: function() {
                    this.showTipsPop = !1,
                    this.showGameVerify(!0)
                },
                handleShowPop: function() {
                    var e = this.baseInfo.appid
                      , t = I.supportGameEmailVerifyList
                      , t = void 0 === t ? [] : t;
                    if (!t.includes(e) && k && 'lipass' !== (null == k ? void 0 : k.providerType))
                        return this.showTipsPop = !0,
                        void (this.tipsType = 'switchLogin');
                    if (t.includes(e) || 'lipass' !== (null == k ? void 0 : k.providerType)) {
                        var e = this.baseInfo.popConfig || {}
                          , n = e.change
                          , e = e.type;
                        switch (this.balanceStatus = void 0 === e ? 'link' : e,
                        this.balanceStatus) {
                        case 'notView-fb':
                            this.tipsType = 'fbLinked',
                            this.showTipsPop = !0;
                            break;
                        case 'notView-email':
                            this.tipsType = n ? 'changeLink' : 'emailLink',
                            this.showTipsPop = !0;
                            break;
                        case 'notView-playerId':
                            this.tipsType = 'hasLinked',
                            this.showTipsPop = !0;
                            break;
                        case 'unlink':
                            this.tipsType = 'unlink',
                            this.showTipsPop = !0;
                            break;
                        default:
                            this.showGameVerify()
                        }
                    } else
                        this.resultPopStatus = 'fail'
                },
                handleToastMsg: function(e) {
                    var t = this
                      , n = e.msg
                      , n = void 0 === n ? '' : n
                      , e = e.timeout
                      , e = void 0 === e ? 3e3 : e;
                    this.toastTimer && clearTimeout(this.toastTimer),
                    this.toastMsg = n,
                    this.toastTimer = setTimeout(function() {
                        t.toastMsg = ''
                    }, e)
                },
                handlePayInfoData: function() {
                    var r;
                    return g(this, void 0, void 0, function() {
                        var t, n, i, o;
                        return y(this, function(e) {
                            switch (e.label) {
                            case 0:
                                if (o = this.baseInfo,
                                t = o.appid,
                                n = o.country,
                                !t || !n)
                                    return [2];
                                i = {},
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]),
                                [4, w.getPayInfoData(t, n)];
                            case 2:
                                return 0 === (null == (o = e.sent()) ? void 0 : o.ret) && (i = (null === (r = o.data) || void 0 === r ? void 0 : r.payInfo) || {}),
                                (o = (null == i ? void 0 : i.gameUsers) || []).length ? (o = o.map(function(e) {
                                    return m(m({}, e), {
                                        charac_name: (0,
                                        p.default)(e.charac_name)
                                    })
                                }),
                                this.dlist = o) : this.dlist = [],
                                [3, 4];
                            case 3:
                                return e.sent(),
                                this.dlist = [],
                                [3, 4];
                            case 4:
                                return w.setPayInfo(i),
                                w.__init(),
                                this.payInfo = i,
                                this.platforms = w.getNeedSelectPF(),
                                [2]
                            }
                        })
                    })
                },
                selectPartition: function(d) {
                    return g(this, void 0, void 0, function() {
                        var t, n, i, o, r, a, s, l, c, u;
                        return y(this, function(e) {
                            switch (e.label) {
                            case 0:
                                if (null != C && C.ck('select-partition_confirm', m({}, d)),
                                s = this.baseInfo,
                                t = s.openid,
                                n = s.appid,
                                i = s.pf,
                                o = d.zoneid,
                                r = (this.lanRes || {}).selectPartitionPop,
                                !(n && t && o && k))
                                    return null != C && C.ck('select-partition_error', m(m({}, d), {
                                        msg: 'Invalid Parameter Value'
                                    })),
                                    this.handleToastMsg({
                                        msg: 'Invalid Parameter Value'
                                    }),
                                    [2];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 5, , 6]),
                                [4, w.getCharacByOpenid({
                                    appid: n,
                                    openid: t,
                                    zone_id: "" + o || ''
                                })];
                            case 2:
                                return (a = e.sent(),
                                0 !== (a || {}).ret) ? [3, 4] : (l = null == a ? void 0 : a.data,
                                c = l.roleName,
                                s = void 0 === c ? '' : c,
                                c = l.userId,
                                l = void 0 === c ? '' : c,
                                null != C && C.ck('select-partition_success', {
                                    type: 'queryRole',
                                    roleName: s,
                                    userId: l
                                }),
                                c = (k || {}).providerType,
                                c = 'email' === c ? 'email-balance' : c,
                                [4, w.verifyBalanceUser({
                                    appid: n,
                                    openid: t,
                                    zoneid: "" + o,
                                    charac_name: s,
                                    userid: l,
                                    verifyType: c || 'email-balance',
                                    pf: i || 'xxx-yyy-android-midasweb'
                                })]);
                            case 3:
                                return 0 === (null == (u = e.sent()) ? void 0 : u.ret) ? (null != C && C.ck('select-partition_success', {
                                    type: 'verifyBalance'
                                }),
                                this.showPartitionPop = !1,
                                P.emit('balanceVerifySuccess', (null == u ? void 0 : u.data) || {}),
                                P.emit('hide'),
                                [2]) : (null != C && C.ck('select-partition_error', {
                                    type: 'verifyBalance',
                                    msg: null == u ? void 0 : u.msg
                                }),
                                this.handleToastMsg({
                                    msg: r.systemError
                                }),
                                [2]);
                            case 4:
                                return null != C && C.ck('select-partition_error', {
                                    type: 'queryRole',
                                    msg: (null == a ? void 0 : a.msg) || ''
                                }),
                                this.handleToastMsg({
                                    msg: r.queryRoleError
                                }),
                                [3, 6];
                            case 5:
                                return u = e.sent(),
                                null != C && C.ck('select-partition_error', {
                                    type: 'system',
                                    msg: (null == u ? void 0 : u.message) || (null == u ? void 0 : u.msg) || u
                                }),
                                this.handleToastMsg({
                                    msg: r.systemError
                                }),
                                [3, 6];
                            case 6:
                                return [2]
                            }
                        })
                    })
                },
                closeIframe: function(e) {
                    switch (e) {
                    case 'loginSuccess':
                        P.emit('loginSuccess', this.loginUser);
                        break;
                    case 'verifySuccessAfterLogin':
                    case 'result-pop':
                    case 'direct-success':
                        P.emit('balanceVerifySuccess', this.userInfo, this.loginSuccess);
                        break;
                    case 'close':
                        this.loginSuccess && P.emit('loginSuccess', this.loginUser)
                    }
                    P.emit('hide', e || 'close')
                },
                onEdit: function(e) {
                    this.userInfo = e
                },
                handleMessengerEvent: function() {
                    var o = this;
                    P.on('setBaseInfo', function(e) {
                        var t = m(m(m({}, o.baseInfo), e), {
                            popConfig: m({
                                pageFrom: 'balance-verify-sdk'
                            }, e.popConfig || {})
                        });
                        null != t && t.country && (t.country = null === (e = t.country) || void 0 === e ? void 0 : e.toLowerCase()),
                        o.baseInfo = t
                    }).on('setUserInfo', function(e) {
                        var t = o.userInfo;
                        e && (e.charac_name = (0,
                        p.default)(e.charac_name)),
                        o.userInfo = t && 'object' == typeof t ? m(m({}, t), e || {}) : e
                    }).on('show', function() {
                        var e = o.baseInfo.popConfig || {}
                          , t = e.popName
                          , n = e.type
                          , i = void 0 === n ? 'notView-playerId' : n
                          , n = e.change
                          , e = e.hideClose
                          , e = void 0 !== e && e;
                        'tipsPop' === t ? (o.tipsType = n && 'notView-email' === i ? 'changeLink' : {
                            'notView-email': 'emailLink',
                            'notView-fb': 'fbLinked',
                            'notView-playerId': 'hasLinked'
                        }[i] || 'hasLinked',
                        o.showTipsPop = !0) : 'partitionPop' === t ? (o.showPartitionPop = !0,
                        o.hideCloseInPartition = e) : o.showGameVerify(n)
                    }).on('showPop', function() {
                        o.handleShowPop()
                    }).on('hide', function() {
                        o.resetStatus()
                    })
                }
            }
        })
    },
    84810: function(e, t, n) {
        var i = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LI_PASS_TEMP_TOKEN = void 0,
        t.LiPassMsg = k,
        t.callThirdPartLogin = function() {}
        ,
        t.default = function() {
            var e = window.midasLogin
              , t = window.user;
            if (k(),
            t)
                return !(!f.useThirdPartLogin || w()) && (e.logout(null, null, null),
                !0);
            if (f.useThirdPartLogin)
                return !0;
            return null == e || e.on('iframeLoad', function() {
                e.login({
                    pageConfig: {
                        hideClose: 1
                    }
                })
            }),
            !0
        }
        ,
        t.loginLink = t.loginConfirm = void 0,
        t.logoutLiPass = C,
        t.tellThirdPartLoginResult = _;
        var o = i(n(70106))
          , r = i(n(16957));
        n(63238),
        n(61418),
        n(25901),
        n(92189),
        n(91047),
        n(5769),
        n(17460),
        n(14078),
        n(27471),
        n(52077),
        n(72482),
        n(911),
        n(52327),
        n(26252);
        function a() {
            return a.store || (a.store = new l.default)
        }
        var s = i(n(81233))
          , l = (n(67622),
        i(n(52922)))
          , c = function(e, a, s, l) {
            return new (s = s || Promise)(function(n, t) {
                function i(e) {
                    try {
                        r(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    try {
                        r(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                        e(t)
                    }
                    )).then(i, o)
                }
                r((l = l.apply(e, a || [])).next())
            }
            )
        }
          , u = function(n, i) {
            var o, r, a, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(t) {
                return function(e) {
                    return function(t) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (o = 1,
                                r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, t[1])).done)
                                    return a;
                                switch (r = 0,
                                (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    r = t[1],
                                    t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1],
                                        a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2],
                                        s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                t = i.call(n, s)
                            } catch (e) {
                                t = [6, e],
                                r = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & t[0])
                            throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        }
          , d = (0,
        s.default)()
          , s = window.shopConfig
          , f = void 0 === s ? {} : s
          , p = window._SHOPCODE
          , h = window.report
          , v = (f || {}).allowOriginUrl
          , m = 'lipassTempToken';
        t.LI_PASS_TEMP_TOKEN = m;
        var g = function(e) {
            var t = !1;
            return v && e && ('string' == typeof v ? t = e === v : Array.isArray(v) && v.length && (t = -1 !== v.indexOf(e) || -1 !== v.indexOf(e.split('://')[1]))),
            t
        }
          , y = function(e) {
            var t;
            try {
                null !== (t = window.sessionStorage) && void 0 !== t && t.setItem(m, e)
            } catch (e) {}
        };
        var w = function() {
            var e = window.user
              , t = f || {}
              , n = t.useThirdPartLogin
              , t = t.gameIdList
              , t = void 0 === t ? [] : t
              , e = null === (e = null == e ? void 0 : e.other) || void 0 === e ? void 0 : e['lipass-gameid'];
            return n && e && -1 !== t.indexOf(e)
        };
        function _(e, t) {
            var n;
            void 0 === e && (e = 1);
            var i = 'MIDAS_CALL_LI_LOGIN_RESULT'
              , i = [{
                action: i,
                ret: 0,
                msg: 'succ'
            }, {
                action: i,
                ret: 1,
                err_info: 'fail'
            }];
            g(t) && null !== (n = window.parent) && void 0 !== n && n.postMessage(i[e], '*')
        }
        function b(e, t) {
            switch (e) {
            case 'login_succeed':
                !function(i) {
                    c(this, void 0, void 0, function() {
                        var t, n;
                        return u(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, a().checkCookie(i)];
                            case 1:
                                return 0 === (t = e.sent()).ret && 1 === t.cookie ? [2, location.reload()] : (n = location.hash || '#',
                                n = (0,
                                r.default)({
                                    _lipass_token: t.xtoken
                                }, location.href.replace(n, '')) + ('#' === n ? '' : n),
                                location.href = n,
                                [2])
                            }
                        })
                    })
                }(t);
                break;
            case 'login_link':
                I(t);
                break;
            case 'login_confirm':
                L(t)
            }
        }
        function C() {
            var t, e = window.midasLogin;
            window.user && (t = location.hash || '#',
            null != e && e.logout({}, function() {
                null !== sessionStorage && void 0 !== sessionStorage && sessionStorage.removeItem(m);
                var e = (0,
                o.default)('_lipass_token', location.href.replace(t, '')) + ('#' === t ? '' : t);
                location.href = e
            }, null))
        }
        function k() {
            var e, t;
            window.addEventListener('message', function(e) {
                var t = e.origin
                  , n = e.data;
                if (g(t) && n) {
                    var i = JSON.parse(n) || {}
                      , o = i.openid
                      , e = i.token
                      , n = i.logout
                      , i = i.gameid;
                    if (h.custom('received-lipass-message-userCenter', {
                        origin: t,
                        iframeSrc: location.href,
                        openId: o,
                        gameId: i,
                        isLogout: n
                    }),
                    n)
                        return C();
                    o && e && !w() && function(o, r) {
                        c(this, void 0, void 0, function() {
                            var t, n, i;
                            return u(this, function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, null == (n = window.midasLogin) ? void 0 : n.createMidasbuyUserByLipass(o)];
                                case 1:
                                    return 0 === (null == (t = e.sent()) ? void 0 : t.ret) ? (i = t.data,
                                    n = i.action,
                                    i = i.token,
                                    b(n, i),
                                    y(i),
                                    _(0, r)) : (null != h && h.custom('lipass-login-fail', {
                                        failInfo: JSON.stringify(t)
                                    }),
                                    _(1, r)),
                                    [2]
                                }
                            })
                        })
                    }({
                        openId: o,
                        token: e,
                        iframeUrl: i ? t + "?gameid=" + i : t,
                        endpointType: d ? 'h5' : 'pc'
                    }, t)
                }
            }, !1),
            w() || (t = ([{
                shopCode: 'lipass',
                actionName: 'MIDAS_CALL_LI_TOKEN'
            }].find(function(e) {
                return e.shopCode === p
            }) || {}).actionName) && null !== (e = window.parent) && void 0 !== e && e.postMessage({
                action: t
            }, '*')
        }
        function I(e) {
            P({
                pageConfig: {
                    token: e,
                    thirdPartyType: 'lipass',
                    processType: 'lipassBind',
                    from: 'select-payment-method-pop'
                }
            })
        }
        t.loginLink = I;
        function L(e) {
            x({
                pageConfig: {
                    token: e,
                    thirdPartyType: 'lipass',
                    processType: 'lipassActive',
                    from: 'lipass-usercenter-pop'
                }
            })
        }
        t.loginConfirm = L;
        var P = function(e) {
            return S(e || {}, '#confirm-link-account')
        }
          , x = function(e) {
            return S(e || {}, '#third-party-add-info')
        }
          , S = function(o, r) {
            return void 0 === o && (o = {}),
            void 0 === r && (r = '#login'),
            c(void 0, void 0, void 0, function() {
                var t, i;
                return u(this, function(e) {
                    return t = window.midasLogin,
                    i = window._COUNTRY,
                    [2, new Promise(function(n) {
                        var e = function(e) {
                            var t = e.from;
                            e.action,
                            e.user;
                            'consume-currency' === t && localStorage.setItem('loginfor_consume-currency', '1'),
                            n(),
                            setTimeout(function() {
                                o.redirect ? location.href = o.redirect : location.reload()
                            }, 50)
                        };
                        t.on('logined', e),
                        t.on('loginSuccess', e),
                        t.on('facebookLoginSuccess', e),
                        t.on('registerSuccess', e),
                        null !== (e = o.beforeLogin) && void 0 !== e && e.call(o),
                        null != t && t.login({
                            country: i.toLowerCase(),
                            hash: r,
                            host: location.hostname,
                            pageConfig: o.pageConfig || {}
                        }),
                        null !== (e = o.afterLogin) && void 0 !== e && e.call(o)
                    }
                    )]
                })
            })
        }
    },
    23112: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(63238),
        n(61418),
        n(25901),
        n(92189),
        n(91047),
        n(5769),
        n(17460),
        n(14078);
        var d = n(44427)
          , i = function(e, a, s, l) {
            return new (s = s || Promise)(function(n, t) {
                function i(e) {
                    try {
                        r(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    try {
                        r(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                        e(t)
                    }
                    )).then(i, o)
                }
                r((l = l.apply(e, a || [])).next())
            }
            )
        }
          , f = function(n, i) {
            var o, r, a, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(t) {
                return function(e) {
                    return function(t) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (o = 1,
                                r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, t[1])).done)
                                    return a;
                                switch (r = 0,
                                (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    r = t[1],
                                    t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1],
                                        a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2],
                                        s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                t = i.call(n, s)
                            } catch (e) {
                                t = [6, e],
                                r = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & t[0])
                            throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        }
          , n = {
            methods: {
                setupBaseEvents: function(e) {
                    var t, n = this;
                    null !== (t = null == e ? void 0 : e.on('hide', function() {
                        e.emit('hide')
                    })) && void 0 !== t && t.on('balanceVerifySuccess', function(e) {
                        'function' == typeof n.balanceVerifySuccessCb && n.balanceVerifySuccessCb(),
                        location.reload()
                    })
                },
                linkAccount: function(c) {
                    var u;
                    return i(this, void 0, void 0, function() {
                        var t, n, i, o, r, a, s, l;
                        return f(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return e.trys.push([0, 3, , 4]),
                                window.midasbuyCommonSdk ? [3, 2] : [4, (0,
                                d.loadMidasbuyCommonSdkApi)()];
                            case 1:
                                e.sent(),
                                e.label = 2;
                            case 2:
                                return t = window._COUNTRY,
                                n = window.__PAY_INFO,
                                i = c.userInfo,
                                o = c.type,
                                r = c.showEdit,
                                a = c.appid,
                                null != (s = window.midasbuyCommonSdk.balanceVerify) && s.preload({
                                    country: t
                                }),
                                this.setupBaseEvents(s),
                                l = {
                                    pageFrom: null === (u = window.report) || void 0 === u ? void 0 : u.page,
                                    change: '1'
                                },
                                r && (l.showEdit = !0),
                                o && (l.type = o),
                                null != s && s.emit('setBaseInfo', {
                                    appid: a || (null == n ? void 0 : n.appid) || '',
                                    country: t,
                                    popConfig: l
                                }),
                                null != s && s.emit('setUserInfo', i || null),
                                null != s && s.emit('showPop'),
                                [3, 4];
                            case 3:
                                return e.sent(),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        })
                    })
                }
            }
        };
        t.default = n
    },
    37996: function(e, t, n) {
        var i = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(48410),
        n(63238),
        n(61418),
        n(25901),
        n(92189),
        n(91047),
        n(5769),
        n(17460),
        n(14078),
        n(26252),
        n(95623);
        var c = i(n(82979))
          , o = n(69903)
          , u = function() {
            return (u = Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = function(e, a, s, l) {
            return new (s = s || Promise)(function(n, t) {
                function i(e) {
                    try {
                        r(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    try {
                        r(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                        e(t)
                    }
                    )).then(i, o)
                }
                r((l = l.apply(e, a || [])).next())
            }
            )
        }
          , a = function(n, i) {
            var o, r, a, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(t) {
                return function(e) {
                    return function(t) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (o = 1,
                                r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, t[1])).done)
                                    return a;
                                switch (r = 0,
                                (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    r = t[1],
                                    t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1],
                                        a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2],
                                        s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                t = i.call(n, s)
                            } catch (e) {
                                t = [6, e],
                                r = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & t[0])
                            throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        }
          , s = window._COUNTRY
          , n = window.GAME_CONFIG
          , l = void 0 === n ? {} : n
          , n = window.langResource
          , d = void 0 === n ? {} : n
          , n = {
            data: function() {
                return {
                    country: s
                }
            },
            created: function() {
                this.initHandler(),
                (0,
                o.xMidasInit)()
            },
            methods: {
                initHandler: function() {
                    var e, t = window.midasLogin;
                    null != t && t.on('loginSuccess', this.loginSuccessHandle),
                    null != t && t.on('loginFail', this.loginFailHandle);
                    var n = {
                        country: (window._SERVER_DATA || {}).isNoSupportCountry ? 'ot' : this.country,
                        hash: '#login',
                        host: location.hostname,
                        preload: !0
                    }
                      , i = (null === (e = window.__PAY_INFO) || void 0 === e ? void 0 : e.appid) || (null === (i = this.gameInfo) || void 0 === i ? void 0 : i.appid) || '';
                    i && (n.pageConfig = {
                        appid: i
                    }),
                    null != t && t.init(n)
                },
                _publicParams: function() {
                    var e = window.__PAY_INFO
                      , t = e.appid
                      , n = e.country
                      , i = e.currency_type
                      , e = e.pf;
                    return {
                        appid: t,
                        country: n,
                        currency_type: i,
                        _id: Math.random(),
                        pf: e
                    }
                },
                directPresent: function(t) {
                    var e = $.extend(t, this._publicParams());
                    return t = (0,
                    o.xMidasEncrypt)(e),
                    $.get('/interface/directPresent', t).then(function(e) {
                        0 === e.ret ? ((0,
                        c.default)({
                            msg: d.forceLoginPresentSuccess,
                            timeout: 4e3
                        }),
                        window.report.click('pop_face_login_present_success', t)) : ((0,
                        c.default)({
                            msg: d.forceLoginPresentFail,
                            timeout: 4e3
                        }),
                        window.report.click('pop_face_login_present_fail', t)),
                        localStorage.setItem('force_login_user_present', '1'),
                        setTimeout(function() {
                            location.reload()
                        }, 4e3)
                    })
                },
                loginFailHandle: function(e) {
                    'bind-pop-easy-login' === e.from && 'function' == typeof this.handleEasyLoginError && this.handleEasyLoginError(e)
                },
                loginSuccessHandle: function(o) {
                    return r(this, void 0, void 0, function() {
                        var t, n, i;
                        return a(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return (t = o.from,
                                i = o.user,
                                t && 'popFace' === t) ? (n = l.popFaceEvent,
                                i = {
                                    groupid: n.groupId,
                                    goodstype: n.goodsType,
                                    uin: i.currentBindUser.uid,
                                    openid: i.currentBindUser.openid
                                },
                                [4, this.directPresent(i)]) : [3, 2];
                            case 1:
                                return e.sent(),
                                [2];
                            case 2:
                                return ['bind-pop-easy-login', 'bind-pop-change-login'].includes(t) ? ('function' == typeof this.handleEasyLoginSuccess && this.handleEasyLoginSuccess(o),
                                [2]) : ((0,
                                c.default)({
                                    msg: 'Login success!'
                                }),
                                'function' == typeof this.customLoginCallback ? this.customLoginCallback() : setTimeout(function() {
                                    location.reload()
                                }, 2e3),
                                [2])
                            }
                        })
                    })
                },
                changeLoginInBindPop: function(e) {
                    var t, n = window.midasLogin;
                    n ? (t = e.appid,
                    e = e.country,
                    null !== n && void 0 !== n && n.login({
                        hash: '#login',
                        country: e,
                        pageConfig: {
                            appid: t,
                            needReloadIframe: !0,
                            scene: 'Midasbuy_official_website',
                            from: 'bind-pop-change-login'
                        }
                    })) : null !== (t = window.report) && void 0 !== t && t.custom('login-in-game-verify_load-sdk-error')
                },
                easyLogin: function(e) {
                    var t, n = this, i = window.midasLogin;
                    if (i) {
                        var o = e.platform
                          , r = e.appid
                          , a = e.country
                          , s = e.isGameLogin
                          , l = e.isAddThirdParty
                          , l = void 0 !== l && l
                          , e = e.nativeGameLoginConfig;
                        if (o) {
                            if (['email', 'lipass'].includes(o))
                                return null == i ? void 0 : i.login({
                                    hash: {
                                        email: '#login',
                                        lipass: '#lipass-login'
                                    }[o],
                                    pageConfig: u({
                                        hideThirdParty: 1,
                                        scene: 'Midasbuy_official_website_easy_login',
                                        from: 'bind-pop-easy-login'
                                    }, 'lipass' === o ? {
                                        thirdPartyType: 'lipass'
                                    } : {})
                                });
                            if (s) {
                                e = {
                                    thirdPartyType: o,
                                    appid: r,
                                    scene: 'Midasbuy_official_website_easy_login',
                                    from: 'bind-pop-easy-login',
                                    nativeGameLoginConfig: e
                                };
                                return l && (e.processType = 'addThirdParty'),
                                void i.login({
                                    hash: '#native-game-login',
                                    pageConfig: e
                                })
                            }
                            null != i && i.thirdPartyLogin({
                                thirdPartyType: o,
                                country: a,
                                pageConfig: {
                                    appid: r,
                                    scene: 'Midasbuy_official_website_easy_login',
                                    from: 'bind-pop-easy-login'
                                },
                                loginCallback: function(e) {
                                    null != e && e.errorCode ? (0,
                                    c.default)({
                                        msg: 'Login Fail!'
                                    }) : 'bind-pop-easy-login' !== (null == e ? void 0 : e.from) ? ((0,
                                    c.default)({
                                        msg: 'Login success!'
                                    }),
                                    null !== top && void 0 !== top && top.location.reload()) : 'function' == typeof n.handleEasyLoginSuccess && n.handleEasyLoginSuccess()
                                }
                            })
                        } else
                            null !== (t = window.report) && void 0 !== t && t.custom('easy-login_platform-error')
                    } else
                        null !== (t = window.report) && void 0 !== t && t.custom('easy-login_load-sdk-error')
                },
                changePassword: function() {
                    var e = window.midasLogin;
                    e ? null != e && e.login({
                        hash: '#change-password'
                    }) : null !== (e = window.report) && void 0 !== e && e.custom('change-password_load-sdk-error')
                }
            }
        };
        t.default = n
    },
    93318: function(e, t, n) {
        var i = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(50987),
        n(48410),
        n(63238),
        n(61418),
        n(95163);
        var o, r, i = i(n(52922)), n = (o = function(e, t) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
                this.constructor = e
            }
            o(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), a = function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        function s() {
            return null !== r && r.apply(this, arguments) || this
        }
        n = new (r = i.default,
        n(s, r),
        s.prototype.sendVerifyCode = function(e) {
            var i = this
              , o = a(a({}, this._getInterfaceParams()), e);
            return new Promise(function(t, n) {
                i._sendReq('/interface/sendEmailToApp', o, 'get').then(function(e) {
                    (e && 0 === Number(e.result) ? t : n)(e)
                }).catch(function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        s.prototype.checkIsVerified = function(e) {
            var t = this;
            return new Promise(function(n, i) {
                t._sendReq('/interface/tobRedeem', e, 'get').then(function(e) {
                    var t;
                    e && 0 === e.ret ? (0 === (t = JSON.parse(e.detail)).ret ? n : i)(t) : i(e)
                }).catch(function(e) {
                    i(e)
                })
            }
            )
        }
        ,
        s.prototype.verifyEmailCode = function(e) {
            var i = this
              , o = a(a({}, this._getInterfaceParams()), e);
            return new Promise(function(t, n) {
                i._sendReq('/interface/verifyEmailCode', o, 'get').then(function(e) {
                    (e && 0 === e.ret ? t : n)(e)
                }).catch(function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        s.prototype.queryUserMaskInfo = function(e) {
            var i = this
              , o = a({}, e);
            return new Promise(function(t, n) {
                i._sendReq('/interface/queryUserMaskInfo', o, 'get').then(function(e) {
                    (e && 0 === e.ret ? t : n)(e)
                }).catch(function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        s.prototype.querySendVipScore = function(e) {
            var i = this
              , o = a(a({}, this._getInterfaceParams()), e);
            return new Promise(function(t, n) {
                i._sendReq('/interface/querySendVipScore', o, 'post').then(function(e) {
                    (e && 0 === e.ret ? t : n)(e)
                }).catch(function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        s.prototype.queryGameUsers = function() {
            var e = this
              , i = a({}, this._getInterfaceParams());
            return new Promise(function(t, n) {
                e._sendReq('/interface/getGameUsers', i, 'get').then(function(e) {
                    (e && 0 === e.ret ? t : n)(e)
                }).catch(function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        s.prototype.queryShelfModelView = function(e) {
            var i = this
              , o = a(a({}, this._getInterfaceParams()), e);
            return new Promise(function(t, n) {
                i._sendReq('/interface/queryShelfModelView', o, 'post').then(function(e) {
                    (e && 0 === e.ret ? t : n)(e)
                }).catch(function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        s.prototype.queryUserModelInfo = function(e) {
            var i = this
              , o = a(a({}, this._getInterfaceParams()), {
                data: a({}, e)
            });
            return new Promise(function(t, n) {
                i._sendReq('/interface/queryUserModelInfo', o, 'post').then(function(e) {
                    (e && 0 === e.ret ? t : n)(e)
                }).catch(function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        s.prototype.getProducts = function(e) {
            var i = this
              , o = a(a(a({}, this._getInterfaceParams()), e), {
                trpcPath: '/trpc.mbusiness.shelves_svr.Shelves/GetShelfInfo'
            });
            return new Promise(function(t, n) {
                i._sendReq('/interface/shelfProto/shelves_svr/GetProducts', o, 'post').then(function(e) {
                    (e && 0 === e.ret ? t : n)(e)
                }).catch(function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        s.prototype.taskExec = function(e) {
            var i = this
              , o = a(a({}, this._getInterfaceParams()), {
                data: a({}, e)
            });
            return new Promise(function(t, n) {
                i._sendReq('/interface/taskExec', o, 'post').then(function(e) {
                    (e && 0 === e.ret ? t : n)(e)
                }).catch(function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        s.prototype.getLoginInfo = function() {
            var e = this;
            return new Promise(function(t, n) {
                e._sendReq('/interface/getLoginInfoV2', {
                    ts: Date.now()
                }, 'post').then(function(e) {
                    (e && 0 === e.ret ? t : n)(e)
                }).catch(function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        s);
        t.default = n
    },
    14197: function(e, t, n) {
        var i = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.addRCParamsGo = function(n) {
            return n.browser_info = function() {
                var e = s.default.get('UUID') || window.__Report_INFO.tid || ''
                  , t = navigator.platform.toLowerCase()
                  , n = !!window.navigator.cookieEnabled
                  , i = navigator.userAgent
                  , o = window.__Report_INFO.midasbuyDeviceId || s.default.get('midasbuyDeviceId') || ''
                  , r = window.fingerprint || '';
                return [e, t, n, '', i, o, (null === (o = window.__MF_STATE__) || void 0 === o ? void 0 : o.lang) || 'en', r].map(function(e) {
                    return (0,
                    a.default)(e)
                }).join(',')
            }(),
            new Promise(function(t, e) {
                window.___Kepler_WebTicket ? (n.rc_extra = (0,
                a.default)("KeplerTicket=" + (0,
                a.default)(window.___Kepler_WebTicket)),
                t(n)) : window.TencentKepler ? (window.TencentKepler.predict(function(e) {
                    n.rc_extra = (0,
                    a.default)("KeplerTicket=" + (0,
                    a.default)(e)),
                    t(n)
                }),
                null != r && r.custom('async.kepler', {})) : t(n)
            }
            )
        }
        ,
        t.addRCParamsOrder = function(i, o) {
            return new Promise(function(t, e) {
                var n;
                window.___Kepler_WebTicket ? (n = "KeplerTicket=" + (0,
                a.default)(window.___Kepler_WebTicket),
                i[o] = i[o] || '',
                i[o] += i[o] ? "&" + n : n,
                t(i)) : window.TencentKepler ? (window.TencentKepler.predict(function(e) {
                    e = "KeplerTicket=" + (0,
                    a.default)(e);
                    i[o] = i[o] || '',
                    i[o] += i[o] ? "&" + e : e,
                    t(i)
                }),
                null != r && r.custom('async.kepler', {})) : t(i)
            }
            )
        }
        ,
        n(25613),
        n(61013),
        n(63238),
        n(61418);
        var a = i(n(66533))
          , s = i(n(75810))
          , r = window.report
    },
    69437: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = function(e) {
            return e.then(function(e) {
                return [null, e]
            }).catch(function(e) {
                return [e, null]
            })
        }
    },
    35629: function(e, t, n) {
        var i = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(95374),
        n(27471);
        var r = i(n(29287))
          , n = function(i, o) {
            for (var e = localStorage.length, t = [], n = 0; n < e; n++)
                t.push(localStorage.key(n));
            t.forEach(function(e) {
                var t, n;
                e && -1 !== e.indexOf(i) && (t = (0,
                r.default)(e),
                n = (new Date).getTime(),
                null != t && t.saveTime && t.saveTime + o < n && localStorage.removeItem(e))
            })
        };
        t.default = n
    },
    36576: function(e, t, n) {
        function o(e, t) {
            var n, i;
            'object' == typeof e && null !== e && (n = e,
            i = t,
            Object.keys(n).forEach(function(e) {
                i.call(n, e, n[e]),
                o(n[e], i)
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(95374),
        n(55849),
        n(92571),
        t.default = o
    },
    66533: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(52077),
        n(911),
        n(63238),
        n(40895);
        t.default = function(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                return "%" + e.charCodeAt(0).toString(16)
            })
        }
    },
    82322: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        t.fprice = f,
        t.getMidasCoinsFormattedPrice = function(e, t, n) {
            void 0 === n && (n = !1);
            var e = null === (e = Number(e)) || void 0 === e ? void 0 : e.toFixed(2)
              , i = p(e);
            if (n) {
                var o = e + " " + t;
                switch (t) {
                case 'IDR':
                    o = n ? "Rp " + h(i) : "" + h(i);
                    break;
                case 'THB':
                    o = "฿" + i;
                    break;
                case 'PHP':
                    o = "₱" + i;
                    break;
                case 'VND':
                    o = h(i) + "₫";
                    break;
                case 'MYR':
                    o = "RM" + i;
                    break;
                case 'GMC':
                    o = i + " UC"
                }
                return o
            }
            var r = "" + e;
            switch (t) {
            case 'IDR':
            case 'VND':
                r = "" + h(i);
                break;
            case 'THB':
            case 'PHP':
            case 'MYR':
            case 'GMC':
                r = "" + i
            }
            return r
        }
        ,
        n(25901),
        n(92189),
        n(63238),
        n(91047),
        n(5769),
        n(17460),
        n(14078),
        n(32081),
        n(40895),
        n(52077),
        n(72482),
        n(911),
        n(25613),
        n(53984),
        n(76056),
        n(43512),
        n(95163);
        var d = function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var i, o, r = n.call(e), a = [];
            try {
                for (; (void 0 === t || 0 < t--) && !(i = r.next()).done; )
                    a.push(i.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (n = r.return) && n.call(r)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        };
        function f(e) {
            e = parseInt(e, 10);
            return (e /= 100).toString()
        }
        function p(e) {
            for (var e = String(e).split('.'), t = e[0], e = 1 < e.length ? "." + e[1] : '', n = /(\d+)(\d{3})/; n.test(t); )
                t = t.replace(n, '$1,$2');
            return t + e
        }
        function h(e) {
            return e.replace('.', '#').replace(/,/g, '.').replace('#', ',')
        }
        n = function(e, t, n) {
            t = t || (null === (l = window.__PAY_INFO) || void 0 === l ? void 0 : l.currency_type);
            var i = n || (null === (c = window.__PAY_INFO) || void 0 === c ? void 0 : c.currency_config)
              , o = f(e)
              , r = p(o);
            if (i) {
                var a = i.decimalPoint || '.'
                  , s = i.thousandPoint || ','
                  , l = i.currencySymbol || t
                  , n = i.leftSymbol || !1
                  , c = i.zeroPadding ? parseInt(i.zeroPadding, 10) : 0
                  , e = !!i.rounding
                  , i = r;
                return (i = (i = c ? function(e, t, n) {
                    if (t <= 0)
                        return e;
                    var i = e.split('.');
                    if (1 < i.length) {
                        var o = t - i[1].length;
                        if (0 <= o)
                            return i[0] + "." + i[1] + new Array(o).fill('0').join('');
                        if (n) {
                            o = d(parseFloat("0." + i[1]).toFixed(t).split('.'), 2),
                            n = o[0],
                            o = o[1];
                            return '1' !== n ? i[0] + "." + o : p(parseInt(i[0].toString().replace(/,/g, ''), 10) + 1) + "." + o
                        }
                        return e
                    }
                    return e + "." + new Array(t).fill('0').join('')
                }(i, c, e) : i).replace('.', 'd').replace(/,/g, s).replace('d', a),
                'GMC' === t) ? i + " UC" : (n ? i = l + i : i += l,
                i)
            }
            var u = o + " " + t;
            switch (t) {
            case 'IDR':
                u = "Rp " + h(r);
                break;
            case 'THB':
                u = "฿" + r;
                break;
            case 'PHP':
                u = "₱" + r;
                break;
            case 'VND':
                u = h(r) + "₫";
                break;
            case 'MYR':
                u = "RM" + r;
                break;
            case 'GMC':
                u = r + " UC"
            }
            return u
        }
        ;
        t.default = n
    },
    55862: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(52077),
        n(1203);
        t.default = function() {
            var e = document.cookie.match(/UUID=([^;]*);?/);
            return e ? e[1] : null
        }
    },
    29287: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        function n(e, t) {
            var n = (t = void 0 === t ? !0 : t) ? null === (t = window.localStorage) || void 0 === t ? void 0 : t.getItem(e) : null === (n = window.sessionStorage) || void 0 === n ? void 0 : n.getItem(e)
              , e = null;
            if (n)
                try {
                    e = JSON.parse(n)
                } catch (e) {}
            return e
        }
        t.default = n
    },
    81233: function(e, t, n) {
        var i = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = (0,
            o.default)().usePC
              , n = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
            return !(!e && '1' === t) && n
        }
        ;
        var o = i(n(37196))
    },
    54626: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.chunk = function(e, t) {
            t = Math.max(t || 1, 0);
            var n = null === e ? 0 : e.length;
            if (!n || t < 1)
                return [];
            var i = 0
              , o = 0
              , r = new Array(Math.ceil(n / t));
            for (; i < n; )
                r[o++] = e.slice(i, i += t);
            return r
        }
        ,
        n(72410)
    },
    42338: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.setupMessenger = t.Messenger = void 0,
        n(50987),
        n(63238),
        n(61418),
        n(25901),
        n(92189),
        n(91047),
        n(5769),
        n(17460),
        n(14078),
        n(72410),
        n(23938),
        n(26252);
        function i() {
            var e, t;
            f.length && d && (e = (t = c(f.shift()))[0],
            t = t.slice(1),
            d.notify.apply(d, u([e], c(t), !1))),
            setTimeout(i, 50)
        }
        var o, r = n(95236), a = n(95794), n = (o = function(e, t) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
                this.constructor = e
            }
            o(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), s = function(e, a, s, l) {
            return new (s = s || Promise)(function(n, t) {
                function i(e) {
                    try {
                        r(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    try {
                        r(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                        e(t)
                    }
                    )).then(i, o)
                }
                r((l = l.apply(e, a || [])).next())
            }
            )
        }, l = function(n, i) {
            var o, r, a, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(t) {
                return function(e) {
                    return function(t) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (o = 1,
                                r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, t[1])).done)
                                    return a;
                                switch (r = 0,
                                (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    r = t[1],
                                    t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1],
                                        a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2],
                                        s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                t = i.call(n, s)
                            } catch (e) {
                                t = [6, e],
                                r = 0
                            } finally {
                                o = a = 0
                            }
                        if (5 & t[0])
                            throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        }, c = function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var i, o, r = n.call(e), a = [];
            try {
                for (; (void 0 === t || 0 < t--) && !(i = r.next()).done; )
                    a.push(i.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (n = r.return) && n.call(r)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }, u = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var i, o = 0, r = t.length; o < r; o++)
                    !i && o in t || ((i = i || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
            return e.concat(i || Array.prototype.slice.call(t))
        }, d = void 0, f = [], p = new a.TinyEmitter;
        t.setupMessenger = function() {
            return s(void 0, void 0, void 0, function() {
                return l(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, (0,
                        r.connectToParent)({
                            parentOrigin: location.origin,
                            methods: {
                                notify: function(e) {
                                    for (var t = [], n = 1; n < arguments.length; n++)
                                        t[n - 1] = arguments[n];
                                    p.emit.apply(p, u([e], c(t), !1))
                                }
                            }
                        }).promise];
                    case 1:
                        return d = e.sent(),
                        i(),
                        [2, d]
                    }
                })
            })
        }
        ;
        var h, n = (h = a.TinyEmitter,
        n(v, h),
        v.prototype.on = function(e, n) {
            return p.on(e, function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                n.apply(void 0, u([], c(e), !1))
            }),
            this
        }
        ,
        v.prototype.once = function(e, t) {
            return p.once(e, t),
            this
        }
        ,
        v.prototype.off = function(e, t) {
            return p.off(e, t),
            this
        }
        ,
        v.prototype.emit = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            if (window.parent !== window)
                return f.push(u([e], c(t), !1)),
                this
        }
        ,
        v);
        function v() {
            var e = h.call(this) || this;
            return p.on('report', function(e, t) {}),
            e
        }
        t.Messenger = n
    },
    38012: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = function() {
            return (null === sessionStorage || void 0 === sessionStorage ? void 0 : sessionStorage.getItem('ORDER_REFERER')) || ''
        }
    },
    65996: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.apiTracer = void 0,
        Object.defineProperty(t, "context", {
            enumerable: !0,
            get: function() {
                return r.context
            }
        }),
        t.otelTracer = t.createAMTracer = void 0,
        Object.defineProperty(t, "propagation", {
            enumerable: !0,
            get: function() {
                return r.propagation
            }
        }),
        Object.defineProperty(t, "trace", {
            enumerable: !0,
            get: function() {
                return r.trace
            }
        });
        var i = n(84549)
          , o = n(730)
          , r = n(52760)
          , a = 'midasbuy_official_website'
          , s = new o.WebTracerProvider;
        s.register({
            propagator: new i.W3CTraceContextPropagator
        });
        o = function(e) {
            return e ? s.getTracer(a + "_" + e) : s.getTracer(a)
        }
        ,
        i = (t.createAMTracer = o)('api');
        t.apiTracer = i;
        o = o('');
        t.otelTracer = o
    },
    4838: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = function() {
            function e() {
                var e = i.clientWidth
                  , t = i.clientHeight;
                e && t && (i.style.fontSize = e < t ? e / 750 * 100 + "px" : t / 750 * 100 + "px")
            }
            var t, n, i;
            t = document,
            n = window,
            i = t.documentElement,
            t.addEventListener && (n.addEventListener('resize', e, !1),
            t.addEventListener('DOMContentLoaded', e, !1))
        }
    },
    63762: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(52077),
        n(911);
        t.default = function(e) {
            var t = e;
            try {
                t = decodeURIComponent(e)
            } catch (e) {}
            return t.replace(/>/g, '&gt;')
        }
    },
    50707: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = function(e, t, n) {
            var i, o, r;
            if (void 0 === n && (n = !0),
            null === t)
                n ? null !== (i = window.localStorage) && void 0 !== i && i.removeItem(e) : null !== (i = window.sessionStorage) && void 0 !== i && i.removeItem(e);
            else {
                'object' == typeof t && t && !t.saveTime && (t.saveTime = (new Date).getTime());
                try {
                    var a = JSON.stringify(t);
                    n ? null !== (o = window.localStorage) && void 0 !== o && o.setItem(e, a) : null !== (r = window.sessionStorage) && void 0 !== r && r.setItem(e, a)
                } catch (e) {}
            }
        }
    },
    77576: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.setSdkTheme = void 0,
        n(95374),
        n(55849);
        var i = {
            light: !0,
            dark: !0
        };
        t.setSdkTheme = function() {
            window.parent !== window && window.parent.document.documentElement.classList.forEach(function(e) {
                i[e] && window.document.documentElement.classList.add(e)
            })
        }
    },
    9869: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = {
            CURRENT_BUY_ITEM: 'CURRENT_BUY_ITEM',
            CURRENT_LOCATION: 'CURRENT_LOCATION',
            VIP_PAT_RESULT: 'HAS_PAT_VIP_RESULT',
            VIP_PAT_CENTER: 'HAS_PAT_VIP_CENTER',
            SCORE_RECEIVE: 'SCORE_RECEIVE',
            LOGINFROM: 'LOGINFROM'
        }
    },
    82979: function(e, t, n) {
        var i = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(26252);
        var o = i(n(11385));
        t.default = function(e) {
            var t = e.hasToastBg
              , n = t ? "<div id=\"toast-box\" class=\"pop-toast\" style=\"z-index: 10000000001\">" + (e.msg || '') + "</div><div class=\"toast-bg\"></div>" : "<div id=\"toast-box\" class=\"pop-toast\" style=\"z-index: 10000000001\">" + (e.msg || '') + "</div>";
            (0,
            o.default)('#toast-box').remove(),
            t && (0,
            o.default)('.toast-bg').remove(),
            (0,
            o.default)('body').append((0,
            o.default)(n)),
            (0,
            o.default)('#toast-box').fadeIn(500),
            t && (0,
            o.default)('.toast-bg').fadeIn(500),
            setTimeout(function() {
                (0,
                o.default)('#toast-box').fadeOut(500),
                t && (0,
                o.default)('.toast-bg').fadeOut(500),
                e.callback && 'function' == typeof e.callback && e.callback()
            }, e.timeout || 2e3)
        }
    },
    99729: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(52077),
        n(72482),
        n(25613);
        t.default = function(e, t) {
            var n, i = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''), o = [];
            if (t = t || i.length,
            e)
                for (n = 0; n < e; n++)
                    o[n] = i[0 | Math.random() * t];
            else {
                var r;
                for (o[8] = o[13] = o[18] = o[23] = '-',
                o[14] = '4',
                n = 0; n < 36; n++)
                    o[n] || (r = 0 | 16 * Math.random(),
                    o[n] = i[19 === n ? 3 & r | 8 : r])
            }
            return o.join('')
        }
    },
    69903: function(e, t, n) {
        var i = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.xMidasEncrypt = function(t, e) {
            var n = 'goServer' === e ? JSON.stringify(t) : JSON.stringify((0,
            r.default)(t, function(e) {
                return void 0 !== e && 'object' != typeof e ? String(e) : e
            }))
              , i = document.getElementById('xMidasToken').value;
            if (!i)
                return t;
            var o = document.getElementById('xMidasVersion').value
              , e = l(function() {
                try {
                    return window.xMidas({
                        d: n
                    })
                } catch (e) {
                    return t
                }
            });
            return e.result ? {
                encrypt_msg: function(e) {
                    return btoa(String.fromCharCode.apply(String, s([], a(e.match(/../g).map(function(e) {
                        return parseInt(e, 16)
                    })), !1)))
                }(e.result),
                ctoken_ver: o,
                ctoken: i
            } : (c('xmidas.error', {
                times: e.times
            }),
            t)
        }
        ,
        t.xMidasInit = function() {
            var e;
            if (null === (e = document.getElementById('xMidasToken')) || void 0 === e || !e.value)
                return c('xmidas.no.token');
            try {
                var t = l(function() {
                    return window.xMidas()
                }).result || [];
                0 < t.length && c('xmidas.init.result', {
                    result: t.join(',')
                })
            } catch (e) {}
        }
        ,
        n(25901),
        n(92189),
        n(63238),
        n(91047),
        n(5769),
        n(17460),
        n(14078),
        n(72410),
        n(23938),
        n(61013),
        n(52077),
        n(1203),
        n(32081),
        n(25613);
        var r = i(n(9411))
          , a = function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var i, o, r = n.call(e), a = [];
            try {
                for (; (void 0 === t || 0 < t--) && !(i = r.next()).done; )
                    a.push(i.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (n = r.return) && n.call(r)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
          , s = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var i, o = 0, r = t.length; o < r; o++)
                    !i && o in t || ((i = i || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
            return e.concat(i || Array.prototype.slice.call(t))
        };
        function l(e) {
            var t = Date.now()
              , e = e();
            return {
                times: Date.now() - t,
                result: e
            }
        }
        var c = function(e, t) {
            var n;
            return (n = window.report) && 'function' == typeof n.custom ? n.custom(e, t) : 'function' == typeof n ? n("midasbuy.custom." + e, t) : void 0
        }
    },
    50343: function(e) {
        var t = 'object' == typeof Reflect ? Reflect : null
          , l = t && 'function' == typeof t.apply ? t.apply : function(e, t, n) {
            return Function.prototype.apply.call(e, t, n)
        }
        ;
        var n = t && 'function' == typeof t.ownKeys ? t.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
        : function(e) {
            return Object.getOwnPropertyNames(e)
        }
          , i = Number.isNaN || function(e) {
            return e != e
        }
        ;
        function o() {
            o.init.call(this)
        }
        e.exports = o,
        e.exports.once = function(s, l) {
            return new Promise(function(e, t) {
                function n(e) {
                    s.removeListener(l, i),
                    t(e)
                }
                function i() {
                    'function' == typeof s.removeListener && s.removeListener('error', n),
                    e([].slice.call(arguments))
                }
                var o, r, a;
                h(s, l, i, {
                    once: !0
                }),
                'error' !== l && (r = n,
                a = {
                    once: !0
                },
                'function' == typeof (o = s).on && h(o, 'error', r, a))
            }
            )
        }
        ,
        (o.EventEmitter = o).prototype._events = void 0,
        o.prototype._eventsCount = 0,
        o.prototype._maxListeners = void 0;
        var r = 10;
        function s(e) {
            if ('function' != typeof e)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }
        function a(e) {
            return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners
        }
        function c(e, t, n, i) {
            var o, r;
            return s(n),
            void 0 === (o = e._events) ? (o = e._events = Object.create(null),
            e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit('newListener', t, n.listener || n),
            o = e._events),
            r = o[t]),
            void 0 === r ? (r = o[t] = n,
            ++e._eventsCount) : ('function' == typeof r ? r = o[t] = i ? [n, r] : [r, n] : i ? r.unshift(n) : r.push(n),
            0 < (n = a(e)) && r.length > n && !r.warned && (r.warned = !0,
            (n = new Error('Possible EventEmitter memory leak detected. ' + r.length + ' ' + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit")).name = 'MaxListenersExceededWarning',
            n.emitter = e,
            n.type = t,
            n.count = r.length,
            console && console.warn)),
            e
        }
        function u(e, t, n) {
            e = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: n
            },
            t = function() {
                if (!this.fired)
                    return this.target.removeListener(this.type, this.wrapFn),
                    this.fired = !0,
                    0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }
            .bind(e);
            return t.listener = n,
            e.wrapFn = t
        }
        function d(e, t, n) {
            e = e._events;
            if (void 0 === e)
                return [];
            t = e[t];
            return void 0 === t ? [] : 'function' == typeof t ? n ? [t.listener || t] : [t] : n ? function(e) {
                for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                    t[n] = e[n].listener || e[n];
                return t
            }(t) : p(t, t.length)
        }
        function f(e) {
            var t = this._events;
            if (void 0 !== t) {
                e = t[e];
                if ('function' == typeof e)
                    return 1;
                if (void 0 !== e)
                    return e.length
            }
            return 0
        }
        function p(e, t) {
            for (var n = new Array(t), i = 0; i < t; ++i)
                n[i] = e[i];
            return n
        }
        function h(n, i, o, r) {
            if ('function' == typeof n.on)
                r.once ? n.once(i, o) : n.on(i, o);
            else {
                if ('function' != typeof n.addEventListener)
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n);
                n.addEventListener(i, function e(t) {
                    r.once && n.removeEventListener(i, e),
                    o(t)
                })
            }
        }
        Object.defineProperty(o, 'defaultMaxListeners', {
            enumerable: !0,
            get: function() {
                return r
            },
            set: function(e) {
                if ('number' != typeof e || e < 0 || i(e))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + '.');
                r = e
            }
        }),
        o.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        o.prototype.setMaxListeners = function(e) {
            if ('number' != typeof e || e < 0 || i(e))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + '.');
            return this._maxListeners = e,
            this
        }
        ,
        o.prototype.getMaxListeners = function() {
            return a(this)
        }
        ,
        o.prototype.emit = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t.push(arguments[n]);
            var i, o = 'error' === e, r = this._events;
            if (void 0 !== r)
                o = o && void 0 === r.error;
            else if (!o)
                return !1;
            if (o) {
                if ((i = 0 < t.length ? t[0] : i)instanceof Error)
                    throw i;
                o = new Error('Unhandled error.' + (i ? ' (' + i.message + ')' : ''));
                throw o.context = i,
                o
            }
            r = r[e];
            if (void 0 === r)
                return !1;
            if ('function' == typeof r)
                l(r, this, t);
            else
                for (var a = r.length, s = p(r, a), n = 0; n < a; ++n)
                    l(s[n], this, t);
            return !0
        }
        ,
        o.prototype.on = o.prototype.addListener = function(e, t) {
            return c(this, e, t, !1)
        }
        ,
        o.prototype.prependListener = function(e, t) {
            return c(this, e, t, !0)
        }
        ,
        o.prototype.once = function(e, t) {
            return s(t),
            this.on(e, u(this, e, t)),
            this
        }
        ,
        o.prototype.prependOnceListener = function(e, t) {
            return s(t),
            this.prependListener(e, u(this, e, t)),
            this
        }
        ,
        o.prototype.removeListener = function(e, t) {
            var n, i, o, r, a;
            if (s(t),
            void 0 === (i = this._events))
                return this;
            if (void 0 === (n = i[e]))
                return this;
            if (n === t || n.listener === t)
                0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e],
                i.removeListener && this.emit('removeListener', e, n.listener || t));
            else if ('function' != typeof n) {
                for (o = -1,
                r = n.length - 1; 0 <= r; r--)
                    if (n[r] === t || n[r].listener === t) {
                        a = n[r].listener,
                        o = r;
                        break
                    }
                if (o < 0)
                    return this;
                0 === o ? n.shift() : function(e, t) {
                    for (; t + 1 < e.length; t++)
                        e[t] = e[t + 1];
                    e.pop()
                }(n, o),
                1 === n.length && (i[e] = n[0]),
                void 0 !== i.removeListener && this.emit('removeListener', e, a || t)
            }
            return this
        }
        ,
        o.prototype.off = o.prototype.removeListener,
        o.prototype.removeAllListeners = function(e) {
            var t, n = this._events;
            if (void 0 === n)
                return this;
            if (void 0 === n.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null),
                this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]),
                this;
            if (0 === arguments.length) {
                for (var i, o = Object.keys(n), r = 0; r < o.length; ++r)
                    'removeListener' !== (i = o[r]) && this.removeAllListeners(i);
                return this.removeAllListeners('removeListener'),
                this._events = Object.create(null),
                this._eventsCount = 0,
                this
            }
            if ('function' == typeof (t = n[e]))
                this.removeListener(e, t);
            else if (void 0 !== t)
                for (r = t.length - 1; 0 <= r; r--)
                    this.removeListener(e, t[r]);
            return this
        }
        ,
        o.prototype.listeners = function(e) {
            return d(this, e, !0)
        }
        ,
        o.prototype.rawListeners = function(e) {
            return d(this, e, !1)
        }
        ,
        o.listenerCount = function(e, t) {
            return 'function' == typeof e.listenerCount ? e.listenerCount(t) : f.call(e, t)
        }
        ,
        o.prototype.listenerCount = f,
        o.prototype.eventNames = function() {
            return 0 < this._eventsCount ? n(this._events) : []
        }
    },
    29989: function(e, t, n) {
        n.r(t)
    },
    14132: function(e, t, n) {
        n.r(t)
    },
    47445: function(e, t, n) {
        n.r(t)
    },
    86521: function(e, t, n) {
        n.r(t)
    },
    96844: function(e, t, n) {
        n.r(t)
    },
    75046: function(e, t, n) {
        n.r(t)
    },
    81253: function(e, t, n) {
        n.r(t)
    },
    8798: function(e, t, n) {
        n.r(t)
    },
    97873: function(e, t, n) {
        n.r(t)
    },
    95794: function(e) {
        function t() {}
        t.prototype = {
            on: function(e, t, n) {
                var i = this.e || (this.e = {});
                return (i[e] || (i[e] = [])).push({
                    fn: t,
                    ctx: n
                }),
                this
            },
            once: function(e, t, n) {
                var i = this;
                function o() {
                    i.off(e, o),
                    t.apply(n, arguments)
                }
                return o._ = t,
                this.on(e, o, n)
            },
            emit: function(e) {
                for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, o = n.length; i < o; i++)
                    n[i].fn.apply(n[i].ctx, t);
                return this
            },
            off: function(e, t) {
                var n = this.e || (this.e = {})
                  , i = n[e]
                  , o = [];
                if (i && t)
                    for (var r = 0, a = i.length; r < a; r++)
                        i[r].fn !== t && i[r].fn._ !== t && o.push(i[r]);
                return o.length ? n[e] = o : delete n[e],
                this
            }
        },
        e.exports = t,
        e.exports.TinyEmitter = t
    },
    82989: function(H, W, J) {
        var X;
        !function(s, d) {
            'use strict';
            function e(e) {
                for (var t = {}, n = 0; n < e.length; n++)
                    t[e[n].toUpperCase()] = e[n];
                return t
            }
            function o(e, t) {
                return typeof e === m && -1 !== F(t).indexOf(F(e))
            }
            function l(e, t) {
                if (typeof e === m)
                    return e = e.replace(/^\s\s*/, f),
                    typeof t == h ? e : e.substring(0, 500)
            }
            function c(e, t) {
                for (var n, i, o, r, a, s = 0; s < t.length && !r; ) {
                    for (var l = t[s], c = t[s + 1], u = n = 0; u < l.length && !r && l[u]; )
                        if (r = l[u++].exec(e))
                            for (i = 0; i < c.length; i++)
                                a = r[++n],
                                typeof (o = c[i]) === v && 0 < o.length ? 2 === o.length ? typeof o[1] == p ? this[o[0]] = o[1].call(this, a) : this[o[0]] = o[1] : 3 === o.length ? typeof o[1] !== p || o[1].exec && o[1].test ? this[o[0]] = a ? a.replace(o[1], o[2]) : d : this[o[0]] = a ? o[1].call(this, a, o[2]) : d : 4 === o.length && (this[o[0]] = a ? o[3].call(this, a.replace(o[1], o[2])) : d) : this[o] = a || d;
                    s += 2
                }
            }
            function t(e, t) {
                for (var n in t)
                    if (typeof t[n] === v && 0 < t[n].length) {
                        for (var i = 0; i < t[n].length; i++)
                            if (o(t[n][i], e))
                                return "?" === n ? d : n
                    } else if (o(t[n], e))
                        return "?" === n ? d : n;
                return t.hasOwnProperty('*') ? t['*'] : e
            }
            function u(e, t) {
                if (typeof e === v && (t = e,
                e = d),
                !(this instanceof u))
                    return new u(e,t).getResult();
                var n = typeof s != h && s.navigator ? s.navigator : d
                  , i = e || (n && n.userAgent ? n.userAgent : f)
                  , o = n && n.userAgentData ? n.userAgentData : d
                  , r = t ? function(e, t) {
                    var n, i = {};
                    for (n in e)
                        t[n] && t[n].length % 2 == 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
                    return i
                }(z, t) : z
                  , a = n && n.userAgent == i;
                return this.getBrowser = function() {
                    var e, t = {};
                    return t[y] = d,
                    t[b] = d,
                    c.call(t, i, r.browser),
                    t.major = typeof (e = t[b]) === m ? e.replace(/[^\d\.]/g, f).split('.')[0] : d,
                    a && n && n.brave && typeof n.brave.isBrave == p && (t[y] = 'Brave'),
                    t
                }
                ,
                this.getCPU = function() {
                    var e = {};
                    return e[C] = d,
                    c.call(e, i, r.cpu),
                    e
                }
                ,
                this.getDevice = function() {
                    var e = {};
                    return e[_] = d,
                    e[g] = d,
                    e[w] = d,
                    c.call(e, i, r.device),
                    a && !e[w] && o && o.mobile && (e[w] = k),
                    a && 'Macintosh' == e[g] && n && typeof n.standalone != h && n.maxTouchPoints && 2 < n.maxTouchPoints && (e[g] = 'iPad',
                    e[w] = I),
                    e
                }
                ,
                this.getEngine = function() {
                    var e = {};
                    return e[y] = d,
                    e[b] = d,
                    c.call(e, i, r.engine),
                    e
                }
                ,
                this.getOS = function() {
                    var e = {};
                    return e[y] = d,
                    e[b] = d,
                    c.call(e, i, r.os),
                    a && !e[y] && o && o.platform && 'Unknown' != o.platform && (e[y] = o.platform.replace(/chrome os/i, V).replace(/macos/i, "Mac OS")),
                    e
                }
                ,
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }
                ,
                this.getUA = function() {
                    return i
                }
                ,
                this.setUA = function(e) {
                    return i = typeof e === m && 500 < e.length ? l(e, 500) : e,
                    this
                }
                ,
                this.setUA(i),
                this
            }
            var f = ''
              , p = 'function'
              , h = 'undefined'
              , v = 'object'
              , m = 'string'
              , g = 'model'
              , y = 'name'
              , w = 'type'
              , _ = 'vendor'
              , b = 'version'
              , C = 'architecture'
              , n = 'console'
              , k = 'mobile'
              , I = 'tablet'
              , i = 'smarttv'
              , r = 'wearable'
              , a = 'embedded'
              , L = 'Amazon'
              , P = 'Apple'
              , x = 'BlackBerry'
              , S = 'Browser'
              , T = 'Chrome'
              , A = 'Firefox'
              , O = 'Google'
              , M = 'Microsoft'
              , E = 'Motorola'
              , B = 'Opera'
              , D = 'Samsung'
              , U = 'Sony'
              , G = 'Xiaomi'
              , R = 'Zebra'
              , N = 'Facebook'
              , V = 'Chromium OS'
              , j = ' Browser'
              , F = function(e) {
                return e.toLowerCase()
            }
              , q = {
                ME: '4.90',
                'NT 3.11': 'NT3.51',
                'NT 4.0': 'NT4.0',
                2e3: 'NT 5.0',
                XP: ['NT 5.1', 'NT 5.2'],
                Vista: 'NT 6.0',
                7: 'NT 6.1',
                8: 'NT 6.2',
                8.1: 'NT 6.3',
                10: ['NT 6.4', 'NT 10.0'],
                RT: 'ARM'
            }
              , z = {
                browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [b, [y, 'Chrome']], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [b, [y, 'Edge']], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [y, b], [/opios[\/ ]+([\w\.]+)/i], [b, [y, B + ' Mini']], [/\bop(?:rg)?x\/([\w\.]+)/i], [b, [y, B + ' GX']], [/\bopr\/([\w\.]+)/i], [b, [y, B]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [b, [y, 'Baidu']], [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i], [b, [y, 'Maxthon']], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [y, b], [/quark(?:pc)?\/([-\w\.]+)/i], [b, [y, 'Quark']], [/\bddg\/([\w\.]+)/i], [b, [y, 'DuckDuckGo']], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [b, [y, 'UC' + S]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [b, [y, 'WeChat']], [/konqueror\/([\w\.]+)/i], [b, [y, 'Konqueror']], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [b, [y, 'IE']], [/ya(?:search)?browser\/([\w\.]+)/i], [b, [y, 'Yandex']], [/slbrowser\/([\w\.]+)/i], [b, [y, 'Smart Lenovo ' + S]], [/(avast|avg)\/([\w\.]+)/i], [[y, /(.+)/, '$1 Secure ' + S], b], [/\bfocus\/([\w\.]+)/i], [b, [y, A + ' Focus']], [/\bopt\/([\w\.]+)/i], [b, [y, B + ' Touch']], [/coc_coc\w+\/([\w\.]+)/i], [b, [y, 'Coc Coc']], [/dolfin\/([\w\.]+)/i], [b, [y, 'Dolphin']], [/coast\/([\w\.]+)/i], [b, [y, B + ' Coast']], [/miuibrowser\/([\w\.]+)/i], [b, [y, 'MIUI' + j]], [/fxios\/([\w\.-]+)/i], [b, [y, A]], [/\bqihoobrowser\/?([\w\.]*)/i], [b, [y, '360']], [/\b(qq)\/([\w\.]+)/i], [[y, /(.+)/, '$1Browser'], b], [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i], [[y, /(.+)/, '$1' + j], b], [/samsungbrowser\/([\w\.]+)/i], [b, [y, D + ' Internet']], [/metasr[\/ ]?([\d\.]+)/i], [b, [y, 'Sogou Explorer']], [/(sogou)mo\w+\/([\d\.]+)/i], [[y, 'Sogou Mobile'], b], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i], [y, b], [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i], [y], [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i], [b, y], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[y, N], b], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [y, b], [/\bgsa\/([\w\.]+) .*safari\//i], [b, [y, 'GSA']], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [b, [y, 'TikTok']], [/headlesschrome(?:\/([\w\.]+)| )/i], [b, [y, T + ' Headless']], [/ wv\).+(chrome)\/([\w\.]+)/i], [[y, T + ' WebView'], b], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [b, [y, 'Android ' + S]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [y, b], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [b, [y, 'Mobile Safari']], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [b, y], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [y, [b, t, {
                    '1.0': '/8',
                    1.2: '/1',
                    1.3: '/3',
                    '2.0': '/412',
                    '2.0.2': '/416',
                    '2.0.3': '/417',
                    '2.0.4': '/419',
                    '?': '/'
                }]], [/(webkit|khtml)\/([\w\.]+)/i], [y, b], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[y, 'Netscape'], b], [/(wolvic|librewolf)\/([\w\.]+)/i], [y, b], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [b, [y, A + ' Reality']], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [y, [b, /_/g, '.']], [/(cobalt)\/([\w\.]+)/i], [y, [b, /master.|lts./, ""]]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[C, 'amd64']], [/(ia32(?=;))/i], [[C, F]], [/((?:i[346]|x)86)[;\)]/i], [[C, 'ia32']], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[C, 'arm64']], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[C, 'armhf']], [/windows (ce|mobile); ppc;/i], [[C, 'arm']], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[C, /ower/, f, F]], [/(sun4\w)[;\)]/i], [[C, 'sparc']], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[C, F]]],
                device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [g, [_, D], [w, I]], [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i], [g, [_, D], [w, k]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [g, [_, P], [w, k]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [g, [_, P], [w, I]], [/(macintosh);/i], [g, [_, P]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [g, [_, "Sharp"], [w, k]], [/(?:honor)([-\w ]+)[;\)]/i], [g, [_, 'Honor'], [w, k]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [g, [_, "Huawei"], [w, I]], [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [g, [_, "Huawei"], [w, k]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i], [[g, /_/g, ' '], [_, G], [w, k]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[g, /_/g, ' '], [_, G], [w, I]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [g, [_, 'OPPO'], [w, k]], [/\b(opd2\d{3}a?) bui/i], [g, [_, 'OPPO'], [w, I]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [g, [_, 'Vivo'], [w, k]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [g, [_, 'Realme'], [w, k]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [g, [_, E], [w, k]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [g, [_, E], [w, I]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [g, [_, "LG"], [w, I]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [g, [_, "LG"], [w, k]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [g, [_, 'Lenovo'], [w, I]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[g, /_/g, ' '], [_, 'Nokia'], [w, k]], [/(pixel c)\b/i], [g, [_, O], [w, I]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [g, [_, O], [w, k]], [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [g, [_, U], [w, k]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[g, 'Xperia Tablet'], [_, U], [w, I]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [g, [_, 'OnePlus'], [w, k]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [g, [_, L], [w, I]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[g, /(.+)/g, 'Fire Phone $1'], [_, L], [w, k]], [/(playbook);[-\w\),; ]+(rim)/i], [g, _, [w, I]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [g, [_, x], [w, k]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [g, [_, "ASUS"], [w, I]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [g, [_, "ASUS"], [w, k]], [/(nexus 9)/i], [g, [_, 'HTC'], [w, I]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [_, [g, /_/g, ' '], [w, k]], [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i], [g, [_, 'TCL'], [w, I]], [/(itel) ((\w+))/i], [[_, F], g, [w, t, {
                    tablet: ['p10001l', 'w7001'],
                    '*': 'mobile'
                }]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [g, [_, 'Acer'], [w, I]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [g, [_, 'Meizu'], [w, k]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [g, [_, 'Ulefone'], [w, k]], [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i], [g, [_, 'Energizer'], [w, k]], [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i], [g, [_, 'Cat'], [w, k]], [/((?:new )?andromax[\w- ]+)(?: bui|\))/i], [g, [_, 'Smartfren'], [w, k]], [/droid.+; (a(?:015|06[35]|142p?))/i], [g, [_, 'Nothing'], [w, k]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [_, g, [w, k]], [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [_, g, [w, I]], [/(surface duo)/i], [g, [_, M], [w, I]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [g, [_, 'Fairphone'], [w, k]], [/(u304aa)/i], [g, [_, 'AT&T'], [w, k]], [/\bsie-(\w*)/i], [g, [_, 'Siemens'], [w, k]], [/\b(rct\w+) b/i], [g, [_, 'RCA'], [w, I]], [/\b(venue[\d ]{2,7}) b/i], [g, [_, 'Dell'], [w, I]], [/\b(q(?:mv|ta)\w+) b/i], [g, [_, 'Verizon'], [w, I]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [g, [_, 'Barnes & Noble'], [w, I]], [/\b(tm\d{3}\w+) b/i], [g, [_, 'NuVision'], [w, I]], [/\b(k88) b/i], [g, [_, 'ZTE'], [w, I]], [/\b(nx\d{3}j) b/i], [g, [_, 'ZTE'], [w, k]], [/\b(gen\d{3}) b.+49h/i], [g, [_, 'Swiss'], [w, k]], [/\b(zur\d{3}) b/i], [g, [_, 'Swiss'], [w, I]], [/\b((zeki)?tb.*\b) b/i], [g, [_, 'Zeki'], [w, I]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[_, 'Dragon Touch'], g, [w, I]], [/\b(ns-?\w{0,9}) b/i], [g, [_, 'Insignia'], [w, I]], [/\b((nxa|next)-?\w{0,9}) b/i], [g, [_, 'NextBook'], [w, I]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[_, 'Voice'], g, [w, k]], [/\b(lvtel\-)?(v1[12]) b/i], [[_, 'LvTel'], g, [w, k]], [/\b(ph-1) /i], [g, [_, 'Essential'], [w, k]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [g, [_, 'Envizen'], [w, I]], [/\b(trio[-\w\. ]+) b/i], [g, [_, 'MachSpeed'], [w, I]], [/\btu_(1491) b/i], [g, [_, 'Rotor'], [w, I]], [/(shield[\w ]+) b/i], [g, [_, 'Nvidia'], [w, I]], [/(sprint) (\w+)/i], [_, g, [w, k]], [/(kin\.[onetw]{3})/i], [[g, /\./g, ' '], [_, M], [w, k]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [g, [_, R], [w, I]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [g, [_, R], [w, k]], [/smart-tv.+(samsung)/i], [_, [w, i]], [/hbbtv.+maple;(\d+)/i], [[g, /^/, 'SmartTV'], [_, D], [w, i]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[_, "LG"], [w, i]], [/(apple) ?tv/i], [_, [g, P + ' TV'], [w, i]], [/crkey/i], [[g, T + 'cast'], [_, O], [w, i]], [/droid.+aft(\w+)( bui|\))/i], [g, [_, L], [w, i]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [g, [_, "Sharp"], [w, i]], [/(bravia[\w ]+)( bui|\))/i], [g, [_, U], [w, i]], [/(mitv-\w{5}) bui/i], [g, [_, G], [w, i]], [/Hbbtv.*(technisat) (.*);/i], [_, g, [w, i]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[_, l], [g, l], [w, i]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[w, i]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [_, g, [w, n]], [/droid.+; (shield) bui/i], [g, [_, 'Nvidia'], [w, n]], [/(playstation [345portablevi]+)/i], [g, [_, U], [w, n]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [g, [_, M], [w, n]], [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i], [g, [_, D], [w, r]], [/((pebble))app/i], [_, g, [w, r]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [g, [_, P], [w, r]], [/droid.+; (glass) \d/i], [g, [_, O], [w, r]], [/droid.+; (wt63?0{2,3})\)/i], [g, [_, R], [w, r]], [/droid.+; (glass) \d/i], [g, [_, O], [w, r]], [/(pico) (4|neo3(?: link|pro)?)/i], [_, g, [w, r]], [/; (quest( \d| pro)?)/i], [g, [_, N], [w, r]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [_, [w, a]], [/(aeobc)\b/i], [g, [_, L], [w, a]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [g, [w, k]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [g, [w, I]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[w, I]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[w, k]], [/(android[-\w\. ]{0,9});.+buil/i], [g, [_, 'Generic']]],
                engine: [[/windows.+ edge\/([\w\.]+)/i], [b, [y, "EdgeHTML"]], [/(arkweb)\/([\w\.]+)/i], [y, b], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [b, [y, 'Blink']], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [y, b], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [b, y]],
                os: [[/microsoft (windows) (vista|xp)/i], [y, b], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [y, [b, t, q]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[b, t, q], [y, 'Windows']], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[b, /_/g, '.'], [y, 'iOS']], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[y, "Mac OS"], [b, /_/g, '.']], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [b, y], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [y, b], [/\(bb(10);/i], [b, [y, x]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [b, [y, 'Symbian']], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [b, [y, A + ' OS']], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [b, [y, 'webOS']], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [b, [y, 'watchOS']], [/crkey\/([\d\.]+)/i], [b, [y, T + 'cast']], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[y, V], b], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [y, b], [/(sunos) ?([\w\.\d]*)/i], [[y, 'Solaris'], b], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [y, b]]
            };
            u.VERSION = '1.0.40',
            u.BROWSER = e([y, b, "major"]),
            u.CPU = e([C]),
            u.DEVICE = e([g, _, w, n, k, i, I, r, a]),
            u.ENGINE = u.OS = e([y, b]),
            typeof W != h ? (W = H.exports ? H.exports = u : W).UAParser = u : "function" === p && J.amdO ? (X = function() {
                return u
            }
            .call(W, J, W, H)) === d || (H.exports = X) : typeof s != h && (s.UAParser = u);
            var Y, Z = typeof s != h && (s.jQuery || s.Zepto);
            Z && !Z.ua && (Y = new u,
            Z.ua = Y.getResult(),
            Z.ua.get = function() {
                return Y.getUA()
            }
            ,
            Z.ua.set = function(e) {
                Y.setUA(e);
                var t, n = Y.getResult();
                for (t in n)
                    Z.ua[t] = n[t]
            }
            )
        }('object' == typeof window ? window : this)
    },
    81949: function(e) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAJ1BMVEUgWotHcEwAAAAkcpwpjrA78vY9+/wiZ5Uuq8Q44uszxtc10d8+///Tm4oyAAAADHRSTlOAAICJmO35harZvsgpW+mZAAABG0lEQVRIx2M4AwIHBbEAGbAUA3EK8ACGMwcY8ACeUQUwBYL4FSgOKgXFxsbGBQzobCQFbsC4PwJhcgCZxxzQFYBFDcBMMyDzBKYb1gCFw0EM5hggawGmAk6g8EkUBrovYBrhRqErgFoNcsxRA2wKWCCOR/IOmgL2HqDUBLATG7CHJDfIbJATT+MIavY5Z1IY5oCMwRUXpmcauEFOLMClgCWbAeSOFNyx6QDyCcKJWKLbFCh/Cl96ADkxAI8CrjMETOg5g98NLDlgBbh9YQopVHCGAzvIiTF4QhIUiicr8cQFyInBeGKTYHoglKLYCaVJlFSdyYAnX7BjzxdI+Q17ziKYNwnm7oEsgkbrC2IVEKyaQeCQEhagQ1ztDwBph2FT9iG0oAAAAABJRU5ErkJggg=="
    },
    36003: function(e) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABGBAMAAADiC/ctAAAAHlBMVEVHcEwy2/8y2/8y2/8y2/8y2/8y2/8y2/8y2/8dO3tYTvFCAAAACXRSTlMAmIdIDXRfMR5mxMi+AAAA8ElEQVR42u3csRGCQBQE0D0lMdNOLIESLcjAEixFIxMYDA48NHDMTN4mx8GHOV4BWzKn69PSJW075T61R5cMq8Ftcmy7W7KavCZjVl+pA39KSfYfR96nzAcdl7/ul+E6O+Qyv36u93enyG95bBj8HliwYMGCBUtgwYIFCxYsgQULFixYsAQWLFiwYMESWLBgwYIFS2DBggULFiyBBQsWLFiwBBYsWLBgwRJYsGDBggVLYMGCBQsWLIEFCxYsWLCkLBdfChLL7a0gcd2QeEy2bfetIDFT/lmQ2OoQXwWJSw1ixlzrRd/Nw4e6vAoSh7o+Ac0aIxrAfNcLAAAAAElFTkSuQmCC"
    },
    53836: function(e) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAABBCAMAAAAdb0PhAAAAQlBMVEWCTPA+jP1Ehvw2k/5oZfVUd/lLgPtyXPN7U/Jebvc6kP40lv89wPs3zPs4rfwwuP02vPsy2fw1pP49x/ot5PxBs/p6IfP8AAAAFHRSTlOAgICAgICAgICAgIDFl7TO/teRqJMCBKcAAAWcSURBVGje5ZvblqMgEEWFiEB6JulknP//1YmKSN1QAmYeuuyV115n7bocSux+/4gYuvFHxO+Xzl8fjsd/+I9/Xjq/DsdliuvlOoe6qhBa6RiDHtIwgwHhvb/9nX5D9NODwvY2DTc9W3TTUxi3HZ2Xr02XSkKnMRBxVN6kcHommd9DKvL1C7VaXm1UPGm2QHaFzgXcdQUHRE74FBSKNE4ykVYfflKZUWrfA6h2fl4yoVYXhVqgNOgt13kJcY2hUGCcA9RqZo3LH+J5+9ZQJuG50ewJTpzDM88lk7NgGZ2XLY7z1Ihm1Ioz9znJNAxPAnTl2ScqN56M3C4jlOq8MDopUM0ARdU5ixwAzUnm0xtIk/K0LE+QtQzPbJ0uOm8fi5dM73G39VzS9rQ+V60czqDUZXXePxbPRWWauAX1aSt5Hh2cYL7EEk1SFvedlNsShlanVJ9Bac8lLm24+V50Gx9T3u6aApWYgqBRCX0o6kXtNhmhEGe+PnsubdMJeoSnG2ed40PAF40PMj8Kq9TpYDFxhG5KfRAp8+wFnkza0urM16cfg87x8eREvmRerhvOLWOh1oEze5EpMAoGs3y7Pgt43saocxyfm0ogNOC8EpXQD6VADRgtoF6XrDUF9dnDrI39luEp1OevMdW5Co2zc0tbjucmdU1bjmfUGl3fEZ5W9kOUZ8Qp8VxkIp2XDSf0Q5Gnjkql+uTKc/UJ5v36dETqsfpkdUp+SCU8dWi3CubtMMABw9k+44/0217ot2CiWJiwsT5dhU7Yb3GFkn6b4gT9NsvT7/dbJ/LMTM8ynmB+BpVCv03zFtGsrM9Uo8DTdXU8CU68QuAPZgOcLIGnKajP3tKG+yGeWsHiRPVpmPJcPMLBftvnea4LBYt4Ch23RCc6gGriE7AfilKx2Jr6lMtzo9kwb8NUUZr021y7DXaoyt+mHRfNT9kRFeUtVKmYqRKlGpC6x3n2h/otPax0p/LkGhEZK6jZNqpPbuPXiCc6lEGZwzpYNM3cgn7rj/VbiWeQ6Zrl7XZYUThzZYmh3TaZn4zSALMtz2jktWzkiR9qXJ8O8cwY3ML6ZHiifbxONTIV6k2lv7VxBca9iJAO2TX9NvV9g6bVSXj6FvMT8bSUZ/V5hfLEg0VTO8QM0Eb+lufZdn5mhKLJ0trf8uuEDqttpVOjA8t6XAG+jy/PRvMTjs+d9VAVT7rXZI3fmf7WYp7CiaWKJ8AJj2Xi8dO38Lfckvqcfstu/HDHxTx9q/lJfPzKU2xF1X0InVby47O5v3XU3zbmGf2t4Pve7LdF/hacs+PprG19on1CdoF7hr8l75BOm5/Y+cF9vOH2fW39LVOf4mSpyNtVpJJxUp7t/C0mmvB0J/Lk3pdRnr6lv2X8UIt9gsRT3MeLBrfZ/taiDa47oT7RQiHD05AXoNX7W57nuk9w7X28yto+Bqhv528/cl6JY0Vx+3gDVbasT4cW1Vx9Vr1Hyvq+Qa5PoPJcf+vO67dp3rL7eKy0mb+lPLtTfB97zt67n9C2PgWe+3Pl+VXGk7pbPXAFao722+P+FloF6G+7/P2Ex7Pgfp9W8P0nt6Um7+2bzs8Sf5veN3kU3GPEt2q2fTwguqoc2tWnS2+mCv7W5e4P3crua2oGJ3vMlvotB5SEZYO5gZG38culhces8417qcKbXvT+k+u3xt+/i+NvZYxv6NTsuk+zazDqh7y/3zFTttsKQMV7NYX3xsv7LSpPsAcDF04WnEDmWp+kEVlWrJsLlL0Llr84/o5OLd17y50/4xH0fmfv34o8qVL+O4D8Zw9v8RTuMe6eP+fahElbxtOtG3nudkJznkIX0rn6XLN2lmn2261Ynx/kSfZ9iCcq0DRticx9nj3L036EJ/regX6NxH6PZOYWxM9PLqR+K83PfZ4/IX6Mzn98zp0slTLxLAAAAABJRU5ErkJggg=="
    },
    11365: function(e) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAl8AAAIPBAMAAAC/H6bZAAAAG1BMVEVHcEw+//8ZMmUTK1sRJ1U+//8sR3Y55OssmrTWOgcJAAAAAnRSTlMAkmiSP1AAAA0GSURBVHja7Z1Ncty2FoWdV5XKNJNsgHDdBdx2aQP2AvwGKs2RCt40k1QyTAZyvOzXZP+RAMkm2CAJsD/YJcktqkWexvl47gWb/vB6G18/MO6P19Tj55Ff9kv80/1394K9Df+un+Y83+97F2zE2fOeLzfB3t7e/uwff7xmMd6+H8e3b647RKrKVf6wp+GGx7fj+D4y/v3+VzN6Ffm9EezLl0+Hz18+ff6y7vAPtRoanw7HrVWtXPTRg9HD6A9ps4kJ9ZTjt/Rw24lDM+pvyXmTZgutqpeP12/Xw5h6g0aw1y/bDFNp6+/xUDr/VjmqcfryOIxp1LEnMZoDM/UDEip1OtzqvI2aPj1NPTo/ZlqCNQ+ET31U8iTY22Gb0dmb4+Rxneki1necOz3obTI8MSOHG/jcEuwyw/qP52jTZQWz/t62X9NGCLm/STgR5g7xhJI+RS8M22RIsLPtfdTGUTfFxPibnE1lEwsmQ4JVWwt226ULNm42sP4XMvgdtSsJds+SKzDM3VjU9YML5t7YJnYdht0suR30nX/Ap69dgC7r5Q9xVZVYsekzbDNLnu1k1Ytj0j7j15tIpf6RtTcxsrIltxPsmq3au+XtacAobTYxfQe70gzbModJiApfIAkfCTxo12TY66bB1Q690hMmQ1LB7uawHBiW0ygC+sfx6/1DCafPr8sJZsYE0zIsaVexZBE5LCfBYNg+c1iIoymZym7EMCwJw9Zg2CsM21kOW1WwCTkMS+6tliSHwbC1c9hWDCNWPG0OExgGwwoRbJ85zA4BaP8Mcy4Qw1fDSbCJC47FPg3DDnYG5FNdHlAcw+qrCLv6iK+YBDtvezexazAsj0sF2rQ40anFqPMD4rOmjTGbBGMFMOxy0LeDvyzZSjXoD+uD//qFfQ6GVZ1rI3Tg4DXYfZM67ufPsNsFEpeDtxfFLlfSWV8fCY7wuonZfQ6zPkCCS5icH766Acz5hyV23wzr7o13WYo01/V0T4biCeT8o5LnYNg5WR16GKU+ox41XskMMz6yOxfJVSYA/8v9JoXo7vthW7fB7rIsU4YlaozJni2ZWXvHTHkxEGxYsVz7YQ8xzC14tsydYbMEW6K3b7HkYzNtV4KFncVVBCOHxTHstVzBZAGG3Z9hXB+GYEsJpruz5AI15a4YZmEYDFtXME3XYczxPd8wbFnBwkdgGAx74GZFsq0lc89h998tb63c2yRlcZk5w6x/sLbqeUSCI+hsIlI9OcPacjS3t5Cgp2zXb+9sJVh4syLrS6VjXXe7XIsn0xwWXNTUc4+ioGE84X5GaZbZcmSY9Y9UAhZJsPe2q+Rtetq0MytLhg1FCTOyBPYS0EqS8itrwdSHUHCZnAaX7DT/kuWYlfd9K+R+/JqQ0EQSXnaeeU8/jE4Bi8TeX7+16c+K5eQwrcbCROK0NfxrKL530g9L04heIL3myrAkL/6SZ0ssuf8Gol1XKdN7YtGC7h9WbcKwqlyG2Xw8CsMQLD3syWEzhYNh/b+FHJYq6SPYgBW1vzPHfVwL7YdlU0sKDHvaWnIboeiHTTwrutIYtk1lzX1caSCuJJTJmmH9NysSb83RW4tr1uGst0n6hJ8jw063ZRJPjO46rfUxdtJYkjOumBym6i05mjtrkOo/aGDY/VVbszjs82PY7ZoACS6oO3+vddlAeM2dpC2TSrkXdYv14oM8uDFd9+ZOaS/jKbCWjLuIwiS2Zv6CmbtqrDn08urkXkvGVERz1jB3lcMi+yvr1JTUktSSy7JMur397vmn9PdLLrHMNno/n6wZtpEV3dgGWHICu8IZhmB9/bDcLbk5w9z0WAHDWJdMIJiBYVGChSxTU1wtuWpJ5MrPYbLKDKOWTAV9GBYrmMKwqJ4+DMOSCDZ9SSS5YCrF1ZKyriXd9BmWx82KZFV57hMyd0uarVfaJr1AQH+WYBtZcsLNimTFVHaXYRndrMgOfiHrzzBXZKzQ7SyZcU9ft+Z8n2CqOvIabh4rrP+K2vUD2EDtmGkOs2HJ7d/LyW5zliyEYcY3plmbYVWR0M8gh+VeGm3VBiuNYfm85xtLItiqgpmqFIZVMCzuDaZ24xlGTz/lQLBWqWi69BIYto/gau9X2nZV6Od+yabmiqtyoL/NcojJv6ef+czK9BrXfO5b4Yq1JDlsTLApzN+k1a8wLLKJVEw/TLBkHMMMgu0O+jCsGMFyJFjW/TCTIcEMDEtefMOwSEsi2KQGIu81GmcXxTcM22yZLdM3NuQwo7Dk9IYODHu0x89tGCJzmEMwctjiiiLYSBffwLDH1+EQLCKXYUkEW0swLDmploRhw2zHkjBs+T4iDHvUkjAssvjGkpGNRASbLRiW7GMYtWSKGfYVS8KwFc6SWJKePqURgrEuuXtLwjAsiWD09GEYDMOSCJZQQSwJw9K3dbDkw5ZEsFP1eNZFYRj9sCWF4v+XTM2wXxDsNHSgD+YL9hOWDFA1yrAPCDZNsMsM+/AjlpwUYBFsYi8/FAxLTiqNHIL1DgvDEucwBBuLZTDs8X4YghErYNgmM8vAMHLYJj19LFkMw7RUwbAkOSyBQNSS5LCli0cYFmVNGBbZ08eSFN+Lkkxh2Fx2wbDxXj4MI4dt3q3AkpPzBoJFQB9LwrDH9KCWhGGURjkOk69gpizFYFhkixqGwTByWKaCYclJ1oRhs7sVWBKGwTByGNdW7M2SLwj24FkThpHDYFimlkQwGJaohQ/DYBgMy6aX3yeYYsnbsOQwLPnsgmlO+ig57MEZRQ6DYQiWe9JXLAnD0hXdWHLiOIwIZhCspYd2hSKHTbSig2Hz4A/DEuQwGDZvhmFJevowDIaxLrk3S8IwGLZsszpDhikMg2FPuJALw2aOF3IYDFtXMHedYQhGDqOWhGFF5jAYxrpkuvwFw+jpw7CsZhYMI4fBMBhGDntyS36kpx+M8/8vqcbbPdMo+DeWHLRkRU//QcFg2MT8lQ/DqowZNqAkDINh6eMEDBvw4hRF/0awuCkIwyLOkjCsOyyWfGxm0Q+DYSuxq8UwQbAwsFJLppphQL+3hjRj0IdhIzWkwLAEtSSWLIphWfb0h2tzGBZZIsEwYsVapRGCTeogwrDIWOEQrBf2DksC/SWGRiR9LDmpvQPDsCSCbSCYksMiGWZH+mEIFrnMhiVhWDLBDD39BD19BINh6QR7oaf/EPTp6cOwRDPMwTCgv2yLWgd6/DCsn2H09GcugmBJasllZ5hSS8YxjBxGDgP6OQnmpzCFYaxLYslNBevbwCBYnGBYEoatMsOwZCEM05IEo6cPw2AYDNtLAxFLwjAYlodgHxHMF8wMCqYwLHJd8naWRLC+nv4I9LEkOWyhHIYlYdjjM8yObfAPlowrjX5DsE67q9FFRwR7/4olo86S728INhn69Qbvrz9jyYgp+PH99Ss9fV+Xgd2q33xkfmsEw5KT2zvvCDZdMHcVDIad+jeXgDGWwxBselLDkvGeNQgWURo5LDl3hiEYDFvKswTXsJasyGFRMWzKDEMwGLZYxxXBYNhiDHuBYfGWhGEwjH5YNmN7hmlZgsGwGT19GBaRx2BYcQzLFFWKJdPkMXr6kYLR04dhtKhzYxjBNab4hmFeCxqGJZ5xMCxeMEGwiCIcho2zTGBYnGK9Z00sOcwsGBbJrpGzJJaMLI3o6fcM7X0ES0YwrIJhcYsgFQyLL8YRbFggJYc92N6BYWGpSA5L3RdDsD5L6j3BsCS15ELQx5KxA8FmzTAsSQ7bI8M+eyeg27Cu/uuGRrPFcdx+Wmzz2fpb2vavkEpc/anvCStb2XoD6Son9dc2V4aZ85/mg5qqmYV6Gu0S7/RtPWhY9xnV0TncbKYHYy7PVP/M5V/Sl1mNl8qwZGhJl28/TM5/8qolM27vXE2YxXghh6VvUcOwmGU2clgkw+iHzWAagvVYUmFYsn4YgsEw+mH0w2BYKsHsZTgZ7u102zfO2nMbxtXNHTuw3flwbd3cOX6485S378tJJdt8bHYqK0teOzmHyrR0rXs2phlVp89zfEDN5QFzqPs2GozjT9dPcG3U1F0hc27shBOofsrjL6/q1pF5ua5S6q3ezZBhOlqMq5rmeOu/zaHorc8Vs0hrri/B6UP7XtSnDVW8XTEwLLKWJIeN5zEud0oRMxAsxpKKJWP7YQgWswhCLQnDUghkiBXksGWGpR+2O4ZpWZYkVsCwJDUktSQ5bJFhKiwJw7a1JDkMwdYSDEsi2LLQx5J9+QLBsOSyAiHYTJZhSXJY4qFYEujDMHLYtDdnZTyM9D2AJWEYsQLBSn1zFpaEYWsV31iys87GumQihlVYMo5hCEasWGuGIRgMW7a9g2AwbFlLIhixIgG7YBi15AYDwSJiBQwjhy0LfSw53g+DYVNnmmLJZDmMeyDOgz6WJIctW0u+Fjz+nDb+Oo5/k/zCo2D/eRaG/S+RYM8z/kCwuPFDCsH+D91x7CZ3OlLfAAAAAElFTkSuQmCC"
    },
    30922: function(e, t, n) {
        n.r(t),
        n.d(t, {
            __esModule: function() {
                return i.X
            },
            default: function() {
                return o
            }
        });
        var i = n(77804)
          , t = i.Z
          , o = (0,
        n(40810).Z)(t, function() {
            var n = this
              , e = n.$createElement
              , i = n._self._c || e;
            return i('div', {
                ref: "bindInputBox",
                staticClass: "section tab-nav-box sub-game-account sub-id g-clr",
                attrs: {
                    "data-tag": "BindInputV2"
                }
            }, [n.showfindopenid ? i('ul', [i('li', {
                staticClass: "active",
                attrs: {
                    cr: "playerid_find"
                },
                on: {
                    click: n.showFoundOpenidPop
                }
            }, [n._v("\n            " + n._s(n.lanres.gameIdLoginTitle) + "\n            "), i('em', {
                staticClass: "help-icon"
            })])]) : n._e(), n._v(" "), n.forceLogin ? n._t("forceLogin") : [i('div', {
                staticClass: "tab-box"
            }, [i('div', {
                staticClass: "clear-float"
            }), n._v(" "), n.userInfo ? i('div', {
                staticClass: "box id-box active"
            }, [i('div', {
                staticClass: "new-y-box"
            }, [i('div', [i('div', {
                staticClass: "user-head"
            }, [i('div', {
                staticClass: "name"
            }, [n._v("\n                                " + n._s(n.userInfo.charac_name) + "\n                            ")]), n._v(" "), n.showModify ? i('div', {
                staticClass: "switch-btn",
                on: {
                    click: n.changeOpenid
                }
            }, [i('svg', {
                attrs: {
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [i('path', {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M5.60916 1.31086C5.83307 1.06659 5.81657 0.687046 5.5723 0.463131C5.32803 0.239216 4.94849 0.255717 4.72457 0.499989L1.0579 4.49999C0.897122 4.67539 0.855178 4.92922 0.950987 5.14702C1.0468 5.36482 1.26226 5.50542 1.5002 5.50542H12.5002C12.8316 5.50542 13.1002 5.23679 13.1002 4.90542C13.1002 4.57405 12.8316 4.30542 12.5002 4.30542H2.86414L5.60916 1.31086ZM8.39107 12.5C8.16715 12.7443 8.18365 13.1238 8.42792 13.3477C8.67219 13.5716 9.05173 13.5551 9.27565 13.3108L12.9423 9.31085C13.1031 9.13545 13.145 8.88161 13.0492 8.66382C12.9534 8.44602 12.738 8.30541 12.5 8.30541H1.50002C1.16865 8.30541 0.900024 8.57404 0.900024 8.90541C0.900024 9.23678 1.16865 9.50541 1.50002 9.50541L11.1361 9.50541L8.39107 12.5Z",
                    fill: "currentColor"
                }
            })])]) : n._e()]), n._v(" "), i('div', {
                staticClass: "mess"
            }, [n._l(n.infoList, function(e) {
                return [e.show ? i('div', {
                    key: e.title,
                    class: e.class
                }, [i('span', {
                    staticClass: "label"
                }, [n._v("\n                                        " + n._s(e.title) + ":\n                                    ")]), n._v(" "), i('p', {
                    staticClass: "val"
                }, [n._v(n._s(e.val))])]) : n._e()]
            })], 2), n._v(" "), i('div', {
                staticClass: "login-type",
                style: {
                    display: n.showBalance ? '' : 'none'
                }
            }, [i('div', {
                staticClass: "label"
            }, [n._v("\n                                " + n._s(n.queryCharacText.balanceTitle) + ":\n                            ")]), n._v(" "), n._l(n.balanceStatusList, function(e) {
                return i('div', {
                    key: e.name,
                    class: e.class,
                    style: {
                        display: n.balanceStatus === e.name ? '' : 'none'
                    },
                    on: {
                        click: n.handleBalanceStatus
                    }
                }, ['balance' === e.name && 'xx' !== n.balance ? [i('img', {
                    attrs: {
                        src: e.image
                    }
                }), n._v("\n                                    " + n._s(e.val) + "\n                                ")] : 'balance' === e.name && 'xx' === n.balance || 'loading' === e.name ? [n._v("\n                                    " + n._s(e.val) + "\n                                ")] : [n._v("\n                                    " + n._s(e.val) + "\n                                    "), i('img', {
                    attrs: {
                        src: e.image
                    }
                })]], 2)
            })], 2)]), n._v(" "), n.verifySendInfo && n.verifySendInfo.point && !n.errorTxt ? i('div', {
                staticClass: "binding-tip"
            }, [n._v("\n                        " + n._s(n.verifySendInfo.desc) + ":\n                        "), i('span', [i('img', {
                attrs: {
                    src: n.verifySendInfo.image,
                    alt: ""
                }
            }), n._v("\n                            " + n._s(n.verifySendInfo.point) + "\n                        ")])]) : n._e()])]) : [n.showPartitionSelect ? [i('partition-select', {
                ref: "partitionSelectRef",
                attrs: {
                    platforms: n.platforms,
                    selectPartition: n.selectPartition,
                    selectedInfo: n.selectedInfo,
                    lanres: n.lanres
                }
            }), n._v(" "), n.fromVerifySdk ? n._e() : i('div', {
                staticClass: "box-line"
            })] : n._e(), n._v(" "), 'system' === n.selectType ? i('div', {
                staticClass: "box select-box"
            }, [i('div', {
                staticClass: "n-box"
            }, [i('plat-select', {
                ref: "platSelectRef",
                attrs: {
                    platforms: n.platforms,
                    selectPlatform: n.selectPlatform,
                    selectedInfo: n.selectedInfo,
                    pfDefaultSelect: n.lanres.pfDefaultSelect,
                    lightInput: n.lightInput
                }
            })], 1)]) : n._e(), n._v(" "), i('div', {
                staticClass: "box id-box active"
            }, [i('div', {
                class: ['n-box', {
                    active: n.showDropDown
                }]
            }, [i('div', {
                class: ['input-box', 'have-select-input-box', 'flex-btn-input', {
                    light: n.lightInput,
                    error: n.errorTxt
                }]
            }, [i('input', {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: n.shortId,
                    expression: "shortId",
                    modifiers: {
                        trim: !0
                    }
                }],
                ref: "inputbox",
                staticClass: "input",
                attrs: {
                    type: "text",
                    maxlength: "30",
                    placeholder: n.lanres.gameIdLoginInput
                },
                domProps: {
                    value: n.shortId
                },
                on: {
                    click: n.clickInput,
                    blur: [n.blurInput, function(e) {
                        return n.$forceUpdate()
                    }
                    ],
                    keyup: function(e) {
                        return !e.type.indexOf('key') && n._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : n.handleInputEnter.apply(null, arguments)
                    },
                    focus: n.focusInput,
                    input: [function(e) {
                        e.target.composing || (n.shortId = e.target.value.trim())
                    }
                    , n.onInput]
                }
            }), n._v(" "), i('em', {
                class: {
                    active: n.showDropDown
                },
                style: {
                    display: n.dropDownLists.length ? 'block' : 'none'
                },
                on: {
                    mousedown: function(e) {
                        return e.stopPropagation(),
                        n.toggleDropDown.apply(null, arguments)
                    }
                }
            }, [i('svg', {
                attrs: {
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [i('path', {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M8 12L12 6H4L8 12Z",
                    fill: "currentColor"
                }
            })])]), n._v(" "), n.errorTxt ? i('i', {
                staticClass: "error-close",
                on: {
                    click: n.clearInput
                }
            }) : n._e(), n._v(" "), i('div', {
                staticClass: "select-input",
                style: {
                    display: n.activeSelectStatus ? 'block' : ''
                }
            }, n._l(n.dropDownLists, function(t) {
                return i('div', {
                    key: "" + t.userid,
                    staticClass: "li",
                    on: {
                        mousedown: function(e) {
                            return e.stopPropagation(),
                            n.selectItem(t)
                        }
                    }
                }, [n._v("\n                                    " + n._s(t.userid) + " (" + n._s(t.charac_name) + ")\n                                    "), n.isBalanceVerify(t) ? i('span', {
                    staticClass: "linked"
                }, [n._v("\n                                        " + n._s(n.queryCharacText.link) + "\n                                    ")]) : i('i', {
                    staticClass: "untying-icon",
                    on: {
                        mousedown: function(e) {
                            return e.stopPropagation(),
                            n.untypeItem(t)
                        }
                    }
                }, [i('svg', {
                    attrs: {
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i('path', {
                    attrs: {
                        d: "M13.189 1.60001L14.4 2.81104L9.21105 8.0002L14.4 13.189L13.189 14.4L8.0002 9.21105L2.81104 14.4L1.60001 13.189L6.78935 8.0002L1.60001 2.81104L2.81104 1.60001L8.0002 6.78935L13.189 1.60001Z",
                        fill: "currentColor"
                    }
                })])])])
            }), 0)]), n._v(" "), n.showSubmitBtn ? [n.loading ? i('div', {
                staticClass: "btn loading-btn"
            }, [n._m(0)]) : i('div', {
                class: ['btn', {
                    disable: n.isDisable
                }],
                on: {
                    click: n.getGameInfo
                }
            }, [n._v("\n                                " + n._s(n.lanres.gameIdLoginOkButton) + "\n                            ")])] : n._e()], 2)])], n._v(" "), i('div', {
                class: ['box id-box active', {
                    'have-zIndex-select': 'partition' === n.selectType
                }]
            }, [n.errorTxt ? i('p', {
                staticClass: "error-tips show"
            }, [n._v("\n                    " + n._s(n.errorTxt) + "‎\n                ")]) : n._e(), n._v(" "), i('p', {
                class: ['auxiliary-tips', {
                    show: n.limitSystem && !n.userInfo
                }]
            }, [n._v("\n                    " + n._s(n.lanres.platformTips) + "\n                ")]), n._v(" "), n.roleSuggestionInfo ? i('div', {
                staticClass: "role-suggestion-box",
                on: {
                    click: function(e) {
                        return n.selectItem(n.roleSuggestionInfo)
                    }
                }
            }, [i('div', {
                staticClass: "mess"
            }, [i('div', {
                staticClass: "name"
            }, [n._v("\n                            " + n._s(n.lanres.gameIdLoginCharacName) + ":\n                            " + n._s(n.roleSuggestionInfo.charac_name) + "\n                        ")]), n._v(" "), i('div', {
                staticClass: "id"
            }, [n._v("\n                            " + n._s(n.lanres.gameIdLoginId) + ":\n                            " + n._s(n.roleSuggestionInfo.userid) + "\n                        ")])]), n._v(" "), i('div', {
                staticClass: "use"
            }, [i('a', [n._v(" " + n._s(n.lanres.useUserId) + " ")])])]) : n._e()])], 2)], n._v(" "), n.showGenerallyTips ? i('div', {
                staticClass: "generally-tips"
            }, [i('p', [i('a', {
                attrs: {
                    href: "javascript:void(0)"
                },
                on: {
                    click: n.gotoLogin
                }
            }, [n._v("\n                " + n._s(n.lanres.notSignUpGuide.confirmButtonText))]), n._v("\n            " + n._s(n.lanres.notSignUpGuide.tips) + "\n            "), i('span', {
                staticClass: "details",
                on: {
                    click: n.showExclSvcPop
                }
            }, [n._v("\n                " + n._s(n.lanres.notSignUpGuide.detail) + "\n            ")])])]) : n._e()], 2)
        }, [function() {
            var e = this.$createElement
              , e = this._self._c || e;
            return e('div', {
                staticClass: "mid"
            }, [e('img', {
                attrs: {
                    src: "https://cdn.midasbuy.com/oversea_web/static/images/btn_loading_icon-2a2c3cd5b5.png",
                    alt: "img"
                }
            })])
        }
        ], !1, null, null, null).exports
    },
    28835: function(e, t, o) {
        o.r(t),
        o.d(t, {
            __esModule: function() {
                return n.X
            },
            default: function() {
                return i
            }
        });
        var n = o(62710)
          , t = n.Z
          , i = (0,
        o(40810).Z)(t, function() {
            var n = this
              , e = n.$createElement
              , i = n._self._c || e;
            return i('div', {
                staticClass: "pop-mode-box",
                staticStyle: {
                    display: "block"
                },
                attrs: {
                    id: "pop-box"
                }
            }, [i('div', {
                staticClass: "abnormal"
            }, [i('div', {
                staticClass: "abnormal_box abnormal_box-6 dia-selectarea"
            }, [i('img', {
                staticClass: "img_bg",
                attrs: {
                    "data-prop": "bgImage",
                    src: o(11365),
                    alt: ""
                }
            }), n._v(" "), i('div', {
                staticClass: "select-content"
            }, [i('ul', {
                staticClass: "area-wrap"
            }, n._l(n.groupList, function(t) {
                return i('li', {
                    key: t,
                    class: ['area-item', {
                        on: t === n.selectedGroup
                    }],
                    on: {
                        click: function(e) {
                            return n.selectGroupHandler(t)
                        }
                    }
                }, [n._v("\n                        " + n._s(t) + "\n                    ")])
            }), 0), n._v(" "), i('ul', {
                staticClass: "role-wrap"
            }, n._l(n.partitionList, function(t) {
                return i('li', {
                    key: t.zoneid,
                    class: ['role-item', {
                        on: t.name === n.selected
                    }],
                    on: {
                        click: function(e) {
                            return n.selectPartitionHandler(t.name)
                        }
                    }
                }, [n._v("\n                        " + n._s(t.name) + "\n                    ")])
            }), 0), n._v(" "), n.toastMsg ? i('div', {
                staticClass: "no-role"
            }, [i('div', {
                staticClass: "no-role-tips"
            }, [i('img', {
                staticClass: "no-role-bg",
                attrs: {
                    src: o(36003),
                    alt: ""
                }
            }), n._v(" "), i('span', [n._v(" " + n._s(n.toastMsg) + " ")])])]) : n._e()]), n._v(" "), i('a', {
                staticClass: "no-role-button",
                attrs: {
                    href: "javascript:void(0);"
                }
            }, [i('img', {
                staticClass: "img-bg",
                attrs: {
                    src: o(53836),
                    alt: ""
                }
            }), n._v(" "), i('p', {
                staticClass: "btn-txt",
                on: {
                    click: n.handleConfirm
                }
            }, [n._v("\n                    " + n._s(n.selectPartitionPopLan.confirmBtn) + "\n                ")])]), n._v(" "), n.hideClose ? n._e() : i('img', {
                staticClass: "dia-close",
                attrs: {
                    "data-prop": "bgImage",
                    src: o(81949),
                    alt: ""
                },
                on: {
                    click: n.closePop
                }
            })])])])
        }, [], !1, null, null, null).exports
    },
    9705: function(e, t, n) {
        n.r(t),
        n.d(t, {
            __esModule: function() {
                return i.X
            },
            default: function() {
                return o
            }
        });
        var i = n(37594)
          , t = i.Z
          , o = (0,
        n(40810).Z)(t, function() {
            var n = this
              , e = n.$createElement
              , i = n._self._c || e;
            return i('div', {
                staticClass: "box select-box"
            }, [i('div', {
                class: ['n-box', {
                    active: n.showPartitionList
                }]
            }, [i('div', {
                class: ['select-input-box', n.columnClass],
                style: {
                    display: n.showPartitionList ? 'block' : 'none'
                }
            }, [i('div', {
                staticClass: "select-bg"
            }), n._v(" "), i('div', {
                staticClass: "select-min-box"
            }, [i('div', {
                staticClass: "min-title"
            }, [i('p', [n._v(n._s(n.lanres.partitionSelectTitle))]), n._v(" "), i('div', {
                staticClass: "close-btn",
                on: {
                    click: n.togglePartitionList
                }
            }, [i('svg', {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }
            }, [i('path', {
                attrs: {
                    d: "M13.189 1.60001L14.4 2.81104L9.21105 8.0002L14.4 13.189L13.189 14.4L8.0002 9.21105L2.81104 14.4L1.60001 13.189L6.78935 8.0002L1.60001 2.81104L2.81104 1.60001L8.0002 6.78935L13.189 1.60001Z",
                    fill: "currentColor"
                }
            })])])]), n._v(" "), i('div', {
                staticClass: "block"
            }, [2 < n.showColumnNum ? i('div', {
                staticClass: "row row-equipment"
            }, n._l(n.plats, function(t) {
                return i('div', {
                    key: t,
                    class: ['li', {
                        active: n.selectedPlat === t
                    }],
                    on: {
                        click: function(e) {
                            return n.selectPlatHandler(t)
                        }
                    }
                }, [n._v("\n                            " + n._s(t) + "\n                        ")])
            }), 0) : n._e(), n._v(" "), 1 < n.showColumnNum ? i('div', {
                staticClass: "row row-serial-number"
            }, n._l(n.groupList, function(t) {
                return i('div', {
                    key: t,
                    class: ['li', {
                        active: t === n.selectedGroup
                    }],
                    on: {
                        click: function(e) {
                            return n.selectGroupHandler(t)
                        }
                    }
                }, [n._v("\n                            " + n._s(t) + "\n                        ")])
            }), 0) : n._e(), n._v(" "), i('div', {
                staticClass: "row row-serial-area"
            }, n._l(n.partitionList, function(t) {
                return i('div', {
                    key: t.zoneid,
                    class: ['li', {
                        active: t.name === n.selected
                    }],
                    on: {
                        click: function(e) {
                            return n.selectPartitionHandler(t)
                        }
                    }
                }, [n._v("\n                            " + n._s(t.name) + "\n                        ")])
            }), 0)])])]), n._v(" "), i('div', {
                staticClass: "input-box have-select-input-box",
                on: {
                    click: n.togglePartitionList
                }
            }, [i('input', {
                staticClass: "input",
                attrs: {
                    type: "text",
                    readonly: "true",
                    placeholder: n.lanres.partitionSelectTitle
                },
                domProps: {
                    value: n.selected
                }
            }), n._v(" "), i('em', {
                class: {
                    active: n.showPartitionList
                }
            }, [i('svg', {
                attrs: {
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [i('path', {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M8 12L12 6H4L8 12Z",
                    fill: "currentColor"
                }
            })])]), n._v(" "), i('i', {
                staticClass: "error-close"
            })])])])
        }, [], !1, null, null, null).exports
    },
    5933: function(e, t, n) {
        n.r(t),
        n.d(t, {
            __esModule: function() {
                return i.X
            },
            default: function() {
                return o
            }
        });
        var i = n(13352)
          , t = i.Z
          , o = (0,
        n(40810).Z)(t, function() {
            var n = this
              , e = n.$createElement
              , i = n._self._c || e;
            return i('div', {
                class: ['select-type', {
                    active: n.showPlatSelect,
                    light: n.lightInput
                }]
            }, [i('p', {
                on: {
                    click: n.toggleSelect
                }
            }, [n._v("\n        " + n._s(n.selected || n.pfDefaultSelect) + "\n        "), i('svg', {
                attrs: {
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [i('path', {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M8 12L12 6H4L8 12Z",
                    fill: "currentColor"
                }
            })])]), n._v(" "), i('div', {
                staticClass: "select-item",
                style: {
                    display: n.showPlatSelect ? 'block' : 'none'
                }
            }, n._l(n.systemList, function(t) {
                return i('div', {
                    key: t,
                    staticClass: "item",
                    class: {
                        active: t === n.selected
                    },
                    on: {
                        click: function(e) {
                            return n.selectSystem(t)
                        }
                    }
                }, [n._v("\n            " + n._s(t) + "\n            "), t === n.selected ? [i('svg', {
                    attrs: {
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i('path', {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M14.602 5.13503L6.61539 12.7056L1.39804 7.76003L2.60196 6.48996L6.61539 10.2944L13.398 3.86496L14.602 5.13503Z",
                        fill: "currentColor"
                    }
                })])] : n._e()], 2)
            }), 0)])
        }, [], !1, null, null, null).exports
    },
    54032: function(e, t, n) {
        n.r(t),
        n.d(t, {
            __esModule: function() {
                return i.X
            },
            default: function() {
                return o
            }
        });
        var i = n(99173)
          , t = i.Z
          , o = (0,
        n(40810).Z)(t, function() {
            var e = this
              , t = e.$createElement
              , t = e._self._c || t;
            return t('div', {
                staticClass: "TencentSafety_wrap"
            }, [t('i', {
                staticClass: "icon"
            }, [t('svg', {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 17 16",
                    fill: "none"
                }
            }, [t('path', {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M3.86754 2.04437C3.05086 2.31659 2.5 3.08087 2.5 3.94173V8.65946C2.5 10.8515 3.69544 12.8691 5.61811 13.922L7.53937 14.9742C8.13786 15.3019 8.86214 15.3019 9.46063 14.9742L11.3819 13.922C13.3046 12.8691 14.5 10.8515 14.5 8.65946V3.94173C14.5 3.08087 13.9491 2.31659 13.1325 2.04437L9.13246 0.711032C8.72192 0.574187 8.27808 0.574187 7.86754 0.711032L3.86754 2.04437ZM10.7888 5.65293C11.1054 5.33277 11.6266 5.34668 11.9257 5.68326C12.1986 5.99047 12.1862 6.45684 11.8972 6.74906L8.55259 10.1313C8.11954 10.5692 7.41225 10.5692 6.9792 10.1313L5.10266 8.23367C4.8137 7.94146 4.80126 7.47509 5.07423 7.16788C5.3733 6.8313 5.89453 6.81739 6.21112 7.13754L7.7659 8.70981L10.7888 5.65293Z",
                    fill: "currentColor"
                }
            })])]), e._v(" "), t('div', [e._v(e._s(e.text))])])
        }, [], !1, null, null, null).exports
    },
    745: function(e, t, n) {
        n.r(t),
        n.d(t, {
            __esModule: function() {
                return i.X
            },
            default: function() {
                return o
            }
        });
        var i = n(89402)
          , t = i.Z
          , o = (0,
        n(40810).Z)(t, function() {
            var n = this
              , e = n.$createElement
              , i = n._self._c || e;
            return n.show ? i('div', {
                staticClass: "pop-mode-box",
                staticStyle: {
                    display: "block"
                },
                attrs: {
                    id: "pop-box"
                }
            }, ['login' === n.showModule ? i('div', {
                staticClass: "pop-mode pop-default-mode bind-guide-pop",
                staticStyle: {
                    display: "block"
                }
            }, [i('div', {
                staticClass: "title-box"
            }, [i('p', [n._v("\n                " + n._s(n.replaceTitleName(n.typeLan.roleTitle)) + "\n            ")]), n._v(" "), n.hideClose ? n._e() : i('div', {
                staticClass: "close-btn",
                on: {
                    click: n.closePop
                }
            }, [i('svg', {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }
            }, [i('path', {
                attrs: {
                    d: "M13.189 1.60001L14.4 2.81104L9.21105 8.0002L14.4 13.189L13.189 14.4L8.0002 9.21105L2.81104 14.4L1.60001 13.189L6.78935 8.0002L1.60001 2.81104L2.81104 1.60001L8.0002 6.78935L13.189 1.60001Z",
                    fill: "currentColor"
                }
            })])])]), n._v(" "), i('div', {
                staticClass: "bind-guide-pop-mess"
            }, [i('div', {
                staticClass: "mess-container"
            }, [i('div', {
                staticClass: "marketing_group",
                on: {
                    click: n.handleScrollClick,
                    mouseover: n.handleScrollMouseOver,
                    mouseleave: n.handleScrollMouseLeave
                }
            }, [i('div', {
                staticClass: "option_group_wrap"
            }, [i('div', {
                ref: "loginMarquee",
                staticClass: "list",
                style: {
                    left: n.leftPosition + 'px'
                }
            }, [n._l(n.swiperList, function(e) {
                return i('div', {
                    staticClass: "group_item"
                }, [i('img', {
                    attrs: {
                        src: e.image,
                        alt: ""
                    }
                }), n._v(n._s(e.desc) + "\n                            ")])
            }), n._v(" "), n._l(n.swiperList, function(e) {
                return i('div', {
                    staticClass: "group_item"
                }, [i('img', {
                    attrs: {
                        src: e.image,
                        alt: ""
                    }
                }), n._v(n._s(e.desc) + "\n                            ")])
            })], 2)])]), n._v(" "), i('p', {
                staticClass: "sub-text"
            }, [n._v("\n                    " + n._s(n.popLan.loginTips) + "\n                ")]), n._v(" "), i('div', {
                staticClass: "btn-wrap"
            }, n._l(n.filterThirdPartyList, function(t) {
                return i('div', {
                    key: t.name,
                    class: ['btn icon-btn', t.class],
                    on: {
                        click: function(e) {
                            return n.handleEasyLogin(t)
                        }
                    }
                }, [i('img', {
                    attrs: {
                        src: t.innerLogo,
                        alt: "img"
                    }
                }), n._v(" "), i('p', [n._v("\n                            " + n._s(n.replaceThirdPartyName(n.popLan.loginWith, t)) + "\n                        ")])])
            }), 0)]), n._v(" "), i('div', {
                staticClass: "pop-footer"
            }, [i('div', {
                staticClass: "TencentSafety_wrap"
            }, [i('i', {
                staticClass: "icon"
            }, [i('svg', {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 17 16",
                    fill: "none"
                }
            }, [i('path', {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M3.86754 2.04437C3.05086 2.31659 2.5 3.08087 2.5 3.94173V8.65946C2.5 10.8515 3.69544 12.8691 5.61811 13.922L7.53937 14.9742C8.13786 15.3019 8.86214 15.3019 9.46063 14.9742L11.3819 13.922C13.3046 12.8691 14.5 10.8515 14.5 8.65946V3.94173C14.5 3.08087 13.9491 2.31659 13.1325 2.04437L9.13246 0.711032C8.72192 0.574187 8.27808 0.574187 7.86754 0.711032L3.86754 2.04437ZM10.7888 5.65293C11.1054 5.33277 11.6266 5.34668 11.9257 5.68326C12.1986 5.99047 12.1862 6.45684 11.8972 6.74906L8.55259 10.1313C8.11954 10.5692 7.41225 10.5692 6.9792 10.1313L5.10266 8.23367C4.8137 7.94146 4.80126 7.47509 5.07423 7.16788C5.3733 6.8313 5.89453 6.81739 6.21112 7.13754L7.7659 8.70981L10.7888 5.65293Z",
                    fill: "currentColor"
                }
            })])]), n._v(" "), i('div', [n._v(n._s(n.popLan.tencentDeclaration))])])])]), n._v(" "), i('div', {
                staticClass: "midas-logo"
            })]) : 'bindRole' === n.showModule ? i('div', {
                staticClass: "pop-mode pop-default-mode bind-guide-pop",
                staticStyle: {
                    display: "block"
                }
            }, [i('div', {
                staticClass: "title-box"
            }, [i('p', [n._v("\n                " + n._s(n.replaceTitleName(n.typeLan.roleTitle)) + "\n            ")]), n._v(" "), n.hideClose ? n._e() : i('div', {
                staticClass: "close-btn",
                on: {
                    click: n.closePop
                }
            }, [i('svg', {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }
            }, [i('path', {
                attrs: {
                    d: "M13.189 1.60001L14.4 2.81104L9.21105 8.0002L14.4 13.189L13.189 14.4L8.0002 9.21105L2.81104 14.4L1.60001 13.189L6.78935 8.0002L1.60001 2.81104L2.81104 1.60001L8.0002 6.78935L13.189 1.60001Z",
                    fill: "currentColor"
                }
            })])])]), n._v(" "), i('div', {
                staticClass: "bind-guide-pop-mess"
            }, [i('div', {
                staticClass: "mess-container"
            }, [i('div', {
                staticClass: "marketing_group",
                on: {
                    click: n.handleScrollClick,
                    mouseover: n.handleScrollMouseOver,
                    mouseleave: n.handleScrollMouseLeave
                }
            }, [i('div', {
                staticClass: "option_group_wrap"
            }, [i('div', {
                ref: "bindMarquee",
                staticClass: "list",
                style: {
                    left: n.leftPosition + 'px'
                }
            }, [n._l(n.swiperList, function(e) {
                return i('div', {
                    staticClass: "group_item"
                }, [i('img', {
                    attrs: {
                        src: e.image,
                        alt: ""
                    }
                }), n._v(n._s(e.desc) + "\n                            ")])
            }), n._v(" "), n._l(n.swiperList, function(e) {
                return i('div', {
                    staticClass: "group_item"
                }, [i('img', {
                    attrs: {
                        src: e.image,
                        alt: ""
                    }
                }), n._v(n._s(e.desc) + "\n                            ")])
            })], 2)])]), n._v(" "), 'code' === n.verifyType ? i('div', [i('p', {
                staticClass: "sub-text"
            }, [n._v("\n                        " + n._s(n.replaceTitleName(n.typeLan.roleDesc)) + "\n                    ")]), n._v(" "), i('bind-input', n._g(n._b({
                ref: "bindinput",
                attrs: {
                    lanres: n.lanres,
                    user: n.userInfo,
                    dlist: n.dlist,
                    showfindopenid: !1,
                    autoFillUser: !0,
                    "show-balance": !1,
                    showErrorTxt: n.showErrorTxt,
                    verifySendInfo: n.verifySendInfo,
                    platforms: n.platforms,
                    "enable-auto-set-scroll-top": "",
                    fromVerifySdk: ""
                },
                on: {
                    "update:showErrorTxt": function(e) {
                        n.showErrorTxt = e
                    },
                    "update:show-error-txt": function(e) {
                        n.showErrorTxt = e
                    }
                }
            }, 'bind-input', n.$attrs, !1), n.$listeners)), n._v(" "), i('p', {
                staticClass: "warnning-text"
            }, [n._v("\n                        " + n._s(n.replaceTitleName(n.typeLan.roleWarning)) + "\n                    ")]), n._v(" "), i('div', {
                staticClass: "btn-wrap"
            }, [i('div', {
                class: ['btn', 'primary', {
                    disable: !n.userInfo || !!n.showErrorTxt
                }],
                on: {
                    click: n.handleContinue
                }
            }, [n._v("\n                            " + n._s(n.popLan.linkRoleConfirm) + "\n                        ")])])], 1) : i('div', [i('p', {
                staticClass: "sub-text"
            }, [n._v("\n                        " + n._s(n.nativeGameLoginLan.loginAccountText) + "\n                    ")]), n._v(" "), i('div', {
                class: "game-theme-box-btn type-" + n.nativeGameLoginConfig.name,
                on: {
                    click: n.handleNativeGameLogin
                }
            }, [i('div', {
                staticClass: "icon"
            }, [i('img', {
                attrs: {
                    src: n.nativeGameLoginConfig.innerLogo,
                    alt: ""
                }
            })]), n._v(" "), i('p', [n._v(n._s(n.nativeGameLinkButtonText))])]), n._v(" "), i('div', {
                staticClass: "line"
            }, [i('p', [n._v(n._s(n.nativeGameLoginLan.otherTips))])]), n._v(" "), i('div', {
                staticClass: "btn-wrap"
            }, [i('div', {
                staticClass: "btn primary",
                on: {
                    click: n.goToVerifyCode
                }
            }, [n._v("\n                            " + n._s(n.nativeGameLoginLan.linkWithVerificationCode) + "\n                        ")])])])]), n._v(" "), i('div', {
                staticClass: "pop-footer"
            }, [i('TencentSafety', {
                attrs: {
                    text: n.popLan.tencentDeclaration
                }
            })], 1)]), n._v(" "), i('div', {
                staticClass: "midas-logo"
            })]) : i('div', {
                staticClass: "pop-mode pop-default-mode bind-guide-pop verification-pop",
                staticStyle: {
                    display: "block"
                }
            }, [n._m(0), n._v(" "), i('div', {
                staticClass: "title-box"
            }, [i('p', [n._v(n._s(n.replaceTitleName(n.popLan.verifyCodeTitle)))]), n._v(" "), i('div', {
                staticClass: "back-btn",
                on: {
                    click: n.goBack
                }
            }, [i('i', [i('svg', {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }
            }, [i('path', {
                attrs: {
                    d: "M10.399 1.39896L11.601 2.60104L6.20299 8L11.601 13.399L10.399 14.601L3.79791 8L10.399 1.39896Z",
                    fill: "currentColor"
                }
            })])]), n._v("\n                " + n._s(n.popLan.back) + "\n            ")]), n._v(" "), n.hideClose ? n._e() : i('div', {
                staticClass: "close-btn",
                on: {
                    click: n.closePop
                }
            }, [i('svg', {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }
            }, [i('path', {
                attrs: {
                    d: "M13.189 1.60001L14.4 2.81104L9.21105 8.0002L14.4 13.189L13.189 14.4L8.0002 9.21105L2.81104 14.4L1.60001 13.189L6.78935 8.0002L1.60001 2.81104L2.81104 1.60001L8.0002 6.78935L13.189 1.60001Z",
                    fill: "currentColor"
                }
            })])])]), n._v(" "), i('div', {
                staticClass: "bind-guide-pop-mess"
            }, [i('div', {
                staticClass: "mess-container"
            }, [i('p', {
                staticClass: "sub-text",
                domProps: {
                    innerHTML: n._s(n.getVerifyCodeDesc(n.popLan.verifyCodeDesc))
                }
            }), n._v(" "), n.userInfo ? i('div', {
                staticClass: "user-account"
            }, [n._v("\n                    " + n._s(n.replaceTitleName(n.popLan.yourAccountTips)) + ":\n                    "), i('span', [n._v(n._s(n.userInfo.charac_name) + "(" + n._s(n.userInfo.userid) + ")\n                    ")])]) : n._e(), n._v(" "), i('div', {
                staticClass: "box id-box active"
            }, [i('div', {
                class: ['n-box', {
                    active: n.isOnFocus
                }]
            }, [i('div', {
                class: ['input-box', 'verify-code', 'flex-btn-input', {
                    error: n.showVerifyCodeError
                }]
            }, [i('input', {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: n.verifyCode,
                    expression: "verifyCode",
                    modifiers: {
                        trim: !0
                    }
                }],
                ref: "codeInput",
                staticClass: "input",
                attrs: {
                    type: "text",
                    placeholder: n.popLan.verifyCodePlaceholder
                },
                domProps: {
                    value: n.verifyCode
                },
                on: {
                    focus: n.focusVerifyCode,
                    blur: [n.onBlurVerifyCode, function(e) {
                        return n.$forceUpdate()
                    }
                    ],
                    input: function(e) {
                        e.target.composing || (n.verifyCode = e.target.value.trim())
                    }
                }
            }), n._v(" "), i('em', [i('svg', {
                attrs: {
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [i('path', {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M8 12L12 6H4L8 12Z",
                    fill: "currentColor"
                }
            })])]), n._v(" "), i('i', {
                staticClass: "error-close"
            })]), n._v(" "), n.timeCounter ? i('div', {
                staticClass: "btn resend verify-code"
            }, [n._v("\n                            " + n._s(n.showtime) + "s\n                        ")]) : i('div', {
                class: ['btn', 'resend', n.loading ? 'verify-code' : 'verify-code-error'],
                on: {
                    click: n.sendVerifyCode
                }
            }, [n._v("\n                            " + n._s(n.popLan.verifyCodeSendBtn) + "\n                        ")])]), n._v(" "), i('p', {
                staticClass: "error-tips",
                style: {
                    display: n.showVerifyCodeError ? 'block' : 'none'
                }
            }, [n._v("\n                        " + n._s(n.verifyCodeErrorMsg) + "\n                    ")])]), n._v(" "), i('div', {
                staticClass: "btn-wrap"
            }, [i('div', {
                class: ['btn', 'primary', {
                    disable: n.loading || !n.verifyCode
                }],
                on: {
                    click: n.submitVerifyCode
                }
            }, [n._v("\n                        " + n._s(n.popLan.verifyCodeConfirm) + "\n                    ")])]), n._v(" "), i('div', {
                staticClass: "ques-text"
            }, [i('p', [n._v(n._s(n.popLan.verifyCodeCantFind))]), n._v(" "), i('div', {
                staticClass: "ques-bubble",
                style: {
                    display: n.showCheckCodeGuide ? 'block' : 'none'
                }
            }, [i('img', {
                attrs: {
                    src: n.gameInfo.guideToEmailImage || ''
                },
                on: {
                    click: function(e) {
                        n.showBigGuideImage = !0
                    }
                }
            })])])]), n._v(" "), i('div', {
                staticClass: "pop-footer"
            }, [i('TencentSafety', {
                attrs: {
                    text: n.popLan.tencentDeclaration
                }
            })], 1)])]), n._v(" "), i('div', {
                style: {
                    display: n.showBigGuideImage ? 'block' : 'none'
                },
                attrs: {
                    id: "bigimg"
                },
                on: {
                    click: function(e) {
                        n.showBigGuideImage = !1
                    }
                }
            }, [i('img', {
                attrs: {
                    src: n.gameInfo.guideToEmailImage || ''
                }
            })])]) : n._e()
        }, [function() {
            var e = this.$createElement
              , e = this._self._c || e;
            return e('div', {
                staticClass: "brand-bg-decoration-box"
            }, [e('div', {
                staticClass: "brand-bg-decoration-out"
            }, [e('div', {
                staticClass: "brand-bg-decoration-in"
            })])])
        }
        ], !1, null, null, null).exports
    },
    71461: function(e, t, n) {
        n.r(t),
        n.d(t, {
            __esModule: function() {
                return i.X
            },
            default: function() {
                return o
            }
        });
        var i = n(10702)
          , t = i.Z
          , o = (0,
        n(40810).Z)(t, function() {
            var e = this
              , t = e.$createElement
              , t = e._self._c || t;
            return t('div', {
                staticClass: "account-hint-pop pop-mode-box result-small-pop",
                style: {
                    display: e.show ? 'block' : 'none'
                },
                attrs: {
                    id: "account-hint-pop"
                }
            }, ['switchLogin' === e.type ? t('div', {
                staticClass: "pop-mode mds-pop-con",
                staticStyle: {
                    display: "block"
                }
            }, [t('div', {
                staticClass: "close-btn",
                on: {
                    click: e.handleClose
                }
            }, [t('svg', {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }
            }, [t('path', {
                attrs: {
                    d: "M13.189 1.60001L14.4 2.81104L9.21105 8.0002L14.4 13.189L13.189 14.4L8.0002 9.21105L2.81104 14.4L1.60001 13.189L6.78935 8.0002L1.60001 2.81104L2.81104 1.60001L8.0002 6.78935L13.189 1.60001Z",
                    fill: "currentColor"
                }
            })])]), e._v(" "), t('div', {
                staticClass: "title-box"
            }, [t('p', [e._v(e._s(e.switchLoginPopLan.title))])]), e._v(" "), t('div', {
                staticClass: "desc-box"
            }, [t('div', {
                staticClass: "sub-text"
            }, [e._v("\n                " + e._s(e.switchLoginPopLan.desc) + "\n            ")])]), e._v(" "), t('div', {
                staticClass: "btn-wrap"
            }, [t('div', {
                class: ['btn icon-btn', e.switchLoginConfig.class],
                on: {
                    click: e.handleEasyLogin
                }
            }, [t('img', {
                attrs: {
                    src: e.switchLoginConfig.innerLogo,
                    alt: "img"
                }
            }), e._v(" "), t('p', [e._v(e._s(e.switchLoginPopLan.confirmBtn))])]), e._v(" "), t('div', {
                staticClass: "btn ghost",
                on: {
                    click: e.handleClose
                }
            }, [t('div', [e._v(e._s(e.switchLoginPopLan.cancelBtn))])])])]) : t('div', {
                staticClass: "pop-mode",
                staticStyle: {
                    display: "block"
                }
            }, [e.showTitle ? t('div', {
                staticClass: "title-box"
            }, [t('p', [e._v(e._s(e.tipsPopLan.title))])]) : e._e(), e._v(" "), t('div', {
                staticClass: "desc-box"
            }, [t('div', {
                staticClass: "text",
                domProps: {
                    innerHTML: e._s(e.tipsPopLan.desc)
                }
            })]), e._v(" "), t('div', {
                staticClass: "btn-wrap"
            }, [t('div', {
                class: ['btn', 'unlink' === e.type ? 'error' : 'primary'],
                on: {
                    click: e.handleConfirm
                }
            }, [t('div', [e._v("\n                    " + e._s(e.tipsPopLan.confirmBtn) + "\n                ")])]), e._v(" "), e.disableCancelBtn ? e._e() : t('div', {
                staticClass: "btn ghost close",
                on: {
                    click: e.handleClose
                }
            }, [t('div', [e._v("\n                    " + e._s(e.tipsPopLan.cancelBtn) + "\n                ")])])])])])
        }, [], !1, null, null, null).exports
    },
    14074: function(e, t, n) {
        n.r(t),
        n.d(t, {
            __esModule: function() {
                return i.X
            },
            default: function() {
                return o
            }
        });
        var i = n(26992)
          , t = i.Z
          , o = (0,
        n(40810).Z)(t, function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return 'close' !== t.resultPopStatus ? n('div', {
                staticClass: "pop-mode-box bind-result-pop",
                staticStyle: {
                    display: "block"
                },
                attrs: {
                    id: "bind-result-pop"
                }
            }, ['success' === t.resultPopStatus ? n('div', {
                staticClass: "pop-mode"
            }, [n('div', {
                staticClass: "close-btn",
                on: {
                    click: t.closePop
                }
            }, [n('svg', {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }
            }, [n('path', {
                attrs: {
                    d: "M13.189 1.60001L14.4 2.81104L9.21105 8.0002L14.4 13.189L13.189 14.4L8.0002 9.21105L2.81104 14.4L1.60001 13.189L6.78935 8.0002L1.60001 2.81104L2.81104 1.60001L8.0002 6.78935L13.189 1.60001Z",
                    fill: "currentColor"
                }
            })])]), t._v(" "), n('div', {
                staticClass: "midas-logo"
            }), t._v(" "), n('div', {
                staticClass: "cont-box"
            }, [n('div', {
                staticClass: "mess-container"
            }, [n('img', {
                staticClass: "result-head",
                attrs: {
                    src: t.statusData.image
                }
            }), t._v(" "), n('div', {
                staticClass: "title-box"
            }, [n('p', [t._v(t._s(t.statusData.title))])]), t._v(" "), n('div', {
                staticClass: "mess"
            }, [n('div', {
                staticClass: "new-y-box",
                staticStyle: {
                    display: "block"
                }
            }, [t.userInfo ? n('div', [n('div', {
                staticClass: "user-head"
            }, [n('div', {
                class: ['name', t.levelClass]
            }, [t._v("\n                                    " + t._s(t.formatCharacName) + "\n                                    "), t.vipLevel ? n('div', {
                class: ['vip_icon', {
                    fly: t.showLevelAnimation
                }]
            }) : t._e()])]), t._v(" "), n('div', {
                staticClass: "mess"
            }, [n('div', {
                staticClass: "id"
            }, [n('span', {
                staticClass: "label"
            }, [t._v(t._s(t.lanres.gameIdLoginId) + ":")]), t._v(" "), n('p', {
                staticClass: "val"
            }, [t._v(t._s(t.userInfo.userid))])])])]) : t._e(), t._v(" "), t.showBalance || t.point ? n('div', {
                staticClass: "data_box"
            }, [t.showBalance ? n('div', [n('div', {
                staticClass: "label"
            }, [t._v("\n                                    " + t._s(t.resultPopLan.balanceAccount) + ":\n                                ")]), t._v(" "), n('div', {
                staticClass: "data"
            }, [n('img', {
                attrs: {
                    src: t.currencyIcon
                }
            }), t._v(t._s(t.balance) + "\n                                ")])]) : t._e(), t._v(" "), t.point ? n('div', [n('div', {
                staticClass: "label"
            }, [t._v("\n                                    " + t._s(t.resultPopLan.vipPoints) + ":\n                                ")]), t._v(" "), n('div', {
                staticClass: "data"
            }, [n('img', {
                attrs: {
                    src: t.pointIcon
                }
            }), t._v(t._s(t.point) + "\n                                ")])]) : t._e()]) : t._e()]), t._v(" "), t.showVerifyGiftBox ? n('div', {
                staticClass: "reward_box"
            }, [t._m(0), t._v(" "), n('div', {
                staticClass: "title_box"
            }, [n('div', {
                staticClass: "title"
            }, [t._v("\n                                " + t._s(t.verifyGiftLan.title) + "\n                            ")]), t._v(" "), n('div', {
                staticClass: "text"
            }, [t._v("\n                                " + t._s(t.verifyGiftLan.extraDesc) + "\n                            ")])]), t._v(" "), n('div', {
                staticClass: "gift_list"
            }, t._l(t.verityGiftList, function(e) {
                return n('div', {
                    key: e.name,
                    staticClass: "gift_item"
                }, [n('div', {
                    staticClass: "img_box"
                }, [n('div', {
                    staticClass: "box"
                }, [n('img', {
                    attrs: {
                        src: e.icon
                    }
                })])]), t._v(" "), n('div', {
                    staticClass: "text_box"
                }, [n('div', {
                    staticClass: "text"
                }, [t._v("\n                                        " + t._s(e.name) + "\n                                    ")])])])
            }), 0), t._v(" "), n('div', {
                staticClass: "tips"
            }, [t._v("\n                            " + t._s(t.verifyGiftLan.learnMore) + "\n                        ")])]) : t._e(), t._v(" "), n('p', [t._v("\n                        " + t._s(t.statusData.desc) + "\n                    ")]), t._v(" "), n('div', {
                staticClass: "btn-wrap"
            }, [n('div', {
                staticClass: "btn primary",
                on: {
                    click: t.closePop
                }
            }, [t._v("\n                            " + t._s(t.statusData.btn) + "\n                        ")])])])]), t._v(" "), n('div', {
                staticClass: "pop-footer"
            }, [n('TencentSafety', {
                attrs: {
                    text: t.resultPopLan.tencentDeclaration
                }
            })], 1)])]) : n('div', {
                staticClass: "pop-mode pop-mode-style"
            }, [n('div', {
                staticClass: "close-btn",
                on: {
                    click: t.closePop
                }
            }, [n('svg', {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }
            }, [n('path', {
                attrs: {
                    d: "M13.189 1.60001L14.4 2.81104L9.21105 8.0002L14.4 13.189L13.189 14.4L8.0002 9.21105L2.81104 14.4L1.60001 13.189L6.78935 8.0002L1.60001 2.81104L2.81104 1.60001L8.0002 6.78935L13.189 1.60001Z",
                    fill: "currentColor"
                }
            })])]), t._v(" "), n('div', {
                staticClass: "midas-logo"
            }), t._v(" "), n('div', {
                staticClass: "cont-box"
            }, [n('div', {
                staticClass: "mess-container"
            }, [n('img', {
                staticClass: "result-head",
                attrs: {
                    src: "https://cdn.midasbuy.com/images/result-error-pay.669e462b.png"
                }
            }), t._v(" "), n('div', {
                staticClass: "title-box"
            }, [n('p', [t._v(t._s(t.resultPopLan.lipNotLinkedTitle))])]), t._v(" "), n('div', {
                staticClass: "mess"
            }, [n('p', [t._v("\n                        " + t._s(t.replaceDesc(t.resultPopLan.lipNotLinkedDesc)) + "\n                    ")]), t._v(" "), n('div', {
                staticClass: "btn-wrap",
                on: {
                    click: t.closePop
                }
            }, [n('div', {
                staticClass: "btn primary"
            }, [t._v("\n                            " + t._s(t.resultPopLan.lipNotLinkedBtn) + "\n                        ")])])])]), t._v(" "), n('div', {
                staticClass: "pop-footer"
            }, [n('TencentSafety', {
                attrs: {
                    text: t.resultPopLan.tencentDeclaration
                }
            })], 1)])])]) : t._e()
        }, [function() {
            var e = this.$createElement
              , e = this._self._c || e;
            return e('div', {
                staticClass: "brand_bg_decoration"
            }, [e('div', {
                staticClass: "out"
            }, [e('div', {
                staticClass: "in"
            })])])
        }
        ], !1, null, null, null).exports
    },
    84263: function(e, t, n) {
        n.r(t),
        n.d(t, {
            __esModule: function() {
                return i.X
            },
            default: function() {
                return o
            }
        });
        var i = n(67684)
          , t = i.Z
          , o = (0,
        n(40810).Z)(t, function() {
            var e = this
              , t = e.$createElement
              , t = e._self._c || t;
            return t('div', {
                staticClass: "vip-slap-face-pop",
                staticStyle: {
                    display: "block"
                },
                attrs: {
                    id: "vip-slap-face-pop"
                }
            }, [t('div', {
                staticClass: "vip_upgrade_pop active"
            }, [t('div', {
                staticClass: "bg"
            }), e._v(" "), t('div', {
                staticClass: "card_wrap"
            }, [t('div', {
                staticClass: "title"
            }, [e._v("\n                " + e._s(e.vipLevelPopLan.title) + "\n            ")]), e._v(" "), e.showLevelInfo ? t('div', {
                class: ['level_card_item', e.levelClass]
            }, [t('div', {
                staticClass: "level_icon"
            }), e._v(" "), t('div', {
                staticClass: "level_box"
            }, [t('div', {
                staticClass: "vip_level"
            }), e._v(" "), t('div', {
                staticClass: "game_card tilt_bg"
            }, [e._v(e._s(e.gameInfo.titleName))])]), e._v(" "), t('div', {
                staticClass: "level_step"
            }, [t('div', {
                staticClass: "text"
            }, [e._v("\n                        " + e._s(e.upgradeTips) + "\n                    ")])])]) : e._e()]), e._v(" "), t('div', {
                staticClass: "close",
                on: {
                    click: e.handleClose
                }
            }, [t('i', {
                staticClass: "i-midas:error icon"
            })])])])
        }, [], !1, null, null, null).exports
    },
    47467: function(e) {
        e.exports = axios
    },
    80231: function(e, t, n) {
        n.d(t, {
            cv: function() {
                return b
            }
        });
        var i = 'function' == typeof Buffer;
        const o = 'function' == typeof TextDecoder ? new TextDecoder : void 0
          , r = 'function' == typeof TextEncoder ? new TextEncoder : void 0;
        const s = Array.prototype.slice.call('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=')
          , a = (e => {
            let n = {};
            return e.forEach( (e, t) => n[e] = t),
            n
        }
        )(s)
          , l = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
          , c = String.fromCharCode.bind(String)
          , u = 'function' == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : e => new Uint8Array(Array.prototype.slice.call(e, 0))
          , d = e => e.replace(/=/g, '').replace(/[+\/]/g, e => '+' == e ? '-' : '_')
          , f = e => e.replace(/[^A-Za-z0-9\+\/]/g, '');
        var p = t => {
            let n, i, o, r, a = '';
            var e = t.length % 3;
            for (let e = 0; e < t.length; ) {
                if (255 < (i = t.charCodeAt(e++)) || 255 < (o = t.charCodeAt(e++)) || 255 < (r = t.charCodeAt(e++)))
                    throw new TypeError('invalid character found');
                n = i << 16 | o << 8 | r,
                a += s[n >> 18 & 63] + s[n >> 12 & 63] + s[n >> 6 & 63] + s[63 & n]
            }
            return e ? a.slice(0, e - 3) + "===".substring(e) : a
        }
        ;
        const h = 'function' == typeof btoa ? e => btoa(e) : i ? e => Buffer.from(e, 'binary').toString('base64') : p
          , v = i ? e => Buffer.from(e).toString('base64') : n => {
            let i = [];
            for (let e = 0, t = n.length; e < t; e += 4096)
                i.push(c.apply(null, n.subarray(e, e + 4096)));
            return h(i.join(''))
        }
          , m = (e, t=!1) => t ? d(v(e)) : v(e)
          , g = e => {
            if (e.length < 2)
                return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? c(192 | t >>> 6) + c(128 | 63 & t) : c(224 | t >>> 12 & 15) + c(128 | t >>> 6 & 63) + c(128 | 63 & t);
            var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
            return c(240 | t >>> 18 & 7) + c(128 | t >>> 12 & 63) + c(128 | t >>> 6 & 63) + c(128 | 63 & t)
        }
          , y = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g
          , w = e => e.replace(y, g)
          , _ = i ? e => Buffer.from(e, 'utf8').toString('base64') : r ? e => v(r.encode(e)) : e => h(w(e))
          , b = (e, t=!1) => t ? d(_(e)) : _(e);
        n = e => b(e, !0);
        const C = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g
          , k = e => {
            switch (e.length) {
            case 4:
                var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                return c(55296 + (t >>> 10)) + c(56320 + (1023 & t));
            case 3:
                return c((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
            default:
                return c((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
            }
        }
          , I = e => e.replace(C, k);
        t = t => {
            if (t = t.replace(/\s+/g, ''),
            !l.test(t))
                throw new TypeError('malformed base64.');
            t += '=='.slice(2 - (3 & t.length));
            let n, i = '', o, r;
            for (let e = 0; e < t.length; )
                n = a[t.charAt(e++)] << 18 | a[t.charAt(e++)] << 12 | (o = a[t.charAt(e++)]) << 6 | (r = a[t.charAt(e++)]),
                i += 64 === o ? c(n >> 16 & 255) : 64 === r ? c(n >> 16 & 255, n >> 8 & 255) : c(n >> 16 & 255, n >> 8 & 255, 255 & n);
            return i
        }
        ;
        const L = 'function' == typeof atob ? e => atob(f(e)) : i ? e => Buffer.from(e, 'base64').toString('binary') : t
          , P = i ? e => u(Buffer.from(e, 'base64')) : e => u(L(e).split('').map(e => e.charCodeAt(0)))
          , x = e => P(T(e))
          , S = i ? e => Buffer.from(e, 'base64').toString('utf8') : o ? e => o.decode(P(e)) : e => I(L(e))
          , T = e => f(e.replace(/[-_]/g, e => '-' == e ? '+' : '/'))
          , A = e => S(T(e));
        function O() {
            var e = (e, t) => Object.defineProperty(String.prototype, e, E(t));
            e('fromBase64', function() {
                return A(this)
            }),
            e('toBase64', function(e) {
                return b(this, e)
            }),
            e('toBase64URI', function() {
                return b(this, !0)
            }),
            e('toBase64URL', function() {
                return b(this, !0)
            }),
            e('toUint8Array', function() {
                return x(this)
            })
        }
        function M() {
            var e = (e, t) => Object.defineProperty(Uint8Array.prototype, e, E(t));
            e('toBase64', function(e) {
                return m(this, e)
            }),
            e('toBase64URI', function() {
                return m(this, !0)
            }),
            e('toBase64URL', function() {
                return m(this, !0)
            })
        }
        const E = e => ({
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        });
        L,
        h,
        A,
        b,
        b,
        w,
        I,
        A,
        m,
        x,
        O,
        M
    },
    31655: function(e, t, n) {
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, i = arguments[t];
                for (n in i)
                    e[n] = i[n]
            }
            return e
        }
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var i = function t(s, r) {
            function n(e, t, n) {
                if ('undefined' != typeof document) {
                    'number' == typeof (n = a({}, r, n)).expires && (n.expires = new Date(Date.now() + 864e5 * n.expires)),
                    n.expires && (n.expires = n.expires.toUTCString()),
                    e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                    var i, o = '';
                    for (i in n)
                        n[i] && (o += '; ' + i,
                        !0 !== n[i] && (o += '=' + n[i].split(';')[0]));
                    return document.cookie = e + '=' + s.write(t, e) + o
                }
            }
            return Object.create({
                set: n,
                get: function(e) {
                    if ('undefined' != typeof document && (!arguments.length || e)) {
                        for (var t = document.cookie ? document.cookie.split('; ') : [], n = {}, i = 0; i < t.length; i++) {
                            var o = t[i].split('=')
                              , r = o.slice(1).join('=');
                            try {
                                var a = decodeURIComponent(o[0]);
                                if (n[a] = s.read(r, a),
                                e === a)
                                    break
                            } catch (e) {}
                        }
                        return e ? n[e] : n
                    }
                },
                remove: function(e, t) {
                    n(e, '', a({}, t, {
                        expires: -1
                    }))
                },
                withAttributes: function(e) {
                    return t(this.converter, a({}, this.attributes, e))
                },
                withConverter: function(e) {
                    return t(a({}, this.converter, e), this.attributes)
                }
            }, {
                attributes: {
                    value: Object.freeze(r)
                },
                converter: {
                    value: Object.freeze(s)
                }
            })
        }({
            read: function(e) {
                return (e = '"' === e[0] ? e.slice(1, -1) : e).replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            },
            write: function(e) {
                return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
            }
        }, {
            path: '/'
        })
    },
    49378: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return c
            }
        });
        var i = n(71756);
        function o(n) {
            if (n.__esModule)
                return n;
            var i, o = n.default;
            return "function" == typeof o ? (i = function e() {
                if (this instanceof e) {
                    var t = [null];
                    return t.push.apply(t, arguments),
                    new (Function.bind.apply(o, t))
                }
                return o.apply(this, arguments)
            }
            ).prototype = o.prototype : i = {},
            Object.defineProperty(i, '__esModule', {
                value: !0
            }),
            Object.keys(n).forEach(function(e) {
                var t = Object.getOwnPropertyDescriptor(n, e);
                Object.defineProperty(i, e, t.get ? t : {
                    enumerable: !0,
                    get: function() {
                        return n[e]
                    }
                })
            }),
            i
        }
        t = {};
        const f = 'text/plain'
          , p = 'us-ascii'
          , h = (t, e) => e.some(e => e instanceof RegExp ? e.test(t) : e === t);
        n = o(Object.freeze({
            __proto__: null,
            default: function(e, t) {
                if (t = {
                    defaultProtocol: 'http:',
                    normalizeProtocol: !0,
                    forceHttp: !1,
                    forceHttps: !1,
                    stripAuthentication: !0,
                    stripHash: !1,
                    stripTextFragment: !0,
                    stripWWW: !0,
                    removeQueryParameters: [/^utm_\w+/i],
                    removeTrailingSlash: !0,
                    removeSingleSlash: !0,
                    removeDirectoryIndex: !1,
                    sortQueryParameters: !0,
                    ...t
                },
                e = e.trim(),
                /^data:/i.test(e))
                    return ( (e, {stripHash: t}) => {
                        var n = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(e);
                        if (!n)
                            throw new Error(`Invalid URL: ${e}`);
                        let {type: i, data: o, hash: r} = n.groups;
                        const a = i.split(';');
                        r = t ? '' : r;
                        let s = !1;
                        'base64' === a[a.length - 1] && (a.pop(),
                        s = !0);
                        t = (a.shift() || '').toLowerCase();
                        const l = [...a.map(e => {
                            let[t,n=''] = e.split('=').map(e => e.trim());
                            return 'charset' === t && (n = n.toLowerCase(),
                            n === p) ? '' : `${t}${n ? `=${n}` : ''}`
                        }
                        ).filter(Boolean)];
                        return s && l.push('base64'),
                        (0 < l.length || t && t !== f) && l.unshift(t),
                        `data:${l.join(';')},${s ? o.trim() : o}${r ? `#${r}` : ''}`
                    }
                    )(e, t);
                if (/^view-source:/i.test(e))
                    throw new Error('`view-source:` is not supported as it is a non-standard protocol');
                var n = e.startsWith('//');
                !n && /^\.*\//.test(e) || (e = e.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, t.defaultProtocol));
                const i = new URL(e);
                if (t.forceHttp && t.forceHttps)
                    throw new Error('The `forceHttp` and `forceHttps` options cannot be used together');
                if (t.forceHttp && 'https:' === i.protocol && (i.protocol = 'http:'),
                t.forceHttps && 'http:' === i.protocol && (i.protocol = 'https:'),
                t.stripAuthentication && (i.username = '',
                i.password = ''),
                t.stripHash ? i.hash = '' : t.stripTextFragment && (i.hash = i.hash.replace(/#?:~:text.*?$/i, '')),
                i.pathname) {
                    const l = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g;
                    let e = 0
                      , t = '';
                    for (; ; ) {
                        var o = l.exec(i.pathname);
                        if (!o)
                            break;
                        var r = o[0]
                          , o = o.index;
                        const u = i.pathname.slice(e, o);
                        t += u.replace(/\/{2,}/g, '/'),
                        t += r,
                        e = o + r.length
                    }
                    const c = i.pathname.slice(e, i.pathname.length);
                    t += c.replace(/\/{2,}/g, '/'),
                    i.pathname = t
                }
                if (i.pathname)
                    try {
                        i.pathname = decodeURI(i.pathname)
                    } catch {}
                if (!0 === t.removeDirectoryIndex && (t.removeDirectoryIndex = [/^index\.[a-z]+$/]),
                Array.isArray(t.removeDirectoryIndex) && 0 < t.removeDirectoryIndex.length) {
                    let e = i.pathname.split('/');
                    var a = e[e.length - 1];
                    h(a, t.removeDirectoryIndex) && (e = e.slice(0, -1),
                    i.pathname = e.slice(1).join('/') + '/')
                }
                if (i.hostname && (i.hostname = i.hostname.replace(/\.$/, ''),
                t.stripWWW && /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(i.hostname) && (i.hostname = i.hostname.replace(/^www\./, ''))),
                Array.isArray(t.removeQueryParameters))
                    for (const d of [...i.searchParams.keys()])
                        h(d, t.removeQueryParameters) && i.searchParams.delete(d);
                if (!0 === t.removeQueryParameters && (i.search = ''),
                t.sortQueryParameters) {
                    i.searchParams.sort();
                    try {
                        i.search = decodeURIComponent(i.search)
                    } catch {}
                }
                t.removeTrailingSlash && (i.pathname = i.pathname.replace(/\/$/, ''));
                const s = e;
                return e = i.toString(),
                t.removeSingleSlash || '/' !== i.pathname || s.endsWith('/') || '' !== i.hash || (e = e.replace(/\/$/, '')),
                (t.removeTrailingSlash || '/' === i.pathname) && '' === i.hash && t.removeSingleSlash && (e = e.replace(/\/$/, '')),
                n && !t.normalizeProtocol && (e = e.replace(/^http:\/\//, '//')),
                e = t.stripProtocol ? e.replace(/^(?:https?:)?\/\//, '') : e
            }
        }));
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , a = l(n)
          , s = l(i);
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        i = function e(t) {
            function n(e) {
                throw (e = new Error(e)).subject_url = t,
                e
            }
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            "string" == typeof t && t.trim() || n("Invalid url."),
            t.length > e.MAX_INPUT_LENGTH && n("Input exceeds maximum length. If needed, change the value of parseUrl.MAX_INPUT_LENGTH."),
            i && ("object" !== (void 0 === i ? "undefined" : r(i)) && (i = {
                stripHash: !1
            }),
            t = (0,
            a.default)(t, i));
            var o = (0,
            s.default)(t);
            return o.parse_failed && ((i = o.href.match(/^(?:([a-zA-Z_][a-zA-Z0-9_-]{0,31})@|https?:\/\/)([\w\.\-@]+)[\/:](([\~,\.\w,\-,\_,\/,\s]|%[0-9A-Fa-f]{2})+?(?:\.git|\/)?)$/)) ? (o.protocols = ["ssh"],
            o.protocol = "ssh",
            o.resource = i[2],
            o.host = i[2],
            o.user = i[1],
            o.pathname = "/" + i[3],
            o.parse_failed = !1) : n("URL parsing failed.")),
            o
        }
        ;
        i.MAX_INPUT_LENGTH = 2048;
        var c = t.default = i
    }
}
  , __webpack_module_cache__ = {};
function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t)
        return t.exports;
    t = __webpack_module_cache__[e] = {
        id: e,
        loaded: !1,
        exports: {}
    };
    return __webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__),
    t.loaded = !0,
    t.exports
}
__webpack_require__.m = __webpack_modules__,
__webpack_require__.amdO = {},
function() {
    var c = [];
    __webpack_require__.O = function(e, t, n, i) {
        if (!t) {
            for (var o = 1 / 0, r = 0; r < c.length; r++) {
                for (var a, t = c[r][0], n = c[r][1], i = c[r][2], s = !0, l = 0; l < t.length; l++)
                    (!1 & i || i <= o) && Object.keys(__webpack_require__.O).every(function(e) {
                        return __webpack_require__.O[e](t[l])
                    }) ? t.splice(l--, 1) : (s = !1,
                    i < o && (o = i));
                s && (c.splice(r--, 1),
                void 0 !== (a = n()) && (e = a))
            }
            return e
        }
        i = i || 0;
        for (var r = c.length; 0 < r && c[r - 1][2] > i; r--)
            c[r] = c[r - 1];
        c[r] = [t, n, i]
    }
}(),
__webpack_require__.d = function(e, t) {
    for (var n in t)
        __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
}
,
__webpack_require__.g = function() {
    if ('object' == typeof globalThis)
        return globalThis;
    try {
        return this || new Function('return this')()
    } catch (e) {
        if ('object' == typeof window)
            return window
    }
}(),
__webpack_require__.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
,
__webpack_require__.r = function(e) {
    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: 'Module'
    }),
    Object.defineProperty(e, '__esModule', {
        value: !0
    })
}
,
__webpack_require__.nmd = function(e) {
    return e.paths = [],
    e.children || (e.children = []),
    e
}
,
__webpack_require__.j = 4475,
function() {
    var c = {
        4475: 0,
        4197: 0,
        2979: 0,
        5651: 0,
        922: 0,
        1032: 0
    };
    __webpack_require__.O.j = function(e) {
        return 0 === c[e]
    }
    ;
    function e(e, t) {
        var n, i, o, r = t[0], a = t[1], s = t[2], l = 0;
        if (r.some(function(e) {
            return 0 !== c[e]
        })) {
            for (n in a)
                __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
            s && (o = s(__webpack_require__))
        }
        for (e && e(t); l < r.length; l++)
            i = r[l],
            __webpack_require__.o(c, i) && c[i] && c[i][0](),
            c[i] = 0;
        return __webpack_require__.O(o)
    }
    var t = self.webpackChunk = self.webpackChunk || [];
    t.forEach(e.bind(null, 0)),
    t.push = e.bind(null, t.push.bind(t))
}();
var __webpack_exports__ = __webpack_require__.O(void 0, [6429, 3913], function() {
    return __webpack_require__(35787)
})
  , __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
