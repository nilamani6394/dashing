import { Input, ComponentFactoryResolver, ViewChild, OnInit, OnDestroy } from '@angular/core'
import { AdDirective } from './ad.directive';
import { AdComponent } from './ad.component';

export class AdBannerComponent implements OnInit, OnDestroy {
    @Input() ads;
    currentAdIndex = -1;
    @ViewChild(AdDirective,{static:true}) appAd:AdDirective;
   // @ViewChild(AdDirective, {static: true}) adHost:AdDirective;
    interval: any;
  
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  
    ngOnInit() {
      this.loadComponent();
      this.getAds();
    }
  
    ngOnDestroy() {
      clearInterval(this.interval);
    }
  
    loadComponent() {
      this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
      const adItem = this.ads[this.currentAdIndex];
  
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
  
      const viewContainRef = this.appAd.viewContainRef;
      viewContainRef.clear();
  
      const componentRef = viewContainRef.createComponent(componentFactory);
      (<AdComponent>componentRef.instance).data = adItem.data;
    }
  
    getAds() {
      this.interval = setInterval(() => {
        this.loadComponent();
      }, 3000);
    }
  }
          