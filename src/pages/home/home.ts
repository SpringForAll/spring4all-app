import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  title: string = '';
  slideData: Array<any> = [];
  pages: Array<any> = [];
  spinner: boolean = true;

  constructor(private translateService: TranslateService, public navCtrl: NavController, public navParams: NavParams) {
    translateService.get('TAB1_TITLE').subscribe(title => {
      this.title = title;
    });
    this.getSlides();
    this.getPages();
  }

  ionViewWillEnter() {
    this.slides.startAutoplay();
  }

  ionViewWillLeave() {
    this.slides.stopAutoplay();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getPages() {
    this.pages = [
      {
        "title": "MySQL Schema与数据类型的优化",
        "abstract": "选择优化的数据类型： 1、 更小的通常更好： 一般情况下，应该尽量使用可以正确存储数据的最小数据类型。更小的数据类型通常更快，因为他们占用更少的磁盘，内存和cpu缓存，并且处理时需要的cpu周期也更少",
        "time": "杨小强 发布于 4小时前",
        "like": "12",
        "commit": "21"
      },
      {
        "title": "疯狂Spring Cloud连载（十一）——Feign的编码器与解码器",
        "abstract": " 本文节选自《疯狂Spring Cloud微服务架构实战》，本书将于2017年11月出版。         Spring Cloud教学视频：https://my.oschina.net/JavaLaw/blog/1552993 本书代码共享地址：https://gitee.com/y",
        "time": "杨小强 发布于 一年前",
        "like": "122",
        "commit": "101"
      },
      {
        "title": "MySQL Schema与数据类型的优化",
        "abstract": "选择优化的数据类型： 1、 更小的通常更好： 一般情况下，应该尽量使用可以正确存储数据的最小数据类型。更小的数据类型通常更快，因为他们占用更少的磁盘，内存和cpu缓存，并且处理时需要的cpu周期也更少",
        "time": "杨小强 发布于 4小时前",
        "like": "12",
        "commit": "21"
      },
      {
        "title": "疯狂Spring Cloud连载（十一）——Feign的编码器与解码器",
        "abstract": " 本文节选自《疯狂Spring Cloud微服务架构实战》，本书将于2017年11月出版。         Spring Cloud教学视频：https://my.oschina.net/JavaLaw/blog/1552993 本书代码共享地址：https://gitee.com/y",
        "time": "杨小强 发布于 一年前",
        "like": "122",
        "commit": "101"
      },
      {
        "title": "MySQL Schema与数据类型的优化",
        "abstract": "选择优化的数据类型： 1、 更小的通常更好： 一般情况下，应该尽量使用可以正确存储数据的最小数据类型。更小的数据类型通常更快，因为他们占用更少的磁盘，内存和cpu缓存，并且处理时需要的cpu周期也更少",
        "time": "杨小强 发布于 4小时前",
        "like": "12",
        "commit": "21"
      },
      {
        "title": "疯狂Spring Cloud连载（十一）——Feign的编码器与解码器",
        "abstract": " 本文节选自《疯狂Spring Cloud微服务架构实战》，本书将于2017年11月出版。         Spring Cloud教学视频：https://my.oschina.net/JavaLaw/blog/1552993 本书代码共享地址：https://gitee.com/y",
        "time": "杨小强 发布于 一年前",
        "like": "122",
        "commit": "101"
      }
    ];
  }

  //获取幻灯片
  getSlides() {
    this.slideData = [{
      "img": "http://images.csdn.net/20171023/u=1656509100,1818539814&fm=27&gp=0.jpg",
      "title": "2017年含金量最高的机器学习技能或知识有哪些?"
    }, {
      "img": "http://images.csdn.net/20170704/1.png",
      "title": "世界上第一个时序数据的Middle-Out算法压缩"
    }, {
      "img": "http://images.csdn.net/20171019/20171019084609390_%E5%89%AF%E6%9C%AC.jpg",
      "title": "不能给祖国母亲添堵！技术人讲解十九大期间如何护航网站安全"
    }, {
      "img": "http://images.csdn.net/20171023/u=1656509100,1818539814&fm=27&gp=0.jpg",
      "title": "2017年含金量最高的机器学习技能或知识有哪些?"
    }, {
      "img": "http://images.csdn.net/20170704/1.png",
      "title": "世界上第一个时序数据的Middle-Out算法压缩"
    }]
  }
}
