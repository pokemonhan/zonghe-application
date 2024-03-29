"use strict";
cc._RF.push(module, '1bb56b9/O9GeIDSx3xkR42i', 'HallRightItem');
// Script/Hall/HallRightItem.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HallRightItem = /** @class */ (function (_super) {
    __extends(HallRightItem, _super);
    function HallRightItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.iconAtlas = null;
        _this.data = null;
        _this.back = null;
        _this.pathList = null;
        return _this;
        /*
        setSelectState(bTrue){
            this.normalImg.node.active = !bTrue;
            this.specialImg.node.active = bTrue;
            this.selectNode.active = bTrue;
        }
        */
        // update (dt) {}
    }
    HallRightItem.prototype.onSelectClick = function () {
        if (this.back) {
            this.back(this.data);
        }
    };
    HallRightItem.prototype.init = function (data, fback) {
        this.data = data;
        this.back = fback;
        /*
        this.pathList = G_CommonControl.getCommonConfig().getGameJsonPath(data.game_sign);
        if(this.pathList != null)
        {
            console.log("this.pathList  is null "+data.game_sign)
        }else
        {
            console.log("this.pathList "+this.pathList)
            this.icon.spriteFrame = this.iconAtlas.getSpriteFrame(this.pathList.icon)
        }
        */
    };
    __decorate([
        property(cc.Sprite)
    ], HallRightItem.prototype, "icon", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], HallRightItem.prototype, "iconAtlas", void 0);
    HallRightItem = __decorate([
        ccclass
    ], HallRightItem);
    return HallRightItem;
}(cc.Component));
exports.default = HallRightItem;

cc._RF.pop();