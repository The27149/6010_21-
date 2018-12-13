var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_AddWalletBtn = /** @class */ (function (_super) {
            __extends(FUI_AddWalletBtn, _super);
            function FUI_AddWalletBtn() {
                return _super.call(this) || this;
            }
            FUI_AddWalletBtn.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "AddWalletBtn"));
            };
            FUI_AddWalletBtn.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
            };
            FUI_AddWalletBtn.URL = "ui://8oy4o0mbl3ii3x";
            return FUI_AddWalletBtn;
        }(fairygui.GComponent));
        Game.FUI_AddWalletBtn = FUI_AddWalletBtn;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_brief = /** @class */ (function (_super) {
            __extends(FUI_brief, _super);
            function FUI_brief() {
                return _super.call(this) || this;
            }
            FUI_brief.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "brief"));
            };
            FUI_brief.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_h_v = this.getControllerAt(0);
                this.m_avatar = (this.getChildAt(0));
                this.m_n4 = (this.getChildAt(1));
                this.m_nickname = (this.getChildAt(2));
                this.m_n5 = (this.getChildAt(3));
                this.m_n8 = (this.getChildAt(4));
                this.m_coin = (this.getChildAt(5));
            };
            FUI_brief.URL = "ui://8oy4o0mbd832p";
            return FUI_brief;
        }(fairygui.GComponent));
        Game.FUI_brief = FUI_brief;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_briefPopup = /** @class */ (function (_super) {
            __extends(FUI_briefPopup, _super);
            function FUI_briefPopup() {
                return _super.call(this) || this;
            }
            FUI_briefPopup.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "briefPopup"));
            };
            FUI_briefPopup.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n10 = (this.getChildAt(0));
                this.m_lang_head = (this.getChildAt(1));
                this.m_lang_des = (this.getChildAt(2));
                this.m_btnSave = (this.getChildAt(3));
                this.m_headList = (this.getChildAt(4));
                this.m_close = (this.getChildAt(5));
                this.m_current = (this.getChildAt(6));
            };
            FUI_briefPopup.URL = "ui://8oy4o0mbd832w";
            return FUI_briefPopup;
        }(fairygui.GComponent));
        Game.FUI_briefPopup = FUI_briefPopup;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_btn_reconnect = /** @class */ (function (_super) {
            __extends(FUI_btn_reconnect, _super);
            function FUI_btn_reconnect() {
                return _super.call(this) || this;
            }
            FUI_btn_reconnect.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "btn_reconnect"));
            };
            FUI_btn_reconnect.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n3 = (this.getChildAt(0));
                this.m_lang_reconnect = (this.getChildAt(1));
            };
            FUI_btn_reconnect.URL = "ui://8oy4o0mbo4403d";
            return FUI_btn_reconnect;
        }(fairygui.GButton));
        Game.FUI_btn_reconnect = FUI_btn_reconnect;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_btn_return = /** @class */ (function (_super) {
            __extends(FUI_btn_return, _super);
            function FUI_btn_return() {
                return _super.call(this) || this;
            }
            FUI_btn_return.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "btn_return"));
            };
            FUI_btn_return.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n3 = (this.getChildAt(0));
                this.m_lang_return = (this.getChildAt(1));
            };
            FUI_btn_return.URL = "ui://8oy4o0mbo4403f";
            return FUI_btn_return;
        }(fairygui.GButton));
        Game.FUI_btn_return = FUI_btn_return;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_cancle = /** @class */ (function (_super) {
            __extends(FUI_cancle, _super);
            function FUI_cancle() {
                return _super.call(this) || this;
            }
            FUI_cancle.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "cancle"));
            };
            FUI_cancle.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n5 = (this.getChildAt(0));
                this.m_lang_cancle = (this.getChildAt(1));
            };
            FUI_cancle.URL = "ui://8oy4o0mbo4403r";
            return FUI_cancle;
        }(fairygui.GButton));
        Game.FUI_cancle = FUI_cancle;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_close = /** @class */ (function (_super) {
            __extends(FUI_close, _super);
            function FUI_close() {
                return _super.call(this) || this;
            }
            FUI_close.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "close"));
            };
            FUI_close.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n3 = (this.getChildAt(0));
            };
            FUI_close.URL = "ui://8oy4o0mbd83216";
            return FUI_close;
        }(fairygui.GButton));
        Game.FUI_close = FUI_close;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_gm = /** @class */ (function (_super) {
            __extends(FUI_gm, _super);
            function FUI_gm() {
                return _super.call(this) || this;
            }
            FUI_gm.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "gm"));
            };
            FUI_gm.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n18 = (this.getChildAt(0));
                this.m_n19 = (this.getChildAt(1));
                this.m_keys = (this.getChildAt(2));
                this.m_n0 = (this.getChildAt(3));
                this.m_n1 = (this.getChildAt(4));
                this.m_roomType = (this.getChildAt(5));
                this.m_playerNumb = (this.getChildAt(6));
                this.m_n2 = (this.getChildAt(7));
                this.m_n3 = (this.getChildAt(8));
                this.m_n4 = (this.getChildAt(9));
                this.m_n9 = (this.getChildAt(10));
                this.m_n10 = (this.getChildAt(11));
                this.m_n16 = (this.getChildAt(12));
                this.m_cards_0 = (this.getChildAt(13));
                this.m_cards_1 = (this.getChildAt(14));
                this.m_cards_2 = (this.getChildAt(15));
                this.m_cards_3 = (this.getChildAt(16));
                this.m_cards_4 = (this.getChildAt(17));
                this.m_cards_5 = (this.getChildAt(18));
                this.m_submit = (this.getChildAt(19));
                this.m_close = (this.getChildAt(20));
            };
            FUI_gm.URL = "ui://8oy4o0mbo44037";
            return FUI_gm;
        }(fairygui.GComponent));
        Game.FUI_gm = FUI_gm;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_gmKeys = /** @class */ (function (_super) {
            __extends(FUI_gmKeys, _super);
            function FUI_gmKeys() {
                return _super.call(this) || this;
            }
            FUI_gmKeys.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "gmKeys"));
            };
            FUI_gmKeys.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n6 = (this.getChildAt(0));
                this.m_n7 = (this.getChildAt(1));
                this.m_n8 = (this.getChildAt(2));
                this.m_n9 = (this.getChildAt(3));
                this.m_n10 = (this.getChildAt(4));
                this.m_n11 = (this.getChildAt(5));
                this.m_n12 = (this.getChildAt(6));
                this.m_n13 = (this.getChildAt(7));
                this.m_n14 = (this.getChildAt(8));
                this.m_n15 = (this.getChildAt(9));
                this.m_n16 = (this.getChildAt(10));
                this.m_n17 = (this.getChildAt(11));
                this.m_n18 = (this.getChildAt(12));
                this.m_n19 = (this.getChildAt(13));
                this.m_n20 = (this.getChildAt(14));
                this.m_n21 = (this.getChildAt(15));
                this.m_n22 = (this.getChildAt(16));
                this.m_n23 = (this.getChildAt(17));
                this.m_n24 = (this.getChildAt(18));
                this.m_n25 = (this.getChildAt(19));
                this.m_n26 = (this.getChildAt(20));
                this.m_n27 = (this.getChildAt(21));
                this.m_n28 = (this.getChildAt(22));
                this.m_n29 = (this.getChildAt(23));
                this.m_n30 = (this.getChildAt(24));
                this.m_n31 = (this.getChildAt(25));
                this.m_n32 = (this.getChildAt(26));
                this.m_n33 = (this.getChildAt(27));
                this.m_n34 = (this.getChildAt(28));
                this.m_n35 = (this.getChildAt(29));
                this.m_n36 = (this.getChildAt(30));
                this.m_n37 = (this.getChildAt(31));
                this.m_n38 = (this.getChildAt(32));
                this.m_n39 = (this.getChildAt(33));
                this.m_n40 = (this.getChildAt(34));
                this.m_n41 = (this.getChildAt(35));
                this.m_n42 = (this.getChildAt(36));
                this.m_n43 = (this.getChildAt(37));
                this.m_n44 = (this.getChildAt(38));
                this.m_n45 = (this.getChildAt(39));
                this.m_n46 = (this.getChildAt(40));
                this.m_n47 = (this.getChildAt(41));
                this.m_n48 = (this.getChildAt(42));
                this.m_n49 = (this.getChildAt(43));
                this.m_n50 = (this.getChildAt(44));
                this.m_n51 = (this.getChildAt(45));
                this.m_n52 = (this.getChildAt(46));
                this.m_n53 = (this.getChildAt(47));
                this.m_n54 = (this.getChildAt(48));
                this.m_n55 = (this.getChildAt(49));
                this.m_n56 = (this.getChildAt(50));
                this.m_n57 = (this.getChildAt(51));
            };
            FUI_gmKeys.URL = "ui://8oy4o0mbl3ii3u";
            return FUI_gmKeys;
        }(fairygui.GComponent));
        Game.FUI_gmKeys = FUI_gmKeys;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_gmSubmit = /** @class */ (function (_super) {
            __extends(FUI_gmSubmit, _super);
            function FUI_gmSubmit() {
                return _super.call(this) || this;
            }
            FUI_gmSubmit.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "gmSubmit"));
            };
            FUI_gmSubmit.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n3 = (this.getChildAt(0));
                this.m_n4 = (this.getChildAt(1));
            };
            FUI_gmSubmit.URL = "ui://8oy4o0mbo4403a";
            return FUI_gmSubmit;
        }(fairygui.GButton));
        Game.FUI_gmSubmit = FUI_gmSubmit;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_hallBg_h = /** @class */ (function (_super) {
            __extends(FUI_hallBg_h, _super);
            function FUI_hallBg_h() {
                return _super.call(this) || this;
            }
            FUI_hallBg_h.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "hallBg_h"));
            };
            FUI_hallBg_h.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
            };
            FUI_hallBg_h.URL = "ui://8oy4o0mbd832k";
            return FUI_hallBg_h;
        }(fairygui.GComponent));
        Game.FUI_hallBg_h = FUI_hallBg_h;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_hallBg_v = /** @class */ (function (_super) {
            __extends(FUI_hallBg_v, _super);
            function FUI_hallBg_v() {
                return _super.call(this) || this;
            }
            FUI_hallBg_v.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "hallBg_v"));
            };
            FUI_hallBg_v.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
            };
            FUI_hallBg_v.URL = "ui://8oy4o0mbd832m";
            return FUI_hallBg_v;
        }(fairygui.GComponent));
        Game.FUI_hallBg_v = FUI_hallBg_v;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_hall_help = /** @class */ (function (_super) {
            __extends(FUI_hall_help, _super);
            function FUI_hall_help() {
                return _super.call(this) || this;
            }
            FUI_hall_help.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "hall_help"));
            };
            FUI_hall_help.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n1 = (this.getChildAt(0));
            };
            FUI_hall_help.URL = "ui://8oy4o0mbd83226";
            return FUI_hall_help;
        }(fairygui.GButton));
        Game.FUI_hall_help = FUI_hall_help;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_hall_home = /** @class */ (function (_super) {
            __extends(FUI_hall_home, _super);
            function FUI_hall_home() {
                return _super.call(this) || this;
            }
            FUI_hall_home.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "hall_home"));
            };
            FUI_hall_home.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n4 = (this.getChildAt(0));
            };
            FUI_hall_home.URL = "ui://8oy4o0mbd83220";
            return FUI_hall_home;
        }(fairygui.GButton));
        Game.FUI_hall_home = FUI_hall_home;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_hall_rep = /** @class */ (function (_super) {
            __extends(FUI_hall_rep, _super);
            function FUI_hall_rep() {
                return _super.call(this) || this;
            }
            FUI_hall_rep.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "hall_rep"));
            };
            FUI_hall_rep.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n1 = (this.getChildAt(0));
            };
            FUI_hall_rep.URL = "ui://8oy4o0mbd83224";
            return FUI_hall_rep;
        }(fairygui.GButton));
        Game.FUI_hall_rep = FUI_hall_rep;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_hall_sound = /** @class */ (function (_super) {
            __extends(FUI_hall_sound, _super);
            function FUI_hall_sound() {
                return _super.call(this) || this;
            }
            FUI_hall_sound.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "hall_sound"));
            };
            FUI_hall_sound.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n1 = (this.getChildAt(0));
            };
            FUI_hall_sound.URL = "ui://8oy4o0mbd83228";
            return FUI_hall_sound;
        }(fairygui.GButton));
        Game.FUI_hall_sound = FUI_hall_sound;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_headItem = /** @class */ (function (_super) {
            __extends(FUI_headItem, _super);
            function FUI_headItem() {
                return _super.call(this) || this;
            }
            FUI_headItem.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "headItem"));
            };
            FUI_headItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n2 = (this.getChildAt(0));
                this.m_head = (this.getChildAt(1));
                this.m_n3 = (this.getChildAt(2));
            };
            FUI_headItem.URL = "ui://8oy4o0mbd83213";
            return FUI_headItem;
        }(fairygui.GButton));
        Game.FUI_headItem = FUI_headItem;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_item1 = /** @class */ (function (_super) {
            __extends(FUI_item1, _super);
            function FUI_item1() {
                return _super.call(this) || this;
            }
            FUI_item1.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "item1"));
            };
            FUI_item1.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n23 = (this.getChildAt(0));
                this.m_lang_name = (this.getChildAt(1));
                this.m_n30 = (this.getChildAt(2));
                this.m_lang_base = (this.getChildAt(3));
                this.m_antes1 = (this.getChildAt(4));
                this.m_lang_zhunru = (this.getChildAt(5));
                this.m_lowest1 = (this.getChildAt(6));
            };
            FUI_item1.URL = "ui://8oy4o0mbcsvz5";
            return FUI_item1;
        }(fairygui.GButton));
        Game.FUI_item1 = FUI_item1;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_item2 = /** @class */ (function (_super) {
            __extends(FUI_item2, _super);
            function FUI_item2() {
                return _super.call(this) || this;
            }
            FUI_item2.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "item2"));
            };
            FUI_item2.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n30 = (this.getChildAt(0));
                this.m_lang_name = (this.getChildAt(1));
                this.m_n31 = (this.getChildAt(2));
                this.m_lang_base = (this.getChildAt(3));
                this.m_antes2 = (this.getChildAt(4));
                this.m_lang_zhunru = (this.getChildAt(5));
                this.m_lowest2 = (this.getChildAt(6));
            };
            FUI_item2.URL = "ui://8oy4o0mbmtpmh";
            return FUI_item2;
        }(fairygui.GButton));
        Game.FUI_item2 = FUI_item2;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_item3 = /** @class */ (function (_super) {
            __extends(FUI_item3, _super);
            function FUI_item3() {
                return _super.call(this) || this;
            }
            FUI_item3.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "item3"));
            };
            FUI_item3.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n30 = (this.getChildAt(0));
                this.m_lang_name = (this.getChildAt(1));
                this.m_n31 = (this.getChildAt(2));
                this.m_lang_base = (this.getChildAt(3));
                this.m_antes3 = (this.getChildAt(4));
                this.m_lang_zhunru = (this.getChildAt(5));
                this.m_lowest3 = (this.getChildAt(6));
            };
            FUI_item3.URL = "ui://8oy4o0mbmtpmi";
            return FUI_item3;
        }(fairygui.GButton));
        Game.FUI_item3 = FUI_item3;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_item4 = /** @class */ (function (_super) {
            __extends(FUI_item4, _super);
            function FUI_item4() {
                return _super.call(this) || this;
            }
            FUI_item4.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "item4"));
            };
            FUI_item4.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n30 = (this.getChildAt(0));
                this.m_lang_name = (this.getChildAt(1));
                this.m_n31 = (this.getChildAt(2));
                this.m_lang_base = (this.getChildAt(3));
                this.m_antes4 = (this.getChildAt(4));
                this.m_lang_zhunru = (this.getChildAt(5));
                this.m_lowest4 = (this.getChildAt(6));
            };
            FUI_item4.URL = "ui://8oy4o0mbmtpmj";
            return FUI_item4;
        }(fairygui.GButton));
        Game.FUI_item4 = FUI_item4;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_leaveRoom = /** @class */ (function (_super) {
            __extends(FUI_leaveRoom, _super);
            function FUI_leaveRoom() {
                return _super.call(this) || this;
            }
            FUI_leaveRoom.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "leaveRoom"));
            };
            FUI_leaveRoom.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n8 = (this.getChildAt(0));
                this.m_tips = (this.getChildAt(1));
                this.m_sure = (this.getChildAt(2));
                this.m_cancle = (this.getChildAt(3));
            };
            FUI_leaveRoom.URL = "ui://8oy4o0mbo4403n";
            return FUI_leaveRoom;
        }(fairygui.GComponent));
        Game.FUI_leaveRoom = FUI_leaveRoom;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_logo = /** @class */ (function (_super) {
            __extends(FUI_logo, _super);
            function FUI_logo() {
                return _super.call(this) || this;
            }
            FUI_logo.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "logo"));
            };
            FUI_logo.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_lang_logo = (this.getChildAt(0));
            };
            FUI_logo.URL = "ui://8oy4o0mbo4403t";
            return FUI_logo;
        }(fairygui.GComponent));
        Game.FUI_logo = FUI_logo;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_menu = /** @class */ (function (_super) {
            __extends(FUI_menu, _super);
            function FUI_menu() {
                return _super.call(this) || this;
            }
            FUI_menu.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "menu"));
            };
            FUI_menu.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_ctr = this.getControllerAt(0);
                this.m_n12 = (this.getChildAt(0));
                this.m_n8 = (this.getChildAt(1));
                this.m_n10 = (this.getChildAt(2));
                this.m_n9 = (this.getChildAt(3));
                this.m_on = (this.getChildAt(4));
                this.m_off = (this.getChildAt(5));
                this.m_n18 = (this.getChildAt(6));
                this.m_n19 = (this.getChildAt(7));
                this.m_n20 = (this.getChildAt(8));
                this.m_n21 = (this.getChildAt(9));
                this.m_n22 = (this.getChildAt(10));
            };
            FUI_menu.URL = "ui://8oy4o0mbd8321z";
            return FUI_menu;
        }(fairygui.GComponent));
        Game.FUI_menu = FUI_menu;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_musicBtn = /** @class */ (function (_super) {
            __extends(FUI_musicBtn, _super);
            function FUI_musicBtn() {
                return _super.call(this) || this;
            }
            FUI_musicBtn.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "musicBtn"));
            };
            FUI_musicBtn.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n3 = (this.getChildAt(0));
                this.m_n4 = (this.getChildAt(1));
            };
            FUI_musicBtn.URL = "ui://8oy4o0mbd83232";
            return FUI_musicBtn;
        }(fairygui.GButton));
        Game.FUI_musicBtn = FUI_musicBtn;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_musicSlider = /** @class */ (function (_super) {
            __extends(FUI_musicSlider, _super);
            function FUI_musicSlider() {
                return _super.call(this) || this;
            }
            FUI_musicSlider.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "musicSlider"));
            };
            FUI_musicSlider.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
                this.m_bar = (this.getChildAt(1));
                this.m_grip = (this.getChildAt(2));
            };
            FUI_musicSlider.URL = "ui://8oy4o0mbd8322x";
            return FUI_musicSlider;
        }(fairygui.GSlider));
        Game.FUI_musicSlider = FUI_musicSlider;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_musicSlider_grip = /** @class */ (function (_super) {
            __extends(FUI_musicSlider_grip, _super);
            function FUI_musicSlider_grip() {
                return _super.call(this) || this;
            }
            FUI_musicSlider_grip.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "musicSlider_grip"));
            };
            FUI_musicSlider_grip.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n0 = (this.getChildAt(0));
            };
            FUI_musicSlider_grip.URL = "ui://8oy4o0mbd83230";
            return FUI_musicSlider_grip;
        }(fairygui.GButton));
        Game.FUI_musicSlider_grip = FUI_musicSlider_grip;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_player = /** @class */ (function (_super) {
            __extends(FUI_player, _super);
            function FUI_player() {
                return _super.call(this) || this;
            }
            FUI_player.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "player"));
            };
            FUI_player.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_card1 = (this.getChildAt(0));
                this.m_card2 = (this.getChildAt(1));
                this.m_card3 = (this.getChildAt(2));
                this.m_card4 = (this.getChildAt(3));
                this.m_card5 = (this.getChildAt(4));
                this.m_set = (this.getChildAt(5));
            };
            FUI_player.URL = "ui://8oy4o0mbo44039";
            return FUI_player;
        }(fairygui.GComponent));
        Game.FUI_player = FUI_player;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_reconnect = /** @class */ (function (_super) {
            __extends(FUI_reconnect, _super);
            function FUI_reconnect() {
                return _super.call(this) || this;
            }
            FUI_reconnect.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "reconnect"));
            };
            FUI_reconnect.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
                this.m_lang_title = (this.getChildAt(1));
                this.m_tips = (this.getChildAt(2));
                this.m_reconnect = (this.getChildAt(3));
                this.m_return = (this.getChildAt(4));
            };
            FUI_reconnect.URL = "ui://8oy4o0mbo4403b";
            return FUI_reconnect;
        }(fairygui.GComponent));
        Game.FUI_reconnect = FUI_reconnect;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_reconnectCircle = /** @class */ (function (_super) {
            __extends(FUI_reconnectCircle, _super);
            function FUI_reconnectCircle() {
                return _super.call(this) || this;
            }
            FUI_reconnectCircle.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "reconnectCircle"));
            };
            FUI_reconnectCircle.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_lang_1 = (this.getChildAt(0));
                this.m_circle = (this.getChildAt(1));
                this.m_t0 = this.getTransitionAt(0);
            };
            FUI_reconnectCircle.URL = "ui://8oy4o0mbo4403h";
            return FUI_reconnectCircle;
        }(fairygui.GComponent));
        Game.FUI_reconnectCircle = FUI_reconnectCircle;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_Roomitems = /** @class */ (function (_super) {
            __extends(FUI_Roomitems, _super);
            function FUI_Roomitems() {
                return _super.call(this) || this;
            }
            FUI_Roomitems.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "Roomitems"));
            };
            FUI_Roomitems.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_h_v = this.getControllerAt(0);
                this.m_item1 = (this.getChildAt(0));
                this.m_item2 = (this.getChildAt(1));
                this.m_item3 = (this.getChildAt(2));
                this.m_item4 = (this.getChildAt(3));
            };
            FUI_Roomitems.URL = "ui://8oy4o0mbcsvz9";
            return FUI_Roomitems;
        }(fairygui.GComponent));
        Game.FUI_Roomitems = FUI_Roomitems;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_room_help = /** @class */ (function (_super) {
            __extends(FUI_room_help, _super);
            function FUI_room_help() {
                return _super.call(this) || this;
            }
            FUI_room_help.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "room_help"));
            };
            FUI_room_help.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n3 = (this.getChildAt(0));
                this.m_lang_option = (this.getChildAt(1));
            };
            FUI_room_help.URL = "ui://8oy4o0mbd8322p";
            return FUI_room_help;
        }(fairygui.GButton));
        Game.FUI_room_help = FUI_room_help;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_room_home = /** @class */ (function (_super) {
            __extends(FUI_room_home, _super);
            function FUI_room_home() {
                return _super.call(this) || this;
            }
            FUI_room_home.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "room_home"));
            };
            FUI_room_home.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n3 = (this.getChildAt(0));
                this.m_lang_option = (this.getChildAt(1));
            };
            FUI_room_home.URL = "ui://8oy4o0mbd8322t";
            return FUI_room_home;
        }(fairygui.GButton));
        Game.FUI_room_home = FUI_room_home;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_room_rep = /** @class */ (function (_super) {
            __extends(FUI_room_rep, _super);
            function FUI_room_rep() {
                return _super.call(this) || this;
            }
            FUI_room_rep.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "room_rep"));
            };
            FUI_room_rep.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n3 = (this.getChildAt(0));
                this.m_lang_option = (this.getChildAt(1));
            };
            FUI_room_rep.URL = "ui://8oy4o0mbd8322s";
            return FUI_room_rep;
        }(fairygui.GButton));
        Game.FUI_room_rep = FUI_room_rep;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_room_sound = /** @class */ (function (_super) {
            __extends(FUI_room_sound, _super);
            function FUI_room_sound() {
                return _super.call(this) || this;
            }
            FUI_room_sound.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "room_sound"));
            };
            FUI_room_sound.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n3 = (this.getChildAt(0));
                this.m_lang_option = (this.getChildAt(1));
            };
            FUI_room_sound.URL = "ui://8oy4o0mbd8322u";
            return FUI_room_sound;
        }(fairygui.GButton));
        Game.FUI_room_sound = FUI_room_sound;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_saveHead = /** @class */ (function (_super) {
            __extends(FUI_saveHead, _super);
            function FUI_saveHead() {
                return _super.call(this) || this;
            }
            FUI_saveHead.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "saveHead"));
            };
            FUI_saveHead.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n7 = (this.getChildAt(0));
                this.m_lang_save = (this.getChildAt(1));
            };
            FUI_saveHead.URL = "ui://8oy4o0mbd83211";
            return FUI_saveHead;
        }(fairygui.GButton));
        Game.FUI_saveHead = FUI_saveHead;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_set = /** @class */ (function (_super) {
            __extends(FUI_set, _super);
            function FUI_set() {
                return _super.call(this) || this;
            }
            FUI_set.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "set"));
            };
            FUI_set.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
                this.m_lang_title = (this.getChildAt(1));
                this.m_lang_music = (this.getChildAt(2));
                this.m_slider_music = (this.getChildAt(3));
                this.m_slider_sound = (this.getChildAt(4));
                this.m_lang_sound = (this.getChildAt(5));
                this.m_btn_music = (this.getChildAt(6));
                this.m_btn_sound = (this.getChildAt(7));
                this.m_close = (this.getChildAt(8));
            };
            FUI_set.URL = "ui://8oy4o0mbd8322v";
            return FUI_set;
        }(fairygui.GComponent));
        Game.FUI_set = FUI_set;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_setGM = /** @class */ (function (_super) {
            __extends(FUI_setGM, _super);
            function FUI_setGM() {
                return _super.call(this) || this;
            }
            FUI_setGM.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "setGM"));
            };
            FUI_setGM.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n3 = (this.getChildAt(0));
                this.m_n4 = (this.getChildAt(1));
            };
            FUI_setGM.URL = "ui://8oy4o0mbl3ii3w";
            return FUI_setGM;
        }(fairygui.GButton));
        Game.FUI_setGM = FUI_setGM;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_sure = /** @class */ (function (_super) {
            __extends(FUI_sure, _super);
            function FUI_sure() {
                return _super.call(this) || this;
            }
            FUI_sure.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "sure"));
            };
            FUI_sure.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n3 = (this.getChildAt(0));
                this.m_lang_sure = (this.getChildAt(1));
            };
            FUI_sure.URL = "ui://8oy4o0mbo4403p";
            return FUI_sure;
        }(fairygui.GButton));
        Game.FUI_sure = FUI_sure;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var FUI_switch = /** @class */ (function (_super) {
            __extends(FUI_switch, _super);
            function FUI_switch() {
                return _super.call(this) || this;
            }
            FUI_switch.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "switch"));
            };
            FUI_switch.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n2 = (this.getChildAt(0));
            };
            FUI_switch.URL = "ui://8oy4o0mbd8322o";
            return FUI_switch;
        }(fairygui.GButton));
        Game.FUI_switch = FUI_switch;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var Game;
    (function (Game) {
        var GameBinder = /** @class */ (function () {
            function GameBinder() {
            }
            GameBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_item1.URL, Game.FUI_item1);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_Roomitems.URL, Game.FUI_Roomitems);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_saveHead.URL, Game.FUI_saveHead);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_headItem.URL, Game.FUI_headItem);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_close.URL, Game.FUI_close);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_menu.URL, Game.FUI_menu);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_hall_home.URL, Game.FUI_hall_home);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_hall_rep.URL, Game.FUI_hall_rep);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_hall_help.URL, Game.FUI_hall_help);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_hall_sound.URL, Game.FUI_hall_sound);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_switch.URL, Game.FUI_switch);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_room_help.URL, Game.FUI_room_help);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_room_rep.URL, Game.FUI_room_rep);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_room_home.URL, Game.FUI_room_home);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_room_sound.URL, Game.FUI_room_sound);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_set.URL, Game.FUI_set);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_musicSlider.URL, Game.FUI_musicSlider);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_musicSlider_grip.URL, Game.FUI_musicSlider_grip);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_musicBtn.URL, Game.FUI_musicBtn);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_hallBg_h.URL, Game.FUI_hallBg_h);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_hallBg_v.URL, Game.FUI_hallBg_v);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_brief.URL, Game.FUI_brief);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_briefPopup.URL, Game.FUI_briefPopup);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_gmKeys.URL, Game.FUI_gmKeys);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_setGM.URL, Game.FUI_setGM);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_AddWalletBtn.URL, Game.FUI_AddWalletBtn);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_item2.URL, Game.FUI_item2);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_item3.URL, Game.FUI_item3);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_item4.URL, Game.FUI_item4);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_gm.URL, Game.FUI_gm);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_player.URL, Game.FUI_player);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_gmSubmit.URL, Game.FUI_gmSubmit);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_reconnect.URL, Game.FUI_reconnect);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_btn_reconnect.URL, Game.FUI_btn_reconnect);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_btn_return.URL, Game.FUI_btn_return);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_reconnectCircle.URL, Game.FUI_reconnectCircle);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_leaveRoom.URL, Game.FUI_leaveRoom);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_sure.URL, Game.FUI_sure);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_cancle.URL, Game.FUI_cancle);
                fairygui.UIObjectFactory.setPackageItemExtension(Game.FUI_logo.URL, Game.FUI_logo);
            };
            return GameBinder;
        }());
        Game.GameBinder = GameBinder;
    })(Game = fui.Game || (fui.Game = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var help;
    (function (help) {
        var FUI_help = /** @class */ (function (_super) {
            __extends(FUI_help, _super);
            function FUI_help() {
                return _super.call(this) || this;
            }
            FUI_help.createInstance = function () {
                return (fairygui.UIPackage.createObject("help", "help"));
            };
            FUI_help.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n1 = (this.getChildAt(0));
                this.m_lang_title = (this.getChildAt(1));
                this.m_tab = (this.getChildAt(2));
                this.m_info = (this.getChildAt(3));
                this.m_close = (this.getChildAt(4));
            };
            FUI_help.URL = "ui://txmqgqddujig4";
            return FUI_help;
        }(fairygui.GComponent));
        help.FUI_help = FUI_help;
    })(help = fui.help || (fui.help = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var help;
    (function (help) {
        var FUI_help_info = /** @class */ (function (_super) {
            __extends(FUI_help_info, _super);
            function FUI_help_info() {
                return _super.call(this) || this;
            }
            FUI_help_info.createInstance = function () {
                return (fairygui.UIPackage.createObject("help", "help_info"));
            };
            FUI_help_info.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_lang_info = (this.getChildAt(0));
            };
            FUI_help_info.URL = "ui://txmqgqddujig6";
            return FUI_help_info;
        }(fairygui.GComponent));
        help.FUI_help_info = FUI_help_info;
    })(help = fui.help || (fui.help = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var help;
    (function (help) {
        var FUI_help_tab = /** @class */ (function (_super) {
            __extends(FUI_help_tab, _super);
            function FUI_help_tab() {
                return _super.call(this) || this;
            }
            FUI_help_tab.createInstance = function () {
                return (fairygui.UIPackage.createObject("help", "help_tab"));
            };
            FUI_help_tab.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n6 = (this.getChildAt(0));
                this.m_n7 = (this.getChildAt(1));
                this.m_lang_tab = (this.getChildAt(2));
            };
            FUI_help_tab.URL = "ui://txmqgqddujig5";
            return FUI_help_tab;
        }(fairygui.GButton));
        help.FUI_help_tab = FUI_help_tab;
    })(help = fui.help || (fui.help = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var help;
    (function (help) {
        var helpBinder = /** @class */ (function () {
            function helpBinder() {
            }
            helpBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(help.FUI_help.URL, help.FUI_help);
                fairygui.UIObjectFactory.setPackageItemExtension(help.FUI_help_tab.URL, help.FUI_help_tab);
                fairygui.UIObjectFactory.setPackageItemExtension(help.FUI_help_info.URL, help.FUI_help_info);
            };
            return helpBinder;
        }());
        help.helpBinder = helpBinder;
    })(help = fui.help || (fui.help = {}));
})(fui || (fui = {}));
var point21;
(function (point21) {
    var MBtnPlay = /** @class */ (function () {
        function MBtnPlay() {
            this.isMouseDown = false;
            this.sliderHidden = true; //滑动条是否是隐藏状态
            this.currentBetPos = 3; //当前下注位置,默认在中间位置
            this.bet_max = 300; //最大注
            this.bet_min = 3; //最小注
            this.activyId = 0; //当前正在操作的牌（左中右）
        }
        MBtnPlay.prototype.requestGS = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var _a;
            (_a = bx.Framework).notify.apply(_a, [bx.GConst.n_gs_send].concat(params));
        };
        MBtnPlay.prototype.instanceView = function (v) {
            this.view = new point21.VBtnPlay(v);
            this.bindEvent();
        };
        //重置
        MBtnPlay.prototype.reset = function () {
            this.view.hide();
        };
        //设置底注 最大注 最小注
        MBtnPlay.prototype.setBaseBet = function (arr) {
            this.bet_max = arr[1] / 100;
            this.bet_min = arr[0] / 100;
            this.view.setBaseBet(this.bet_max, this.bet_min);
        };
        //绑定事件
        MBtnPlay.prototype.bindEvent = function () {
            var _view = this.view._view;
            _view.m_minBet.onClick(this, this.onClick_minBet);
            _view.m_maxBet.onClick(this, this.onClick_maxBet);
            _view.m_bet.onClick(this, this.onClick_bet);
            _view.m_continueBet.onClick(this, this.onClick_continueBet);
            _view.m_insurance.onClick(this, this.onClick_insurance);
            _view.m_insuranceNot.onClick(this, this.onClick_insuranceNot);
            _view.m_stopCard.onClick(this, this.onClick_stopCard);
            _view.m_needCard.onClick(this, this.onClick_needCard);
            _view.m_divideCard.onClick(this, this.onClick_divideCard);
            _view.m_double.onClick(this, this.onClick_double);
            _view.m_continueGame.onClick(this, this.onClick_continueGame);
            var slider = this.view._view.m_betSlider;
            slider.m_grip.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            slider.m_title.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            slider.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            slider.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
            slider.on(Laya.Event.MOUSE_OUT, this, this.mouseOut);
            slider.m_bg.onClick(this, this.mouseClick);
        };
        //进入某个行为集(0:下注类，1:要牌类，2：保险类，3：继续游戏)
        MBtnPlay.prototype.inStage = function (stage) {
            this.view.show(stage);
            if (stage === 0) {
                this.view.setSliderVisible(false);
                this.sliderHidden = true;
                this.currentBetPos = 3;
                this.showAsBetComplete = false;
                if (!this.view.betValue || point21.MRoom.selfMoney < this.view.betValue)
                    this.view.btnUnable('continueBet');
                this.view.setContinueBetContent(0);
            }
            else if (stage == 1) {
                if (this.card1 && (this.card1 % 16 == this.card2 % 16) && (this.activyId == 0)) {
                    this.view.btnEnable('divideCard');
                }
                else {
                    this.view.btnUnable('divideCard');
                }
                if (point21.MRoom.selfMoney < this.view.betValue) {
                    this.view.btnUnable('divideCard');
                    this.view.btnUnable('double');
                }
            }
        };
        //设置cards
        MBtnPlay.prototype.setCards = function (pos) {
            for (var _i = 0, _a = point21.MRoom.cards; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.pos == pos) {
                    this.card1 = item.value[0];
                    this.card2 = item.value[1];
                }
            }
        };
        //按下
        MBtnPlay.prototype.mouseDown = function () {
            Laya.Mouse.cursor = 'pointer';
            this.isMouseDown = true;
            this.view.getMouseRange();
        };
        //移动
        MBtnPlay.prototype.mouseMove = function (e) {
            if (this.isMouseDown) {
                this.view.setSliderOnBet();
            }
        };
        //抬起
        MBtnPlay.prototype.mouseUp = function () {
            Laya.Mouse.cursor = 'default';
            this.isMouseDown = false;
        };
        //移出
        MBtnPlay.prototype.mouseOut = function () {
            Laya.Mouse.cursor = 'default';
            this.isMouseDown = false;
        };
        //点击
        MBtnPlay.prototype.mouseClick = function () {
            this.view.onClickSlider();
        };
        //点击下注按钮
        MBtnPlay.prototype.onClick_bet = function () {
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            if (this.sliderHidden) {
                this.view.setSliderVisible(true);
                this.sliderHidden = false;
                this.view.betValue = this.bet_min;
                this.view.setMaxOrMin(0);
            }
            else {
                this.bet_req();
            }
        };
        //发起下注请求
        MBtnPlay.prototype.bet_req = function () {
            var req = {};
            req.op = (this.currentBetPos === 3) ? 1 : 2;
            req.value = [this.view.betValue * 100];
            if (this.currentBetPos != 3)
                req.value.unshift(point21.MRoom.getIdOnSever(this.currentBetPos));
            this.requestGS(protos.CCMD.userOperationReq, req);
        };
        //确定下注 响应
        MBtnPlay.prototype.resp_bet = function () {
            this.view.setSliderVisible(false);
            this.sliderHidden = true;
            this.view.btnEnable('continueBet');
            this.showAsBetComplete = true;
            this.view.setContinueBetContent(1);
            this.afterBet();
        };
        //点击最小注按钮
        MBtnPlay.prototype.onClick_minBet = function () {
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            this.view.betValue = this.bet_min;
            this.view.setMaxOrMin(0);
            this.bet_req();
        };
        //点击最大注按钮
        MBtnPlay.prototype.onClick_maxBet = function () {
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            this.view.betValue = this.bet_max;
            this.view.setMaxOrMin(1);
            this.bet_req();
        };
        //点击续压
        MBtnPlay.prototype.onClick_continueBet = function () {
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            if (!this.showAsBetComplete) {
                this.bet_req();
            }
            else {
                this.req_betComplete();
            }
        };
        //发送下注完成
        MBtnPlay.prototype.req_betComplete = function () {
            var req = {};
            req.op = 3;
            this.requestGS(protos.CCMD.userOperationReq, req);
        };
        //下注后状态改变 前三个变灰
        MBtnPlay.prototype.afterBet = function () {
            this.view.btnUnable('minBet');
            this.view.btnUnable('maxBet');
            this.view.btnUnable('bet');
        };
        //下注前 状态恢复
        MBtnPlay.prototype.beforeBet = function () {
            this.view.btnEnable('minBet');
            this.view.btnEnable('maxBet');
            this.view.btnEnable('bet');
        };
        //点击买保险按钮
        MBtnPlay.prototype.onClick_insurance = function () {
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            var req = {};
            req.op = 4;
            req.value = [this.activyPos];
            this.requestGS(protos.CCMD.userOperationReq, req);
        };
        //点击不买保险按钮
        MBtnPlay.prototype.onClick_insuranceNot = function () {
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            var req = {};
            req.op = 5;
            req.value = [this.activyPos];
            this.requestGS(protos.CCMD.userOperationReq, req);
        };
        //点击停牌
        MBtnPlay.prototype.onClick_stopCard = function () {
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            var req = {};
            req.op = 9;
            req.value = [this.activyPos, this.activyId];
            this.requestGS(protos.CCMD.userOperationReq, req);
        };
        //点击要牌
        MBtnPlay.prototype.onClick_needCard = function () {
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            var req = {};
            req.op = 8;
            req.value = [this.activyPos, this.activyId];
            this.requestGS(protos.CCMD.userOperationReq, req);
        };
        //要牌响应
        MBtnPlay.prototype.resp_needCard = function () {
            this.view.btnUnable('divideCard');
            this.view.btnUnable('double');
        };
        //点击分牌
        MBtnPlay.prototype.onClick_divideCard = function () {
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            var req = {};
            req.op = 7;
            req.value = [this.activyPos, this.activyId];
            this.requestGS(protos.CCMD.userOperationReq, req);
        };
        //点击双倍
        MBtnPlay.prototype.onClick_double = function () {
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            var req = {};
            req.op = 6;
            req.value = [this.activyPos, this.activyId];
            this.requestGS(protos.CCMD.userOperationReq, req);
        };
        //点击继续游戏
        MBtnPlay.prototype.onClick_continueGame = function () {
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            bx.Framework.notify(bx.GConst.n_set_room_type, this.roomType);
            bx.Framework.notify(bx.GConst.n_click_continue_game_btn);
        };
        //隐藏视图
        MBtnPlay.prototype.hideView = function () {
            this.view.hide();
        };
        MBtnPlay.prototype.layout = function () {
            if (bx.Stage.getStage().isLandscape) {
                this.view._view.m_h_v.selectedIndex = 0;
            }
            else {
                this.view._view.m_h_v.selectedIndex = 1;
            }
        };
        return MBtnPlay;
    }());
    point21.MBtnPlay = MBtnPlay;
})(point21 || (point21 = {}));
var xys;
(function (xys) {
    var MGM = /** @class */ (function (_super) {
        __extends(MGM, _super);
        function MGM() {
            var _this = _super.call(this) || this;
            _this.view = null;
            _this.roomType = 0;
            _this.view = new xys.VGM();
            _this.bindEvent();
            return _this;
        }
        MGM.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this.addNotices(bx.GConst.n_screen_layout, bx.GConst.n_click_gm_btn, protos.CCMD.gmResp);
        };
        MGM.prototype.onUnregister = function () {
            _super.prototype.onUnregister.call(this);
        };
        MGM.prototype.onNotice = function (notice, data) {
            _super.prototype.onNotice.call(this, notice, data);
            switch (notice) {
                case bx.GConst.n_screen_layout:
                    this.layout();
                    break;
                case bx.GConst.n_click_gm_btn:
                    this.show();
                    break;
                case protos.CCMD.gmResp:
                    this.submit_resp(data[0]);
                    break;
            }
        };
        /**
         * 显示
        */
        MGM.prototype.show = function () {
            if (!bx.MSubLoad.hasLoaded(bx.FRoom.RES_NAME)) {
                this.notify(bx.GConst.n_to_room_state);
            }
            this.view.reset();
            this.stage.layerAddChild(this.view, bx.GLayer.popup);
            this.layout();
        };
        /**
         * 隐藏
        */
        MGM.prototype.hide = function () {
            this.stage.layerRemoveChild(this.view);
        };
        /**
         * 事件绑定
        */
        MGM.prototype.bindEvent = function () {
            this.view.btn_close.onClick(this, this.hide);
            this.view.btn_submit.onClick(this, this.submit_req);
        };
        /**
         * 提交_请求
        */
        MGM.prototype.submit_req = function () {
            var roomType = this.view.getRoomType(), playerNumb = this.view.getPlayerNumb(), cards = this.view.getCards();
            var req = {};
            req.roomType = roomType;
            req.playerNum = playerNumb;
            req.cardsList = cards;
            this.requestGS(protos.CCMD.gmReq, req);
            this.roomType = roomType;
        };
        /**
         * 提交_响应
        */
        MGM.prototype.submit_resp = function (res) {
            if (res.result == 1) {
                this.hide();
                this.notify(bx.GConst.n_to_room_state);
                this.notify(bx.GConst.n_room_items_click, this.roomType);
            }
            else {
                alert('提交失败！');
            }
        };
        MGM.prototype.layout = function () {
            this.view.x = bx.Align.center;
            this.view.y = bx.Align.middle;
            this.view.marginTop = "15%";
            this.view.marginBottom = "15%";
            this.view.marginLeft = "10%";
            this.view.marginRight = "10%";
            this.view.scaleMode = bx.ScaleMode.show_all;
        };
        __decorate([
            bx.$singleton("bx.Stage")
        ], MGM.prototype, "stage", void 0);
        return MGM;
    }(bx.Framework));
    xys.MGM = MGM;
})(xys || (xys = {}));
var point21;
(function (point21) {
    var MMarquee = /** @class */ (function (_super) {
        __extends(MMarquee, _super);
        function MMarquee() {
            return _super.call(this) || this;
        }
        MMarquee.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this.addNotices(protos.CMD.bcast_msg_resp);
        };
        MMarquee.prototype.onUnregister = function () { _super.prototype.onUnregister.call(this); };
        MMarquee.prototype.onNotice = function (notice, data) {
            _super.prototype.onNotice.call(this, notice, data);
            switch (notice) {
                case protos.CMD.bcast_msg_resp:
                    this.showMarquee(data[0]);
                    break;
            }
        };
        MMarquee.prototype.showMarquee = function (res) {
            var data = res.msg;
            var word;
            var name = data.content[0].chars, room = data.content[1].number, value = data.content[2].number;
            switch (room) {
                case 1:
                    room = bx.GData.getLanguage('201322');
                    break;
                case 2:
                    room = bx.GData.getLanguage('201323');
                    break;
                case 3:
                    room = bx.GData.getLanguage('201324');
                    break;
                case 4:
                    room = bx.GData.getLanguage('201325');
                    break;
            }
            if (data.id == 1) { //牌型跑马灯
                switch (value) {
                    case 3:
                        value = bx.GData.getLanguage('201320');
                        break;
                    case 4:
                        value = bx.GData.getLanguage('201321');
                        break;
                }
                word = bx.GData.getLanguage('201318').replace('${name}', name).replace('${room}', room).replace('${value}', value);
            }
            else if (data.id == 2) { //金币跑马灯
                value = bx.GData.formatNumber(value) + bx.GData.getLanguage('201319');
                word = bx.GData.getLanguage('201326').replace('${name}', name).replace('${room}', room).replace('${value}', value);
            }
            bx.Framework.notify(bx.GConst.n_broadcast_show, word);
        };
        return MMarquee;
    }(bx.Framework));
    point21.MMarquee = MMarquee;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    var MPlayer = /** @class */ (function () {
        function MPlayer() {
            this.views = [];
        }
        MPlayer.prototype.instanceView = function (v) {
            var item;
            for (var i = 0; i < v.length; i++) {
                item = new point21.VPlayer(v[i], i);
                this.views.push(item);
            }
        };
        //重置
        MPlayer.prototype.reset = function () {
            for (var i = 0; i < this.views.length; i++) {
                this.views[i].hide();
            }
        };
        //重连 房间信息
        MPlayer.prototype.recRoomInfo = function (res) {
            var index;
            for (var i = 0; i < res.length; i++) {
                index = point21.MRoom.getSeatId(res[i].pos);
                this.views[index - 1].setPlayer(res[i]);
            }
        };
        //设置玩家信息并显示
        MPlayer.prototype.setPlayerInfo = function (data) {
            var index;
            for (var i = 0; i < data.length; i++) {
                index = point21.MRoom.getSeatId(data[i].pos);
                this.views[index - 1].setPlayer(data[i]);
            }
        };
        //进入阶段,开始倒计时
        MPlayer.prototype.startAllClock = function (time) {
            for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
                var item = _a[_i];
                item.timeCircleStart(time);
            }
        };
        //轮到玩家操作
        MPlayer.prototype.startClock = function (id, time) {
            this.views[id - 1].timeCircleStart(time);
        };
        //结束玩家操作计时
        MPlayer.prototype.stopClock = function (id) {
            this.views[id - 1].timeCircleEnd();
        };
        //说话
        MPlayer.prototype.talk = function (pos, content) {
            this.views[pos - 1].setTalkingVisible(true, content);
        };
        //设置金币余额
        MPlayer.prototype.setCoin = function (pos, value) {
            this.views[pos - 1].setCoin(value);
        };
        return MPlayer;
    }());
    point21.MPlayer = MPlayer;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    var MPlayerArea = /** @class */ (function () {
        function MPlayerArea() {
            this.views = []; //玩家区域的视图，从左到右，依次push,最开始一个是庄家
            this.optionSeat = []; //除了自己外还可以选择的位置
            this.selecting = -1; //除了自己 正选中的座位
        }
        MPlayerArea.prototype.instanceView = function (v, roomView) {
            var item;
            for (var i = 0; i < v.length; i++) {
                item = new point21.VPlayerArea(v[i], i);
                this.views.push(item);
                item.init(roomView);
                if (i != 0) {
                    item._view.m_chipArea.onClick(this, function (item, i) {
                        if (item.canClick) {
                            for (var j = 0; j < this.optionSeat.length; j++) {
                                var n = point21.MRoom.getSeatId(this.optionSeat[j]);
                                this.views[n].setTipsToBetVisible(true);
                            }
                            this.views[i].setTipsToBetVisible(false);
                            this.selecting = i;
                            bx.Framework.notify(point21.GConst.n_newPosToBet, i);
                        }
                    }, [item, i]);
                }
            }
            var player5 = this.views[5]._view;
            var index5 = player5.getChildIndex(player5.m_chipsList2);
            player5.setChildIndex(player5.m_chipsList1, index5 + 1);
            this.layout();
        };
        //重置
        MPlayerArea.prototype.reset = function () {
            this.selecting = -1;
            for (var i = 0; i < this.views.length; i++) {
                this.views[i].reset();
            }
        };
        //重连时恢复牌信息
        MPlayerArea.prototype.recCardsList = function (data) {
            var pos, cards, cardType, anteChips, maxSum, minSum, whichOne;
            for (var i = 0; i < data.length; i++) {
                pos = point21.MRoom.getSeatId(data[i].pos);
                cards = data[i].cards;
                cardType = data[i].cardType;
                anteChips = data[i].anteChips;
                maxSum = data[i].maxSum;
                minSum = data[i].minSum;
                whichOne = data[i].whichOne;
                //保存头两张牌
                var obj = { pos: pos, value: [cards[0], cards[1]] };
                point21.MRoom.cards.push(obj);
                if (pos !== 0 && whichOne !== 0)
                    this.views[pos]._view.m_fen.selectedIndex = 1;
                for (var j = 0; j < cards.length; j++) {
                    var card = this.getNewCard(pos, whichOne);
                    card.m_card.url = point21.Utils.getCardImg(cards[j]);
                }
                this.views[pos].setCardAndPoint(cardType, false, whichOne, minSum, maxSum);
                anteChips && this.views[pos].getChipListChildren(point21.Utils.formatChips(anteChips), true, whichOne);
                anteChips && this.views[pos].setChip(point21.Utils.formatChips(anteChips), whichOne);
            }
        };
        //获得该位置一号列表牌的状态（是否满了三张）
        MPlayerArea.prototype.firstListIsFull = function (pos, id) {
            if (pos === 0)
                return false;
            return this.views[pos]._view['m_cardsList' + id].m_list1.numChildren >= 3 ? true : false;
        };
        //获得新发的牌 pos：1~5   id：0/1/2
        MPlayerArea.prototype.getNewCard = function (pos, id) {
            if (id === void 0) { id = 0; }
            var index = this.firstListIsFull(pos, id) ? 2 : 1;
            return this.views[pos].addChildToList(id, index);
        };
        //发牌
        MPlayerArea.prototype.dealCard = function (seatId, data, type) {
            var card = this.getNewCard(seatId, data.whichOne);
            card.visible = false;
            this.views[seatId].dealCard(card, data, type);
        };
        //庄家暗牌翻牌
        MPlayerArea.prototype.turnBankerCard = function (card) {
            this.views[0].turnBankerCard(card);
        };
        //收牌
        MPlayerArea.prototype.recoverCards = function () {
            for (var i = 0; i < this.views.length; i++) {
                this.views[i].recoverCards();
            }
        };
        //分牌
        MPlayerArea.prototype.divideCard = function (data) {
            var card1, card2;
            var id = point21.MRoom.getSeatId(data[0]);
            for (var i = 0; i < point21.MRoom.cards.length; i++) {
                if (point21.MRoom.cards[i].pos == id) {
                    card1 = point21.MRoom.cards[i].value[0];
                    card2 = point21.MRoom.cards[i].value[1];
                }
            }
            var allBet = data[2] / 100;
            this.views[id].divideCard(card1, card2);
            this.views[id].setChip(allBet, 1);
            this.views[id].setChip(allBet, 2);
            this.views[id].getChipListChildren(allBet, true, 1);
            this.views[id].getChipListChildren(allBet, true, 2);
        };
        //轮到某位玩家 pos为0时 即隐藏所有位置的选中特效
        // turnOnePlayer(pos:number,id:number = 0):void{
        //     for(let item of this.views){
        //         item.ActivedMarkVisible(false);
        //     }
        //     if(pos === 0) return;
        //     this.views[pos].ActivedMarkVisible(true,id);
        // }
        //解除某个座位的激活状态
        // unActiveOnePlyaer(pos:number):void{
        //     this.views[pos].ActivedMarkVisible(false);
        // }
        //下注在自己位置
        MPlayerArea.prototype.bet = function (pos, data) {
            var valBet = data[0] / 100, allBet = data[1] / 100;
            this.views[pos].playerBet(valBet, pos, 0);
            this.views[pos].setChip(allBet);
        };
        //下注在其他位置
        MPlayerArea.prototype.betToOther = function (pos, data) {
            var toPos = point21.MRoom.getSeatId(data[0]), valBet = data[1] / 100, allBet = data[2] / 100;
            this.views[toPos].playerBet(valBet, pos, 0);
            this.views[toPos].setChip(allBet);
        };
        //加倍下注
        MPlayerArea.prototype.betDouble = function (pos, data) {
            var toPos = point21.MRoom.getSeatId(data[0]), id = data[1], valBet = data[2] / 100, allBet = data[3] / 100;
            this.views[toPos].playerBet(allBet, pos, id);
            this.views[toPos].setChip(allBet, id);
            Laya.timer.once(1200, this, function () {
                this.views[toPos].doubleSignVisible(true, id);
            });
        };
        //玩家买保险了
        MPlayerArea.prototype.buyInsurance = function (pos) {
            this.views[pos].insuranceSignVisible(true);
        };
        //筹码列表推向庄家
        MPlayerArea.prototype.chipListToBanker = function (pos, id) {
            this.views[pos].moveChipList(0, id);
        };
        //结算
        MPlayerArea.prototype.settlement = function (data) {
            var item, id, seat;
            for (var i = 0; i < data.length; i++) {
                item = data[i];
                for (var j = 0; j < item.result.length; j++) {
                    seat = item.result[j];
                    if (seat.balance < 0) {
                        id = point21.MRoom.getSeatId(seat.pos);
                        if (id == 3) {
                            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('win'));
                        }
                        this.views[id].moveChipList(0, seat.whichOne);
                    }
                }
            }
            Laya.timer.once(1000, this, function () {
                var item, id, seat, playerId;
                for (var i = 0; i < data.length; i++) {
                    item = data[i];
                    playerId = point21.MRoom.getSeatId(item.pos);
                    for (var j = 0; j < item.result.length; j++) {
                        seat = item.result[j];
                        if (seat.balance >= 0) {
                            id = point21.MRoom.getSeatId(seat.pos);
                            if (id == 3) {
                                SoundManager.instance.playSound(AssetsUtils.getSoundUrl('win'));
                            }
                            this.views[id].win(playerId, seat.balance, seat.whichOne);
                        }
                    }
                }
            });
        };
        //更新可下注的区域显示
        MPlayerArea.prototype.showCanBetTips = function (data) {
            var lostSelecting = true;
            var seatId;
            this.hideCanBetTips();
            for (var i = 0; i < data.length; i++) {
                seatId = point21.MRoom.getSeatId(data[i]);
                this.views[seatId].setTipsToBetVisible(true);
                if (seatId == this.selecting) {
                    this.views[seatId].setTipsToBetVisible(false);
                    lostSelecting = false;
                }
            }
            //如果选中的位置真的失去了 发送通知
            if (lostSelecting) {
                bx.Framework.notify(point21.GConst.n_lostSeat);
            }
        };
        //隐藏可下注区域 提示
        MPlayerArea.prototype.hideCanBetTips = function () {
            for (var i = 0; i < this.views.length; i++) {
                this.views[i].setTipsToBetVisible(false);
            }
        };
        MPlayerArea.prototype.layout = function () {
            if (this.views.length === 0)
                return;
            var skewX = [8, 0, 0, -18, 0], skewY = [0, -18, 0, 0, 12], rotate_view = [67, 44, 0, -28, -73];
            var rotate_chip = [-74, -30, 0, 35, 70];
            var target;
            for (var i = 1; i < this.views.length; i++) {
                target = this.views[i];
                if (bx.Stage.getStage().isLandscape) {
                    target._view.rotation = rotate_view[i - 1];
                    target._view.setSkew(skewX[i - 1], skewY[i - 1]);
                    target.setChipListRotation(rotate_chip[i - 1]);
                }
                else {
                    target.setChipListRotation(0);
                    target._view.setSkew(0, 0);
                    target._view.rotation = 0;
                }
            }
        };
        return MPlayerArea;
    }());
    point21.MPlayerArea = MPlayerArea;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    var MRoom = /** @class */ (function (_super) {
        __extends(MRoom, _super);
        function MRoom() {
            var _this = _super.call(this) || this;
            _this.dealDelay = 200; //发牌间隔时间
            _this.betCompleted = false; //下注完成标志
            return _this;
        }
        Object.defineProperty(MRoom.prototype, "viewBg", {
            get: function () {
                if (this._viewBg == null) {
                    this.mPlayerArea = new point21.MPlayerArea();
                    this.mBtnPlay = new point21.MBtnPlay();
                    this.mPlayer = new point21.MPlayer();
                    this._viewBg = new point21.VRoomBg();
                    this.view = new point21.VRoom();
                    this.popupMatch = new point21.VMatch();
                    this.strategyBtn = new point21.VStrategyBtn();
                }
                return this._viewBg;
            },
            enumerable: true,
            configurable: true
        });
        //由pos计算本地真实座位号
        MRoom.getSeatId = function (pos) {
            if (pos === 0)
                return 0;
            var id = pos - MRoom.gap;
            if (id < 1)
                id += 5;
            if (id > 5)
                id -= 5;
            return id;
        };
        //由真实座位号 倒推 在服务器上的座位号
        MRoom.getIdOnSever = function (seatId) {
            if (seatId != 0) {
                var id = seatId + this.gap;
                if (id < 1)
                    id += 5;
                if (id > 5)
                    id -= 5;
                return id;
            }
        };
        MRoom.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this.addNotices(point21.GConst.n_Vmanager_playerArea, point21.GConst.n_Vmanager_btnPlay, point21.GConst.n_Vmanager_player, bx.GConst.n_screen_layout, point21.GConst.n_addRoom, point21.GConst.n_removeRoom, bx.GConst.n_room_items_click, bx.GConst.n_room_continue_game, point21.GConst.n_newPosToBet, point21.GConst.n_hideBtns, point21.GConst.n_lostSeat, point21.GConst.n_selfMoneyChange, protos.CCMD.gamePush, protos.CCMD.playerInfoPush, protos.CCMD.userOperationResp, protos.CCMD.dealCardsInfo, protos.CCMD.gameSettlementPush, protos.CCMD.recRoomInfo, protos.CCMD.recAnteState, protos.CMD.cancel_match_resp, protos.CMD.chips_push, protos.CCMD.recDealCardsState, protos.CCMD.recBuyInsState, protos.CCMD.recRoleOpState, protos.CCMD.recBankerOpState);
        };
        MRoom.prototype.onUnregister = function () { _super.prototype.onUnregister.call(this); };
        MRoom.prototype.onNotice = function (notice, data) {
            _super.prototype.onNotice.call(this, notice, data);
            switch (notice) {
                //分配玩家区域的视图
                case point21.GConst.n_Vmanager_playerArea:
                    this.mPlayerArea.instanceView(data[0], data[1]);
                    break;
                //分配操作按钮的视图
                case point21.GConst.n_Vmanager_btnPlay:
                    this.mBtnPlay.instanceView(data[0]);
                    break;
                //分配玩家头像的视图
                case point21.GConst.n_Vmanager_player:
                    this.mPlayer.instanceView(data[0]);
                    break;
                //屏幕适配
                case bx.GConst.n_screen_layout:
                    this.layout();
                    break;
                //添加房间视图
                case point21.GConst.n_addRoom:
                    this.addView();
                    break;
                //移除房间视图
                case point21.GConst.n_removeRoom:
                    this.removeView();
                    break;
                //点击大厅房间选项按钮
                case bx.GConst.n_room_items_click:
                    this.mBtnPlay.roomType = data[0];
                    this.reset();
                    this.popupMatchVisible(true);
                    break;
                //继续游戏
                case bx.GConst.n_room_continue_game:
                    this.reset();
                    this.popupMatchVisible(true);
                    break;
                //通知本人要下注的其他位置
                case point21.GConst.n_newPosToBet:
                    this.mBtnPlay.inStage(0);
                    this.mBtnPlay.currentBetPos = data[0];
                    break;
                case point21.GConst.n_hideBtns:
                    this.mBtnPlay.hideView();
                    break;
                //失去想下注的其他位置
                case point21.GConst.n_lostSeat:
                    this.mBtnPlay.resp_bet();
                    break;
                //自己的余额改变了
                case point21.GConst.n_selfMoneyChange:
                    var coins = Math.floor(data[0] / 100);
                    MRoom.selfMoney = data[0] / 100;
                    if (coins < this.mBtnPlay.bet_max) {
                        this.mBtnPlay.bet_max = coins;
                    }
                    break;
                //游戏推送
                case protos.CCMD.gamePush:
                    this.gamePush(data[0]);
                    break;
                //玩家信息推送
                case protos.CCMD.playerInfoPush:
                    SoundManager.instance.playSound(AssetsUtils.getSoundUrl('start'));
                    this.popupMatchVisible(false);
                    this.getPlayerInfo(data[0]);
                    break;
                //按钮事件响应
                case protos.CCMD.userOperationResp:
                    this.userOperationResp(data[0]);
                    break;
                //发牌
                case protos.CCMD.dealCardsInfo:
                    this.dealCards(data[0]);
                    break;
                //结算
                case protos.CCMD.gameSettlementPush:
                    this.pushInsuranceToBanker();
                    this.mBtnPlay.hideView();
                    this.view.turnOffLight();
                    this.onGetResult(data[0]);
                    break;
                //断线重连，房间信息
                case protos.CCMD.recRoomInfo:
                    this.recRoomInfo(data[0]);
                    break;
                //断线重连 下注阶段
                case protos.CCMD.recAnteState:
                    this.recAnteState(data[0]);
                    break;
                //取消匹配
                case protos.CMD.cancel_match_resp:
                    this.popupMatchVisible(false);
                    this.mBtnPlay.inStage(3);
                    break;
                //更新玩家金币
                case protos.CMD.chips_push:
                    this.mPlayer.setCoin(3, data[0].chips);
                    break;
                //断线重连，发牌阶段
                case protos.CCMD.recDealCardsState:
                    this.recDealCardsState(data[0]);
                    break;
                //断线重连，保险阶段
                case protos.CCMD.recBuyInsState:
                    this.recBuyInsState(data[0]);
                    break;
                //断线重连，玩家操作阶段
                case protos.CCMD.recRoleOpState:
                    this.recRoleOpState(data[0]);
                    break;
                //断线重连，庄家操作阶段
                case protos.CCMD.recBankerOpState:
                    this.recBankerOpState(data[0]);
                    break;
            }
        };
        //游戏信息推送
        MRoom.prototype.gamePush = function (data) {
            var type = data.type, pos = MRoom.getSeatId(data.pos), value = data.value;
            switch (type) {
                case 1: //设置底注
                    this.mBtnPlay.setBaseBet(value);
                    break;
                case 2: //进入下注阶段
                    this.mPlayer.startAllClock(value[0]);
                    this.view.StartClock(value[0]);
                    break;
                case 3: //玩家可在原位置下注
                    this.mBtnPlay.inStage(0);
                    break;
                case 4: //玩家可下注的其他位置
                    if (value) {
                        if (!this.betCompleted) {
                            this.mPlayerArea.optionSeat = value;
                            this.mPlayerArea.showCanBetTips(value);
                        }
                    }
                    else {
                        this.mPlayerArea.hideCanBetTips();
                    }
                    break;
                case 5: //玩家在原位置下注了
                    this.mPlayerArea.bet(pos, value);
                    this.mPlayer.setCoin(pos, value[2]);
                    if (pos == 3) {
                        this.view.handAction(1);
                        this.mBtnPlay.view.betValue = value[0] / 100;
                    }
                    break;
                case 6: //玩家在其他位置下注了
                    var id = MRoom.getSeatId(value[0]);
                    this.mPlayerArea.betToOther(pos, value);
                    this.mPlayer.setCoin(pos, value[3]);
                    this.view.seatNameVisible(true, id, this.mPlayer.views[pos - 1].playerName);
                    if (pos == 3) {
                        this.mBtnPlay.view.betValue = value[1] / 100;
                        this.mPlayerArea.selecting = -1;
                        id < 3 ? this.view.handAction(2) : this.view.handAction(3);
                    }
                    break;
                case 7: //玩家完成下注
                    this.mPlayer.talk(pos, 4);
                    this.stopClock(pos);
                    if (pos == 3) {
                        this.betCompleted = true;
                        this.mBtnPlay.hideView();
                        this.mPlayerArea.hideCanBetTips();
                    }
                    break;
                case 8: //进入发牌阶段
                    this.mBtnPlay.hideView();
                    this.mPlayerArea.hideCanBetTips();
                    break;
                case 9: //进入买保险阶段
                    this.mPlayer.startAllClock(value[0]);
                    this.view.StartClock(value[0]);
                    break;
                case 10: //某个座位可以买保险了
                    if (value) {
                        if (pos == 3) {
                            this.mBtnPlay.inStage(2);
                            this.mBtnPlay.activyPos = value[0];
                            this.view.turnOnLightTo(value[0], 0);
                        }
                    }
                    else {
                        this.stopClock(pos);
                    }
                    break;
                case 11: //某座位买保险了
                    var seat = MRoom.getSeatId(value[0]);
                    this.view.betInsurance(value[1], pos, seat);
                    this.mPlayer.setCoin(pos, value[2]);
                    this.mPlayerArea.buyInsurance(seat);
                    this.stopClock(pos);
                    this.view.turnOffLight();
                    break;
                case 12: //某座位不买保险
                    this.view.turnOffLight();
                    break;
                case 13: //轮到某个座位操作
                    this.view.turnOnLightTo(value[0], value[1]);
                    if (pos == 3) {
                        SoundManager.instance.playSound(AssetsUtils.getSoundUrl('turnSelf'));
                        this.view.StartClock(value[2]);
                        this.mBtnPlay.activyPos = value[0];
                        this.mBtnPlay.activyId = value[1];
                        this.mBtnPlay.setCards(MRoom.getSeatId(value[0]));
                        this.mBtnPlay.inStage(1);
                    }
                    else {
                        SoundManager.instance.playSound(AssetsUtils.getSoundUrl('turnOther'));
                        this.mBtnPlay.hideView();
                        this.mPlayer.startClock(pos, value[2]);
                    }
                    break;
                case 14: //双倍
                    this.stopClock(pos);
                    this.mPlayer.talk(pos, 1);
                    this.mPlayerArea.betDouble(pos, value);
                    this.mPlayer.setCoin(pos, value[4]);
                    if (pos == 3) {
                        var id_1 = MRoom.getSeatId(value[0]);
                        if (id_1 < 3) {
                            this.view.handAction(2);
                        }
                        else if (id_1 > 3) {
                            this.view.handAction(3);
                        }
                        else {
                            this.view.handAction(1);
                        }
                    }
                    break;
                case 15: //暗牌不组成bj
                    this.pushInsuranceToBanker();
                    break;
                case 16: //庄家操作
                    this.mBtnPlay.hideView();
                    this.view.turnOffLight();
                    break;
                case 17: //分牌
                    this.mPlayerArea.divideCard(value);
                    this.mPlayer.talk(pos, 0);
                    this.mPlayer.setCoin(pos, value[3]);
                    if (pos == 3) {
                        var id_2 = MRoom.getSeatId(value[0]);
                        if (id_2 < 3) {
                            this.view.handAction(2);
                        }
                        else if (id_2 > 3) {
                            this.view.handAction(3);
                        }
                        else {
                            this.view.handAction(1);
                        }
                    }
                    break;
                case 18: //要牌
                    this.mPlayer.talk(pos, 2);
                    break;
                case 19: //停牌
                    this.stopClock(pos);
                    if (pos == 3)
                        this.mBtnPlay.hideView();
                    this.mPlayer.talk(pos, 3);
                    break;
                case 20: //庄家暗牌
                    this.mPlayerArea.turnBankerCard(value);
                    break;
            }
        };
        //断线重连 房间信息
        MRoom.prototype.recRoomInfo = function (res) {
            this.reset();
            this.mBtnPlay.roomType = res.roomType;
            MRoom.gap = res.curPos - 3;
            this.mBtnPlay.setBaseBet(res.roomInfo);
            for (var i = 0; i < res.players.length; i++) {
                var player = res.players[i];
                var pos = MRoom.getSeatId(player.pos);
                this.view.setChipsVisible(true, pos);
                if (pos == 3) {
                    if (player.chips < res.roomInfo[1]) {
                        this.mBtnPlay.bet_max = Math.floor(player.chips / 100);
                    }
                }
            }
            this.mPlayer.recRoomInfo(res.players);
        };
        //断线重连 下注
        MRoom.prototype.recAnteState = function (res) {
            for (var _i = 0, _a = res.anteStatePosList; _i < _a.length; _i++) {
                var player = _a[_i];
                var pos = MRoom.getSeatId(player.originPos);
                if (player.state === 0) { //未完成下注状态
                    if (pos == 3) {
                        this.view.StartClock(res.timeLeft);
                        if (player.antePosList) { //自己原位置已经下注
                            this.mBtnPlay.inStage(0);
                            this.mPlayerArea.showCanBetTips(res.emptyPosList);
                        }
                        else { //原位置未下注
                            this.mBtnPlay.inStage(0);
                        }
                    }
                    else {
                        this.mPlayer.startClock(pos, res.timeLeft);
                    }
                }
                if (player.antePosList) {
                    for (var _b = 0, _c = player.antePosList; _b < _c.length; _b++) {
                        var seat = _c[_b];
                        var id = MRoom.getSeatId(seat.pos);
                        this.mPlayerArea.views[id].getChipListChildren(seat.ante, true, 0);
                        this.mPlayerArea.views[id].setChip(point21.Utils.formatChips(seat.ante), 0);
                    }
                }
            }
        };
        //重连 发牌阶段
        MRoom.prototype.recDealCardsState = function (res) {
            this.mPlayerArea.recCardsList(res.cardsList);
        };
        //重连 保险阶段
        MRoom.prototype.recBuyInsState = function (res) {
            this.mPlayerArea.recCardsList(res.cardsList);
            var players = res.insPosList;
            for (var i = 0; i < players.length; i++) {
                if (players[i].active > 0) {
                    var pos = MRoom.getSeatId(players[i].pos);
                    if (pos == 3) {
                        this.view.StartClock(res.timeLeft);
                        this.mBtnPlay.inStage(2);
                        this.mBtnPlay.activyPos = players[i].active;
                        this.view.turnOnLightTo(players[i].active, 0);
                    }
                    else {
                        this.mPlayer.startClock(pos, res.timeLeft);
                    }
                }
                var seats = players[i].insPos;
                for (var j = 0; j < seats.length; j++) {
                    this.view.addChildToInsuranceList(MRoom.getSeatId(seats[j].pos), seats[j].insAnteChips, true);
                }
            }
        };
        //重连 玩家操作阶段
        MRoom.prototype.recRoleOpState = function (res) {
            this.mPlayerArea.recCardsList(res.cardsList);
            var pos = MRoom.getSeatId(res.opOriginPos);
            //本人
            if (pos == 3) {
                this.view.StartClock(res.timeLeft);
                this.mBtnPlay.activyPos = res.opPos;
                this.mBtnPlay.activyId = res.opWhichOne;
                this.mBtnPlay.setCards(MRoom.getSeatId(res.opPos));
                this.mBtnPlay.inStage(1);
            }
            else {
                this.mPlayer.startClock(pos, res.timeLeft);
            }
            if (res.timeLeft > 0) {
                this.view.turnOnLightTo(res.opPos, res.opWhichOne);
            }
        };
        //重连 庄家阶段
        MRoom.prototype.recBankerOpState = function (res) {
            this.mPlayerArea.recCardsList(res.cardsList);
        };
        //获取到玩家信息
        MRoom.prototype.getPlayerInfo = function (res) {
            MRoom.gap = res.curPos - 3;
            for (var i = 0; i < res.playersInfo.length; i++) {
                var player = res.playersInfo[i];
                var pos = MRoom.getSeatId(player.pos);
                this.view.setChipsVisible(true, pos);
                if (pos == 3) {
                    if (player.chips < this.mBtnPlay.bet_max) {
                        this.mBtnPlay.bet_max = Math.floor(player.chips / 100);
                    }
                }
            }
            this.mPlayer.setPlayerInfo(res.playersInfo);
        };
        //按钮操作响应
        MRoom.prototype.userOperationResp = function (res) {
            if (res.result === 2) {
                console.log('操作失败！！！！！！');
                return;
            }
            ;
            switch (res.op) {
                case 1:
                    this.mBtnPlay.resp_bet();
                    break;
                case 2:
                    this.mBtnPlay.resp_bet();
                    break;
                case 3:
                    this.mBtnPlay.hideView();
                    break;
                case 4:
                    this.mBtnPlay.hideView();
                    break;
                case 5:
                    this.mBtnPlay.hideView();
                    break;
                case 6:
                    this.mBtnPlay.hideView();
                    break;
                case 7:
                    this.mBtnPlay.hideView();
                    break;
                case 8:
                    this.mBtnPlay.resp_needCard();
                    this.view.handAction(5);
                    break;
                case 9:
                    this.mBtnPlay.hideView();
                    this.view.handAction(4);
                    break;
            }
        };
        //添加视图到舞台
        MRoom.prototype.addView = function () {
            bx.Stage.getStage().layerAddChild(this.viewBg, bx.GLayer.scene);
            bx.Stage.getStage().layerAddChild(this.view, bx.GLayer.scene);
            bx.Stage.getStage().layerAddChild(this.strategyBtn, bx.GLayer.scene);
            SoundManager.instance.bgmUrls = AssetsUtils.getSoundUrl('bgm');
            this.layout();
        };
        //移除视图
        MRoom.prototype.removeView = function () {
            bx.Stage.getStage().layerRemoveChild(this.viewBg);
            bx.Stage.getStage().layerRemoveChild(this.view);
            bx.Stage.getStage().layerRemoveChild(this.strategyBtn);
        };
        //匹配框 状态
        MRoom.prototype.popupMatchVisible = function (state) {
            if (state) {
                bx.UIManager.popup(this.popupMatch, true);
                this.popupMatch.reset();
            }
            else {
                this.popupMatch.beforeClose();
                bx.UIManager.closePopup(this.popupMatch);
            }
        };
        //重置
        MRoom.prototype.reset = function () {
            this.betCompleted = false;
            this.view.reset();
            this.mPlayerArea.reset();
            this.mBtnPlay.reset();
            this.mPlayer.reset();
        };
        //处理发牌
        MRoom.prototype.dealCards = function (data) {
            var arr = data.cardsList;
            var sortfunc = function (a, b) {
                var v1 = MRoom.getSeatId(a['pos']);
                var v2 = MRoom.getSeatId(b['pos']);
                return v1 - v2;
            };
            arr.sort(sortfunc);
            var len = arr.length;
            if (arr[0].cards.length == 2) { //如果是开始的一次发两张牌,就发两轮
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var item = arr_1[_i];
                    var pos = MRoom.getSeatId(item.pos);
                    var obj = {
                        pos: pos,
                        value: [item.cards[0], item.cards[1]]
                    };
                    MRoom.cards.push(obj);
                }
                this.dealType = 1;
                this.dealOnce(arr);
                Laya.timer.once(len * this.dealDelay, this, function () {
                    this.dealType = 2;
                    this.dealOnce(arr);
                });
            }
            else {
                this.dealType = 0;
                this.dealOnce(arr);
            }
        };
        //发一轮牌 
        MRoom.prototype.dealOnce = function (list) {
            for (var i = 0; i < list.length; i++) {
                Laya.timer.once(this.dealDelay * i, this, this.deal, [list[i]], false);
            }
        };
        //发牌逻辑
        MRoom.prototype.deal = function (data) {
            var id = data.whichOne;
            var seatId = MRoom.getSeatId(data.pos);
            this.mPlayerArea.dealCard(seatId, data, this.dealType);
        };
        //收牌
        MRoom.prototype.recoverCards = function () {
            this.mPlayerArea.recoverCards();
        };
        //关闭定时器
        MRoom.prototype.stopClock = function (pos) {
            if (pos === 3) {
                this.view.stopClock();
            }
            else {
                this.mPlayer.stopClock(pos);
            }
        };
        //庄家收保险
        MRoom.prototype.pushInsuranceToBanker = function () {
            for (var i = 1; i < 6; i++) {
                this.view.pushInsuranceToBanker(i);
            }
        };
        //推送筹码到庄家
        MRoom.prototype.pushBetToBanker = function () {
            this.mPlayerArea.chipListToBanker(3, 0);
            //this.mPlayerArea.chipListToBanker(pos,id);
        };
        //收到结算消息
        MRoom.prototype.onGetResult = function (res) {
            var data = res.result;
            this.mPlayerArea.settlement(data);
            Laya.timer.once(2000, this, function () {
                for (var i = 0; i < data.length; i++) {
                    var pos = MRoom.getSeatId(data[i].pos);
                    this.view.showResult(pos, data[i].balance);
                    this.mPlayer.setCoin(pos, data[i].chips);
                    this.mBtnPlay.inStage(3);
                }
            });
        };
        //布局
        MRoom.prototype.layout = function () {
            if (this.view == null)
                return;
            this.mBtnPlay.layout();
            this.mPlayerArea.layout();
            this.viewBg.scaleMode = bx.ScaleMode.full;
            this.viewBg.x = bx.Align.center;
            this.viewBg.y = bx.Align.middle;
            this.view.scaleMode = bx.ScaleMode.show_all;
            this.view.x = bx.Align.center;
            this.view.y = bx.Align.middle;
            this.popupMatch.scaleMode = bx.ScaleMode.none;
            this.popupMatch.x = bx.Align.center;
            this.popupMatch.y = bx.Align.middle;
            this.strategyBtn.x = bx.Align.right;
            this.strategyBtn.y = bx.Align.top;
            if (bx.Stage.getStage().isLandscape) {
                this.view.width = 1920;
                this.view.height = 1080;
                this.view._view.m_h_v.selectedIndex = 0;
                this.viewBg._view.m_h_v.selectedIndex = 0;
                var index = this.view._view.m_lightCtl.selectedIndex;
                if (index > 15)
                    this.view._view.m_lightCtl.selectedIndex = index - 15;
            }
            else {
                this.view.width = 1080;
                this.view.height = 1920;
                this.view._view.m_h_v.selectedIndex = 1;
                this.viewBg._view.m_h_v.selectedIndex = 1;
                var index = this.view._view.m_lightCtl.selectedIndex;
                if (index < 15)
                    this.view._view.m_lightCtl.selectedIndex = index + 15;
            }
        };
        MRoom.gap = 0; //服务器的pos 与本地实际座位号(自己的永远是3)之差 即gap = 自己的pos - 3
        MRoom.cards = []; //保存本地座位的头两张牌
        return MRoom;
    }(bx.Framework));
    point21.MRoom = MRoom;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    var MStrategy = /** @class */ (function (_super) {
        __extends(MStrategy, _super);
        function MStrategy() {
            return _super.call(this) || this;
        }
        MStrategy.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this.addNotices(point21.GConst.n_openStrategy, bx.GConst.n_screen_layout);
        };
        MStrategy.prototype.onUnregister = function () { _super.prototype.onUnregister.call(this); };
        MStrategy.prototype.onNotice = function (notice, data) {
            _super.prototype.onNotice.call(this, notice, data);
            switch (notice) {
                case point21.GConst.n_openStrategy:
                    this.onShow();
                    break;
                case bx.GConst.n_screen_layout:
                    this.layout();
                    break;
            }
        };
        MStrategy.prototype.onShow = function () {
            bx.UIManager.popup(this.strategyView, true, true);
            this.layout();
        };
        MStrategy.prototype.onHide = function () {
            bx.UIManager.closePopup(this.strategyView);
        };
        MStrategy.prototype.onClickClose = function () {
            this.onHide();
        };
        MStrategy.prototype.layout = function () {
            if (!this.strategyView)
                return;
            this.strategyView.scaleMode = bx.ScaleMode.show_all;
            this.strategyView.x = bx.Align.center;
            this.strategyView.y = bx.Align.middle;
        };
        __decorate([
            bx.$singleton("bx.Stage")
        ], MStrategy.prototype, "stage", void 0);
        __decorate([
            bx.$singleton("point21.VStrategy")
        ], MStrategy.prototype, "strategyView", void 0);
        return MStrategy;
    }(bx.Framework));
    point21.MStrategy = MStrategy;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    /*
    *免转按钮模块
    */
    var MWalletBtn = /** @class */ (function (_super) {
        __extends(MWalletBtn, _super);
        function MWalletBtn() {
            return _super.call(this) || this;
        }
        MWalletBtn.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this.addNotices(point21.GConst.show_wallet_btn, point21.GConst.hide_wallet_btn, point21.GConst.set_wallet_btn, bx.GConst.n_login_success, bx.GConst.n_to_room_state, bx.GConst.n_to_hall_state, bx.GConst.n_screen_layout);
        };
        MWalletBtn.prototype.onUnregister = function () { _super.prototype.onUnregister.call(this); };
        MWalletBtn.prototype.onNotice = function (notice, data) {
            _super.prototype.onNotice.call(this, notice, data);
            switch (notice) {
                case point21.GConst.show_wallet_btn:
                    this.showWalletBtn();
                    break;
                case point21.GConst.hide_wallet_btn:
                    this.hideWalletBtn();
                    break;
                case point21.GConst.set_wallet_btn:
                    this.setWalletBtnPos(data[0]);
                    break;
                case bx.GConst.n_login_success:
                    this.showWalletBtn();
                    break;
                case bx.GConst.n_to_room_state:
                    this.hideWalletBtn();
                    break;
                case bx.GConst.n_to_hall_state:
                    this.showWalletBtn();
                    break;
                case bx.GConst.n_screen_layout:
                    this.layout();
                    break;
            }
        };
        MWalletBtn.prototype.setWalletBtnPos = function (type) {
        };
        MWalletBtn.prototype.hideWalletBtn = function () {
            if (this.view) {
                this.view._view.offClick(this, this.onClickBtn);
                bx.Stage.getStage().layerRemoveChild(this.view);
            }
        };
        MWalletBtn.prototype.showWalletBtn = function () {
            if (bx.GData.playerInfo.isMainWallet) {
                if (!this.view)
                    this.view = new point21.VWalletBtn();
                bx.Stage.getStage().layerAddChild(this.view, bx.GLayer.popup - 10);
                this.layout();
                this.view._view.onClick(this, this.onClickBtn);
            }
        };
        MWalletBtn.prototype.onClickBtn = function () {
            this.notify(bx.GConst.n_wallet_view_open_req);
        };
        MWalletBtn.prototype.layout = function () {
            if (this.view == null)
                return;
            // let userAgent: string = navigator.userAgent.toLowerCase();
            // let isApp: boolean = userAgent.indexOf("browser_type/android_app") != -1;//判断是否app内
            // let isIphoneX: boolean = userAgent.indexOf("devcice_type/iphonex") != -1;//判断是否是iphoneX
            // this.view.width = this.view.ui.width = 58;
            // this.view.height = this.view.ui.height = 58;
            if (bx.Stage.getStage().isLandscape) { //横屏
                // if (isIphoneX) {
                //     this.view.marginLeft = "2%";
                //     this.view.marginTop = "20%";
                // } else {
                //     this.view.marginLeft = "2%";
                //     this.view.marginTop = "14";
                // }
                this.view.marginLeft = "2%";
                this.view.marginTop = "20%";
                // this.view.marginBottom = "90%";
            }
            else {
                // if (isIphoneX) {
                //     this.view.marginLeft = "2%";
                //     this.view.marginTop = "10%";
                // } else {
                this.view.marginLeft = "2%";
                this.view.marginTop = "17%";
                // }
                // this.view.marginRight = "60%";
                // this.view.marginBottom = "90%";
            }
            // this.view.x =Number(bx.Align.left)+50;
            // this.view.y =Number(bx.Align.top)-120;
            // this.view.x ="left:+50";
            // this.view.y ="top:-120";
            this.view.x = bx.Align.left;
            this.view.y = bx.Align.top;
            this.view.scaleMode = bx.ScaleMode.none;
        };
        return MWalletBtn;
    }(bx.Framework));
    point21.MWalletBtn = MWalletBtn;
})(point21 || (point21 = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_bet = /** @class */ (function (_super) {
            __extends(FUI_bet, _super);
            function FUI_bet() {
                return _super.call(this) || this;
            }
            FUI_bet.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "bet"));
            };
            FUI_bet.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_contentCtl = this.getControllerAt(1);
                this.m_n6 = (this.getChildAt(0));
                this.m_lang_xz = (this.getChildAt(1));
                this.m_lang_sure = (this.getChildAt(2));
            };
            FUI_bet.URL = "ui://2mffi74ewuvl3m";
            return FUI_bet;
        }(fairygui.GButton));
        room.FUI_bet = FUI_bet;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_btnPlay = /** @class */ (function (_super) {
            __extends(FUI_btnPlay, _super);
            function FUI_btnPlay() {
                return _super.call(this) || this;
            }
            FUI_btnPlay.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "btnPlay"));
            };
            FUI_btnPlay.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnCtl = this.getControllerAt(0);
                this.m_h_v = this.getControllerAt(1);
                this.m_betSlider = (this.getChildAt(0));
                this.m_minBet = (this.getChildAt(1));
                this.m_maxBet = (this.getChildAt(2));
                this.m_bet = (this.getChildAt(3));
                this.m_continueBet = (this.getChildAt(4));
                this.m_stopCard = (this.getChildAt(5));
                this.m_needCard = (this.getChildAt(6));
                this.m_divideCard = (this.getChildAt(7));
                this.m_double = (this.getChildAt(8));
                this.m_continueGame = (this.getChildAt(9));
                this.m_insuranceNot = (this.getChildAt(10));
                this.m_insurance = (this.getChildAt(11));
            };
            FUI_btnPlay.URL = "ui://2mffi74ewuvl3u";
            return FUI_btnPlay;
        }(fairygui.GComponent));
        room.FUI_btnPlay = FUI_btnPlay;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_card = /** @class */ (function (_super) {
            __extends(FUI_card, _super);
            function FUI_card() {
                return _super.call(this) || this;
            }
            FUI_card.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "card"));
            };
            FUI_card.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_maskCtl = this.getControllerAt(0);
                this.m_card = (this.getChildAt(0));
                this.m_mask = (this.getChildAt(1));
                this.m_trun = this.getTransitionAt(0);
            };
            FUI_card.URL = "ui://2mffi74ewuvl36";
            return FUI_card;
        }(fairygui.GComponent));
        room.FUI_card = FUI_card;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_cardsList = /** @class */ (function (_super) {
            __extends(FUI_cardsList, _super);
            function FUI_cardsList() {
                return _super.call(this) || this;
            }
            FUI_cardsList.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "cardsList"));
            };
            FUI_cardsList.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list2 = (this.getChildAt(0));
                this.m_list1 = (this.getChildAt(1));
                this.m_lang_double = (this.getChildAt(2));
            };
            FUI_cardsList.URL = "ui://2mffi74ewuvl3a";
            return FUI_cardsList;
        }(fairygui.GComponent));
        room.FUI_cardsList = FUI_cardsList;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_cardsPoint1 = /** @class */ (function (_super) {
            __extends(FUI_cardsPoint1, _super);
            function FUI_cardsPoint1() {
                return _super.call(this) || this;
            }
            FUI_cardsPoint1.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "cardsPoint1"));
            };
            FUI_cardsPoint1.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
                this.m_value = (this.getChildAt(1));
            };
            FUI_cardsPoint1.URL = "ui://2mffi74ewuvl3b";
            return FUI_cardsPoint1;
        }(fairygui.GComponent));
        room.FUI_cardsPoint1 = FUI_cardsPoint1;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_cardsPoint2 = /** @class */ (function (_super) {
            __extends(FUI_cardsPoint2, _super);
            function FUI_cardsPoint2() {
                return _super.call(this) || this;
            }
            FUI_cardsPoint2.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "cardsPoint2"));
            };
            FUI_cardsPoint2.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
                this.m_value = (this.getChildAt(1));
            };
            FUI_cardsPoint2.URL = "ui://2mffi74ewuvl3d";
            return FUI_cardsPoint2;
        }(fairygui.GComponent));
        room.FUI_cardsPoint2 = FUI_cardsPoint2;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_cardType = /** @class */ (function (_super) {
            __extends(FUI_cardType, _super);
            function FUI_cardType() {
                return _super.call(this) || this;
            }
            FUI_cardType.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "cardType"));
            };
            FUI_cardType.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_typeChoose = this.getControllerAt(0);
                this.m_lang_dragon = (this.getChildAt(0));
                this.m_lang_blackjack = (this.getChildAt(1));
            };
            FUI_cardType.URL = "ui://2mffi74eu1w84i";
            return FUI_cardType;
        }(fairygui.GComponent));
        room.FUI_cardType = FUI_cardType;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_chip = /** @class */ (function (_super) {
            __extends(FUI_chip, _super);
            function FUI_chip() {
                return _super.call(this) || this;
            }
            FUI_chip.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "chip"));
            };
            FUI_chip.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_img = (this.getChildAt(0));
            };
            FUI_chip.URL = "ui://2mffi74ehyur4c";
            return FUI_chip;
        }(fairygui.GComponent));
        room.FUI_chip = FUI_chip;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_chipCount = /** @class */ (function (_super) {
            __extends(FUI_chipCount, _super);
            function FUI_chipCount() {
                return _super.call(this) || this;
            }
            FUI_chipCount.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "chipCount"));
            };
            FUI_chipCount.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
                this.m_value = (this.getChildAt(1));
            };
            FUI_chipCount.URL = "ui://2mffi74ewuvl3y";
            return FUI_chipCount;
        }(fairygui.GComponent));
        room.FUI_chipCount = FUI_chipCount;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_clickToBet = /** @class */ (function (_super) {
            __extends(FUI_clickToBet, _super);
            function FUI_clickToBet() {
                return _super.call(this) || this;
            }
            FUI_clickToBet.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "clickToBet"));
            };
            FUI_clickToBet.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
                this.m_lang_djxz = (this.getChildAt(1));
            };
            FUI_clickToBet.URL = "ui://2mffi74eu1w84h";
            return FUI_clickToBet;
        }(fairygui.GComponent));
        room.FUI_clickToBet = FUI_clickToBet;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_clock = /** @class */ (function (_super) {
            __extends(FUI_clock, _super);
            function FUI_clock() {
                return _super.call(this) || this;
            }
            FUI_clock.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "clock"));
            };
            FUI_clock.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
                this.m_numb = (this.getChildAt(1));
            };
            FUI_clock.URL = "ui://2mffi74ewuvl3v";
            return FUI_clock;
        }(fairygui.GComponent));
        room.FUI_clock = FUI_clock;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_close = /** @class */ (function (_super) {
            __extends(FUI_close, _super);
            function FUI_close() {
                return _super.call(this) || this;
            }
            FUI_close.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "close"));
            };
            FUI_close.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n3 = (this.getChildAt(0));
            };
            FUI_close.URL = "ui://2mffi74euz6j5q";
            return FUI_close;
        }(fairygui.GButton));
        room.FUI_close = FUI_close;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_content = /** @class */ (function (_super) {
            __extends(FUI_content, _super);
            function FUI_content() {
                return _super.call(this) || this;
            }
            FUI_content.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "content"));
            };
            FUI_content.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_lang_content = (this.getChildAt(0));
            };
            FUI_content.URL = "ui://2mffi74eujigbc";
            return FUI_content;
        }(fairygui.GComponent));
        room.FUI_content = FUI_content;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_continueBet = /** @class */ (function (_super) {
            __extends(FUI_continueBet, _super);
            function FUI_continueBet() {
                return _super.call(this) || this;
            }
            FUI_continueBet.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "continueBet"));
            };
            FUI_continueBet.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_contentCtl = this.getControllerAt(1);
                this.m_n6 = (this.getChildAt(0));
                this.m_lang_xy = (this.getChildAt(1));
                this.m_lang_betOver = (this.getChildAt(2));
            };
            FUI_continueBet.URL = "ui://2mffi74ewuvl3n";
            return FUI_continueBet;
        }(fairygui.GButton));
        room.FUI_continueBet = FUI_continueBet;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_continueGame = /** @class */ (function (_super) {
            __extends(FUI_continueGame, _super);
            function FUI_continueGame() {
                return _super.call(this) || this;
            }
            FUI_continueGame.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "continueGame"));
            };
            FUI_continueGame.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n7 = (this.getChildAt(0));
                this.m_lang_jxyx = (this.getChildAt(1));
            };
            FUI_continueGame.URL = "ui://2mffi74ewuvl4b";
            return FUI_continueGame;
        }(fairygui.GButton));
        room.FUI_continueGame = FUI_continueGame;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_divideCard = /** @class */ (function (_super) {
            __extends(FUI_divideCard, _super);
            function FUI_divideCard() {
                return _super.call(this) || this;
            }
            FUI_divideCard.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "divideCard"));
            };
            FUI_divideCard.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n6 = (this.getChildAt(0));
                this.m_lang_fp = (this.getChildAt(1));
            };
            FUI_divideCard.URL = "ui://2mffi74ewuvl3q";
            return FUI_divideCard;
        }(fairygui.GButton));
        room.FUI_divideCard = FUI_divideCard;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_double = /** @class */ (function (_super) {
            __extends(FUI_double, _super);
            function FUI_double() {
                return _super.call(this) || this;
            }
            FUI_double.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "double"));
            };
            FUI_double.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n6 = (this.getChildAt(0));
                this.m_lang_sb = (this.getChildAt(1));
            };
            FUI_double.URL = "ui://2mffi74ewuvl3r";
            return FUI_double;
        }(fairygui.GButton));
        room.FUI_double = FUI_double;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_hand = /** @class */ (function (_super) {
            __extends(FUI_hand, _super);
            function FUI_hand() {
                return _super.call(this) || this;
            }
            FUI_hand.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "hand"));
            };
            FUI_hand.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_actionCtl = this.getControllerAt(0);
                this.m_n12 = (this.getChildAt(0));
                this.m_n14 = (this.getChildAt(1));
                this.m_bet = (this.getChildAt(2));
                this.m_betLeft = (this.getChildAt(3));
                this.m_betRight = (this.getChildAt(4));
                this.m_stopCard = (this.getChildAt(5));
                this.m_needCard = (this.getChildAt(6));
            };
            FUI_hand.URL = "ui://2mffi74eggptci";
            return FUI_hand;
        }(fairygui.GComponent));
        room.FUI_hand = FUI_hand;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_Insurance = /** @class */ (function (_super) {
            __extends(FUI_Insurance, _super);
            function FUI_Insurance() {
                return _super.call(this) || this;
            }
            FUI_Insurance.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "Insurance"));
            };
            FUI_Insurance.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n6 = (this.getChildAt(0));
                this.m_lang_mbx = (this.getChildAt(1));
            };
            FUI_Insurance.URL = "ui://2mffi74ewuvl3o";
            return FUI_Insurance;
        }(fairygui.GButton));
        room.FUI_Insurance = FUI_Insurance;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_InsuranceNot = /** @class */ (function (_super) {
            __extends(FUI_InsuranceNot, _super);
            function FUI_InsuranceNot() {
                return _super.call(this) || this;
            }
            FUI_InsuranceNot.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "InsuranceNot"));
            };
            FUI_InsuranceNot.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n6 = (this.getChildAt(0));
                this.m_lang_bm = (this.getChildAt(1));
            };
            FUI_InsuranceNot.URL = "ui://2mffi74ewuvl3p";
            return FUI_InsuranceNot;
        }(fairygui.GButton));
        room.FUI_InsuranceNot = FUI_InsuranceNot;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_match = /** @class */ (function (_super) {
            __extends(FUI_match, _super);
            function FUI_match() {
                return _super.call(this) || this;
            }
            FUI_match.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "match"));
            };
            FUI_match.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n4 = (this.getChildAt(0));
                this.m_lang_word = (this.getChildAt(1));
            };
            FUI_match.URL = "ui://2mffi74eujigb4";
            return FUI_match;
        }(fairygui.GComponent));
        room.FUI_match = FUI_match;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_maxBet = /** @class */ (function (_super) {
            __extends(FUI_maxBet, _super);
            function FUI_maxBet() {
                return _super.call(this) || this;
            }
            FUI_maxBet.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "maxBet"));
            };
            FUI_maxBet.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n8 = (this.getChildAt(0));
                this.m_lang_zdz = (this.getChildAt(1));
                this.m_value = (this.getChildAt(2));
            };
            FUI_maxBet.URL = "ui://2mffi74ewuvl3l";
            return FUI_maxBet;
        }(fairygui.GButton));
        room.FUI_maxBet = FUI_maxBet;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_minBet = /** @class */ (function (_super) {
            __extends(FUI_minBet, _super);
            function FUI_minBet() {
                return _super.call(this) || this;
            }
            FUI_minBet.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "minBet"));
            };
            FUI_minBet.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n6 = (this.getChildAt(0));
                this.m_lang_zxz = (this.getChildAt(1));
                this.m_value = (this.getChildAt(2));
            };
            FUI_minBet.URL = "ui://2mffi74ewuvl3k";
            return FUI_minBet;
        }(fairygui.GButton));
        room.FUI_minBet = FUI_minBet;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_needCard = /** @class */ (function (_super) {
            __extends(FUI_needCard, _super);
            function FUI_needCard() {
                return _super.call(this) || this;
            }
            FUI_needCard.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "needCard"));
            };
            FUI_needCard.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n3 = (this.getChildAt(0));
                this.m_lang_yp = (this.getChildAt(1));
            };
            FUI_needCard.URL = "ui://2mffi74ewuvl3s";
            return FUI_needCard;
        }(fairygui.GButton));
        room.FUI_needCard = FUI_needCard;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_otherPlayer = /** @class */ (function (_super) {
            __extends(FUI_otherPlayer, _super);
            function FUI_otherPlayer() {
                return _super.call(this) || this;
            }
            FUI_otherPlayer.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "otherPlayer"));
            };
            FUI_otherPlayer.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_talkPos = this.getControllerAt(0);
                this.m_head = (this.getChildAt(0));
                this.m_n1 = (this.getChildAt(1));
                this.m_nick = (this.getChildAt(2));
                this.m_coin = (this.getChildAt(3));
                this.m_timeCircle = (this.getChildAt(4));
                this.m_talkBgRight = (this.getChildAt(5));
                this.m_talkBgLeft = (this.getChildAt(6));
                this.m_talk = (this.getChildAt(7));
            };
            FUI_otherPlayer.URL = "ui://2mffi74ewuvl31";
            return FUI_otherPlayer;
        }(fairygui.GComponent));
        room.FUI_otherPlayer = FUI_otherPlayer;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_playerArea = /** @class */ (function (_super) {
            __extends(FUI_playerArea, _super);
            function FUI_playerArea() {
                return _super.call(this) || this;
            }
            FUI_playerArea.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "playerArea"));
            };
            FUI_playerArea.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_fen = this.getControllerAt(0);
                this.m_activeCtl = this.getControllerAt(1);
                this.m_careCtl = this.getControllerAt(2);
                this.m_centerCard_hide = (this.getChildAt(0));
                this.m_cardsList0 = (this.getChildAt(1));
                this.m_cardsList1 = (this.getChildAt(2));
                this.m_cardsList2 = (this.getChildAt(3));
                this.m_chipsList0_hide = (this.getChildAt(4));
                this.m_chipsList1_hide = (this.getChildAt(5));
                this.m_chipsList2_hide = (this.getChildAt(6));
                this.m_chipArea = (this.getChildAt(7));
                this.m_activeMark = (this.getChildAt(8));
                this.m_chipCount0 = (this.getChildAt(9));
                this.m_chipCount1 = (this.getChildAt(10));
                this.m_chipCount2 = (this.getChildAt(11));
                this.m_point1 = (this.getChildAt(12));
                this.m_point2 = (this.getChildAt(13));
                this.m_point0 = (this.getChildAt(14));
                this.m_chipsList1 = (this.getChildAt(15));
                this.m_chipsList0 = (this.getChildAt(16));
                this.m_chipsList2 = (this.getChildAt(17));
                this.m_clickToBet = (this.getChildAt(18));
                this.m_cardType0 = (this.getChildAt(19));
                this.m_cardType1 = (this.getChildAt(20));
                this.m_cardType2 = (this.getChildAt(21));
                this.m_careSign = (this.getChildAt(22));
                this.m_beActive = this.getTransitionAt(0);
            };
            FUI_playerArea.URL = "ui://2mffi74ewuvl3f";
            return FUI_playerArea;
        }(fairygui.GComponent));
        room.FUI_playerArea = FUI_playerArea;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_playerArea_banker = /** @class */ (function (_super) {
            __extends(FUI_playerArea_banker, _super);
            function FUI_playerArea_banker() {
                return _super.call(this) || this;
            }
            FUI_playerArea_banker.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "playerArea_banker"));
            };
            FUI_playerArea_banker.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_cardList = (this.getChildAt(0));
                this.m_cardPoint = (this.getChildAt(1));
                this.m_cardType = (this.getChildAt(2));
            };
            FUI_playerArea_banker.URL = "ui://2mffi74ewuvl3h";
            return FUI_playerArea_banker;
        }(fairygui.GComponent));
        room.FUI_playerArea_banker = FUI_playerArea_banker;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_playerChip = /** @class */ (function (_super) {
            __extends(FUI_playerChip, _super);
            function FUI_playerChip() {
                return _super.call(this) || this;
            }
            FUI_playerChip.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "playerChip"));
            };
            FUI_playerChip.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_selectedCtl = this.getControllerAt(0);
                this.m_n5 = (this.getChildAt(0));
                this.m_n3 = (this.getChildAt(1));
            };
            FUI_playerChip.URL = "ui://2mffi74ewuvl3i";
            return FUI_playerChip;
        }(fairygui.GComponent));
        room.FUI_playerChip = FUI_playerChip;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_result = /** @class */ (function (_super) {
            __extends(FUI_result, _super);
            function FUI_result() {
                return _super.call(this) || this;
            }
            FUI_result.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "result"));
            };
            FUI_result.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_resultCtl = this.getControllerAt(0);
                this.m_win = (this.getChildAt(0));
                this.m_fail = (this.getChildAt(1));
            };
            FUI_result.URL = "ui://2mffi74e6xefbp";
            return FUI_result;
        }(fairygui.GComponent));
        room.FUI_result = FUI_result;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_roomBg = /** @class */ (function (_super) {
            __extends(FUI_roomBg, _super);
            function FUI_roomBg() {
                return _super.call(this) || this;
            }
            FUI_roomBg.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "roomBg"));
            };
            FUI_roomBg.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_h_v = this.getControllerAt(0);
                this.m_n0 = (this.getChildAt(0));
            };
            FUI_roomBg.URL = "ui://2mffi74ewuvl2u";
            return FUI_roomBg;
        }(fairygui.GComponent));
        room.FUI_roomBg = FUI_roomBg;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_roomView = /** @class */ (function (_super) {
            __extends(FUI_roomView, _super);
            function FUI_roomView() {
                return _super.call(this) || this;
            }
            FUI_roomView.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "roomView"));
            };
            FUI_roomView.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_h_v = this.getControllerAt(0);
                this.m_lightCtl = this.getControllerAt(1);
                this.m_table = (this.getChildAt(0));
                this.m_cardBox1 = (this.getChildAt(1));
                this.m_n4 = (this.getChildAt(2));
                this.m_light = (this.getChildAt(3));
                this.m_chipBank = (this.getChildAt(4));
                this.m_cardBox2 = (this.getChildAt(5));
                this.m_lang_tablez = (this.getChildAt(6));
                this.m_n7 = (this.getChildAt(7));
                this.m_card1 = (this.getChildAt(8));
                this.m_chip1 = (this.getChildAt(9));
                this.m_chip2 = (this.getChildAt(10));
                this.m_chip3 = (this.getChildAt(11));
                this.m_chip4 = (this.getChildAt(12));
                this.m_chip5 = (this.getChildAt(13));
                this.m_playerArea0 = (this.getChildAt(14));
                this.m_playerArea1 = (this.getChildAt(15));
                this.m_playerArea2 = (this.getChildAt(16));
                this.m_playerArea3 = (this.getChildAt(17));
                this.m_playerArea4 = (this.getChildAt(18));
                this.m_playerArea5 = (this.getChildAt(19));
                this.m_player3 = (this.getChildAt(20));
                this.m_player1 = (this.getChildAt(21));
                this.m_player2 = (this.getChildAt(22));
                this.m_player4 = (this.getChildAt(23));
                this.m_player5 = (this.getChildAt(24));
                this.m_numb1 = (this.getChildAt(25));
                this.m_numb2 = (this.getChildAt(26));
                this.m_numb3 = (this.getChildAt(27));
                this.m_numb4 = (this.getChildAt(28));
                this.m_numb5 = (this.getChildAt(29));
                this.m_hand = (this.getChildAt(30));
                this.m_btnPlay = (this.getChildAt(31));
                this.m_insurance1 = (this.getChildAt(32));
                this.m_insurance2 = (this.getChildAt(33));
                this.m_insurance3 = (this.getChildAt(34));
                this.m_insurance4 = (this.getChildAt(35));
                this.m_insurance5 = (this.getChildAt(36));
                this.m_insurance1_hide = (this.getChildAt(37));
                this.m_insurance2_hide = (this.getChildAt(38));
                this.m_insurance3_hide = (this.getChildAt(39));
                this.m_insurance4_hide = (this.getChildAt(40));
                this.m_insurance5_hide = (this.getChildAt(41));
                this.m_clock = (this.getChildAt(42));
                this.m_result1 = (this.getChildAt(43));
                this.m_result2 = (this.getChildAt(44));
                this.m_result3 = (this.getChildAt(45));
                this.m_result4 = (this.getChildAt(46));
                this.m_result5 = (this.getChildAt(47));
                this.m_namebg1 = (this.getChildAt(48));
                this.m_namebg2 = (this.getChildAt(49));
                this.m_namebg4 = (this.getChildAt(50));
                this.m_namebg5 = (this.getChildAt(51));
                this.m_name1 = (this.getChildAt(52));
                this.m_name2 = (this.getChildAt(53));
                this.m_name4 = (this.getChildAt(54));
                this.m_name5 = (this.getChildAt(55));
            };
            FUI_roomView.URL = "ui://2mffi74ewuvl2w";
            return FUI_roomView;
        }(fairygui.GComponent));
        room.FUI_roomView = FUI_roomView;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_selfHead = /** @class */ (function (_super) {
            __extends(FUI_selfHead, _super);
            function FUI_selfHead() {
                return _super.call(this) || this;
            }
            FUI_selfHead.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "selfHead"));
            };
            FUI_selfHead.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n1 = (this.getChildAt(0));
                this.m_head = (this.getChildAt(1));
            };
            FUI_selfHead.URL = "ui://2mffi74ewuvl34";
            return FUI_selfHead;
        }(fairygui.GComponent));
        room.FUI_selfHead = FUI_selfHead;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_selfPlayer = /** @class */ (function (_super) {
            __extends(FUI_selfPlayer, _super);
            function FUI_selfPlayer() {
                return _super.call(this) || this;
            }
            FUI_selfPlayer.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "selfPlayer"));
            };
            FUI_selfPlayer.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
                this.m_nick = (this.getChildAt(1));
                this.m_n3 = (this.getChildAt(2));
                this.m_n4 = (this.getChildAt(3));
                this.m_coin = (this.getChildAt(4));
                this.m_headComp = (this.getChildAt(5));
            };
            FUI_selfPlayer.URL = "ui://2mffi74ewuvl32";
            return FUI_selfPlayer;
        }(fairygui.GComponent));
        room.FUI_selfPlayer = FUI_selfPlayer;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_sider_bet = /** @class */ (function (_super) {
            __extends(FUI_sider_bet, _super);
            function FUI_sider_bet() {
                return _super.call(this) || this;
            }
            FUI_sider_bet.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "sider_bet"));
            };
            FUI_sider_bet.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n7 = (this.getChildAt(0));
                this.m_bg = (this.getChildAt(1));
                this.m_active = (this.getChildAt(2));
                this.m_grip = (this.getChildAt(3));
                this.m_title = (this.getChildAt(4));
            };
            FUI_sider_bet.URL = "ui://2mffi74eu1w84o";
            return FUI_sider_bet;
        }(fairygui.GComponent));
        room.FUI_sider_bet = FUI_sider_bet;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_stopCard = /** @class */ (function (_super) {
            __extends(FUI_stopCard, _super);
            function FUI_stopCard() {
                return _super.call(this) || this;
            }
            FUI_stopCard.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "stopCard"));
            };
            FUI_stopCard.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_n6 = (this.getChildAt(0));
                this.m_lang_tp = (this.getChildAt(1));
            };
            FUI_stopCard.URL = "ui://2mffi74ewuvl3t";
            return FUI_stopCard;
        }(fairygui.GButton));
        room.FUI_stopCard = FUI_stopCard;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_strategy = /** @class */ (function (_super) {
            __extends(FUI_strategy, _super);
            function FUI_strategy() {
                return _super.call(this) || this;
            }
            FUI_strategy.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "strategy"));
            };
            FUI_strategy.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
                this.m_lang_title = (this.getChildAt(1));
                this.m_close = (this.getChildAt(2));
                this.m_n3 = (this.getChildAt(3));
                this.m_lang_point = (this.getChildAt(4));
                this.m_lang_self = (this.getChildAt(5));
                this.m_lang_banker = (this.getChildAt(6));
                this.m_n8 = (this.getChildAt(7));
            };
            FUI_strategy.URL = "ui://2mffi74eujigba";
            return FUI_strategy;
        }(fairygui.GComponent));
        room.FUI_strategy = FUI_strategy;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_strategyBt2 = /** @class */ (function (_super) {
            __extends(FUI_strategyBt2, _super);
            function FUI_strategyBt2() {
                return _super.call(this) || this;
            }
            FUI_strategyBt2.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "strategyBt2"));
            };
            FUI_strategyBt2.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getControllerAt(0);
                this.m_lang_bd = (this.getChildAt(0));
            };
            FUI_strategyBt2.URL = "ui://2mffi74eo440da";
            return FUI_strategyBt2;
        }(fairygui.GButton));
        room.FUI_strategyBt2 = FUI_strategyBt2;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_strategyBtn = /** @class */ (function (_super) {
            __extends(FUI_strategyBtn, _super);
            function FUI_strategyBtn() {
                return _super.call(this) || this;
            }
            FUI_strategyBtn.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "strategyBtn"));
            };
            FUI_strategyBtn.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
            };
            FUI_strategyBtn.URL = "ui://2mffi74eo440db";
            return FUI_strategyBtn;
        }(fairygui.GComponent));
        room.FUI_strategyBtn = FUI_strategyBtn;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_talk = /** @class */ (function (_super) {
            __extends(FUI_talk, _super);
            function FUI_talk() {
                return _super.call(this) || this;
            }
            FUI_talk.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "talk"));
            };
            FUI_talk.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_word = this.getControllerAt(0);
                this.m_lang_fj = (this.getChildAt(0));
                this.m_lang_sb2 = (this.getChildAt(1));
                this.m_lang_yp = (this.getChildAt(2));
                this.m_lang_tp = (this.getChildAt(3));
                this.m_lang_xzwc = (this.getChildAt(4));
            };
            FUI_talk.URL = "ui://2mffi74eu1w852";
            return FUI_talk;
        }(fairygui.GComponent));
        room.FUI_talk = FUI_talk;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_timeCircle = /** @class */ (function (_super) {
            __extends(FUI_timeCircle, _super);
            function FUI_timeCircle() {
                return _super.call(this) || this;
            }
            FUI_timeCircle.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "timeCircle"));
            };
            FUI_timeCircle.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_circle = (this.getChildAt(0));
            };
            FUI_timeCircle.URL = "ui://2mffi74eu1w84v";
            return FUI_timeCircle;
        }(fairygui.GComponent));
        room.FUI_timeCircle = FUI_timeCircle;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var FUI_title = /** @class */ (function (_super) {
            __extends(FUI_title, _super);
            function FUI_title() {
                return _super.call(this) || this;
            }
            FUI_title.createInstance = function () {
                return (fairygui.UIPackage.createObject("room", "title"));
            };
            FUI_title.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
                this.m_value = (this.getChildAt(1));
            };
            FUI_title.URL = "ui://2mffi74eu1w84p";
            return FUI_title;
        }(fairygui.GComponent));
        room.FUI_title = FUI_title;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var fui;
(function (fui) {
    var room;
    (function (room) {
        var roomBinder = /** @class */ (function () {
            function roomBinder() {
            }
            roomBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_result.URL, room.FUI_result);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_hand.URL, room.FUI_hand);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_chip.URL, room.FUI_chip);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_strategyBt2.URL, room.FUI_strategyBt2);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_strategyBtn.URL, room.FUI_strategyBtn);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_clickToBet.URL, room.FUI_clickToBet);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_cardType.URL, room.FUI_cardType);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_sider_bet.URL, room.FUI_sider_bet);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_title.URL, room.FUI_title);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_timeCircle.URL, room.FUI_timeCircle);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_talk.URL, room.FUI_talk);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_match.URL, room.FUI_match);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_strategy.URL, room.FUI_strategy);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_content.URL, room.FUI_content);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_close.URL, room.FUI_close);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_roomBg.URL, room.FUI_roomBg);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_roomView.URL, room.FUI_roomView);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_otherPlayer.URL, room.FUI_otherPlayer);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_selfPlayer.URL, room.FUI_selfPlayer);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_selfHead.URL, room.FUI_selfHead);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_card.URL, room.FUI_card);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_cardsList.URL, room.FUI_cardsList);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_cardsPoint1.URL, room.FUI_cardsPoint1);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_cardsPoint2.URL, room.FUI_cardsPoint2);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_playerArea.URL, room.FUI_playerArea);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_playerArea_banker.URL, room.FUI_playerArea_banker);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_playerChip.URL, room.FUI_playerChip);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_minBet.URL, room.FUI_minBet);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_maxBet.URL, room.FUI_maxBet);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_bet.URL, room.FUI_bet);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_continueBet.URL, room.FUI_continueBet);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_Insurance.URL, room.FUI_Insurance);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_InsuranceNot.URL, room.FUI_InsuranceNot);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_divideCard.URL, room.FUI_divideCard);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_double.URL, room.FUI_double);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_needCard.URL, room.FUI_needCard);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_stopCard.URL, room.FUI_stopCard);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_btnPlay.URL, room.FUI_btnPlay);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_clock.URL, room.FUI_clock);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_chipCount.URL, room.FUI_chipCount);
                fairygui.UIObjectFactory.setPackageItemExtension(room.FUI_continueGame.URL, room.FUI_continueGame);
            };
            return roomBinder;
        }());
        room.roomBinder = roomBinder;
    })(room = fui.room || (fui.room = {}));
})(fui || (fui = {}));
var point21;
(function (point21) {
    var VBtnPlay = /** @class */ (function () {
        function VBtnPlay(v) {
            this._view = v;
            var bg = this._view.m_betSlider.m_bg;
            this.range = bg.height;
            this.gripY_min = bg.y;
            this.gripy_max = bg.y + this.range;
        }
        //得到最大注 最小注
        VBtnPlay.prototype.setBaseBet = function (max, min) {
            this.bet_max = max;
            this.bet_min = min;
        };
        //隐藏
        VBtnPlay.prototype.hide = function () {
            this._view.visible = false;
        };
        //显示(0:下注块  1：要牌块  2：保险块  3：继续游戏)
        VBtnPlay.prototype.show = function (index) {
            this._view.visible = true;
            this._view.m_btnCtl.selectedIndex = index;
            for (var i = 0; i < this._view.numChildren; i++) {
                this._view.getChildAt(i).enabled = true;
            }
            if (index === 0) {
                this._view.m_maxBet.m_value.text = '(' + this.bet_max + ')';
                this._view.m_minBet.m_value.text = '(' + this.bet_min + ')';
            }
        };
        //某个按钮变灰(下注组和要牌组共8个)
        VBtnPlay.prototype.btnUnable = function (name) {
            var target = this._view['m_' + name];
            if (target) {
                target.enabled = false;
            }
        };
        //变灰的按钮恢复
        VBtnPlay.prototype.btnEnable = function (name) {
            var target = this._view['m_' + name];
            if (target) {
                target.enabled = true;
            }
        };
        //是否设置为显示滑动条
        VBtnPlay.prototype.setSliderVisible = function (state) {
            this._view.m_betSlider.visible = state;
            this._view.m_bet.m_contentCtl.selectedIndex = state ? 1 : 0;
        };
        //按下时鼠标与滑块的坐标差距
        VBtnPlay.prototype.getMouseRange = function () {
            var grip = this._view.m_betSlider.m_grip;
            var p = grip.parent.globalToLocal(0, Laya.MouseManager.instance.mouseY);
            var gripY = grip.y;
            this.mouseRange = p.y - gripY;
        };
        //移动时更改下注值
        VBtnPlay.prototype.setSliderOnBet = function () {
            var grip = this._view.m_betSlider.m_grip;
            var p = grip.parent.globalToLocal(0, Laya.MouseManager.instance.mouseY);
            var currentY = p.y - this.mouseRange;
            this.setGripY(currentY);
        };
        //设置滑块坐标
        VBtnPlay.prototype.setGripY = function (v) {
            var grip = this._view.m_betSlider.m_grip;
            var rate, betNumber;
            if (v >= this.gripy_max) {
                grip.y = this.gripy_max;
                this.setCurrentChip(this.bet_min);
            }
            else if (v <= this.gripY_min) {
                grip.y = this.gripY_min;
                this.setCurrentChip(this.bet_max);
            }
            else {
                grip.y = v;
                rate = 1 - (v - this.gripY_min) / this.range;
                betNumber = Math.round(rate * (this.bet_max - this.bet_min) + this.bet_min);
                this.setCurrentChip(betNumber);
                this.betValue = betNumber;
            }
        };
        //设置当前筹码显示值
        VBtnPlay.prototype.setCurrentChip = function (v) {
            this._view.m_betSlider.m_title.m_value.text = v.toString();
        };
        //点击slider背景时
        VBtnPlay.prototype.onClickSlider = function () {
            var mouse = Laya.MouseManager.instance;
            var point = this._view.m_betSlider.globalToLocal(mouse.mouseX, mouse.mouseY);
            this.setGripY(point.y);
        };
        //设置最大注/最小注 1:最大  0: 最小
        VBtnPlay.prototype.setMaxOrMin = function (v) {
            if (v === 1) {
                this.setGripY(this.gripY_min);
            }
            else {
                this.setGripY(this.gripy_max);
            }
        };
        //设置续压按钮的显示内容 content 0:续压  1 下注完成
        VBtnPlay.prototype.setContinueBetContent = function (content) {
            this._view.m_continueBet.m_contentCtl.selectedIndex = content;
        };
        return VBtnPlay;
    }());
    point21.VBtnPlay = VBtnPlay;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    var VChip = /** @class */ (function (_super) {
        __extends(VChip, _super);
        function VChip(v) {
            var _this = _super.call(this, 'fui.room.FUI_chip') || this;
            _this._view = _this.ui;
            var name;
            (function (name) {
                name[name["c1"] = 100] = "c1";
                name[name["c2"] = 200] = "c2";
            })(name || (name = {}));
            _this._view.m_img.url = 'ui://room/' + name[v];
            return _this;
        }
        return VChip;
    }(bx.Layout));
    point21.VChip = VChip;
})(point21 || (point21 = {}));
var xys;
(function (xys) {
    var VGM = /** @class */ (function (_super) {
        __extends(VGM, _super);
        function VGM() {
            var _this = _super.call(this, 'fui.Game.FUI_gm') || this;
            _this._view = _this.ui;
            _this.btn_close = _this._view.m_close;
            _this.btn_submit = _this._view.m_submit;
            _this.bindEvent();
            return _this;
        }
        VGM.prototype.reset = function () {
            this._view.m_keys.visible = false;
        };
        VGM.prototype.bindEvent = function () {
            var list = this._view.m_keys;
            for (var i = 0; i < list.numChildren; i++) {
                list.getChildAt(i).onClick(this, this.clickCard, [i]);
            }
            for (var j = 0; j < 6; j++) {
                this._view['m_cards_' + j].m_set.onClick(this, this.clickSet, [j]);
            }
        };
        //点击设置
        VGM.prototype.clickSet = function (id) {
            this.activeId = id;
            this.activeNumb = 1;
            this._view.m_keys.visible = true;
        };
        //点击牌面
        VGM.prototype.clickCard = function (index) {
            var key = this._view.m_keys.getChildAt(index);
            var txt = key.text;
            var data = key.data;
            var target = this._view['m_cards_' + this.activeId]['m_card' + this.activeNumb];
            if (target) {
                target.text = txt;
                target.data = data;
                if ((data > 16 && data < 30) || (data > 48 && data < 62)) {
                    target.color = '#FF0000';
                }
                else {
                    target.color = '#000000';
                }
                this.activeNumb++;
                if (this.activeNumb > 5) {
                    this.activeNumb = 1;
                    this._view.m_keys.visible = false;
                }
            }
        };
        /**
         * 获取人数
        */
        VGM.prototype.getPlayerNumb = function () {
            return Number(this._view.m_playerNumb.text);
        };
        /**
         * 获取房间类型
        */
        VGM.prototype.getRoomType = function () {
            return Number(this._view.m_roomType.text);
        };
        /**
         * 获取所有牌
        */
        VGM.prototype.getCards = function () {
            var list = [];
            for (var i = 0; i < 6; i++) {
                var cards = this._view['m_cards_' + i];
                var item = {};
                item.pos = i;
                item.cards = [];
                for (var j = 0; j < cards.numChildren; j++) {
                    var value = Number(cards.getChildAt(j).data);
                    if (value > 16 && value < 78) {
                        item.cards.push(value);
                    }
                }
                list.push(item);
            }
            return list;
        };
        return VGM;
    }(bx.Layout));
    xys.VGM = VGM;
})(xys || (xys = {}));
var point21;
(function (point21) {
    var VMatch = /** @class */ (function (_super) {
        __extends(VMatch, _super);
        function VMatch() {
            var _this = _super.call(this, 'fui.room.FUI_match', "room_") || this;
            _this.str = '';
            _this._view = _this.ui;
            _this.oldStr = _this._view.m_lang_word.text;
            return _this;
        }
        VMatch.prototype.requestGS = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var _a;
            (_a = bx.Framework).notify.apply(_a, [bx.GConst.n_gs_send].concat(params));
        };
        VMatch.prototype.reset = function () {
            Laya.timer.loop(400, this, this.wordLoop);
        };
        //文字循环动态
        VMatch.prototype.wordLoop = function () {
            this.str += '.';
            if (this.str == '....')
                this.str = '';
            this._view.m_lang_word.text = this.oldStr + this.str;
        };
        //关闭弹窗前
        VMatch.prototype.beforeClose = function () {
            Laya.timer.clearAll(this);
        };
        return VMatch;
    }(bx.Layout));
    point21.VMatch = VMatch;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    var VPlayer = /** @class */ (function () {
        function VPlayer(v, i) {
            if (i == 2) {
                this._viewSelf = v;
            }
            else {
                this._view = v;
                if (i < 2) {
                    this._view.m_talkPos.selectedIndex = 1;
                }
                else {
                    this._view.m_talkPos.selectedIndex = 0;
                }
            }
            this.seatId = i + 1;
        }
        //显示
        VPlayer.prototype.show = function () {
            if (this._view) {
                this._view.visible = true;
                this._view.m_timeCircle.m_circle.visible = false;
                this.setTalkingVisible(false);
            }
            else {
                this._viewSelf.visible = true;
            }
        };
        //隐藏
        VPlayer.prototype.hide = function () {
            if (this._view) {
                this._view.visible = false;
            }
            else {
                this._viewSelf.visible = false;
            }
        };
        //设置玩家信息
        VPlayer.prototype.setPlayer = function (info) {
            this.show();
            this.playerName = info.name;
            var headUrl = point21.Utils.getHeadUrl(info.avatar);
            if (this._view) {
                this._view.m_head.url = headUrl;
                this._view.m_nick.text = info.name;
                this.setCoin(info.chips);
            }
            else {
                this._viewSelf.m_headComp.m_head.url = headUrl;
                this._viewSelf.m_nick.text = info.name;
                this.setCoin(info.chips);
            }
        };
        //设置金币
        VPlayer.prototype.setCoin = function (n) {
            if (this._view) {
                this._view.m_coin.text = bx.GData.formatNumber(n);
            }
            else {
                bx.Framework.notify(point21.GConst.n_selfMoneyChange, n);
                this._viewSelf.m_coin.text = bx.GData.formatNumber(n);
            }
        };
        Object.defineProperty(VPlayer.prototype, "maskDeg", {
            /////////////////以下为其他玩家独有/////////////////////////////
            get: function () {
                return this._maskDeg;
            },
            set: function (v) {
                if (v != this._maskDeg)
                    this._maskDeg = v;
                var circle = this._view.m_timeCircle.m_circle;
                var width = circle.width;
                var height = circle.height;
                var all = width * 2 + height * 2;
                var rateWidth = width / all, rateHeight = height / all;
                var rate1 = 1 - height / 2 / all, rate2 = rate1 - rateWidth, rate3 = rate2 - rateHeight, rate4 = rate3 - rateWidth;
                var p1 = new Laya.Point(width, height / 2), p2 = new Laya.Point(width, 0), p3 = new Laya.Point(0, 0), p4 = new Laya.Point(0, height), p5 = new Laya.Point(width, height);
                var arr = [], change;
                if (v < rate4) {
                    change = (rate4 - v) * all;
                    arr = [p1.x - 9, p1.y, p1.x, change];
                }
                else if (v < rate3) {
                    change = width - (v - rate4) * all;
                    arr = [p1.x - 9, p1.y, p2.x, p2.y, change, p2.y];
                }
                else if (v < rate2) {
                    change = (v - rate3) * all;
                    arr = [p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p3.x, change];
                }
                else if (v < rate1) {
                    change = (v - rate2) * all;
                    arr = [p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, change, p4.y];
                }
                else {
                    change = height - (v - rate1) * all;
                    arr = [p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p5.x, p5.y, p1.x, change];
                }
                this.mask.graphics.clear();
                this.mask.graphics.drawLines(0, 0, arr, '#ffffff', 13);
            },
            enumerable: true,
            configurable: true
        });
        //倒计时光圈启动
        VPlayer.prototype.timeCircleStart = function (time) {
            if (!this._view)
                return;
            this.clockTime = time;
            var component = this._view.m_timeCircle;
            component.m_circle.visible = true;
            if (!this.mask) {
                this.mask = new Laya.Sprite();
            }
            component.mask = this.mask;
            this.maskDeg = 1;
            this.timeTween = Laya.Tween.to(this, { maskDeg: 0 }, time * 1000, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
                this.timeCircleEnd();
            }));
        };
        //倒计时光圈结束
        VPlayer.prototype.timeCircleEnd = function () {
            if (!this._view)
                return;
            this._view.m_timeCircle.m_circle.visible = false;
            this.timeTween && Laya.Tween.clear(this.timeTween);
        };
        //说话显示控制 0:分解  1:双倍  2:要牌  3:停牌  4:下注完成
        VPlayer.prototype.setTalkingVisible = function (state, content) {
            if (!this._view)
                return;
            this._view.m_talk.visible = state;
            this._view.m_talkBgLeft.visible = state;
            this._view.m_talkBgRight.visible = state;
            if (state) {
                this._view.m_talk.m_word.selectedIndex = content;
                Laya.timer.once(2000, this, function () {
                    this.setTalkingVisible(false);
                });
            }
        };
        return VPlayer;
    }());
    point21.VPlayer = VPlayer;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    var VPlayerArea = /** @class */ (function () {
        function VPlayerArea(v, i) {
            this.recoverDuration = 300; //回收牌动作时间
            if (i === 0) {
                this._view_banker = v;
            }
            else {
                this._view = v;
            }
            this.seatId = i;
        }
        VPlayerArea.prototype.requestGS = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var _a;
            (_a = bx.Framework).notify.apply(_a, [bx.GConst.n_gs_send].concat(params));
        };
        VPlayerArea.prototype.init = function (roomView) {
            this.roomView = roomView;
            //this.recoverCard_endNode = roomView.m_recoverNode;
            this.deal_startNode = roomView.m_card1;
        };
        VPlayerArea.prototype.reset = function () {
            if (this._view) {
                this.setPoint(0, 0);
                this.setPoint(0, 1);
                this.setPoint(0, 2);
                this.removeChildrenFromList(0);
                this.removeChildrenFromList(1);
                this.removeChildrenFromList(2);
                this._view.m_fen.selectedIndex = 0;
                this.removeChildrenFromChipList(0);
                this.removeChildrenFromChipList(1);
                this.removeChildrenFromChipList(2);
                this.setChip(0, 0);
                this.setChip(0, 1);
                this.setChip(0, 2);
                this.setTipsToBetVisible(false);
                this.setCardTypeTipVisible(false, 0);
                this.setCardTypeTipVisible(false, 1);
                this.setCardTypeTipVisible(false, 2);
                this.doubleSignVisible(false, 0);
                this.doubleSignVisible(false, 1);
                this.doubleSignVisible(false, 2);
                this.insuranceSignVisible(false);
            }
            else {
                this.setPoint(0);
                this.removeChildrenFromList();
                this.setCardTypeTipVisible(false);
            }
        };
        /////////////////以下为两种类型 公共部分///////////////
        //设置点数(左 中 右 庄)
        VPlayerArea.prototype.setPoint = function (point, id) {
            var str = point.toString();
            if (point > 21)
                str = bx.GData.getLanguage('201314');
            if (point === 0) {
                if (this._view) {
                    this._view['m_point' + id].visible = false;
                }
                else {
                    this._view_banker.m_cardPoint.visible = false;
                }
                return;
            }
            else {
                if (this._view) {
                    this._view['m_point' + id].visible = true;
                    this._view['m_point' + id].m_value.text = str;
                }
                else {
                    this._view_banker.m_cardPoint.visible = true;
                    this._view_banker.m_cardPoint.m_value.text = str;
                }
            }
        };
        //移除牌列表item(左 中 右  庄)
        VPlayerArea.prototype.removeChildrenFromList = function (id) {
            if (this._view) {
                this._view['m_cardsList' + id].m_list1.removeChildrenToPool();
                this._view['m_cardsList' + id].m_list2.removeChildrenToPool();
            }
            else {
                this._view_banker.m_cardList.removeChildrenToPool();
            }
        };
        //牌列表添加子元素(闲家需要指定上下列表序号)
        VPlayerArea.prototype.addChildToList = function (id, index) {
            var child;
            var list;
            if (this._view) {
                list = this._view['m_cardsList' + id]['m_list' + index];
            }
            else {
                list = this._view_banker.m_cardList;
            }
            child = list.addItemFromPool();
            //立刻重排，以便获取正确位置
            list.ensureBoundsCorrect();
            return child;
        };
        //发牌
        VPlayerArea.prototype.dealCard = function (endNode, data, type) {
            var _this = this;
            var card = Laya.Pool.getItemByCreateFun('card', function () {
                return fui.room.FUI_card.createInstance();
            });
            card.m_card.url = 'ui://room/bg';
            this.roomView.addChild(card);
            var deal = Laya.Pool.getItemByClass('move', Tools.Move);
            deal.target = card;
            deal.start = this.deal_startNode;
            deal.end = endNode;
            deal.duration = 300;
            deal.props = { scaleX: [deal.start.scaleX, deal.end.scaleX], scaleY: [deal.start.scaleY, deal.end.scaleY] };
            deal.complete = function () {
                card.removeFromParent();
                Laya.Pool.recover('card', this.target);
                Laya.Pool.recover('move', deal);
                this.end.visible = true;
                this.end.m_card.url = 'ui://room/bg';
                _this.dealComplete(this.end, data, type);
            };
            deal.move();
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('deal'));
        };
        //收牌
        VPlayerArea.prototype.recoverCards = function () {
            if (this._view) {
                if (this._view.m_fen.selectedIndex === 0) {
                    this.recoverCardsList(this._view.m_cardsList0.m_list2, 0);
                    this.recoverCardsList(this._view.m_cardsList0.m_list1, 0);
                    //一定要在回收列表执行之后再清空列表
                    this.removeChildrenFromList(0);
                }
                else {
                    this.recoverCardsList(this._view.m_cardsList1.m_list2, 1);
                    this.recoverCardsList(this._view.m_cardsList1.m_list1, 1);
                    this.recoverCardsList(this._view.m_cardsList2.m_list2, 2);
                    this.recoverCardsList(this._view.m_cardsList2.m_list1, 2);
                    this.removeChildrenFromList(1);
                    this.removeChildrenFromList(2);
                }
            }
            else {
                this.recoverCardsList(this._view_banker.m_cardList);
                this.removeChildrenFromList();
            }
        };
        //循环某个牌列表 收回列表中所有的牌 动作
        VPlayerArea.prototype.recoverCardsList = function (list, id) {
            for (var i = 0; i < list.numChildren; i++) {
                var card = Laya.Pool.getItemByCreateFun('card', function () {
                    return fui.room.FUI_card.createInstance();
                });
                this.roomView.addChild(card);
                var recover = Laya.Pool.getItemByClass('move', Tools.Move);
                recover.target = card;
                recover.start = list.getChildAt(i);
                recover.end = this.recoverCard_endNode;
                recover.duration = 500;
                //recover.duration = this.recoverDuration;
                recover.props = { skewX: [this._view.skewX, this.recoverCard_endNode.skewX], skewY: [this._view.skewY, this.recoverCard_endNode.skewY] };
                recover.complete = function () {
                    Laya.Pool.recover('card', this.target);
                    this.target.removeFromParent();
                    Laya.Pool.recover('recoverMove', this);
                };
                recover.move();
            }
        };
        //发牌完成后
        VPlayerArea.prototype.dealComplete = function (target, data, type) {
            var cardImg;
            var cardInfo;
            if (type == 0) {
                cardInfo = data.cards[0];
                this.renderCardType(data);
            }
            else if (type == 1) {
                cardInfo = data.cards[0];
            }
            else if (type == 2) {
                cardInfo = data.cards[1];
                this.renderCardType(data);
            }
            cardImg = point21.Utils.getCardImg(cardInfo);
            var cardWidth = target.width;
            if (cardInfo === 0) {
                target.m_card.url = cardImg;
            }
            else {
                target.m_trun.setHook('change', Laya.Handler.create(this, function () {
                    target.m_card.url = cardImg;
                }));
                target.m_trun.play();
                Laya.timer.once(500, this, function () {
                    target.m_card.url = cardImg;
                    target.skewY = 0;
                    target.width = cardWidth;
                });
            }
        };
        //牌型和点数设置
        VPlayerArea.prototype.setCardAndPoint = function (type, playSound, whichOne, min, max) {
            if (type == 3) { //五小龙
                playSound && SoundManager.instance.playSound(AssetsUtils.getSoundUrl('blackjack'));
                this.setCardTypeTipVisible(true, whichOne, 1);
                this.setPoint(0, whichOne);
            }
            else if (type == 4) { //黑杰克
                playSound && SoundManager.instance.playSound(AssetsUtils.getSoundUrl('blackjack'));
                this.setCardTypeTipVisible(true, whichOne, 2);
                this.setPoint(0, whichOne);
            }
            else if (type == 0) { //爆牌
                playSound && SoundManager.instance.playSound(AssetsUtils.getSoundUrl('boom'));
                this.setCardTypeTipVisible(true, whichOne, 0);
                this.setPoint(22, whichOne);
            }
            else if (type == 1 || type == 2) { //其他点数
                if (min == max) {
                    this.setPoint(min, whichOne);
                }
                else {
                    this.setPoint(min + '/' + max, whichOne);
                }
            }
        };
        //庄家暗牌翻牌
        VPlayerArea.prototype.turnBankerCard = function (card) {
            var cardImg = point21.Utils.getCardImg(card[0]);
            var type = card[1];
            var min = card[2];
            var max = card[3];
            this.setCardAndPoint(type, true, 0, min, max);
            var target = this._view_banker.m_cardList.getChildAt(1);
            target.m_trun.setHook('change', Laya.Handler.create(this, function () {
                target.m_card.url = cardImg;
            }));
            target.m_trun.play();
        };
        //渲染牌型相关
        VPlayerArea.prototype.renderCardType = function (data) {
            var type = data.cardType;
            if (type == 3 || type == 4 || type == 0) {
                bx.Framework.notify(point21.GConst.n_hideBtns);
            }
            this.setCardAndPoint(type, true, data.whichOne, data.minSum, data.maxSum);
        };
        //牌型提示 显示/隐藏    type 0:爆牌  1：五小龙 2:黑杰克
        VPlayerArea.prototype.setCardTypeTipVisible = function (state, id, type) {
            if (id === void 0) { id = 0; }
            var target;
            if (this._view) {
                target = this._view['m_cardType' + id];
            }
            else {
                target = this._view_banker.m_cardType;
            }
            target.m_typeChoose.selectedIndex = 0; //隐藏静态图
            if (state) {
                var sk1 = void 0, sk2 = void 0;
                if (type == 1) {
                    sk1 = this.getSK('sk_dragon1', 'wuxiaolong1.sk');
                    sk2 = this.getSK('sk_dragon2', 'wuxiaolong2.sk');
                }
                else if (type == 2) {
                    sk1 = this.getSK('sk_bj1', 'heijieke1.sk');
                    sk2 = this.getSK('sk_bj2', 'heijieke2.sk');
                }
                else if (type == 0) {
                    sk1 = this.getSK('boom', 'baopai.sk');
                }
                target.displayObject.addChild(sk1.sk);
                sk1.sk.x = target.width / 2;
                sk1.sk.y = target.height / 2;
                sk1.play('animation', false);
                if (sk2) {
                    target.displayObject.addChild(sk2.sk);
                    sk2.sk.x = target.width / 2;
                    sk2.sk.y = target.height / 2;
                    sk2.play('animation', false);
                }
                Laya.timer.once(300, this, function () {
                    target.m_typeChoose.selectedIndex = type;
                });
            }
        };
        //由对象池取得牌型的骨骼动画
        VPlayerArea.prototype.getSK = function (sign, name) {
            var sk = Laya.Pool.getItemByCreateFun('sk', function () {
                return new bx.Skeleton(name);
            });
            sk.completeHandle = Laya.Handler.create(this, function () {
                sk.sk.removeSelf();
                Laya.Pool.recover(sign, sk);
            });
            return sk;
        };
        //////////////////////以下为 闲家 特有部分//////////////////////////////////
        //修改筹码值
        VPlayerArea.prototype.setChip = function (n, id) {
            if (id === void 0) { id = 0; }
            if (!this._view)
                return;
            var str = n.toString();
            if (n == 0) {
                str = '';
            }
            this._view['m_chipCount' + id].m_value.text = str;
        };
        //筹码列表移除子元素（左 中 右）
        VPlayerArea.prototype.removeChildrenFromChipList = function (id) {
            this._view['m_chipsList' + id].removeChildrenToPool();
        };
        //筹码列表添加子元素（左 中 右）
        VPlayerArea.prototype.addChildToChipList = function (id, value) {
            var url = point21.Utils.getChipImg(value);
            var chip;
            chip = this._view['m_chipsList' + id].addItemFromPool();
            chip.m_img.url = url;
            this._view['m_chipsList' + id].ensureBoundsCorrect();
            return chip;
        };
        //设置筹码列表旋转角度（初始化时三个都要设置一次）
        VPlayerArea.prototype.setChipListRotation = function (rotation) {
            if (!this._view)
                return;
            this._view.m_chipsList0.rotation = rotation;
            this._view.m_chipsList1.rotation = rotation;
            this._view.m_chipsList2.rotation = rotation;
            this._view.m_clickToBet.rotation = rotation;
        };
        //设置筹码列表倾斜值
        // setChipListSkew(x:number,y:number):void{
        //     if(!this._view) return;
        //     this._view.m_chipsList0.setSkew(x,y);
        //     this._view.m_chipsList1.setSkew(x,y);
        //     this._view.m_chipsList2.setSkew(x,y);
        //     this._view.m_clickToBet.setSkew(x,y);
        // }
        //是否在此区域下注 的显示/隐藏
        VPlayerArea.prototype.setTipsToBetVisible = function (state) {
            if (this._view) {
                this._view.m_clickToBet.visible = state;
                this._view.m_chipArea.m_selectedCtl.selectedIndex = state ? 1 : 0;
                this.canClick = state;
            }
        };
        //分牌
        VPlayerArea.prototype.divideCard = function (card1, card2) {
            if (!this._view)
                return;
            this._view.m_fen.selectedIndex = 1;
            this.addChildToList(1, 1).visible = false;
            this.addChildToList(2, 1).visible = false;
            var cardInfo = [card1, card2];
            var card;
            var _loop_1 = function (i) {
                card = Laya.Pool.getItemByCreateFun('card', function () {
                    return fui.room.FUI_card.createInstance();
                });
                card.m_card.url = point21.Utils.getCardImg(cardInfo[i]);
                card.setScale(0.8, 0.8);
                this_1._view.addChild(card);
                var divideMove = Laya.Pool.getItemByClass('move', Tools.Move);
                divideMove.target = card;
                divideMove.start = this_1._view.m_centerCard_hide;
                divideMove.end = this_1._view['m_cardsList' + (i + 1)].m_list1.getChildAt(0);
                //divideMove.duration = this.recoverDuration;
                divideMove.duration = 300;
                divideMove.complete = function () {
                    this.target.removeFromParent();
                    Laya.Pool.recover('card', this.target);
                    Laya.Pool.recover('move', divideMove);
                    this.end.visible = true;
                    var url = point21.Utils.getCardImg(cardInfo[i]);
                    this.end.m_card.url = url;
                };
                divideMove.move();
            };
            var this_1 = this;
            for (var i = 0; i < 2; i++) {
                _loop_1(i);
            }
        };
        //轮到某玩家的标志控制
        // ActivedMarkVisible(state:boolean,id:number = 0):void{
        //     if(!this._view) return;
        //     this._view.m_activeCtl.selectedIndex = state ? 1 : 0;
        //     if(state){
        //         if(id == 0) return;
        //         if(id == 1){
        //             this.cardListMaskVisible(false,1);
        //             this.cardListMaskVisible(true,2);
        //         }else if(id == 2){
        //             this.cardListMaskVisible(true,1);
        //             this.cardListMaskVisible(false,2);
        //         }
        //     }
        // }
        //显示或隐藏某牌列表遮罩
        VPlayerArea.prototype.cardListMaskVisible = function (state, id) {
            var list1 = this._view['m_cardsList' + id].m_list1;
            var list2 = this._view['m_cardsList' + id].m_list2;
            if (list1.numItems > 0) {
                for (var i = 0; i < list1.numItems; i++) {
                    list1.getChildAt(i).m_maskCtl.selectedIndex = state ? 1 : 0;
                }
            }
            if (list2.numItems > 0) {
                for (var i = 0; i < list2.numItems; i++) {
                    list2.getChildAt(i).m_maskCtl.selectedIndex = state ? 1 : 0;
                }
            }
        };
        //根据筹码值给某个筹码列表添加item,并返回所有子节点  state:子节点是否显示
        VPlayerArea.prototype.getChipListChildren = function (value, state, id) {
            if (id === void 0) { id = 0; }
            var chips = point21.Utils.getChipImgObj(value);
            var children = [];
            this.removeChildrenFromChipList(id);
            for (var item in chips) {
                for (var i = 0; i < chips[item]; i++) {
                    var child = this.addChildToChipList(id, Number(item));
                    child.visible = state;
                    children.push(child);
                }
            }
            return children;
        };
        //下注动画
        VPlayerArea.prototype.playerBet = function (value, startNodeid, id) {
            if (id === void 0) { id = 0; }
            var _this = this;
            var chips = point21.Utils.getChipImgObj(value);
            var count = 0;
            var children = this.getChipListChildren(value, false, id);
            Laya.timer.once(1, this, function () {
                for (var item in chips) {
                    var _loop_2 = function (j) {
                        var chip = Laya.Pool.getItemByCreateFun('chip', function () {
                            return fui.room.FUI_chip.createInstance();
                        });
                        chip.m_img.url = 'ui://room/c' + item;
                        chip.visible = false;
                        this_2.roomView.addChild(chip);
                        var betMove = Laya.Pool.getItemByClass('move', Tools.Move);
                        betMove.target = chip;
                        betMove.start = this_2.roomView['m_chip' + startNodeid];
                        betMove.end = children[children.length - 1 - count];
                        betMove.duration = this_2.recoverDuration;
                        betMove.complete = function () {
                            this.end.visible = true;
                            this.target.removeFromParent();
                            Laya.Pool.recover('chip', this.target);
                            Laya.Pool.recover('move', this);
                        };
                        Laya.timer.once(count * 50, this_2, function () {
                            betMove.target.visible = true;
                            betMove.move();
                            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('bet'));
                        });
                        count++;
                    };
                    var this_2 = this;
                    for (var j = 0; j < chips[item]; j++) {
                        _loop_2(j);
                    }
                }
            });
        };
        //双倍标志 显示/隐藏
        VPlayerArea.prototype.doubleSignVisible = function (state, id) {
            this._view['m_cardsList' + id].m_lang_double.visible = state;
        };
        //保险标志 显示/隐藏
        VPlayerArea.prototype.insuranceSignVisible = function (state) {
            this._view.m_careCtl.selectedIndex = state ? 1 : 0;
        };
        //收筹码
        VPlayerArea.prototype.playerBetBack = function (value, endNodeId, id) {
            var _this = this;
            var chips = point21.Utils.getChipImgObj(value);
            var count = 0;
            var list = this._view['m_chipsList' + id];
            for (var item in chips) {
                var _loop_3 = function (i) {
                    var chip = Laya.Pool.getItemByCreateFun('chip', function () {
                        return fui.room.FUI_chip.createInstance();
                    });
                    chip.m_img.url = 'ui://room/c' + item;
                    chip.visible = false;
                    this_3.roomView.addChild(chip);
                    var action = Laya.Pool.getItemByClass('move', Tools.Move);
                    action.target = chip;
                    action.start = list.getChildAt(count);
                    action.end = this_3.roomView['m_chip' + endNodeId];
                    action.duration = 500;
                    action.complete = function () {
                        this.target.removeFromParent();
                        Laya.Pool.recover('chip', this.target);
                        Laya.Pool.recover('move', action);
                        if (count >= list.numChildren - 1) {
                            _this.removeChildrenFromChipList(id);
                        }
                    };
                    Laya.timer.once(count * 50, this_3, function () {
                        action.target.visible = true;
                        action.start.visible = false;
                        action.move();
                        SoundManager.instance.playSound(AssetsUtils.getSoundUrl('bet'));
                    });
                    count++;
                };
                var this_3 = this;
                for (var i = 0; i < chips[item]; i++) {
                    _loop_3(i);
                }
            }
        };
        //筹码从玩家飞向庄家/从庄家飞向玩家,to~ 0:推向庄家  1：推向自己
        VPlayerArea.prototype.moveChipList = function (to, id) {
            var _this = this;
            var action = Laya.Pool.getItemByClass('move', Tools.Move);
            action.target = this._view['m_chipsList' + id];
            action.start = this._view['m_chipsList' + id + '_hide'];
            action.end = this.roomView.m_chipBank;
            action.duration = 500;
            action.complete = function () {
                this.target.x = this.start.x;
                this.target.y = this.start.y;
                Laya.Pool.recover('move', action);
                if (to === 0) {
                    _this.removeChildrenFromChipList(id);
                }
            };
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('betBack'));
            (to == 0) ? action.move() : action.moveReverse();
        };
        //赢得筹码动画
        VPlayerArea.prototype.win = function (playerId, value, id) {
            if (id === void 0) { id = 0; }
            var _this = this;
            this.getChipListChildren(value, true, id);
            this.moveChipList(1, id);
            Laya.timer.once(500, this, function () {
                _this.playerBetBack(value, playerId, id);
            });
        };
        return VPlayerArea;
    }());
    point21.VPlayerArea = VPlayerArea;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    var VRoom = /** @class */ (function (_super) {
        __extends(VRoom, _super);
        function VRoom() {
            var _this_1 = _super.call(this, 'fui.room.FUI_roomView', "room_") || this;
            _this_1.dealDuration = 300; //发牌过程持续时间
            _this_1.isPlayingClockSound = false; //正在播放倒计时声音
            _this_1._view = _this_1.ui;
            _this_1.dispatchView();
            _this_1.insuranceList = [_this_1._view.m_insurance1, _this_1._view.m_insurance2, _this_1._view.m_insurance3, _this_1._view.m_insurance4, _this_1._view.m_insurance5];
            _this_1.insuranceList_hide = [_this_1._view.m_insurance1_hide, _this_1._view.m_insurance2_hide, _this_1._view.m_insurance3_hide, _this_1._view.m_insurance4_hide, _this_1._view.m_insurance5_hide];
            _this_1.chips = [_this_1._view.m_chip1, _this_1._view.m_chip2, _this_1._view.m_chip3, _this_1._view.m_chip4, _this_1._view.m_chip5];
            _this_1.seatIdArr = [_this_1._view.m_numb1, _this_1._view.m_numb2, _this_1._view.m_numb3, _this_1._view.m_numb4, _this_1._view.m_numb5];
            _this_1.init();
            return _this_1;
        }
        //初始化
        VRoom.prototype.init = function () {
            this._view.m_result1.m_win.pivotX = 0;
            this._view.m_result1.m_fail.pivotX = 0;
            this._view.m_result5.m_win.pivotX = 1;
            this._view.m_result5.m_fail.pivotX = 1;
        };
        //将视图分配给其他类管理
        VRoom.prototype.dispatchView = function () {
            var areas = [];
            areas.push(this._view.m_playerArea0, this._view.m_playerArea1, this._view.m_playerArea2, this._view.m_playerArea3, this._view.m_playerArea4, this._view.m_playerArea5);
            bx.Framework.notify(point21.GConst.n_Vmanager_playerArea, areas, this._view);
            var btnPlay;
            bx.Framework.notify(point21.GConst.n_Vmanager_btnPlay, this._view.m_btnPlay);
            var players = [];
            players.push(this._view.m_player1, this._view.m_player2, this._view.m_player3, this._view.m_player4, this._view.m_player5);
            bx.Framework.notify(point21.GConst.n_Vmanager_player, players);
        };
        VRoom.prototype.reset = function () {
            this.isPlayingClockSound = false;
            this._view.m_clock.visible = false;
            this._view.m_card1.visible = false;
            for (var j = 0; j < this.insuranceList.length; j++) {
                this.removeInsuranceList(j + 1);
                this.setSeatIdOnDesk(j + 1, 0);
                this.setChipsVisible(false, j + 1);
                this.hideResult(j + 1);
                this.seatNameVisible(false, j + 1);
            }
        };
        //买保险 pos:买家位置   index：要买保险的位置序号
        VRoom.prototype.betInsurance = function (value, pos, index) {
            var chips = point21.Utils.getChipImgObj(value);
            var count = 0;
            var children = this.addChildToInsuranceList(index, value, false);
            for (var item in chips) {
                var _loop_4 = function (i) {
                    var chip = Laya.Pool.getItemByCreateFun('chip', function () {
                        return fui.room.FUI_chip.createInstance();
                    });
                    chip.m_img.url = 'ui://room/c' + item;
                    this_4._view.addChild(chip);
                    chip.visible = false;
                    var action = Laya.Pool.getItemByClass('move', Tools.Move);
                    action.target = chip;
                    action.start = this_4.chips[pos - 1];
                    action.end = children[children.length - 1 - count];
                    action.duration = this_4.dealDuration;
                    action.complete = function () {
                        this.end.visible = true;
                        this.target.removeFromParent();
                        Laya.Pool.recover('chip', this.target);
                        Laya.Pool.recover('move', action);
                    };
                    Laya.timer.once(count * 50, this_4, function () {
                        action.target.visible = true;
                        action.move();
                    });
                    count++;
                };
                var this_4 = this;
                for (var i = 0; i < chips[item]; i++) {
                    _loop_4(i);
                }
            }
        };
        //清空某个保险列表
        VRoom.prototype.removeInsuranceList = function (index) {
            this.insuranceList[index - 1].removeChildrenToPool();
        };
        //向某个保险列表添加item
        VRoom.prototype.addChildToInsuranceList = function (index, value, visible) {
            if (value <= 0)
                return;
            var chips = point21.Utils.getChipImgObj(value);
            var children = [];
            for (var item in chips) {
                for (var i = 0; i < chips[item]; i++) {
                    var url = point21.Utils.getChipImg(Number(item));
                    var child = this.insuranceList[index - 1].addItemFromPool();
                    child.m_img.url = url;
                    child.visible = visible;
                    children.push(child);
                }
            }
            this.insuranceList[index - 1].ensureBoundsCorrect();
            return children;
        };
        //庄家收保险筹码
        VRoom.prototype.pushInsuranceToBanker = function (index) {
            var _this = this;
            var action = Laya.Pool.getItemByClass('move', Tools.Move);
            action.target = this.insuranceList[index - 1];
            action.start = this.insuranceList_hide[index - 1];
            action.end = this._view.m_chipBank;
            action.duration = this.dealDuration;
            action.complete = function () {
                this.target.x = this.start.x;
                this.target.y = this.start.y;
                _this.removeInsuranceList(index);
                Laya.Pool.recover('move', action);
            };
            action.move();
        };
        //设置桌面上座位编号的值(已废除，暂时保留函数，初始化时清空界面上暂存的座位号)
        VRoom.prototype.setSeatIdOnDesk = function (pos, v) {
            var str = v.toString();
            if (v === 0)
                str = '';
            this.seatIdArr[pos - 1].text = str;
        };
        //设置某个筹码条的显示状态
        VRoom.prototype.setChipsVisible = function (state, pos) {
            this._view['m_chip' + pos].visible = state;
        };
        //隐藏结果
        VRoom.prototype.hideResult = function (pos) {
            this._view['m_result' + pos].visible = false;
        };
        //显示结算结果 
        VRoom.prototype.showResult = function (pos, value) {
            var target = this._view['m_result' + pos];
            target.visible = true;
            if (value >= 0) {
                target.m_resultCtl.selectedIndex = 1;
                target.m_win.text = '+' + bx.GData.formatNumber(value);
            }
            else {
                target.m_resultCtl.selectedIndex = 0;
                target.m_fail.text = bx.GData.formatNumber(value);
            }
        };
        //倒计时
        VRoom.prototype.StartClock = function (time) {
            this.timeVal = time;
            this._view.m_clock.visible = true;
            this._view.m_clock.m_numb.text = this.timeVal.toString();
            Laya.timer.loop(1000, this, this.clock);
        };
        VRoom.prototype.clock = function () {
            this.timeVal--;
            this._view.m_clock.m_numb.text = this.timeVal.toString();
            if (!this.isPlayingClockSound && this.timeVal <= 3) {
                this.isPlayingClockSound = true;
                SoundManager.instance.playSound(AssetsUtils.getSoundUrl('clock'), 1);
            }
            if (this.timeVal <= 0) {
                this.stopClock();
            }
        };
        //停止 自己的倒计时
        VRoom.prototype.stopClock = function () {
            Laya.timer.clear(this, this.clock);
            this._view.m_clock.visible = false;
            this.isPlayingClockSound = false;
            SoundManager.instance.stopSound(AssetsUtils.getSoundUrl('clock'));
        };
        //特效手 控制 0:常态 1：下注本位置  2：下注左  3：下注右  4：停牌  5：要牌
        VRoom.prototype.handAction = function (state) {
            this._view.m_hand.m_actionCtl.selectedIndex = state;
            if (state === 0)
                return;
            var action;
            switch (state) {
                case 0:
                    break;
                case 1:
                    action = this._view.m_hand.m_bet;
                    break;
                case 2:
                    action = this._view.m_hand.m_betLeft;
                    break;
                case 3:
                    action = this._view.m_hand.m_betRight;
                    break;
                case 4:
                    action = this._view.m_hand.m_stopCard;
                    break;
                case 5:
                    action = this._view.m_hand.m_needCard;
                    break;
            }
            action.playing = true;
            action.setPlaySettings(0, -1, 1, -1, Laya.Handler.create(this, function () {
                action.playing = false;
                this.handAction(0);
            }));
        };
        //灯光控制
        VRoom.prototype.turnOnLightTo = function (pos, id) {
            var p = point21.MRoom.getSeatId(pos);
            var index;
            if (bx.Stage.getStage().isLandscape) {
                index = p * 3 + id - 2;
            }
            else {
                index = p * 3 + id + 13;
            }
            this._view.m_lightCtl.selectedIndex = index;
        };
        //关闭灯光
        VRoom.prototype.turnOffLight = function () {
            if (!this._view)
                return;
            this._view.m_lightCtl.selectedIndex = 0;
        };
        //座位所属玩家名称 显示/隐藏
        VRoom.prototype.seatNameVisible = function (state, pos, name) {
            if (pos == 3)
                return;
            this._view['m_namebg' + pos].visible = state;
            this._view['m_name' + pos].visible = state;
            if (state && name) {
                this._view['m_name' + pos].text = name;
            }
        };
        return VRoom;
    }(bx.Layout));
    point21.VRoom = VRoom;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    var VRoomBg = /** @class */ (function (_super) {
        __extends(VRoomBg, _super);
        function VRoomBg() {
            var _this = _super.call(this, 'fui.room.FUI_roomBg') || this;
            _this._view = _this.ui;
            return _this;
        }
        return VRoomBg;
    }(bx.Layout));
    point21.VRoomBg = VRoomBg;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    var VStrategy = /** @class */ (function (_super) {
        __extends(VStrategy, _super);
        function VStrategy() {
            var _this = _super.call(this, 'fui.room.FUI_strategy', 'room_') || this;
            _this._view = _this.ui;
            _this._view.m_close.onClick(_this, function () {
                bx.UIManager.closePopup(this);
            });
            return _this;
        }
        return VStrategy;
    }(bx.Layout));
    point21.VStrategy = VStrategy;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    var VStrategyBtn = /** @class */ (function (_super) {
        __extends(VStrategyBtn, _super);
        function VStrategyBtn() {
            var _this = _super.call(this, 'fui.room.FUI_strategyBtn', "room_") || this;
            _this._view = _this.ui;
            _this._view.m_n0.onClick(_this, function () {
                bx.Framework.notify(point21.GConst.n_openStrategy);
            });
            return _this;
        }
        return VStrategyBtn;
    }(bx.Layout));
    point21.VStrategyBtn = VStrategyBtn;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    /**
     * 简要显示对象
     * @author Zane
     */
    var VWalletBtn = /** @class */ (function (_super) {
        __extends(VWalletBtn, _super);
        function VWalletBtn() {
            var _this = _super.call(this, "fui.Game.FUI_AddWalletBtn") || this;
            _this._view = _this.ui;
            return _this;
        }
        return VWalletBtn;
    }(bx.Layout));
    point21.VWalletBtn = VWalletBtn;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    /**
     * 常量类（该文件由工具自动生成，请不要手动修改）
     * @author Zane
     */
    var GConst = /** @class */ (function () {
        function GConst() {
        }
        //-----------------------------------------------------------------------------
        //globle.txt
        //-----------------------------------------------------------------------------
        /** 通知添加房间视图 */
        GConst.n_addRoom = "n_addRoom";
        /** 通知移除房间视图 */
        GConst.n_removeRoom = "n_removeRoom";
        /** 通知 本人将要下注的位置 */
        GConst.n_newPosToBet = "n_newPosToBet";
        /** 通知 隐藏按钮栏 */
        GConst.n_hideBtns = "n_hideBtns";
        /** 通知 准备下注的位置被其他玩家抢先下注了 */
        GConst.n_lostSeat = "n_lostSeat";
        /** 通知 打开攻略宝典 */
        GConst.n_openStrategy = "n_openStrategy";
        /** 通知 设置自己余额 */
        GConst.n_selfMoneyChange = "n_selfMoneyChange";
        //-----------------------------------------------------------------------------
        //viewManager.txt
        //-----------------------------------------------------------------------------
        /** 通知 玩家区域类的管理 */
        GConst.n_Vmanager_playerArea = "n_Vmanager_playerArea";
        /** 通知 操作按钮类的管理 */
        GConst.n_Vmanager_btnPlay = "n_Vmanager_btnPlay";
        /** 通知 玩家头像类的管理 */
        GConst.n_Vmanager_player = "n_Vmanager_player";
        //-----------------------------------------------------------------------------
        //wallet.txt
        //-----------------------------------------------------------------------------
        /** 显示免转按钮 */
        GConst.show_wallet_btn = "show_wallet_btn";
        /** 隐藏免转按钮 */
        GConst.hide_wallet_btn = "hide_wallet_btn";
        /** 设置按钮 */
        GConst.set_wallet_btn = "set_wallet_btn";
        return GConst;
    }());
    point21.GConst = GConst;
})(point21 || (point21 = {}));
var Tools;
(function (Tools) {
    var Move = /** @class */ (function () {
        /**
         * @param option 动作选项
         */
        function Move(option) {
            this.props = null;
            this.ease = Laya.Ease.linearNone;
            this.complete = null;
            this.delay = 0;
            this.cover = true;
            this.actionType = 'line';
            this.ctlPoint = new Laya.Point;
            if (option) {
                this.target = option.target || new fairygui.GObject;
                this.start = option.start || new Laya.Point();
                this.end = option.end || new Laya.Point();
                this.duration = option.duration || 300;
                this.props = option.props || null;
                this.ease = option.ease || Laya.Ease.linearNone;
                this.complete = option.complete || null;
                this.delay = option.delay || 0;
                this.cover = option.cover || true;
            }
        }
        ;
        Object.defineProperty(Move.prototype, "tween", {
            get: function () {
                return this._tween;
            },
            set: function (v) {
                if (v != this._tween) {
                    this._tween = v;
                    var start = void 0, end = void 0;
                    for (var name_1 in this.props) {
                        start = this.props[name_1][0];
                        end = this.props[name_1][1];
                        if (name_1 == 'skewX') {
                            this.target.displayObject[name_1] = -(start + v * (end - start));
                        }
                        else if (name_1 == 'skewY') {
                            this.target.displayObject[name_1] = start + v * (end - start);
                        }
                        else {
                            this.target[name_1] = start + v * (end - start);
                        }
                    }
                    if (this.actionType == 'bezier2') {
                        this.target.x = Math.pow(1 - v, 2) * this.startPoint.x + 2 * v * (1 - v) * this.ctlPoint.x + Math.pow(v, 2) * this.endPoint.x;
                        this.target.y = Math.pow(1 - v, 2) * this.startPoint.y + 2 * v * (1 - v) * this.ctlPoint.y + Math.pow(v, 2) * this.endPoint.y;
                    }
                    else {
                        this.target.x = v * (this.endPoint.x - this.startPoint.x) + this.startPoint.x;
                        this.target.y = v * (this.endPoint.y - this.startPoint.y) + this.startPoint.y;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        //计算初始位置和结束位置
        Move.prototype.calculateStartAndEnd = function () {
            if (this.end instanceof fairygui.GObject) {
                this.endPoint_g = this.end.localToGlobal();
                this.endPoint = this.target.parent.globalToLocal(this.endPoint_g.x, this.endPoint_g.y);
            }
            else if (this.end instanceof Laya.Point) {
                this.endPoint = this.end;
            }
            if (this.start instanceof fairygui.GObject) {
                this.startPoint_g = this.start.localToGlobal();
                this.startPoint = this.target.parent.globalToLocal(this.startPoint_g.x, this.startPoint_g.y);
            }
            else if (this.start instanceof Laya.Point) {
                this.startPoint = this.start;
            }
        };
        /**
         * 开始移动
         */
        Move.prototype.move = function () {
            this.calculateStartAndEnd();
            this.actionType = 'line';
            this.tween = 0;
            Laya.Tween.to(this, { 'tween': 1 }, this.duration, this.ease, null, this.delay, this.cover);
            Laya.timer.once(this.duration + this.delay, this, this._complete);
        };
        /**
         * 此动作反向移动
        */
        Move.prototype.moveReverse = function () {
            this.calculateStartAndEnd();
            this.tween = 0;
            Laya.Tween.from(this, { 'tween': 1 }, this.duration, Laya.Ease.linearNone, null, this.delay, this.cover);
            Laya.timer.once(this.duration + this.delay, this, this._completeReverse);
        };
        Move.prototype._complete = function () {
            this.props = null;
            this.complete && this.complete();
        };
        Move.prototype._completeReverse = function () {
            this.props = null;
            this.complete && this.complete();
        };
        //二次贝塞尔曲线运动
        Move.prototype.moveByBezier2 = function (ctl_x, ctl_y) {
            this.calculateStartAndEnd();
            this.actionType = 'bezier2';
            this.ctlPoint.x = ctl_x * (this.endPoint.x - this.startPoint.x) + this.startPoint.x;
            this.ctlPoint.y = ctl_y * (this.endPoint.y - this.startPoint.y) + this.endPoint.y;
            this.tween = 0;
            Laya.Tween.to(this, { 'tween': 1 }, this.duration, Laya.Ease.linearNone, null, this.delay, this.cover);
            Laya.timer.once(this.duration + this.delay, this, this._completeBezier2);
        };
        Move.prototype._completeBezier2 = function () {
            this.props = null;
            this.complete && this.complete();
        };
        return Move;
    }());
    Tools.Move = Move;
})(Tools || (Tools = {}));
//脚本自动输出，请不要手动修改
var protos;
(function (protos) {
    var CCMD;
    (function (CCMD) {
        CCMD[CCMD["playerInfoPush"] = 12289] = "playerInfoPush";
        CCMD[CCMD["gamePush"] = 12290] = "gamePush";
        CCMD[CCMD["userOperationReq"] = 12291] = "userOperationReq";
        CCMD[CCMD["userOperationResp"] = 12292] = "userOperationResp";
        CCMD[CCMD["gameSettlementPush"] = 12293] = "gameSettlementPush";
        CCMD[CCMD["dealCardsInfo"] = 12294] = "dealCardsInfo";
        CCMD[CCMD["stopCardInfo"] = 12295] = "stopCardInfo";
        CCMD[CCMD["recRoomInfo"] = 12296] = "recRoomInfo";
        CCMD[CCMD["recAnteState"] = 12297] = "recAnteState";
        CCMD[CCMD["recDealCardsState"] = 12298] = "recDealCardsState";
        CCMD[CCMD["recBuyInsState"] = 12299] = "recBuyInsState";
        CCMD[CCMD["recRoleOpState"] = 12300] = "recRoleOpState";
        CCMD[CCMD["recBankerOpState"] = 12301] = "recBankerOpState";
        CCMD[CCMD["gmReq"] = 12302] = "gmReq";
        CCMD[CCMD["gmResp"] = 12303] = "gmResp";
    })(CCMD = protos.CCMD || (protos.CCMD = {}));
})(protos || (protos = {}));
var point21;
(function (point21) {
    var Sk = /** @class */ (function () {
        function Sk(url) {
        }
        return Sk;
    }());
    point21.Sk = Sk;
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        //由16进制的10进制值获取牌的图片地址
        Utils.getCardImg = function (value) {
            if (value === 0)
                return 'ui://room/bg';
            var color = Math.floor(value / 16);
            var point = value % 16;
            var colorArr = ['f', 'm', 'r', 'h'];
            var pointArr = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
            return 'ui://room/' + colorArr[color - 1] + pointArr[point - 1];
        };
        //获取头像url
        Utils.getHeadUrl = function (type) {
            var str = 'ui://Game/head_';
            if (type > 1000) {
                type -= 1000;
                str += (4 + type);
            }
            else {
                str += type;
            }
            return str;
        };
        //获取筹码图片地址
        Utils.getChipImg = function (value) {
            return 'ui://room/c' + value;
        };
        //由筹码值得到对应筹码对象
        Utils.getChipImgObj = function (value) {
            var obj = {};
            var len = value.toString().length;
            var numb;
            var n1, n2;
            var name;
            for (var i = 0; i < len; i++) {
                numb = this.getValueAt(value, len - i);
                n1 = Math.floor(numb / 5);
                n2 = numb % 5;
                if (n1 > 0) {
                    name = 5 * Math.pow(10, i);
                    obj[name] = n1;
                }
                if (n2 > 0) {
                    n1 = Math.floor(n2 / 2);
                    n2 = n2 % 2;
                    if (n1 > 0) {
                        name = 2 * Math.pow(10, i);
                        obj[name] = n1;
                    }
                    if (n2 > 0) {
                        name = Math.pow(10, i);
                        obj[name] = n2;
                    }
                }
            }
            return obj;
        };
        //获取某个数某位的数值
        Utils.getValueAt = function (numb, index) {
            var v = numb.toString()[index - 1];
            return Number(v);
        };
        Utils.formatChips = function (v) {
            return v / 100;
        };
        return Utils;
    }());
    point21.Utils = Utils;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    /**
     * 大厅
     * @author Zane
     */
    var FHall = /** @class */ (function (_super) {
        __extends(FHall, _super);
        function FHall() {
            return _super.call(this) || this;
        }
        FHall.prototype.onConstruct = function () {
            _super.prototype.onConstruct.call(this);
            this.register(bx.GConst.n_room_items_click);
        };
        FHall.prototype.onNotice = function (notice, data) {
            _super.prototype.onNotice.call(this, notice, data);
            switch (notice) {
                case bx.GConst.n_room_items_click:
                    //this.notify(bx.GConst.n_to_room_state);
                    break;
            }
        };
        FHall.prototype.onDestruct = function () { _super.prototype.onDestruct.call(this); };
        FHall.prototype.onFocus = function () {
            _super.prototype.onFocus.call(this);
        };
        FHall.prototype.onDefocus = function () {
            _super.prototype.onDefocus.call(this);
        };
        return FHall;
    }(bx.FHall));
    point21.FHall = FHall;
})(point21 || (point21 = {}));
var point21;
(function (point21) {
    /**
     * 房间
     * @author Zane
     */
    var FRoom = /** @class */ (function (_super) {
        __extends(FRoom, _super);
        function FRoom() {
            return _super.call(this) || this;
        }
        FRoom.prototype.onConstruct = function () {
            _super.prototype.onConstruct.call(this);
        };
        FRoom.prototype.onFocus = function () {
            _super.prototype.onFocus.call(this);
            //SoundManager.instance.bgmUrls = AssetsUtils.getSoundUrl('roomBgm');            
            this.notify(point21.GConst.n_addRoom);
        };
        FRoom.prototype.onDefocus = function () {
            _super.prototype.onDefocus.call(this);
            this.notify(point21.GConst.n_removeRoom);
        };
        FRoom.prototype.onNotice = function (notice, data) {
            _super.prototype.onNotice.call(this, notice, data);
        };
        return FRoom;
    }(bx.FRoom));
    point21.FRoom = FRoom;
})(point21 || (point21 = {}));

//# sourceMappingURL=6010.js.map
