import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { TabArticlePage } from '../tab-article/tab-article';
import { TabServicePage } from '../tab-service/tab-service';
import { TabContracPage } from '../tab-contrac/tab-contrac';
import { TabCoursePage } from '../tab-course/tab-course';
import { TabHomePage } from '../tab-home/tab-home';
import { SidePaymentPage } from '../side-payment/side-payment';
import { SidePortfolioPage } from '../side-portfolio/side-portfolio';
import { SideSchedulePage } from '../side-schedule/side-schedule';
import { SideSettingPage } from '../side-setting/side-setting';

@NgModule({
  declarations: [
TabsPage,
TabArticlePage,
TabServicePage,
TabContracPage,
TabCoursePage,
TabHomePage,
SidePaymentPage,
SidePortfolioPage,
SideSchedulePage,
SideSettingPage
 ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
})
export class TabsPageModule {}
