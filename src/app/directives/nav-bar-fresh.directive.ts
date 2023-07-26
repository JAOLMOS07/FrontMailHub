import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNavBarFresh]'
})
export class NavBarFreshDirective implements OnChanges {

  @Input() appNavBarFresh!: boolean;

  constructor(  private templateRef: TemplateRef<any>,
                private viewContainerRef: ViewContainerRef) 
  {
    this.viewContainerRef.createEmbeddedView(templateRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['appNavBarFresh'])
    {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
